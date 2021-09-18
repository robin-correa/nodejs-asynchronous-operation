// Promise API

// Resolve
const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

// Reject
// const p = Promise.resolve(new Error('reason for rejection...'));
// p.catch((error) => console.log(error));
