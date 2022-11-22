let bg_img = document.querySelector('#bg_img')
let wrapper = document.querySelector('#wrapper')
let EN_btn = document.querySelector('#EN')
let AR_btn = document.querySelector('#AR')
let footer = document.querySelector('#footer')
let footer_p = document.querySelector('#footer_p')
let counterr = document.querySelector('#counter')
let container = document.querySelector('#container')
let counter_block = document.querySelector('#counter_block')
let contact = document.querySelector('#contact')
let socialIcons = document.querySelector('#socialIcons')
let popUp = document.querySelector('#popUp')
let popUp_text = document.querySelector('.popUp_text')
let closee = document.querySelector('.close')
let closing = document.querySelector('.closing')
let close_web = document.querySelector('.close_a')
let subscribe_btn_M = document.querySelectorAll('.btn')
let htmlEN = `
<section>
<h1 class="title">New Era will Begin</h1>
<p class="p1">
    <strong>focal app solution</strong> 
    will be a vast 
    <br class="MB">
     business gate in Syria,
     <br>
    a safe place for you if you are: 
    <br class="MB">
    Business owner, Freelancer,
    <br>
    job seeker, designer, marketer,
    <br class="MB">
    developer, or blogger.
    </p>
<p class="p2">Also you can check our company
    <br class="MB">
    website from 
        <a href="https://focal-x.com/" 
            target="_blank">
            <span>HERE</span>
        </a>
 </p>
<div class="sb" id="sb">
<div id="subscribe" class="subscribe">
  <p class="form_title">Subscribe to the newsletter <br class="MB"> to stay in latest news
  </p>
  <span id="msg" style="color:#FF8500 ; margin-top:10px ;display: block;"></span>
</div>
<form method="POST">
    <input class="input" type="email" name="email" placeholder="Enter your E-mail to subscribe">
    <input class="btn" type="submit" value="Subscribe" name="subscribe_Submit" id="subscribe_Submit">
</form>
</div>
</section>
 `
