const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

rl.question("How long is the timer for? 1-9 seconds: ", (count) => {
  if (count === "b") {
    console.log("beep");
    process.exit();
  } else if (isNaN(Number(count))) {
    console.log("You missed your chance, that's not a number!");
    process.exit();
  }

  const time = setInterval(() => {
    process.on("SIGINT", () => {
      console.log("Thanks for using me, ciao!");
      process.exit();
    });
    console.log(count);
    count--;
    if (count < 0) {
      clearInterval(time);
      console.log("beep");
    }
  }, 1000);
  rl.close();
});
