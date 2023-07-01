import { wrap, proxy } from 'comlink';

class WebWorkerManager {
  workers = [];
  tasks = new Map();
  maxWorkers = navigator.hardwareConcurrency || 4;

  constructor() {
    for (let i = 0; i < this.maxWorkers; i++) {
      const workerScriptUrl = new URL('./bootstrapWorker.js', import.meta.url);
      const worker = new Worker(workerScriptUrl, { type: 'module' });
      const bootstrapWorker = wrap(worker);

      this.workers.push({ worker: bootstrapWorker, busy: false });
    }
  }

  getAvailableWorker() {
    return this.workers.find((worker) => !worker.busy);
  }

  async registerTask(taskName, taskFactory) {
    const workersTasks = this.workers.map((worker) =>
      worker.worker.registerTask(taskName, 2)
    );
    await Promise.all(workersTasks);
  }

  async runTask(taskName, data) {
    const worker = this.getAvailableWorker();
    return await worker.worker.runTask(taskName, data);
  }
}

export default new WebWorkerManager();
