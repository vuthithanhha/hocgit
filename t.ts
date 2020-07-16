var a = "Hello";
var b = "World";

var text = `${a} ${b}`;
console.log(text);
new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.log("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
const greeter = new Promise((res, rej) => {
  setTimeout(() => res("Hello world!"), 2000);
});
async function myFunc() {
  const greeting = await greeter;
  console.log(greeting);
}
myFunc();
