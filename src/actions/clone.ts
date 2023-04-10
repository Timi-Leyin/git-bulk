// @ts-nocheck
import cliSpinners from "cli-spinners";
import Loader from "../utils/loader";
import checkbox from "@inquirer/checkbox";
import { spawn } from "child_process";
export default async (str, option) => {
  console.log(option);
  const init = new Loader(cliSpinners.aesthetic);
  init.load("Initializing");
  console.log(checkbox)
  const gitClone = spawn("git", ["--version"]);

  gitClone.stdout.on("data", (data) => {
    init.text("Using " + data +"\n "+str + " Repository", 1000);
    init.text("Cloning",5000)
  });
  gitClone.on("error", (error) => {
    init.text("Exiting").stop(2000);
  });
};
