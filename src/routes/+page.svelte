<style>
:global(:root){
  --hero-bg:#fff;
  --accent:#041104;
  --slack:#4A154B;
  --text-dark:#111;
  --muted-white:rgba(255,255,255,0.9);
}

*{box-sizing:border-box}

:global(html),:global(body){
  height:100%;
  margin:0;
  padding:0;
  font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  color:var(--text-dark);
  scroll-behavior:smooth;
  background-color:var(--hero-bg);
}

.hero{
  background-image:linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url("night_stars_lights.jpg");
  background-repeat:no-repeat;
  background-position:right 75%;
  background-size:cover;
  background-attachment:scroll;
  color:#fff;
  min-height:100vh;
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  scroll-snap-align:start;
  margin:0;
  padding:2rem 1rem 3rem;
}

@media(max-width:600px){
  .hero{background-position:right 85%;padding-top:28px}
}

:global(h1){
  font-style:italic;
  color:rgb(43,5,5);
  margin:30px;
  font-size:3rem;
}
.hero h1{
  color:#fff;
  margin:0 0 1rem;
  font-weight:600;
  letter-spacing:0.5px;
}

:global(p){
  text-align:center;
  font-size:20px;
  color:#fff;
  margin:0.25rem 0;
}

:global(p2){
  display:block;
  text-align:center;
  color:#fff;
  font-style:italic;
  font-size:18px;
  margin:0.5rem 0 1rem 0;
}

.bornhack{
  color:#fff;
  font-weight:bold;
  text-decoration:underline;
}

:global(button){
  display:block;
  margin:40px auto;
  padding:10px 20px;
  font-size:16px;
  background-color:#041104;
  color:white;
  border:none;
  border-radius:30px;
  cursor:pointer;
}

.button1,.button2{
  color:rgb(193,255,187);
  border:5px solid rgb(193,255,187);
  text-decoration:none;
  display:inline-block;
  padding:20px 25px;
  background-color:#275527;
  border-radius:30px;
  font-style:italic;
  font-size:larger;
  margin:0;
  transition:transform 0.15s ease,background-color 0.15s ease;
}

.button1:hover,.button2:hover{
  background-color:#193b1a;
  color:rgb(200,255,194);
  transform:scale(1.05);
}

.undertext{
  text-align:center;
  font-size:15px;
  color:#fff;
  font-style:italic;
  margin:0.25rem 0;
}

.hackclub{
  color:#fff;
  font-weight:bold;
  text-decoration:underline;
  font-style:italic;
  cursor:pointer!important;
}

.slack{
  color:#fff;
  font-weight:bold;
  font-style:italic;
  font-size:small;
  margin-top:1.5rem;
}

.details-page{
  background-color:#fff;
  color:#111;
  min-height:1vh;
  padding:4rem 1rem;
  display:flex;
  align-items:center;
  justify-content:center;
  scroll-snap-align:start;
}

.details-inner{
  max-width:1000px;
  width:100%;
  padding:3rem 2rem;
}

@media(max-width:600px){
  .camp-image{max-width:60%}
  .button,.button2,button{padding:8px 12px;font-size:15px}
  .details-inner{padding:0 1rem}
}

.faq{
  margin:0 1rem 1.5rem auto;
  padding-left:1rem;
  font-size:1.5rem;
  text-align:center;
  color:#111;
  font-style:italic;
}

.faq+dl{margin-top:1rem}
.details-inner dl{margin:0;padding:0}
.details-inner dl dt{margin-top:1.25rem;font-weight:700}
.details-inner dl dd{margin:0.4rem 0 0.8rem 1rem;line-height:1.5;color:#333}

@media(max-width:600px){
  .details-inner{padding:2rem 1rem}
  .faq{margin-right:0.6rem;padding-left:0.7rem;font-size:1.25rem}
  .details-inner dl dt{margin-top:0.9rem}
}

:global(.footer){
  text-align:center;
  color:#fff;
  font-style:italic;
}

.button-row{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:0.5rem;
  text-align:center;
  margin-top:1rem;
}

.top-button{
  position:absolute;
  top:18px;
  right:18px;
  z-index:20;
}

@media(max-width:600px){
  .top-button{top:12px;right:12px;padding:8px 12px}
  .button-row{gap:0.4rem}
  .button2{padding:8px 12px}
}

.modal{
  display:none;
  position:fixed;
  inset:0;
  align-items:center;
  justify-content:center;
  z-index:1000;
}
.modal.open{display:flex}
.modal-backdrop{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,0.6);
}
.modal-content{
  position:relative;
  background:#fff;
  color:#111;
  width:min(1000px,calc(100% - 3rem));
  max-height:90vh;
  overflow:auto;
  border-radius:12px;
  padding:1.25rem 1.5rem;
  box-shadow:0 10px 30px rgba(0,0,0,0.3);
  box-sizing:border-box;
  z-index:10;
}
.modal-close{
  position:absolute;
  top:8px;
  right:10px;
  border:rgb(193,255,187) solid;
  border-width:5px;
  font-size:1.5rem;
  line-height:1;
  cursor:pointer;
}
.details-images{
  display:flex;
  gap:0.5rem;
  flex-wrap:wrap;
  margin-top:1rem;
  justify-content:center;
}
.details-images img{
  max-width:180px;
  height:auto;
  border-radius:6px;
}

