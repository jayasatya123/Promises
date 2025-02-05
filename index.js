let job = true;
let p = new Promise((resolve,reject) =>{
    if (job) {
        resolve("I got job");
    
    }else{
        reject("I Don't have job");
    }
})
.then((res) =>console.log(res))
.catch((err) =>console.log(err))
.finally(() =>console.log("This is your result"));

