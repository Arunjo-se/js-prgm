/*
A Promise is an object that represents a future value – something that will complete later (either successfully or with an error).

Promise States
A Promise has 3 states:

Pending – The operation is still in progress.

Fulfilled – The operation completed successfully (resolve()).

Rejected – The operation failed (reject()).

*/

(function run() {
  const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
      resolve("✅ Operation succeeded!");
    } else {
      reject("❌ Operation failed.");
    }
  });

  myPromise
    .then((result) => console.log("re : " +result))
    .catch((error) => console.error(error));
})();


const delay = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("🕒 Done after 2 seconds!");
  }, 2000);
});

delay.then((msg) => {
  console.log(msg);
});
