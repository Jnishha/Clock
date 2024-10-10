var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
    function(){
        d = new Date();
        second = d.getSeconds();
        minute = d.getMinutes();
        hour = d.getHours();
        document.getElementById("sec").style
    },1000
);