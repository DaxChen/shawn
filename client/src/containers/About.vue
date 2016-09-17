<template>
<div class="mdl-grid about-max-width">
  <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
    <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">About</h2>
    </div>
    <div class="mdl-card__media">
      <img class="article-image" src="../assets/images/about-header.jpg" border="0" alt="">
    </div>

    <div class="mdl-grid about-copy">
      <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">[CHEE-AH-MOH]</h3>
      <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
        <p>
          Chiammo is a comparison tool meant for students looking to save money! As a former college student, I tried avoiding purchasing books, especially when I barely had enough money to spend on myself. Lucky for you, I love to find the best price.
        </p>
        <p>
          My mission is to save you time and money searching for the best prices so that you spend less money on textbooks and more on top ramen or beer; Whichever you prefer🙂
        </p>
        <p>
          All you need to do is click  on &#8216;BOOK REQUEST&#8217; to begin your price comparison.
        </p>
        <p><a v-link="{ path: '/request' }">LET&#8217;S GET STARTED!</a></p>
        <p>&nbsp;</p>
      </div>

      <!-- <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Irure mollit est sit labore</h3> -->

      <!-- <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding "> -->
      <!--   <p> -->
      <!--       Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure. -->
      <!--   </p> -->
      <!-- </div> -->
    </div>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style>
img.article-image {
  width: 100%;
  height: auto;
}

.about-max-width {
  max-width: 900px;
  margin: auto;
}

.about-copy {
  max-width: 700px;
}
</style>
