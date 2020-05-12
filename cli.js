const program = require('commander');
const api = require('./index.js');

program
  .option('-x, --xxx', 'output extra debugging');
program
  .command('add')
  .description('add a task')
  .action((...args) => {
    const tasks = args[1];
    api.add(tasks).then(() => {
      console.log('添加成功');
    }, () => {
      console.log('添加失败');
    });
  });
program
  .command('clear')
  .description('clear tasks')
  .action(() => {
    api.clear().then(() => {
      console.log('清除成功');
    }, () => {
      console.log('清除失败');
    });
  });

program.parse(process.argv);

if (process.argv.length === 2) {
  void api.showAll();
}
