const myApi = 'https://api.github.com/users/ayushkushwaha4527';
async function callApi() {
    const data = await fetch(myApi);
    const value = await data.json()
     console.log(value)
    
}
callApi();

async function foo(){
    return 'hello ayush'

}
const result =foo()
console.log(result)