const repeatString = function (str, nu) {
  let strY = "";
  if (nu < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < nu; i++) {
      strY += str;
    }
    return strY;
  }
};

// Do not edit below this line
module.exports = repeatString;
