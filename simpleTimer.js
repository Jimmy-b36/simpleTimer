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
