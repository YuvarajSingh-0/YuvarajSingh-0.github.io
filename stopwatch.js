var ms=0;
var sec=0;
var intervalid;
document.getElementById("start").onclick=function(){
    // console.log("mouseevent--",ms,sec); 
    clearInterval(intervalid);
    intervalid=setInterval(()=>{
        // console.log("setinterval--",ms,sec);
        ms=ms+1;
        if (ms>=100){
            ms=00;
            sec=sec+1;
            // console.log("if condition--"+ms,sec);
        }
        document.getElementById("stopwatch").innerText=((sec < 10 ? "0" : "")+sec+" : "+(ms < 10 ? "0" : "")+ms);
    },10);
}
document.getElementById("stop").onclick=function(){
    clearInterval(intervalid)
}
document.getElementById("reset").onclick=function(){
    ms=0;
    sec=0;
    clearInterval(intervalid)
    document.getElementById("stopwatch").innerText=((sec < 10 ? "0" : "")+sec+" : "+(ms < 10 ? "0" : "")+ms);
}