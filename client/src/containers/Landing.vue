<template>
<div id="landing">
  <div class="android-be-together-section mdl-typography--text-center">
    <div class="logo-font android-slogan">SAVE TIME, GET MORE</div>
    <div class="logo-font android-sub-slogan">We help you find the lowest textbooks!</div>
    <div class="logo-font android-create-character">
      <a v-link="{ name: 'request' }">Click here to begin</a>
    </div>

    <!-- <a href="#screens">
      <button
        class="android-fab mdl-js-ripple-effect"
        colored
        fab
      >
        <i class="material-icons">expand_more</i>
      </button>
    </a> -->
  </div>

  <!-- Find the best price -->
  <div class="android-wear-section">
    <div class="android-wear-band">
      <div class="android-wear-band-text">
        <div class="mdl-typography--display-2 mdl-typography--font-thin">Find the best price</div>
        <p class="mdl-typography--headline mdl-typography--font-thin">
          Just tell us the books you want, and we'll find the best price on the internet for you.
        </p>
        <p>
          <a class="mdl-typography--font-regular mdl-typography--text-uppercase android-alt-link" v-link="{ name: 'request' }">
            See the book request list&nbsp;<i class="material-icons">chevron_right</i>
          </a>
        </p>
      </div>
    </div>
  </div>

  <!-- How it works -->
  <div class="android-more-section">
    <div class="android-section-title mdl-typography--display-1-color-contrast">How it works</div>
    <div class="android-card-container mdl-grid"><!-- too lazy to change this to WIP mdl-card -->

      <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
        <div class="mdl-card__media">
          <img src="../assets/images/more-from-1.png">
        </div>
        <div class="mdl-card__title">
           <h4 class="mdl-card__title-text">Step 1: Request</h4>
        </div>
        <div class="mdl-card__supporting-text">
          <span class="mdl-typography--font-light mdl-typography--subhead">Click on 'Book Request' and enter the information required</span>
        </div>
        <div class="mdl-card__actions">
           <a v-mdl class="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" v-link="{ name: 'request' }">
             Request Now
             <i class="material-icons">chevron_right</i>
           </a>
        </div>
      </div>

      <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
        <div class="mdl-card__media">
          <img src="../assets/images/more-from-4.png">
        </div>
        <div class="mdl-card__title">
           <h4 class="mdl-card__title-text">Step 2: Receive</h4>
        </div>
        <div class="mdl-card__supporting-text">
          <span class="mdl-typography--font-light mdl-typography--subhead">Receive your results for the best prices found</span>
        </div>
      </div>

      <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
        <div class="mdl-card__media">
          <img src="../assets/images/more-from-2.png">
        </div>
        <div class="mdl-card__title">
           <h4 class="mdl-card__title-text">Step 3: Accept & Purchase</h4>
        </div>
        <div class="mdl-card__supporting-text">
          <span class="mdl-typography--font-light mdl-typography--subhead">Accept the quotes and purchase your books</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
}
</script>
<style>


.android-be-together-section {
  position: relative;
  height: 800px;
  width: auto;
  background-color: #f3f3f3;
  background: url('../assets/images/slide01.jpg') center 30% no-repeat;
  background-size: cover;
}

.logo-font {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1;
  color: #767777;
  font-weight: 500;
}

.android-slogan {
  font-size: 60px;
  padding-top: 160px;
}

.android-sub-slogan {
  font-size: 21px;
  padding-top: 24px;
}

.android-create-character {
  font-size: 21px;
  padding-top: 400px;
}

  .android-create-character a {
    text-decoration: none;
    color: #767777;
    font-weight: 300;
  }

.android-screen-section {
  position: relative;
  padding-top: 60px;
  padding-bottom: 80px;
}

.android-screens {
  text-align: right;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
}

.android-screen {
  text-align: center;
}

.android-screen .android-link {
  margin-top: 16px;
  display: block;
  z-index: 2;
}

.android-image-link {
  text-decoration: none;
}

.android-wear {
  display: inline-block;
  width: 160px;
  margin-right: 32px;
}

  .android-wear .android-screen-image {
    width: 40%;
    z-index: 1;
  }


.android-phone {
  display: inline-block;
  width: 64px;
  margin-right: 48px;
}

  .android-phone .android-screen-image {
    width: 100%;
    z-index: 1;
  }


.android-tablet {
  display: inline-block;
  width: 110px;
  margin-right: 64px;
}

  .android-tablet .android-screen-image {
    width: 100%;
    z-index: 1;
  }

  .android-tablet .android-link {
    display: block;
    z-index: 2;
  }


.android-tv {
  display: inline-block;
  width: 300px;
  margin-right: 80px;
}

  .android-tv .android-screen-image {
    width: 100%;
    z-index: 1;
  }


.android-auto {
  display: inline-block;
  width: 300px;
  overflow: hidden;
}

  .android-auto .android-screen-image {
    display: block;
    height: 300px;
    z-index: 1;
  }


.android-wear-section {
  position: relative;
  background: url('../assets/images/desktop5.jpg') center top no-repeat;
  background-size: cover;
  height: 800px;
}

.android-wear-band {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #37474f;
}

.android-wear-band-text {
  max-width: 800px;
  margin-left: 25%;
  padding: 24px;
  text-align: left;
  color: white;
}

  .android-wear-band-text p {
    padding-top: 8px;
  }

.android-link {
  text-decoration: none;
  color: #8bc34a !important;
}

  .android-link:hover {
    color: #7cb342 !important;
  }

  .android-link .material-icons {
    position: relative;
    top: -1px;
    vertical-align: middle;
  }

.android-alt-link {
  text-decoration: none;
  color: #64ffda !important;
  font-size: 16px;
}

  .android-alt-link:hover {
    color: #00bfa5 !important;
  }

  .android-alt-link .material-icons {
    position: relative;
    top: 6px;
  }

.android-customized-section {
  text-align: center;
}

.android-customized-section-text {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 16px 0 16px;
}

  .android-customized-section-text p {
    padding-top: 16px;
  }

.android-customized-section-image {
  background: url('../assets/images/devices.jpg') center top no-repeat;
  background-size: cover;
  height: 400px;
}

.android-more-section {
  padding: 80px 0;
  max-width: 1044px;
  margin-left: auto;
  margin-right: auto;
}

  .android-more-section .android-section-title {
    margin-left: 12px;
    padding-bottom: 24px;
  }

.android-card-container {
}

  .android-card-container .mdl-card__media {
    overflow: hidden;
    background: transparent;
  }

    .android-card-container .mdl-card__media img {
      width: 100%;
    }

  .android-card-container .mdl-card__title {
    background: transparent;
    height: auto;
  }

  .android-card-container .mdl-card__title-text {
    color: black;
    height: auto;
  }

  .android-card-container .mdl-card__supporting-text {
    height: auto;
    color: black;
    padding-bottom: 56px;
  }

  .android-card-container .mdl-card__actions {
    position: absolute;
    bottom: 0;
  }

  .android-card-container .mdl-card__actions a {
    border-top: none;
    font-size: 16px;
  }


</style>
