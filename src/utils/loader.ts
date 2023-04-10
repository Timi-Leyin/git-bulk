import cliSpinners from "cli-spinners";

class Loader {
  private sp: any;
  private message?: string;
  private interval;
  constructor(sp, message?: string) {
    this.sp = sp;
    this.message = message || "";
  }

  load(m: string) {
    let i = 0;
    this.message = m;
    const spinner = () => {
      if (i >= this.sp.frames.length - 1) {
        i = 0;
      }
      i++;
      console.clear();
      console.log(this.sp.frames[i], this.message);
    };
    this.interval = setInterval(spinner, this.sp.interval);
    return this;
  }

  text(m: string, timeout = 100) {
    setTimeout(() => {
      this.message = m;
    }, timeout);
    return this;
  }

  stop(timeout = 0) {
    if (this.interval) {
      setTimeout(() => clearInterval(this.interval), timeout);
    }
  }
}

export default Loader;
