// Iterate with async await 
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
  }
iterateWithAsyncAwait([1, 2, 3]);

// Awaiting a call
// async function awaitCall(){
//             const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
//             const data = await response.json()
//             console.log(data);
// }

// modify awaitcall to use try and catch

async function awaitCall(){
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log("Error, please check your internet connection", error);
    }
}
    

// chaining async calls 
// Function to simulate an asynchronous operation with a delay
async function asyncOperation(message, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, delay);
    });
  }
  
 
  async function chainedAsyncFunctions() {
    try {
   
      await asyncOperation('First operation completed', 1000);
  
      await asyncOperation('Second operation completed', 1000);
     
      await asyncOperation('Third operation completed', 1000);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  chainedAsyncFunctions();
  