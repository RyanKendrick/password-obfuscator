var args = process.argv[2];

var obfuscate = function(string) {
  var newPassword = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      newPassword += "4";
    } else if (string[i] === "e") {
      newPassword += "3";
    } else if (string[i] === "o") {
      newPassword += "0";
    } else if (string[i] === "l") {
      newPassword += "1";
    } else {
      newPassword += string[i];
    }
  }
  return newPassword;
}

console.log(obfuscate(args));
