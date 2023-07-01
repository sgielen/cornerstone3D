// BootstrapWorker.js
import * as Comlink from 'comlink';

const tasks = new Map();

const api = {
  async registerTask(taskName, taskInitializer) {
    debugger;
    console.log(
      'alireza: // taksNAme, taskInitializer',
      taskName,
      taskInitializer
    );
    tasks.set(taskName, taskInitializer);
  },

  async runTask(taskName, data) {
    const taskInitializer = tasks.get(taskName);
    if (!taskInitializer) {
      throw new Error(`No task registered with name "${taskName}"`);
    }

    const task = taskInitializer();
    await task.initialize();
    return await task.handler(data);
  },
};

Comlink.expose(api);
