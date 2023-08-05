---
layout: default
---

<script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<script src="{{ base.url | prepend: site.url}}/assets/js/signup.js"></script>

<header>
    <div class="header-content">
        <span class="brand">Fit<span class="brand-suffix">Edit</span></span>
    </div>
</header>

<main>
<h1>Whip your training data into shape!</h1>

<p style="text-align: center;">
Fix your buggy training data with <span class="brand">Fit<span class="brand-suffix">Edit</span></span>
</p>

<a class="cta-button" href="get.html">Get FitEdit Now</a>

<section class="section">
<h2>Fix workout issues</h2>
<p>

<ul>
<li>Workout won't upload</li>
<li>GPS glitches</li>
<li>Erratic or inaccurate treadmill pace</li>
<li>Inaccurate heart rate</li>
<li>Power drops</li>
<li>Missed lap key</li>
<li>Miscounted swim laps</li>
<li>...and much more</li>
</ul>
</p>

<a class="cta-button" href="get.html">Get FitEdit Now</a>

</section>

<section class="section">
<h2>Features</h2>
<ul>
<li>Slick and intuitive interface</li>
<li>Import and edit Garmin FIT files</li>
<li>Visualize activity data with tables, charts, and maps</li>
<li>Edit GPS points on a map</li>
<li>Edit speed, heart rate, and other fields</li>
<li>Merge, split, and trim activities</li>
<li>Export edited activities to file</li>
<li>Supports multiple sports, e.g. run, bike, swim, walk, and many others.</li>
<li>Supports Windows, macOS, and Linux</li>
</ul>

<a class="cta-button" href="get.html">Get FitEdit Now</a>

</section>

<section class="section">

<img src="screenshot.png" style="border: none; width: 75%;" class="center" alt="Screenshot of FitEdit"/>
<p style="font-style: italic; text-align: center">Above: Screenshot of FitEdit</p>

</section>

<section class="section">
<h2>Join the email list!</h2>

<br/>
<p>You'll get free useful content about training data and updates about FitEdit.</p>
<br/>
<p>We take your privacy <a href="privacy.html">seriously</a>.</p>
<br/>

<form class="signup" id="signupForm" method="POST" action="/signup">
    <label for="name">Name:</label>
    <input type="text" class="styled-input" id="name" name="name" required>
    <br/>
    <label for="email">Email:</label>
    <input type="email" class="styled-input" id="email" name="email" required>

    <br/>
    <label class="signup-message" id="signupHumanAdvice" for="slider">To prove you're human, please move the slider to the right: </label>
    <br/>

    <div class="slidecontainer">
    <input type="range" class="slider" id="slider" name="slider" min="1" max="100" value="1">
    </div>

    <br/>
    <input style="display: none;" type="text" id="hp" name="hp">
    <input class="cta-button" style="width: 100%;" id="submitButton" type="submit" value="Submit" disabled>

    <label class="signup-error" id="signupErrorLabel" style="display: none;"></label>

</form>
</section>

<section class="section">
<h2>Pricing</h2>
<p><span class="brand">Fit<span class="brand-suffix">Edit</span></span> is free in read-only mode. Saving requires payment. You can try it now for free and sign up later.</p>
<br/>

<stripe-pricing-table pricing-table-id="prctbl_1NZwVKIg4FIuTIjmHV85l9T0"
publishable-key="pk_live_51NPB7GIg4FIuTIjmqR7NWFtht1VngmMOLgpPRKoWdfs2GsXGfS0ysbJ4xqeOO6SU2Yw3b9ohOZcMbqgjmnPFbLSr00MpHSnni2">
</stripe-pricing-table>

<a class="cta-button" href="get.html">Get FitEdit Now</a>

</section>

</main>
