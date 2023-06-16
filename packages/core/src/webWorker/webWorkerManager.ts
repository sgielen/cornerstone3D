import * as Comlink from 'comlink';

// Default configuration
const defaultConfig = {
  maxWebWorkers: navigator.hardwareConcurrency || 1,
  startWebWorkersOnDemand: true,
  webWorkerTaskPaths: [],
  taskConfiguration: {
    decodeTask: {
      initializeCodecsOnStartup: false,
      strict: false,
    },
  },
};

class WebWorkerManager {
  constructor(maxWorkers = 4) {
    this.maxWorkers = maxWorkers;
    this.workers = [];
    this.tasksQueue = [];

    // Pre-spawn all the workers.
    for (let i = 0; i < this.maxWorkers; i++) {
      this.spawnWorker();
    }
  }

  spawnWorker() {
    const worker = new Worker(new URL('bootstrapWorker.js', import.meta.url), {
      type: 'module',
    });
    const workerProxy = Comlink.wrap(worker);

    this.workers.push({
      worker,
      workerProxy,
      tasks: {},
      idle: true,
    });
  }

  async register(task) {
    for (const worker of this.workers) {
      // Register the task in each worker.
      await worker.workerProxy.registerTask(task);
      // Add the task to the worker's tasks list.
      worker.tasks[task.name] = true;
    }
  }

  run(taskName, data, priority = 0) {
    // Push the task into the tasksQueue.
    this.tasksQueue.push({ taskName, data, priority });
    // Sort the tasksQueue based on priority.
    this.tasksQueue.sort((a, b) => b.priority - a.priority);

    // Attempt to run the tasks in the queue.
    this.runTasksInQueue();
  }

  async runTasksInQueue() {
    for (const worker of this.workers) {
      if (worker.idle && this.tasksQueue.length > 0) {
        const task = this.tasksQueue.shift();
        if (!(task.taskName in worker.tasks)) {
          throw new Error(
            `Task "${task.taskName}" is not registered in this worker.`
          );
        }

        worker.idle = false;
        try {
          const result = await worker.workerProxy.runTask(
            task.taskName,
            task.data
          );
          // Return the result to the caller.
          return result;
        } catch (error) {
          console.error(`Error running task "${task.taskName}":`, error);
        } finally {
          worker.idle = true;
        }
      }
    }
  }
}

export default new WebWorkerManager();
