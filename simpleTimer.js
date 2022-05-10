const timer = () => {
  const args = process.argv.slice(2);
  // const args = [arg1, arg2];
  for (let num of args) {
    num = Number(num);
    if (isNaN(num) || num <= 0) continue;
    num = num * 1000;
    setTimeout(() => {
      process.stdout.write(".");
    }, num);
  }
};
timer();

// clearInterval(a);

const timer2 = () => {
  let count = 5;

  const a = setInterval(() => {
    console.log(count);
    count--;
    if (count === 0) clearInterval(a);
  }, 1000);
};
timer2();
