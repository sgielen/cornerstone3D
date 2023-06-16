import { expose } from 'comlink';

class BootstrapWorker {
  tasks = new Map();

  constructor() {
    expose(this, self);
  }

  async registerTask(createTask, taskName) {
    // Create and initialize the task
    const task = createTask();
    if (task.initialize) {
      await task.initialize();
    }

    // Store the task instance
    this.tasks.set(taskName, task);
  }

  async runTask(taskName, taskData) {
    // Fetch the task instance
    const task = this.tasks.get(taskName);
    if (!task) throw new Error(`Task ${taskName} has not been registered`);

    // Run the task
    return task.handler(taskData);
  }
}

new BootstrapWorker();
