var interval = setInterval(() => {
  const d = new Date();
  var minutes = d.getMinutes();
  var hours = d.getHours() >= 12 ? d.getHours() - 12 : d.getHours();
  var sec = d.getSeconds();
  document.getElementById("time").innerText =
    (hours < 10 ? "0" : "") +
    hours +
    " : " +
    (minutes < 10 ? "0" : "") +
    minutes +
    " : " +
    (sec < 10 ? "0" : "") +
    sec +
    "  " +
    (hours >= 12 ? "PM" : "AM");
}, 1000);
