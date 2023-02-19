var hour=00,minte=00,second=00;
function update(){
    second++;
    if(second==60){
        second=00;
        minute++;
    }
    if(minute==60){
        minute=00;
        hour++;
    }
    if(hour=24){
        hour=00;
    }
document.getElementById("shijian").InnerHTML=(hour)+':'+(minute)+':'+(second);
}