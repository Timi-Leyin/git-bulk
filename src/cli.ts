// @ts-nocheck
import cliSpinners from "cli-spinners";
import { Command } from "commander";
import config from "./config";
import Loader from "./utils/loader";
import checkbox from "@inquirer/checkbox"
import {spawn} from "child_process"
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
  .argument("<username>", "User profile to clone from")
  .action(async(str, option) => {
    const init = new Loader(cliSpinners.aesthetic);
    init.load("Initializing")
    // console.log(checkbox)
    const gitClone = spawn("git",["--version"])
    
    gitClone.stdout.on("data",(data)=>{
      init.text("Using "+data,1000)
      // loading.load("Cloning")
    })
    gitClone.on("error",(error)=>{
      init.text("Exiting").stop(2000)
    })
  });

export default program;
