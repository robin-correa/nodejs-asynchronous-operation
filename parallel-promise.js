// Parallel promise

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
    //reject(new Error("because something failed."));
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

// All promise must be fulfilled
Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));

// If any one of the promise completed, can fulfill the promise immediately
Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));
