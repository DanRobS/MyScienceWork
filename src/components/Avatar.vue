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

    <p class="Titles">About</p>
      <p id="about-text" class="has-text-justified">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>

    <p class="Titles">Social media</p>
    <div class="social-media is-mobile">
      <ul>
        <li class="social-media-link">
          <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"
          :style="{ color: '#3b5998' }"/>
          <a href="https://facebook.com/" class="social-media-anchor">
            Facebook  
          </a>
        </li>
        
        <li class="social-media-link">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"
          :style="{ color: '#0e76a8' }"/>
          <a href="https://linkedin.com/" class="social-media-anchor">
            LinkedIn
          </a>
        </li>
        
        <li class="social-media-link">
          <font-awesome-icon :icon="['fab', 'twitter']" size="2x"
            :style="{ color: '#00acee' }"/>
          <a href="https://twitter.com/" class="social-media-anchor">
            Twitter
          </a>
        </li>
        
        <li class="social-media-link">
          <font-awesome-icon :icon="['fab', 'orcid']" size="2x"
            :style="{ color: '#a6ce39' }"/>
          <a href="https://orcid.org/" class="social-media-anchor">
            Orcid
          </a>
        </li>
      </ul>
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
  //border-style: solid;
  //border-color: black;
  padding-left: 1%;
  padding-right: 1%;
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

.social-media-link {
  margin-bottom: 3%;
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
  margin-bottom: 3%;
}

.social-media-anchor {
  font-size: 130%;
  color: #4965c1;
}

@media (max-width: 768px) {
  .Avatar {
    border-style: solid;
    border-color: black;
    margin-bottom: 10%;
    padding-top: 2%;
  }
  
} 

</style>