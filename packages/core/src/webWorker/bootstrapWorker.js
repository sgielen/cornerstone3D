// bootstrapWorker.js
import { expose } from 'comlink';

let tasks = {};

const api = {
  async registerTask(task) {
    // Dynamically import the worker script.
    const workerModule = await import(new URL(task.script, import.meta.url));

    // Perform initialization.
    if (workerModule.initialize) {
      await workerModule.initialize();
    }

    tasks[task.name] = workerModule.handler;
  },

  async runTask(taskName, data) {
    if (!(taskName in tasks)) {
      throw new Error(`Task "${taskName}" is not registered.`);
    }

    return await tasks[taskName](data);
  },
};

expose(api);
