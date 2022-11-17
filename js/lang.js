let wrapper = document.querySelector('#wrapper')
let EN_btn = document.querySelector('#EN')
let AR_btn = document.querySelector('#AR')
let footer = document.querySelector('#footer')
let htmlEN = `
<section>
 <h1 class="title">New Era will Begin</h1>
 <p class="p1"> <strong>focal app solution</strong> will be a vast business gate in Syria,<br>
     a safe place for you if you are: Business owner, Freelancer,<br>
     job seeker, designer, marketer, developer, or blogger.</p>
 <p class="p2">Also you can check our company website from <span>HERE</span></p>

</section>
 <div id="subscribe" class="subscribe">
     <p class="form_title">Subscribe to the newsletter to stay in latest news
     </p>
     <form method="POST" action="subscribe.php">
       <!-- <p class="subscribe-input"> -->
         <input class="input" type="email" name="Email" placeholder="Enter ypur E-mail">
         <input class="btn" type="submit" value="Subscribe
         " name="Submit">
       <!-- </p> -->
     </form>
 </div>
 <div class="counter" id='counter'>
     <div class="months block">
         <p id='month'></p>
         <p>Months</p>
     </div>
     <div class="days block">
         <p id='day'></p>
         <p>Days</p>
     </div>
     <div class="hours block">
         <p id='hour'></p>
         <p>Hours</p>
     </div>
     <div class="minutes block">
         <p id='minute'></p>
         <p>Minutes</p>
     </div>
     <div class="seconds block">
         <p id='second'></p>
         <p>Seconds</p>
     </div>
 </div>`
let htmlAR = `
<section>
 <h1 class="title">عصر جديد سيبدأ معنا</h1>
 <p class="p1">
 منصة
 بوابة واسعة للأعمال في سورية
 <strong>focal app solution</strong> 
 <br>
مكان آمن لك إن كنت: صاحب عمل أو شركة، مُستقل،
<br>
باحث عن وظيفة، مصمم، مسّوق، مبرمج، أو  مُدون.
<br>
 </p>
 <p class="p2">تعرف علينا أكثر وقم بزيارة موقع شركتنا من <span>هنا</span></p>

</section>
 <div id="subscribe" class="subscribe">
     <p class="form_title">اشترك الآن في النشرة الأخبارية ليصلك كل جديد عن أخبار منصتنا
     </p>
     <form method="POST" action="#">
         <input lang="ar" class="btn" type="submit" value="اشترك الآن" name="Submit">
         <input class="input" type="email" name="Email" placeholder="سجل من خلال بريدك الالكتروني">
     </form>
 </div>
 <div class="counter" id='counter'>
     <div class="months block">
         <p id='month'></p>
         <p>Months</p>
     </div>
     <div class="days block">
         <p id='day'></p>
         <p>Days</p>
     </div>
     <div class="hours block">
         <p id='hour'></p>
         <p>Hours</p>
     </div>
     <div class="minutes block">
         <p id='minute'></p>
         <p>Minutes</p>
     </div>
     <div class="seconds block">
         <p id='second'></p>
         <p>Seconds</p>
     </div>
 </div>`
EN_btn.addEventListener('click',()=>{
    wrapper.innerHTML=htmlEN
    wrapper.classList.remove('wrapper_AR')

    EN_btn.classList.add('active')
    EN_btn.classList.remove('de-active')
    AR_btn.classList.remove('active')
    AR_btn.classList.add('de-active')
    footer.classList.remove('AR_footer')

})
AR_btn.addEventListener('click',()=>{
    wrapper.innerHTML=htmlAR
    wrapper.classList.add('wrapper_AR')
    AR_btn.classList.add('active')
    AR_btn.classList.remove('de-active')
    EN_btn.classList.remove('active')
    EN_btn.classList.add('de-active')
    footer.classList.add('AR_footer')
})