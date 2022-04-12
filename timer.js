const args = process.argv.slice(2);

const timer = function(args) {
  if (args.length === 0) {
    return;
  }
  for (let time of args) {
    let timeNumber = parseInt(time);
    if (typeof timeNumber !== 'NaN' && timeNumber >= 0) {
      setTimeout(() => {
        process.stdout.write('.\n');
      }, timeNumber * 1000);
    }
  }
};

timer(args);