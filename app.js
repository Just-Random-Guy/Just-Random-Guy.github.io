let scet=0;
let i =0;
let b =2;
let c =0;
let posX=undefined;
let slideClass = ['firstScroll','secondScroll','thirdScroll','fourScroll']
function SlideMob(a,b) {
    if(b==0){
    posX=parseInt(a.changedTouches[0].clientX);
    console.log(posX)
}
if(b==1&&posX!=undefined){
    if(c!=3){
    
  if(posX-parseInt(a.clientX)>=10){
  document.querySelector(`.${slideClass[0+c]}`).setAttribute('style','animation-name:SlideMob1;animation-duration:0.4s;margin-left:-110%;')
  c+=1;
  document.querySelectorAll('.slideCircle')[c-1].setAttribute('style','background-color:white;border:1px hsl(12, 88%, 59%) solid;')
  document.querySelectorAll('.slideCircle')[c].setAttribute('style','background-color:hsl(12, 88%, 59%);')
  document.querySelector(`.${slideClass[0+c]}`).setAttribute('style','animation-name:SlideMob2;animation-duration:0.3s;margin-left:4%;')
  }}
  if(c!=0){
    if(posX-parseInt(a.clientX)<=-10){
    document.querySelector(`.${slideClass[c]}`).setAttribute('style','animation-name:SlideMob3;animation-duration:0.4s;margin-left:110%;')
    c-=1;
    document.querySelectorAll('.slideCircle')[c].setAttribute('style','background-color:hsl(12, 88%, 59%);')
    document.querySelectorAll('.slideCircle')[c+1].setAttribute('style','background-color:white;')
    document.querySelector(`.${slideClass[c]}`).setAttribute('style','animation-name:SlideMob4;animation-duration:0.3s;margin-left:4%;')
    }}
}
}
function Screenresize() {
    console.log(window.innerHeight,window.innerWidth);
    if (document.body.clientHeight<=950&&document.body.clientWidth<=450){
        window.location = './mobile.html'
    }if (document.body.clientHeight>950&&document.body.clientWidth>450){
        window.location = './index.html'
    }
   }
   function Scroll(a) {
    let c = 'PC'; 
    let d = 48.5
    if(document.body.clientHeight<=1400&&document.body.clientWidth<=1000){
        console.log(655);
        c = 'Lap'
        d = 63.5
    }
    if(a==1){
        document.querySelector('.SlideBlck').setAttribute('style',`animation-name:ScrollRight${c};animation-duration:0.4s;margin-left:-${d}%;`)
        document.querySelector('[onclick="Scroll(0)"]').setAttribute('onclick','Scroll(2)')
        document.querySelector('[onclick="Scroll(1)"]').setAttribute('onclick','Scroll(-1)')
    }
    if(a==0){
        document.querySelector('[onclick="Scroll(0)"]').setAttribute('onclick','Scroll(-1)')
        document.querySelector('[onclick="Scroll(1)"]').setAttribute('onclick','Scroll(3)')
        document.querySelector('.SlideBlck').setAttribute('style',`animation-name:ScrollLeftPC;animation-duration:0.4s;margin-left:10.5%;`)
    }
    if(a==2){
        document.querySelector('[onclick="Scroll(2)"]').setAttribute('onclick','Scroll(0)')
        document.querySelector('[onclick="Scroll(-1)"]').setAttribute('onclick','Scroll(1)')
        document.querySelector('.SlideBlck').setAttribute('style',`animation-name:ScrollRight2${c};animation-duration:0.4s;margin-left:0%;`)
    
    }
    if(a==3){ 
        document.querySelector('[onclick="Scroll(3)"]').setAttribute('onclick','Scroll(1)')
    document.querySelector('[onclick="Scroll(-1)"]').setAttribute('onclick','Scroll(0)')
    document.querySelector('.SlideBlck').setAttribute('style',`animation-name:ScrollLeft2PC;animation-duration:0.4s;margin-left:0%;`)


    }
   }
   function ScrollBtn(a) {
    if(a==0){
        document.querySelector('.SlideBlck').setAttribute('onmousemove','ScrollBtn(-1)')
        document.querySelectorAll('[hidden]')[1].removeAttribute('hidden')
        document.querySelectorAll('[hidden]')[1].removeAttribute('hidden')
        document.querySelector('.leftScrollParent').setAttribute('style','animation-name:ScrollBtnVis;animation-duration:0.8s;background-color:rgba(0,0,0,0.4)')
        document.querySelector('.rightScrollParent').setAttribute('style','animation-name:ScrollBtnVis;animation-duration:0.8s;background-color:rgba(0,0,0,0.4)')
        document.querySelector('.leftScroll').setAttribute('style','animation-name:RightLeftScrollVis;animation-duration:0.2s;background-color:rgb(0,0,0)')
        document.querySelector('.rightScroll').setAttribute('style','animation-name:ScrollBtnVis;animation-duration:0.2s;background-color:rgba(0,0,0)')
        document.querySelector('.leftScroll2').setAttribute('style','animation-name:RightLeftScrollVis;animation-duration:0.2s;background-color:rgb(0,0,0)')
        document.querySelector('.rightScroll2').setAttribute('style','animation-name:ScrollBtnVis;animation-duration:0.2s;background-color:rgba(0,0,0)')
    
    }
    if(a==1){
        document.querySelector('.SlideBlck').setAttribute('onmousemove','ScrollBtn(0)')
        document.querySelector('.leftScrollParent').setAttribute('style','animation-name:ScrollBtnHid;animation-duration:0.8s;background-color:rgba(0,0,0,0.0)')
        document.querySelector('.rightScrollParent').setAttribute('style','animation-name:ScrollBtnHid;animation-duration:0.8s;background-color:rgba(0,0,0,0.0)')
        
        document.querySelector('.leftScrollParent').setAttribute('hidden','')
    document.querySelector('.rightScrollParent').setAttribute('hidden','')
        document.querySelector('.leftScroll').setAttribute('style','animation-name:RightLeftScrollHid;animation-duration:0.2s;background-color:transparent')
        document.querySelector('.rightScroll').setAttribute('style','animation-name:ScrollBtnHid;animation-duration:0.2s;background-color:transparent')
        document.querySelector('.leftScroll2').setAttribute('style','animation-name:RightLeftScrollHid;animation-duration:0.2s;background-color:transparent')
        document.querySelector('.rightScroll2').setAttribute('style','animation-name:ScrollBtnHid;animation-duration:0.2s;background-color:transparent')
        


    }
   }
