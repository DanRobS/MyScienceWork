<template>
  <div class="Avatar container">
    <div id="Avatar-pic">
      <b-image
            src="https://picsum.photos/600/400"
            alt="A random image"
            ratio="6by4"
            :rounded="rounded"
      ></b-image>
    </div>
    <p id="name">
      Names
    </p>
    <p class="Titles">About</p>
      <p id="about-text">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>

    <p class="Titles">Social media</p>


    <div class="social-media columns is-mobile">
      <div class="column ">
        <a href="https://facebook.com/">
          <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"
          :style="{ color: '#3b5998' }"/>
        </a>
      </div>
      <div class="column">
        <a href="https://linkedin.com/">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"
            :style="{ color: '#0e76a8' }"/>
        </a>
      </div>
      <div class="column">
        <a href="https://twitter.com/">
          <font-awesome-icon :icon="['fab', 'twitter']" size="2x"
            :style="{ color: '#00acee' }"/>
        </a>
      </div>
      <div class="column">
        <a href="https://orcid.org/">
          <font-awesome-icon :icon="['fab', 'orcid']" size="2x"
            :style="{ color: '#a6ce39' }"/>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Avatar',
  components: {

  }
}
</script>


<style lang="scss">
  .Avatar {
    border-style: solid;
    border-color: black;
    padding: 1%;
  }

  .Titles {
    font-size: 150%;
    font-style: oblique;
    font-weight: bold;
    margin-bottom: 1%;
  }

  .social-media {
    padding-right: 50%;
  }

  font-awesome-icon:hover {
    color: grey;
  }

  #Avatar-pic {
    border-style: solid;
    border-color: black;
  }

  #name {
    font-size: 180%;
    font-style: normal;
    font-weight: bold;
  }

  #about-text {
    text-align: justify;
    margin-bottom: 3%;
  }

</style>
