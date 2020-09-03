const judgeFizzBuzz = require("./judgeFizzBuzz");

const showFizzBuzz = () => {
  for (let n = 0; n <= 100; n++) {
    console.log(judgeFizzBuzz(n));
  }
};

showFizzBuzz();
