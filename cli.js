const program = require('commander')
const api = require('./index.js')
program
  .option('-d, --debug', 'output extra debugging')

program
  .command('add')
  .description('添加任务')
  .action((...args) => {
    // console.log('add '+ x + " " + y +' done');
    const words = args.slice(0, args.length - 1).join(' ')
    api.add(words)
  })
program
  .command('clear')
  .description('删除任务')
  .action((...args) => {
    // console.log('add '+ x + " " + y +' done');
    const words = args.slice(0, args.length - 1).join(' ')
  })
program.parse(process.argv)