let classes=['firstScroll','secondBlck','thirdBlck','secondScroll']
function mobMenu(a) {
    if(a==0){
        document.querySelector('[onclick="mobMenu(0)"]').setAttribute('hidden','')
        document.querySelector('[onclick="mobMenu(1)"]').removeAttribute('hidden')
        document.getElementById('mobile-nav').setAttribute('style','visibility:visible;animation-name:mobilemenu;animation-duration:0.4s;margin-left:4%;')
    }
    if(a==1){
        document.querySelector('[onclick="mobMenu(1)"]').setAttribute('hidden','')
        document.querySelector('[onclick="mobMenu(0)"]').removeAttribute('hidden')
        document.getElementById('mobile-nav').setAttribute('style','animation-name:mobilemenu2;animation-duration:0.4s;margin-left:104%;visibility:hidden;')  
    }
}
let emailService = ['mail.ru','gmail.com','outlook.com']
function inbox(){
    if(document.querySelector('[type="email"]').value.split('@')[0].length<6&&emailService.includes(document.querySelector('[type="email"]').value.split('@')[1])==false){
        document.querySelector('.footerInbox').children[3].removeAttribute('hidden')
        document.querySelector('.footerInbox').children[3].innerHTML="Please insert a valid email"
        document.querySelector('.footerInbox').children[0].setAttribute('style','border:1px red solid;border-bottom:3px red solid;border-top:2px red solid;border-right:2px red solid;color:red;')
    }
    if(document.querySelector('[type="email"]').value.split('@')[0].length>=6&&emailService.includes(document.querySelector('[type="email"]').value.split('@')[1])==true){
        document.querySelector('.footerInbox').children[3].setAttribute('hidden','');
        document.querySelector('.footerInbox').children[3].innerHTML="";
        document.querySelector('.footerInbox').children[0].removeAttribute('style');
    }
}