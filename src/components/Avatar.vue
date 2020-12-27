<template>
  <div class="Avatar column">
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
    <h1 class="Titles">About</h1>
      <p id="about-text">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    <h1 class="Titles">Social media</h1>
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
  }

  .Titles {
    font-size: 150%;
    font-style: oblique;
    font-weight: bold;
    margin-top: 5%;
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
  }

</style>
