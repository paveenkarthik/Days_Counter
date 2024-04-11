 const day=document.querySelector("#days");
 const hour=document.querySelector("#hours");
 const minute=document.querySelector("#minutes");
 const sec= document.querySelector("#sec");

 function  updateTime(){
    const currentYear=new Date().getFullYear();
    const birth=new Date('October 15 '+currentYear+' 00:00:00');
    const currentDate=new Date();
    const diff=birth-currentDate
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);
    day.innerHTML=d<10?"0"+d:d;
    hour.innerHTML=h<10?"0"+h:h;
    minute.innerHTML=m<10?"0"+m:m;
    sec.innerHTML=s<10?"0"+s:s;
 }
setInterval(updateTime,1000);