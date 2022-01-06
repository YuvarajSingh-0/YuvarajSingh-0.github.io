var count=0;

//----------------------EventListener Usage especially in line 8,9-------------------

// function setValue(a){
//     count=count+a;
//     console.log(count);
//     document.getElementById("display_num").textContent=count
// }
// document.querySelector("#decrease").onclick=()=>{ setValue(-1) };
// document.querySelector("#increase").addEventListener('click',()=>{ setValue(1) });
// document.querySelector("#reset").addEventListener('click',function(){
//     count=0
//     console.log(count)
//     document.getElementById("display_num").textContent=count
// });

//--------------------------------Using ForEach Loop-------------------------------

document.querySelectorAll("button").forEach(function (button)  {
    console.log(button)
    button.addEventListener("click",function(e){
        console.log(e);
        const btn_id=e.currentTarget.getAttribute("id")
        console.log(btn_id)
        if(btn_id==="increase"){
            count++;
            console.log(count)
        }
        else if(btn_id==="decrease"){
            count--;
            console.log(count)
        }
        else{
            count=0
        }
        if(count>0){
            document.querySelector("#display_num").className="text-9xl font-bold text-green-500";
        }
        else if(count<0){
            document.getElementById("display_num").className="text-9xl font-bold text-red-500";
        }
        else{
            document.getElementById("display_num").className="text-9xl font-bold ";
        }
        document.getElementById("display_num").textContent=count
    })
});


//------------------Inline Function Calling Below (must add onclick attribute to button tags)---------------

// function setValue(a) {
//     if (a===0) {
//         count=0
//     }
//     else{
//         count=count+(a)
//     }
//     console.log(count)
//     document.getElementById("display_num").textContent=count
// }