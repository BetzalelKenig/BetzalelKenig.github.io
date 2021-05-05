

 function sendHttpGoogle(){
     console.log("yes");
        axios.post('https://google.com',{"google":"test"}).then((d)=>console.log(d))
 }
 function sendHttpYakov(){
    axios.post('https://yakovMendelson.com',{"google":"test"}).then((d)=>console.log(d))
}
