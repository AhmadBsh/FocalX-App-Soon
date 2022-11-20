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
let htmlEN = `
<section>
<h1 class="title">New Era will Begin</h1>
<p class="p1"> <strong>focal app solution</strong> will be a vast <br class="MB"> business gate in Syria,<br>
    a safe place for you if you are: <br class="MB">Business owner, Freelancer,<br>
    job seeker, designer, marketer,<br class="MB"> developer, or blogger.</p>
<p class="p2">Also you can check our company<br class="MB"> website from <a href="https://focal-x.com/" target="_blank"><span>HERE</span></a></p>
</section>
<div id="subscribe" class="subscribe">
    <p class="form_title">Subscribe to the newsletter <br class="MB"> to stay in latest news
    </p>
    <form method="POST" action="#">
      <!-- <p class="subscribe-input"> -->
        <input class="input" type="email" name="Email" placeholder="Enter your E-mail to subscribe">
        <input class="btn" type="submit" value="Subscribe
        " name="Submit">
      <!-- </p> -->
    </form>
</div>
 `
let htmlAR = `
<section>
 <h1 class="title">عصر جديد سيبدأ معنا</h1>
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
</section>
 <div id="subscribe" class="subscribe">
     <p dir="rtl"class="form_title">اشترك الآن في النشرة الأخبارية ليصلك كل جديد
     <br class="MB">
     عن أخبار منصتنا
     <span dir="rtl" class="MB">
     و يوم انطلاقها.
     </span>
     </p>
     <form method="POST" action="#">
         <input lang="ar" class="btn" type="submit" value="اشترك الآن" name="Submit">
         <input class="input" type="email" name="Email" placeholder="سّجل من خلال بريدك الالكتروني">
     </form>
 </div>
`
EN_btn.addEventListener('click',(e)=>{
    wrapper.innerHTML=htmlEN
    wrapper.classList.remove('wrapper_AR')
    EN_btn.classList.add('active')
    EN_btn.classList.remove('de-active')
    AR_btn.classList.remove('active')
    AR_btn.classList.add('de-active')
    footer.classList.remove('AR_footer')
    if (!window.matchMedia('screen and (max-width: 376px)').matches) {
        counterr.style.columnGap='33px';
        
    }
    if (window.matchMedia('screen and (max-width: 376px)').matches) {
        counter_block.classList.add('not_MB')
        counterr.classList.add('counter_MB')
        counterr.style.marginTop='15px';
        contact.innerHTML='<p class="MB" id="contact">Keep In Touch:</p>'
        socialIcons.classList.remove('socialIcons_AR')
        footer_p.innerHTML='<p>© 2021 - 2022 <a href="https://focal-x.com/" target="_blank">focal X L.L.C</a> All Right Reserved</p>'
    }

})
AR_btn.addEventListener('click',(e)=>{
    wrapper.innerHTML=htmlAR
    wrapper.classList.add('wrapper_AR')
    AR_btn.classList.add('active')
    AR_btn.classList.remove('de-active')
    EN_btn.classList.remove('active')
    EN_btn.classList.add('de-active')
    footer.classList.add('AR_footer')
    if (!window.matchMedia('screen and (max-width: 376px)').matches) {
        counterr.style.columnGap='37px';
    }
    if (window.matchMedia('screen and (max-width: 376px)').matches) {
        counterr.style.columnGap='21px';
        counter_block.classList.add('not_MB')
        counterr.classList.add('counter_MB')
        counterr.style.marginTop='22px';
        contact.innerHTML='<p class="contact_AR" dir="rtl">ابقوا على إطلاع من خلال متابعتنا:</p>'
        socialIcons.classList.add('socialIcons_AR')
        footer_p.innerHTML='<p dir="rtl">©2021 - 2022 جميع حقوق النشر محفوظة لـــ <a href="https://focal-x.com/" target="_blank">focal X L.L.C</a> </p>'
    }
})