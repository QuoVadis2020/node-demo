const program = require('commander');
const api = require('./index.js');


program
  .option('-x, --xxx', 'output extra debugging');
program
  .command('add')
  .description('add a task')
  .action((...args) => {
    const tasks = args[1];
    api.add(tasks);
  });
program
  .command('clear')
  .description('clear tasks')
  .action(() => {
    api.clear();
  });

program.parse(process.argv);

if (process.argv.length === 2) {
  void api.showAll();
}
