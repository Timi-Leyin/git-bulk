import cliSpinners from "cli-spinners";
import { Command } from "commander";
import config from "./config";
import loader from "./utils/loader";
const program = new Command();

program
  .name(config.name)
  .description(config.description)
  .version(config.version);

/**
 * CLONE COMMAND
 * **/
program
  .command("clone")
  .description("Clone repositories ")
  .argument("<string>", "single repo to clone")
  .action((str, option) => {
    const tt = loader(cliSpinners.aesthetic, "Hey");
  });

export default program;
