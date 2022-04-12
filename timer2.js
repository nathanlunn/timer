const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on any input from stdin (standard input), output a "." to stdout
const acceptedInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
stdin.on('data', (key) => {
  if (key === 'b') {
    console.log('BEEP');
  }
  if (acceptedInputs.includes(key)) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      console.log('BEEP');
    }, parseInt(key) * 1000);
  }
  if (key === '\u0003') {
    console.log("Thank you for using me, ciao!");
    process.exit();
  }
});