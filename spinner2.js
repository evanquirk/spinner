let wait = 100;
let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ","\r|   ", "\r/   ", "\r-   ", "\r\\   "];

for (const line of spinner) {
  setTimeout(() => {
    process.stdout.write(line);
  }, wait)
  wait += 200;
};