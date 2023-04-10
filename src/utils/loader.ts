import cliSpinners from "cli-spinners";

const loader = (sp: any, message?: string) => {
  let i = 0,
    msg = message || "";
  const spinner = () => {
    if (i >= sp.frames.length - 1) {
      i = 0;
    }
    i++;
    console.clear();
    console.log(sp.frames[i], msg);
  };
  const interval = setInterval(spinner, sp.interval);

  return {
    stop() {
      clearInterval(interval);
    },
    message(_msg){
        msg =_msg
    }
  };
};

export default loader;