let htmlAR = `
<section>
 <h1 class="title">
   عصر جديد سيبدأ معنا</h1>
 <p class="p1" dir="rtl">
 منصة
 <strong>focal app solution</strong> 
 بوابة واسعة للأعمال في 
 <br class="MB"> 
  <span class="MB">
  الجمهورية العربية السورية </span>
  <br class="MB"> 
  <span class="not_MB">سورية</span>
مكان آمن لك إن كنت: صاحب عمل أو شركة، مُستقل،
<br>
باحث عن وظيفة، مصمم، مسّوق، مبرمج، أو  مُدون.
<br>
 </p>
 <p class="p2">تعرف علينا أكثر وقم بزيارة موقع شركتنا من <a href="https://focal-x.com/" target="_blank"><span>هنا</span></a></p>
 <div class="sb" id="sb">
 <div id="subscribe" class="subscribe">
 <p dir="rtl"class="form_title">اشترك الآن في النشرة الأخبارية ليصلك كل جديد
 <br class="MB">
 عن أخبار منصتنا
 <span dir="rtl" class="MB">
 و يوم انطلاقها.
 </span>
 </p>
 </div>
 <form method="POST">
 <input lang="ar" class="btn" type="submit" value="اشترك الآن" name="subscribe_Submit" id="subscribe_Submit_ar">
 <input class="input" type="email" name="email" placeholder="سّجل من خلال بريدك الالكتروني">       
 </form>
 </div>
 </section>
`
if (window.matchMedia('screen and (max-width: 400px)').matches) {
    bg_img.src='./img/mainbackgroundM2.png'
}
if (!window.matchMedia('screen and (max-width: 400px)').matches) {
    bg_img.src='./img/mainbackground.jpg'
}
EN_btn.addEventListener('click',()=>{
    EN_btn.classList.add('active')
    EN_btn.classList.remove('de-active')
    AR_btn.classList.remove('active')
    AR_btn.classList.add('de-active')
    wrapper.innerHTML=htmlEN;
    wrapper.classList.remove('wrapper_AR')
    sb.classList.remove('sb_AR')
    footer.classList.remove('AR_footer')
    if (!window.matchMedia('screen and (max-width: 500px)').matches) {
        counterr.style.columnGap='33px';
        popUp.innerHTML=`<img src="img/true.svg" alt="">
        <p style="font-family:'Montserrat', sans-serif;" class='popUp_text'>
          Thank you for trusting us. <br> You will be notified when we launch the website.
        </p>
        <div>
          <button style="font-family:'Montserrat', sans-serif;" class="close" id="close">Close</button>
        <a style="font-family:'Montserrat', sans-serif;" target="_blank" href="https://focal-x.com/" >OR Countine to Our Website </a>
        </div>`
        
    }
    if (window.matchMedia('screen and (max-width: 500px)').matches) {
        counter_block.classList.add('not_MB')
        counterr.classList.add('counter_MB')
        counterr.style.marginTop='15px';
        contact.innerHTML='<p class="MB" id="contact">Keep In Touch:</p>'
        socialIcons.classList.remove('socialIcons_AR')
        footer_p.innerHTML='<p>© 2021 - 2022 <a href="https://focal-x.com/" target="_blank">focal X L.L.C</a> All Right Reserved</p>'
        popUp_text.classList.add('popUp_text')
        popUp_text.classList.remove('popUp_text_AR')
        popUp_text.innerHTML=' Thank you for trusting us. <br> You will be notified when we launch the website.'
        closing.style.direction='ltr';
        closing.style.columnGap='7px';
        closee.classList.add('close')
        closee.classList.remove('close_AR')
        closee.innerHTML='Close'
        close_web.style.direction='ltr';
        close_web.classList.add('close_web')
        close_web.classList.remove('close_web_AR')
        close_web.innerHTML='OR Countine to Our Website'
        popUp.classList.add('popUp')
        popUp.classList.remove('popUp_AR')
        subscribe_btn_M.classList.add('btn_subscribeM')
        subscribe_btn_M.classList.remove('btn_subscribe_ARM')

    }
let close = document.querySelector('#close')
let popUpMsg = document.querySelector('#popUp')
let subscribe = document.querySelector('#btn_subscribe')
let subscribeM = document.querySelector('.btn_subscribeM')
let bg_img_div = document.querySelector('.bg_img')
let containerr = document.querySelector('#container')
    close.addEventListener('click',()=>{
        popUpMsg.style.display = 'none'
        bg_img_div.classList.remove('blur')
        containerr.classList.remove('blur');
    });
    const onSubscribe = (e)=>{
        e.preventDefault()
        bg_img_div.classList.add('blur');
        containerr.classList.add('blur');
        popUpMsg.style.display = 'flex';
    }
    subscribe.addEventListener('click', onSubscribe);
    subscribeM.addEventListener('click', onSubscribe);
    
})
AR_btn.addEventListener('click',()=>{
    AR_btn.classList.add('active')
    AR_btn.classList.remove('de-active')
    EN_btn.classList.remove('active')
    EN_btn.classList.add('de-active')
    wrapper.innerHTML=htmlAR;
    wrapper.classList.add('wrapper_AR');
    sb=document.getElementById("sb");
    sb.classList.add('sb_AR');
    footer.classList.add('AR_footer')
    if (!window.matchMedia('screen and (max-width: 500px)').matches) {
        counterr.style.columnGap='37px';
        popUp.innerHTML=`<img src="img/true.svg" alt="">
        <p style="font-family:'Tajawal', sans-serif;" dir='rtl' class='popUp_text'>
        شكراً لثقتك بنا.
        <br>
        سيتم مراسلتك عندما نقوم بإطلاق الموقع الالكتروني.</p>
        <div>
        <a style="font-family:'Tajawal', sans-serif;" dir='rtl' target="_blank" href="https://focal-x.com/" >أو يمكنك المتابعة لموقعنا الرسمي</a>
          <button style="font-family:'Tajawal', sans-serif;" dir='rtl' class="close" id="close_ar">إغلاق</button>
        </div>`
    }
    if (window.matchMedia('screen and (max-width: 500px)').matches) {
        counterr.style.columnGap='21px';
        counter_block.classList.add('not_MB')
        counterr.classList.add('counter_MB')
        counterr.style.marginTop='22px';
        contact.innerHTML='<p class="contact_AR" dir="rtl">ابقوا على إطلاع من خلال متابعتنا:</p>'
        socialIcons.classList.add('socialIcons_AR')
        footer_p.innerHTML='<p dir="rtl">©2021 - 2022 جميع حقوق النشر محفوظة لـــ <a href="https://focal-x.com/" target="_blank">focal X L.L.C</a> </p>'
        popUp_text.classList.add('popUp_text_AR')
        popUp_text.classList.remove('popUp_text')
        popUp_text.innerHTML='شكراً لثقتك بنا. <br> سيتم مراسلتك عندما نقوم بإطلاق الموقع الالكتروني.'
        closing.style.direction='rtl';
        closing.style.columnGap='20px';
        closee.classList.add('close_AR')
        closee.classList.remove('close')
        closee.innerHTML='إغلاق'
        close_web.style.direction='rtl';
        close_web.classList.add('close_web_AR')
        close_web.classList.remove('close_web')
        close_web.innerHTML='أو يمكنك المتابعة لموقعنا الرسمي'
        popUp.classList.add('popUp_AR')
        subscribe_btn_M.classList.add('btn_subscribe_ARM')
        subscribe_btn_M.classList.remove('btn_subscribeM')
    }
    
let containerr = document.querySelector('#container')
let subscribeAR = document.querySelector('#subscribe_Submit_ar')
let subscribeARM = document.querySelector('.btn_subscribe_ARM')
let closeAR = document.querySelector('#close_ar')
closeAR.addEventListener('click',()=>{
    popUpMsg.style.display = 'none'
        bg_img_div.classList.remove('blur')
        containerr.classList.remove('blur');
})
let close_AR = document.querySelector('.close_AR')
close_AR.addEventListener('click',()=>{
    popUpMsg.style.display = 'none'
        bg_img_div.classList.remove('blur')
        containerr.classList.remove('blur');
})
const onSubscribe = (e)=>{
    e.preventDefault()
    bg_img_div.classList.add('blur');
    containerr.classList.add('blur');
    popUpMsg.style.display = 'flex';
}
subscribeAR.addEventListener('click', onSubscribe);
subscribeARM.addEventListener('click', onSubscribe);
})
