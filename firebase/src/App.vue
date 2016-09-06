<template>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

  <!-- HEADER START -->
  <div class="android-header mdl-layout__header mdl-layout__header--waterfall">
    <div class="mdl-layout__header-row">
      <span class="android-title mdl-layout-title">
        <!-- <img class="android-logo-image" src="../assets/images/android-logo.png"> -->
        <a class="android-link" v-link="{ path: '/' }"><h3 class="android-logo-image" style="color:#767777;font-weight:600">Chiammo</h3></a>
      </span>
      <!-- Add spacer, to align navigation to the right in desktop -->
      <div class="android-header-spacer mdl-layout-spacer"></div>
      <!-- <div class="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="search-field">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" id="search-field">
        </div>
      </div> -->
      <!-- Navigation -->
      <div class="android-navigation-container">
        <nav class="android-navigation mdl-navigation">
          <a class="mdl-navigation__link mdl-typography--text-uppercase" v-link="{ name: 'about' }">About</a>
          <a class="mdl-navigation__link mdl-typography--text-uppercase" v-link="{ name: 'request' }">Book Request</a>
          <a class="mdl-navigation__link mdl-typography--text-uppercase" v-link="{ name: 'meet-the-squad' }">Meet The Squad</a>
        </nav>
      </div>
      <span class="android-mobile-title mdl-layout-title">
        <!-- <img class="android-logo-image" src="../assets/images/android-logo.png"> -->
        <a class="android-link" v-link="{ path: '/' }"><h3 class="android-logo-image" style="color:#767777;font-weight:600;margin:0">Chiammo</h3></a>
      </span>
      <button class="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
        <i class="material-icons">more_vert</i>
      </button>
      <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
        <li class="mdl-menu__item">5.0 Lollipop</li>
        <li class="mdl-menu__item">4.4 KitKat</li>
        <li disabled class="mdl-menu__item">4.3 Jelly Bean</li>
        <li class="mdl-menu__item">Android History</li>
      </ul>
    </div>
  </div>

  <div class="android-drawer mdl-layout__drawer">
    <span class="mdl-layout-title">
      <!-- <img class="android-logo-image" src="../assets/images/android-logo-white.png"> -->
      <a class="android-link" v-link="{ path: '/' }"><h3 class="android-logo-image" style="color:#fff;font-weight:600">Chiammo</h3></a>
    </span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" v-link="{ name: 'about' }">About</a>
      <a class="mdl-navigation__link" v-link="{ name: 'request' }">Book Request</a>
      <a class="mdl-navigation__link" v-link="{ name: 'meet-the-squad' }">Meet The Squad</a>
      <!-- <div class="android-drawer-separator"></div>
      <span class="mdl-navigation__link" href="">Versions</span>
      <a class="mdl-navigation__link" href="">Lollipop 5.0</a>
      <a class="mdl-navigation__link" href="">KitKat 4.4</a>
      <a class="mdl-navigation__link" href="">Jelly Bean 4.3</a>
      <a class="mdl-navigation__link" href="">Android history</a>
      <div class="android-drawer-separator"></div>
      <span class="mdl-navigation__link" href="">Resources</span>
      <a class="mdl-navigation__link" href="">Official blog</a>
      <a class="mdl-navigation__link" href="">Android on Google+</a>
      <a class="mdl-navigation__link" href="">Android on Twitter</a>
      <div class="android-drawer-separator"></div>
      <span class="mdl-navigation__link" href="">For developers</span>
      <a class="mdl-navigation__link" href="">App developer resources</a>
      <a class="mdl-navigation__link" href="">Android Open Source Project</a>
      <a class="mdl-navigation__link" href="">Android SDK</a> -->
    </nav>
  </div>

  <div class="android-content mdl-layout__content">
    <a name="top"></a>

    <router-view></router-view>

    <footer class="android-footer mdl-mega-footer">
      <div class="mdl-mega-footer--top-section">
        <div class="mdl-mega-footer--left-section">
          <button class="mdl-mega-footer--social-btn"></button>
          &nbsp;
          <button class="mdl-mega-footer--social-btn"></button>
          &nbsp;
          <button class="mdl-mega-footer--social-btn"></button>
        </div>
        <div class="mdl-mega-footer--right-section">
          <a class="mdl-typography--font-light" href="#top">
            Back to Top
            <i class="material-icons">expand_less</i>
          </a>
        </div>
      </div>

      <div class="mdl-mega-footer--middle-section">
        <p class="mdl-typography--font-light"> © Copyright 2016 Chiammo, All Rights Reserved.</p>
      </div>

      <div class="mdl-mega-footer--bottom-section">
        <a class="android-link android-link-menu mdl-typography--font-light" id="version-dropdown">
          Versions
          <i class="material-icons">arrow_drop_up</i>
        </a>
        <ul class="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="version-dropdown">
          <li class="mdl-menu__item">5.0 Lollipop</li>
          <li class="mdl-menu__item">4.4 KitKat</li>
          <li class="mdl-menu__item">4.3 Jelly Bean</li>
          <li class="mdl-menu__item">Android History</li>
        </ul>
        <a class="android-link android-link-menu mdl-typography--font-light" id="developers-dropdown">
          For Developers
          <i class="material-icons">arrow_drop_up</i>
        </a>
        <ul class="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="developers-dropdown">
          <li class="mdl-menu__item">App developer resources</li>
          <li class="mdl-menu__item">Android Open Source Project</li>
          <li class="mdl-menu__item">Android SDK</li>
          <li class="mdl-menu__item">Android for Work</li>
        </ul>
        <a class="android-link mdl-typography--font-light" href="">Blog</a>
        <a class="android-link mdl-typography--font-light" href="">Privacy Policy</a>
      </div>
    </footer>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
