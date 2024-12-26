const fs = require("fs");

function cleanFile(path, callback) {
  fs.readFile(path, "utf-8", function (err, data) {
    data = data.trim();
    fs.writeFile(path, data, function () {
      callback();
    });
  });
}

function onDone() {
  console.log("File cleaned");
}

cleanFile("a.txt", onDone());
