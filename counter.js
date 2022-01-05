// var value=document.getElementById("display_num").innerHTML
var count=0;
// document.querySelector("#decrease").onclick=add(-1);
// document.querySelector("#increase").addEventListener('click',add(1));
// document.querySelector("#reset").addEventListener('click',function(){
//     count=0
//     console.log(count)
//     document.getElementById("display_num").textContent=count
// });
function setValue(a) {
    if (a===0) {
        count=0
    }
    else{
        count=count+(a)
    }
    console.log(count)
    document.getElementById("display_num").textContent=count
}