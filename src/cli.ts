import { Command } from 'commander';
import config from './config';
const program = new Command();

program
  .name(config.name)
  .description(config.description)
  .version(config.version);

program.command('clone')
  .description('Clone repositories ')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

export default program;