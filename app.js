let scet=0;
let i =0;
let b =2;
let classes=['firstScroll','secondBlck','thirdBlck','secondScroll']
if(window.innerWidth<=760&&window.innerHeight<=600){
document.querySelectorAll('.saidBlck')[1].setAttribute('style','left:150%;')
document.querySelectorAll('.saidBlck')[2].setAttribute('style','left:150%;')
document.querySelectorAll('.saidBlck')[3].setAttribute('style','left:150%;')
document.getElementById('secondScroll').setAttribute('style','left:120%;')
document.getElementById('firstScroll').setAttribute('style','left:-5%;')
}
if(window.outerWidth<=770&&window.outerHeight<=1000){
    console.log(55)
    document.querySelector('.menuBlck').setAttribute('style','margin-left: 150%;')
}

function mobile_Menu(a) {
    if(a==1){
        document.querySelector('[onclick="mobile_Menu(1)"]').setAttribute('hidden','')
        document.querySelector('[onclick="mobile_Menu(0)"]').removeAttribute('hidden')
        document.getElementById('mobile-nav').setAttribute('style','animation-name:mobilemenu;animation-duration:0.2s;margin-left:9%;')
    }
    if(a==0){
        document.querySelector('[onclick="mobile_Menu(0)"]').setAttribute('hidden','')
        document.querySelector('[onclick="mobile_Menu(1)"]').removeAttribute('hidden')
        document.getElementById('mobile-nav').setAttribute('style','animation-name:mobilemenu2;animation-duration:0.2s;margin-left:150%;')  
    }
}
let emailService = ['mail.ru','gmail.com','outlook.com']
function inbox(){
    console.log(555)
    if(document.querySelector('[type="email"]').value.split('@')[0].length<6&&emailService.includes(document.querySelector('[type="email"]').value.split('@')[1])==false){
        document.querySelector('.footerInbox').children[3].removeAttribute('hidden')
        document.querySelector('.footerInbox').children[3].innerHTML="Please insert a valid email"
        document.querySelector('.footerInbox').children[0].setAttribute('style','border:1px red solid;color:red;')
    }
    if(document.querySelector('[type="email"]').value.split('@')[0].length>=6&&emailService.includes(document.querySelector('[type="email"]').value.split('@')[1])==true){
        document.querySelector('.footerInbox').children[3].setAttribute('hidden','');
        document.querySelector('.footerInbox').children[3].innerHTML="";
        document.querySelector('.footerInbox').children[0].removeAttribute('style');
    }
}