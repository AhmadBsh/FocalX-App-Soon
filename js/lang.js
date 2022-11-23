var translations = {
    en: {
      Thank: "Thank you for trusting us.",
      You: "You will be notified when we launch the website.",
      Close: "Close",
      OR: ` OR Countine to Our Website`,
      Subscribe: `Subscribe`,
/*       to: `Subscribe to the newsletter`,
      stay: `to stay in latest news`, */
    },
    ar: {
        Thank: "شكراً لثقتك بنا.",
        You: "سيتم مراسلتك عندما نقوم بإطلاق الموقع الالكتروني.",
        Close: "إغلاق",
        OR: ` أو يمكنك المتابعة لموقعنا الرسمي`,
        Subscribe: `اشترك الآن`,
/*         to: `اشترك الآن في النشرة الأخبارية ليصلك كل جديد
        <br class="MB">
        عن أخبار منصتنا
        <span dir="rtl" class="MB">
        و يوم انطلاقها.
        </span>`, */
    },
  };

var wrapper = document.querySelector('#wrapper')
var EN_btn = document.querySelector('#EN')
var AR_btn = document.querySelector('#AR')
var footer = document.querySelector('#footer')
var footer_p = document.querySelector('#footer_p')
var counterr = document.querySelector('#counter')
var container = document.querySelector('#container')
var counter_block = document.querySelector('#counter_block')
var contact = document.querySelector('#contact')
var socialIcons = document.querySelector('#socialIcons')
var popUp = document.querySelector('#popUp')
var popUp_text = document.querySelector('.popUp_text')
var closee = document.querySelector('.close')
var closing = document.querySelector('.closing')
var close_web = document.querySelector('.close_a')
var subscribe_btn_M = document.querySelectorAll('.btn')
var bg_img = document.querySelector('#bg_img')
var popf = document.querySelector('#popf')
var btn = document.querySelector('.btn')
var a = document.querySelector('#a')
var form = document.querySelector('#fupForm')


var htmlEN = `
<section>
<h1 class="title">New Era will Begin</h1>
<p class="p1"> <strong>focal app solution</strong> will be a vast <br class="MB"> business gate in Syria,<br>
    a safe place for you if you are: <br class="MB">Business owner, Freelancer,<br>
    job seeker, designer, marketer,<br class="MB"> developer, or blogger.</p>
<p class="p2">Also you can check our company<br class="MB"> website from <a href="https://focal-x.com/" target="_blank"><span>HERE</span></a></p>
</section>
 `
var htmlAR = `
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
`
if (window.matchMedia('screen and (max-width: 500px)').matches) {
    bg_img.src='./img/mainbackgroundM2.png'
}
if (!window.matchMedia('screen and (max-width: 500px)').matches) {
    bg_img.src='./img/mainbackground.jpg'
}
EN_btn.addEventListener('click',()=>{
    EN_btn.classList.add('active')
    EN_btn.classList.remove('de-active')
    AR_btn.classList.remove('active')
    AR_btn.classList.add('de-active')
    form.removeAttribute('dir');
    popUp.classList.add('popUp')
    popUp.classList.remove('popUp_AR')
    popUp_text.classList.remove('popUp_text_a')
    popUp_text.classList.add('popUp_text')
    popUp_text.removeAttribute('dir')
    popf.classList.remove('popf-a');
    a.removeAttribute('dir');
    a.classList.remove('a-a');
    a.classList.add('w');
    closee.removeAttribute('dir');
    closee.classList.remove('closeaa');
    setLanguage("en");
    wrapper.innerHTML=htmlEN;
    wrapper.classList.remove('wrapper_AR')
    document.getElementById("subscribe").innerHTML=`<p class="form_title">Subscribe to the newsvarter <br class="MB"> to stay in latest news
    </p>`;
    sb.classList.remove('sb_AR')
    btn.removeAttribute('lang');
    footer.classList.remove('AR_footer')
    if (!window.matchMedia('screen and (max-width: 500px)').matches) {
        counterr.style.columnGap='33px';
    }

    if (window.matchMedia('screen and (max-width: 500px)').matches) {
        counter_block.classList.add('not_MB')
        counterr.classList.add('counter_MB')
        counterr.style.marginTop='15px';
        contact.innerHTML='<p class="MB" id="contact">Keep In Touch:</p>'
        socialIcons.classList.remove('socialIcons_AR')
        footer_p.innerHTML='<p>© 2021 - 2022 <a href="https://focal-x.com/" target="_blank">focal X L.L.C</a> All Right Reserved</p>'
    }    
})

AR_btn.addEventListener('click',()=>{
    AR_btn.classList.add('active')
    AR_btn.classList.remove('de-active')
    EN_btn.classList.remove('active')
    EN_btn.classList.add('de-active')
    form.setAttribute('dir' , 'rtl');
    setLanguage("ar");
    wrapper.innerHTML=htmlAR;
    wrapper.classList.add('wrapper_AR');
    document.getElementById("subscribe").innerHTML=`<p dir="rtl" class="form_title">اشترك الآن في النشرة الأخبارية ليصلك كل جديد
    <br class="MB">
    عن أخبار منصتنا
    <span dir="rtl" class="MB">
    و يوم انطلاقها.
    </span>
    </p>`;
    sb=document.getElementById("sb");
    sb.classList.add('sb_AR');
    btn.setAttribute('lang' , 'ar');
    footer.classList.add('AR_footer')
    popUp_text.setAttribute('dir' , 'rtl');
    popUp_text.classList.add('popUp_text_a');
    popUp_text.classList.remove('popUp_text');
    popf.classList.add('popf-a');
    a.setAttribute('dir' , 'rtl');
    a.classList.add('a-a');
    a.classList.remove('w');
    closee.setAttribute('dir' , 'rtl');
    closee.classList.add('closeaa');
    if (!window.matchMedia('screen and (max-width: 500px)').matches) {
        counterr.style.columnGap='37px';
        popUp_text.setAttribute('dir' , 'rtl');
        popUp_text.classList.add('popUp_text_a');
        popf.classList.add('popf-a');
        a.setAttribute('dir' , 'rtl');
        a.classList.add('a-a');
        closee.setAttribute('dir' , 'rtl');
        closee.classList.add('closeaa');
    }
   
    if (window.matchMedia('screen and (max-width: 500px)').matches) {
        counterr.style.columnGap='21px';
        counter_block.classList.add('not_MB')
        counterr.classList.add('counter_MB')
        counterr.style.marginTop='22px';
        contact.innerHTML='<p class="contact_AR" dir="rtl">ابقوا على إطلاع من خلال متابعتنا:</p>'
        socialIcons.classList.add('socialIcons_AR')
        footer_p.innerHTML='<p dir="rtl">©2021 - 2022 جميع حقوق النشر محفوظة لـــ <a href="https://focal-x.com/" target="_blank">focal X L.L.C</a> </p>'
        popUp.classList.add('popUp_AR')
    }
})

var setLanguage = (language) => {
    var elements = document.querySelectorAll("[data-tr]");
    var placeholder = document.querySelector("[placeholder]");
    elements.forEach((element) => {
      var translationKey = element.getAttribute("data-tr");
      element.textContent = translations[language][translationKey];
    });
    if(language==`ar`){var email =document.getElementById("email");
    email.setAttribute("placeholder", `سّجل من خلال بريدك الالكتروني`);}
    if(language==`en`){var email =document.getElementById("email");
    email.setAttribute("placeholder", `Enter your E-mail to subscribe`);}
    }
