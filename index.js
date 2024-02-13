// The Normal function  

// function add(a,b){
//     return a+b;
// }
// const sum=add(5,10);
// console.log(sum);

// -----------------------------------------------------------------------------------------------------------------------------

// The Async keyword returns the promisified output rather then the normal output(it wraps the data inside the promise).

// Async function without the time-delay
// async function add(a,b){
//     return a+b;
// };
// const sum=add(5,10);
// console.log(sum);

// ------------------------------------------------------------------------------------------------------------------------------

// Async function with the time-delay
// async function add(a,b){
//     setTimeout(()=>{
//         return a+b;
//     },3000)
// }

// const sum=add(5,10);
// console.log(sum);


// ----------------------------------------------------------------------------------------------------------------------------
// Async function with the time-delay with await keyword (Wrong way)

// async function add(a,b){
//     await setTimeout(()=>{
//         return new Promise((resolve,reject)=>{
//             resolve(a+b);
//         });
//     },3000);
    
// }

// console.log("The sum is :",add(5,10));

// console.log("This is written after the async/await function");

// ---------------------------------------------------------------------------------------------------------------------------------

// The Right Way

async function add(a,b){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(a+b);
        },3000);
    });
}

async function calculate(){
    let sum;
    sum=await add(5,10);
    console.log("The sum is :",sum);
    console.log("This log is executed after the await call");
}

calculate();

