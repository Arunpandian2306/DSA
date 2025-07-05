// A stream is an abstract interface for working with continuous data —
// a way to handle large files or data piece-by-piece (in chunks), instead of loading everything into memory at once.

// chunk is a small piece of data read from or written to a stream.
// Example: If you read a 1 GB file using a stream, Node.js reads it in chunks like 64 KB at a time.

const fs = require("fs");

// Create readable stream
const readStream = fs.createReadStream("file.txt", {
  encoding: "utf8",
  highWaterMark: 32, // chunk size in bytes
});

// Read file in chunks
readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readStream.on("end", () => {
  console.log("Finished reading file.");
});
