const timer = () => {
  const args = process.argv.slice(2);
  for (let num of args) {
    num = Number(num);
    if (isNaN(num) || num <= 0) continue;
    num *= 1000;
    setTimeout(() => {
      process.stdout.write("\x07");
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
