<template>
  <v-card
    class="mx-auto my-12 picture-card"
    max-width="374"
    
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="picture.url"
    ></v-img>

    <v-card-title>Picture id: {{picture.id}}</v-card-title>
    <div class='card-overlay'>
         <router-link
         :to="{name:'Picture', params: {id: picture.id}}"
         class="card-link">
        Подробнее
     </router-link>
    </div>
   <v-divider class="mx-4"></v-divider>
</v-card>
  
</template>

<script>

    export default {
        name: 'PictureCard',
        props: {
            picture: Object
        }
    }
</script>

<style scoped>
.picture-card {
    margin: 10px;
}

.picture-card-img {
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 1;
    /* height: 200px; */
}
.card-link {
    position: relative;
    z-index: 10;
    visibility: hidden;
    text-align: center;
    padding: 20px;
    border: 3px solid lightgrey;
    background:rgba(255, 255, 255, .9);
    text-decoration: none;
    color: black;
    font-weight: bold;
    transform-style: .3s;
    font-size: 2rem;
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 0%;
    background:rgba(255, 255, 255, .9);
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.picture-card:hover .card-overlay {
    width: 100%;
    height: 100%;
}
.picture-card:hover .card-link {
    z-index: 10;
    visibility: visible;
}

</style>