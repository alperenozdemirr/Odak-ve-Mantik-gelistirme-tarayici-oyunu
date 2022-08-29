//window.alert("hello");


function finish(){
    var start = document.getElementById("start");
    var total = document.getElementById("total-skor");
start.style.display ="block";
total.innerHTML=sayac;
}

function kronometre(){
    if(life!=0){
    life--;
    time.innerHTML=life;
   }else{
    var start = document.getElementById("start");
    var total = document.getElementById("total-skor");
    var aftertotal_skor=document.getElementById("aftertotal-skor");
after_start.style.display ="block";
after_start.style.display="flex";
after_start.style.justifyContent="center";
after_start.style.alignItems="center";
total.innerHTML=sayac;
aftertotal_skor.innerHTML=sayac;
//clearInterval();
   }
}



//document.getElementById("contanier").appendChild(box);
var life=3;
var sayac=0;
var NickNameValue;
var contanier = document.getElementById("contanier");
var canvas = document.getElementById("canvas");
var box = document.getElementById('box');
var skor = document.getElementById('skor');
var time = document.getElementById('time');
var start =document.getElementById('start');
var btn_start = document.getElementById("btn-start");
var after_start = document.getElementById("after-start");
var btnafter_start =document.getElementById("btnafter-start");
var btnBonus = document.getElementById("btnBonus");

function alert_bonus(){
var alert_bonus=document.getElementById("alert-bonus");
alert_bonus.style.display="block";

}



btn_start.onclick = function() {
    //window.alert(konumUret_x);
     var start = document.getElementById("start");
     var nick=document.getElementById("nickname");
     var NickNamePanel=document.getElementById("NickNamePanel");
      NickNameValue = nick.value;
      NickNamePanel.innerHTML=NickNameValue;
      document.getElementById("NickNamePanelleft").innerHTML=NickNameValue;
    start.style.display ="none";
    kronometre();
    setInterval(kronometre,1000);
// window.alert(NickNameValue);
 //eaterStart();
}
btnafter_start.onclick = function(){
   // window.alert("asdnkjasnjdkas");
    var after_start = document.getElementById("after-start");
    after_start.style.display ="none";
    life=3;
    sayac=0;
    kronometre();
    var kronometre=setInterval(kronometre,1000);
    clearInterval(kronometre);
}
box.onclick = function(){
    life+=1;
box.style.display="none";
var newLocationTop=Math.floor(Math.random()*500);
var newLocationLeft=Math.floor(Math.random()*500);
box.style.left=newLocationLeft+"px";
box.style.top=newLocationTop+"px";
box.style.display="block";
randomBackground();
sayac++;
skor.innerHTML=sayac;
}
var sayi1 = Math.floor(Math.random() * 999)+10;
var sayi2 = Math.floor(Math.random() * 999)+10;
function randomBonus(){

   
    
   
document.getElementById("bonusSoru").innerHTML = sayi1+"+"+sayi2+"=?";
}
randomBonus();
btnBonus.onclick = function(){
    var returBonus = document.getElementById("returnBonus").value;
    var sonuc= sayi1 + sayi2;
    if (returBonus==sonuc) {
        life+=3;
        setTimeout(function(){ document.getElementById("alert-bonus").style.display="block";
            setTimeout(function(){
                document.getElementById("alert-bonus").style.display="none";
            },3000);
        },50);
        document.getElementById("returnBonus").value="";
    }

 //sonuctan sonra
    sayi1 = Math.floor(Math.random() * 999)+10;
sayi2 = Math.floor(Math.random() * 999)+10;
document.getElementById("bonusSoru").innerHTML = sayi1+"+"+sayi2+"=?";
document.getElementById("returnBonus").value="";

}

contanier.style.width="100%";
contanier.style.height="100vh";
contanier.style.display="flex";
contanier.style.justifyContent="center";
contanier.style.alignItems="center";
document.getElementById("alert-bonus").style.display="none";

canvas.style.width="500px";
canvas.style.height="500px";
//canvas.style.backgroundColor="#52cee1";

box.style.width="50px";
box.style.height="50px";
box.style.backgroundColor="#ec10b3";

box.style.left="10px";
box.style.top="10px";

 

start.style.display="flex";
start.style.justifyContent="center";
start.style.alignItems="center";
btn_start.style.top="240px";


after_start.style.display="none";
//skor
skor.innerHTML=sayac;
//start



function randomBackground(){
    var randomSayiUret = Math.floor(Math.random() * 10) + 1;
    if(randomSayiUret == 1){
        backgroundColorRenk ="#d600ff";
    }else if(randomSayiUret == 2){
        // stil  = pembe
        backgroundColorRenk ="#cd00f8";
    }
    else if(randomSayiUret == 3){
        // stil  = mavi
        backgroundColorRenk ="#078fff";
    }
    else if(randomSayiUret == 4){
        // stil  = aqua
        backgroundColorRenk ="#07e4ff";
    }
    else if(randomSayiUret == 5){
        // stil  = red
        backgroundColorRenk ="#e57775";
    }
    else if(randomSayiUret == 6){
        // stil  = black
        backgroundColorRenk ="black";
    }
    else if(randomSayiUret == 7){
        // stil  = bordo
        backgroundColorRenk ="#9b1816";
    }
    else if(randomSayiUret == 8){
        // stil  = gray
        backgroundColorRenk ="#504646";
    }
    else if(randomSayiUret == 9){
        // stil  = sarı
        backgroundColorRenk ="#e1ff00";
    }else if(randomSayiUret == 10){
        // stil  = orange
        backgroundColorRenk ="#ff8300s";
    }

    document.body.style.background =backgroundColorRenk; 
    
}



