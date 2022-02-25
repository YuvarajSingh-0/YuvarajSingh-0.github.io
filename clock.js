var interval = setInterval(() => {
    const d = new Date();
    var minutes = d.getMinutes();
    var hours = d.getHours() >= 12 ? d.getHours() - 12 : d.getHours();
    var sec = d.getSeconds();
    document.getElementById("time").innerText =
      (hours < 10 ? "0" : "") +
      hours +
      " : " +
      minutes +
      " : " +
      sec +
      "  " +
      (hours >= 12 ? "PM" : "AM");
  }, 1000);  