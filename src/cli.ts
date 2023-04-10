import { Command } from "commander";
import cloneAction from "./actions/clone";
import config from "./config";

const program = new Command();

program
  .name(config.name)
  .description(config.description)
  .version(config.version);

/**
 * CLONE COMMAND
 * **/
const { clone } = config.commands;
program
  .command(clone.command)
  .description(clone.description)
  .argument(clone.argument[0], clone.argument[1])
  .option(
    clone.options.provider[0],
    clone.options.provider[1],
    clone.options.provider[2]
  )
  .action(cloneAction);

export default program;
