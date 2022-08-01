//12-24 Hour Toggle
var btn = document.getElementById("button");
btn.onclick = function(){
    if(btn.value == 'ON'){
        btn.value ='OFF';
    } else if(btn.value == 'OFF'){
        btn.value ='ON';
    };
    if(btn.innerText == '12-Hour'){
        btn.innerText = '24-Hour';
    } else if(btn.innerText == '24-Hour'){
        btn.innerText = '12-Hour';
    };
};

setInterval(function(){
    //Day
    const today = new Date();
    const day = today.getDay();
    const dayList = [ "Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    document.getElementById("today").innerText = dayList[ day ];

    //Date
    const dateDay = today.getDate();
    const dateMonth = today.getMonth();
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    //Ordinance
    const printDay = dateDay.toString();
    if(printDay.endsWith('1')){
        var ord = 'st'
    } else if(printDay.endsWith('2')){
        var ord = 'nd'
    } else if(printDay.endsWith('3')){
        var ord = 'rd'
    }else var ord = 'th';
    document.getElementById("date").innerText = `${monthList[ dateMonth ]} ${dateDay}${ord}` ;

    //Time
    const hr = '0' + today.getHours();
    const min = '0' + today.getMinutes();
    const sec = '0' + today.getSeconds();
    if(btn.value == 'ON'){
        document.getElementById("time").innerText = `${hr.slice(-2)} : ${min.slice(-2)} : ${sec.slice(-2)}` ;
    }else if(btn.value == 'OFF'){
        if(hr == 00){
            document.getElementById("time").innerText = `12 : ${min.slice(-2)} : ${sec.slice(-2)} am` ;//midnight
        } else if (hr < 12){
            document.getElementById("time").innerText = `${hr.slice(-2)} : ${min.slice(-2)} : ${sec.slice(-2)} am` ;
        } else if (hr == 12){
            document.getElementById("time").innerText = `12 : ${min.slice(-2)} : ${sec.slice(-2)} pm` ;//noon
        } else{
            const twhr = '0'+ (hr - 12);
            document.getElementById("time").innerText = `${twhr.slice(-2)} : ${min.slice(-2)} : ${sec.slice(-2)} pm` ;
        };
    };

}, 500);