@media(max-width:600px){
  .modal-content{padding:1rem}
  .details-images img{max-width:120px}
}
</style>


<!-- HERO / first section (red background) -->
    <main class="hero">
    <a id="open-faq" class="button2 top-button" href="#" role="button" aria-controls="faq-modal" on:click|preventDefault={openModal}>FAQ</a>
        <h1 class="h1">CAMP</h1>
        <p>Spend time coding, Come to <a class="bornhack" href="https://bornhack.dk">bornhack</a> 🏕️</p>
        <p2>Code with other teens in a forest in Denmark for a week all for free</p2>
        <div class="button-row">
            <p class="undertext">This event is for Hack Club members aged 13 to 18.</p>
            <a class="button2" href="https://forms.hackclub.com/camprsvp" target="_blank" rel="noopener">RSVP</a>
        </div>

        <p class="slack">Check out <a class="hackclub" href="https://hackclub.com">Hack Club</a> for events!</p>
    </main>
        <!-- FAQ modal (hidden by default) -->
        <div id="faq-modal" class="modal" class:open={modalOpen} bind:this={modalEl} role="dialog" aria-modal="true" aria-hidden={modalOpen ? 'false' : 'true'} aria-labelledby="faq-title">
            <div class="modal-backdrop" data-close="true" role="button" tabindex="0" on:click={onBackdropClick} on:keydown={onBackdropKeydown}></div>
            <div class="modal-content" role="document">
                <button class="modal-close button2" aria-label="Close FAQ" on:click={closeModal} bind:this={closeBtnEl}>×</button>
                <section class="details-page" aria-label="Details page">
                    <div class="details-inner">
                        <img class="camp-image" src="image-removebg-preview (4).png" alt="Camp illustration">
                        <h2 id="faq-title" class="faq">camp FAQ</h2>
                        <dl>
                                <dt>What is BornHack?</dt>
                                <dd>BornHack is an annual week-long hacker camp held on the Danish island of Funen. You will build projects amongst other teens! Visit the official site here: <a href="https://bornhack.dk/bornhack-2025/">https://bornhack.dk/bornhack-2025/</a></dd>

                                <dt>What is Hack Club?</dt>
                                <dd>Hack Club is a global community of teenage hackers who love building and coding things. We run clubs, events, and projects around the world to help teens learn, create, and connect.</dd>

                                <dt>When is Camp/BornHack happening?</dt>
                                <dd>BornHack 2026 will likely take place in July 2026 (exact dates to be confirmed). The event usually runs for about a week.</dd>

                                <dt>My parents are nervous about me attending. How can I reassure them?</dt>
                                <dd>That's totally understandable! BornHack is a safe environment, which has been run many times. See more information about <a href="https://bornhack.dk/bornhack-2024/">their previous event</a>! We'll also provide parents with full transparency about accommodations and travel.</dd>

                                <dt>How can we trust Hack Club?</dt>
                                <dd>Hack Club is a 501(c)(3) nonprofit organization. Thousands of students around the world are part of Hack Club, and our finances are completely public and open-source. We've safely run major events like Hack Club Arcade, Assemble, Epoch, and Hack Camp, all designed for teens and supported by our trusted adult mentors. You can learn more about us at <a href="https://hackclub.com">https://hackclub.com</a>.</dd>

                                <dt>Where can I learn more or get involved?</dt>
                                <dd>Join the Hack Club community on <a href="https://hackclub.com/slack/">Slack</a> to connect with other hackers heading to BornHack! This is currently a work-in-progress.</dd>
                        </dl>
                    </div>
                </section>
            </div>
    </div>
    <div class="details-images page-gallery" style="padding-bottom: 10px;" aria-hidden="false">
            <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/6fe379cf70041d5bc30bd62020a948bac392faab_image.png" alt="">
            <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/2754ba6bd20283d32df6168fb3a2a9ca78403e53_image.png" alt="">
            <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/43bf3a3dfacfd4f1b79e3b86232a6d315324e839_image.png" alt="">
            <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fff964ae7ebd8f6cd4ccc7ffdacc113f4cb9c8c1_image.png" alt="">
    </div>
<script lang="ts">
    import { onMount, tick } from 'svelte';

    let modalOpen = false;
    let previousActive: HTMLElement | null = null;
    let modalEl: HTMLElement | null = null;
    let closeBtnEl: HTMLButtonElement | null = null;

    async function openModal() {
        previousActive = document.activeElement as HTMLElement | null;
        modalOpen = true;
        // wait for DOM update so closeBtnEl is available
        await tick();
        document.body.style.overflow = 'hidden';
        if (closeBtnEl) closeBtnEl.focus();
    }

    function closeModal() {
        modalOpen = false;
        document.body.style.overflow = '';
        if (previousActive instanceof HTMLElement) previousActive.focus();
    }

    function onBackdropClick(e: MouseEvent) {
        if (e.target === e.currentTarget) closeModal();
    }

    function onBackdropKeydown(e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeModal();
        }
    }

    function onKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape' && modalOpen) closeModal();
    }

    onMount(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    });
</script>