var isDark=true;
(document.getElementById("button")).addEventListener('click',function(){
    console.log("hi")
    if (isDark===true){
        document.getElementById("main").className="bg-gray-100 transition-all duration-1000";
        document.getElementById("button").className="rounded-xl hover:bg-orange-300 cursor-pointer text-black p-2 bg-orange-600 transition-all duration-1000"
        document.getElementsByTagName("h1")[0].innerText="Light Theme"
        document.getElementsByTagName("h1")[0].className="transform -translate-y-10 text-black transition ease-in-out duration-1000"
        isDark=false
    }
    else{
        document.getElementById("main").className="bg-gray-700 transition-all duration-1000";
        document.getElementById("button").className="rounded-xl cursor-pointer hover:bg-blue-300 bg-blue-600 p-2 text-white transition-all duration-1000"
        document.getElementsByTagName("h1")[0].innerText="Dark Theme"
        document.getElementsByTagName("h1")[0].className="text-white transition ease-in-out duration-1000"
        isDark=true
    }

}) 
