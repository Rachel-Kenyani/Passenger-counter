let text=document.getElementById("h2")
let prev=document.getElementById("save")

let count= 0
function add(){
        count++;
        text.innerText=count
    console.log(count);
    console.log(`here is the count:${count}`);
}

let save=()=>{
    let countStr = count + " >> "
    console.log(count)
    prev.innerText+=countStr
}




