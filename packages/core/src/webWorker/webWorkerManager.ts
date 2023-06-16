import { wrap } from 'comlink';

class WebWorkerManager {
  workers = [];
  tasks = new Map();
  maxWorkers = navigator.hardwareConcurrency || 4;

  constructor() {
    for (let i = 0; i < this.maxWorkers; i++) {
      const worker = new Worker(
        new URL('./bootstrapWorker.js', import.meta.url)
      );
      this.workers.push({ worker, busy: false });
    }
  }

  getAvailableWorker() {
    return this.workers.find((worker) => !worker.busy);
  }

  async register(createTask, taskName) {
    const worker = this.getAvailableWorker();
    if (!worker) throw new Error('No available workers.');

    const bootstrapWorker = wrap(worker.worker);
    await bootstrapWorker.registerTask(createTask, taskName);

    this.tasks.set(taskName, worker);
  }

  async run(taskName, taskData, priority = 0) {
    const worker = this.tasks.get(taskName);
    if (!worker) throw new Error(`Task ${taskName} has not been registered`);

    worker.busy = true;
    const bootstrapWorker = wrap(worker.worker);
    const result = await bootstrapWorker.runTask(taskName, taskData);
    worker.busy = false;
    return result;
  }
}

export default new WebWorkerManager();
