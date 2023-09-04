//Basic Promise Program
// let a = 10, b = 20;

// let wait = new Promise((resolve, rej) => {
//     setTimeout(() => {
//     resolve(30)
// }, 2000);
// })

// wait.then((data) => {
//     console.log(a + data);
// })

// console.log(a + b);

async function value() {
    let b =await setTimeout(() =>{return 20 },3000);
  return b;
}

async function add(a) {
  let wait = await value();
  console.log(a + wait);
}
add(30);
