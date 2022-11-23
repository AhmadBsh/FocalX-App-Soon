var close = document.querySelector('#close')
var popUpMsg = document.querySelector('#popUp')
var subscribe = document.querySelector('#subscribe_Submit')
var bg_img__c = document.querySelector('.bg_img')
var containerr = document.querySelector('#container')
close.addEventListener('click',()=>{
    popUpMsg.style.display = 'none'
    bg_img__c.classList.remove('blur')
    containerr.classList.remove('blur');
    containerr.style.pointerEvents= 'auto';

});

var onSubscribe = (e)=>{
    /* e.preventDefault() */
    bg_img__c.classList.add('blur');
    containerr.classList.add('blur');
    popUpMsg.style.display = 'flex';
    containerr.style.pointerEvents= 'none';

}
/* subscribe.addEventListener('click', onSubscribe); */