::-moz-selection {
  background-color: #6ab344;
  color: #fff;
}

::selection {
  background-color: #6ab344;
  color: #fff;
}

.android-search-box .mdl-textfield__input {
  color: rgba(0, 0, 0, 0.87);
}

.android-header .mdl-menu__container {
  z-index: 50;
  margin: 0 !important;
}


.mdl-textfield--expandable {
  width: auto;
}

.android-fab {
  position: absolute;
  right: 20%;
  bottom: -26px;
  z-index: 3;
  background: #64ffda !important;
  color: black !important;
}

.android-mobile-title {
  display: none !important;
}


.android-logo-image {
  height: 28px;
  width: 140px;
}


.android-header {
  overflow: visible;
  background-color: white;
}

  .android-header .material-icons {
    color: #767777 !important;
  }

  .android-header .mdl-layout__drawer-button {
    background: transparent;
    color: #767777;
  }

  .android-header .mdl-navigation__link {
    color: #757575;
    font-weight: 700;
    font-size: 14px;
  }

  .android-navigation-container {
    /* Simple hack to make the overflow happen to the left instead... */
    direction: rtl;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
    width: 500px;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .android-navigation {
    /* ... and now make sure the content is actually LTR */
    direction: ltr;
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    width: 800px;
  }

  .android-search-box.is-focused + .android-navigation-container {
    opacity: 0;
    width: 100px;
  }


  .android-navigation .mdl-navigation__link {
    display: inline-block;
    height: 60px;
    line-height: 68px;
    background-color: transparent !important;
    border-bottom: 4px solid transparent;
  }

    .android-navigation .mdl-navigation__link:hover {
      border-bottom: 4px solid #8bc34a;
    }

    .android-navigation .mdl-navigation__link.v-link-active {
      border-bottom: 4px solid #ff4081;
    }

  .android-search-box {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2;
    margin-left: 16px;
    margin-right: 16px;
  }

  .android-more-button {
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3;
  }


.android-drawer {
  border-right: none;
}

  .android-drawer-separator {
    height: 1px;
    background-color: #dcdcdc;
    margin: 8px 0;
  }

  .android-drawer .mdl-navigation__link.mdl-navigation__link {
    font-size: 14px;
    color: #757575;
  }

  .android-drawer span.mdl-navigation__link.mdl-navigation__link {
    color: #8bc34a;
  }

  .android-drawer .mdl-layout-title {
    position: relative;
    background: #6ab344;
    height: 160px;
  }

    .android-drawer .android-logo-image {
      position: absolute;
      bottom: 16px;
    }

.android-footer {
  background-color: #fafafa;
  position: relative;
}

  .android-footer a:hover {
    color: #8bc34a;
  }

  .android-footer .mdl-mega-footer--top-section::after {
    border-bottom: none;
  }

  .android-footer .mdl-mega-footer--middle-section::after {
    border-bottom: none;
  }

  .android-footer .mdl-mega-footer--bottom-section {
    position: relative;
  }

  .android-footer .mdl-mega-footer--bottom-section a {
    margin-right: 2em;
  }

  .android-footer .mdl-mega-footer--right-section a .material-icons {
    position: relative;
    top: 6px;
  }


.android-link-menu:hover {
  cursor: pointer;
}


/**** Mobile layout ****/
@media (max-width: 900px) {
  .android-navigation-container {
    display: none;
  }

  .android-title {
    display: none !important;
  }

  .android-mobile-title {
    display: block !important;
    position: absolute;
    left: calc(50% - 70px);
    top: 12px;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* WebViews in iOS 9 break the "~" operator, and WebViews in OS X 10.10 break
     consecutive "+" operators in some cases. Therefore, we need to use both
     here to cover all the bases. */
  .android.android-search-box.is-focused ~ .android-mobile-title,
  .android-search-box.is-focused + .android-navigation-container + .android-mobile-title {
    opacity: 0;
  }

  .android-more-button {
    display: none;
  }
z
  .android-search-box.is-focused {
    width: calc(100% - 48px);
  }

  .android-search-box .mdl-textfield__expandable-holder {
    width: 100%;
  }

  .android-be-together-section {
    height: 350px;
  }

  .android-slogan {
    font-size: 26px;
    margin: 0 16px;
    padding-top: 24px;
  }

  .android-sub-slogan {
    font-size: 16px;
    margin: 0 16px;
    padding-top: 8px;
  }

  .android-create-character {
    padding-top: 200px;
    font-size: 16px;
  }

  .android-create-character img {
    height: 12px;
  }

  .android-fab {
    display: none;
  }

  .android-wear-band-text {
    margin-left: 0;
    padding: 16px;
  }

  .android-footer .mdl-mega-footer--bottom-section {
    display: none;
  }
}
</style>
