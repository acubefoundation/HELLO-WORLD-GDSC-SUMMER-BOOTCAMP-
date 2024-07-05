/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (s.length <= 0 || s.length > 15) {
    return null;
  }
  if (/[^(XVCILMD)]/.test(s)) {
    return false;
  }
  let value = "";
  let checked = true;
  let intiger = null;
  function findValue(input) {
    switch (input) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      case "IV":
        return 4;
      case "IX":
        return 9;
      case "XL":
        return 40;
      case "XC":
        return 90;
      case "CM":
        return 900;
      case "CD":
        return 400;
    }
  }

  for (let i = 0; i < s.length; i++) {
    checked = true;
    if (
      (s[i] == "I" && (s[i + 1] == "X" || s[i + 1] == "V")) ||
      (s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")) ||
      (s[i] == "C" && (s[i + 1] == "M" || s[i+1] == "D"))
    ) {
      checked = false;
      value = s[i];
    }
    if (checked) {
      value += s[i];
      intiger += findValue(value);
      value = "";
    }
  }
  return intiger;
};