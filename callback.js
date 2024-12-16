function ayush(age,job,vill,callback){
    console.log(`Age: ${age}, Job: ${job}, Village: ${vill}`);

callback();
}
function aman(){
    console.log('i aman here')
}
ayush(24,'mca','hazipur',aman);