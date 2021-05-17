<template>
<div class="picture-page">
    
  <v-card
    class="mx-auto"
    color="ffff"
    max-width="700"
  >
    <v-card-title>
   
      <span class="title font-weight-light">Обо мне</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      Привет! Меня зовут Анатолий. Чуть более года назад я увлекся веб-разработкий и всем, что с ней связанно, сделал несколько своих проектов с которыми можно ознакомитья в моем портфолио. В данный момент, я ищу работу в позиции Junior разработчика. <a href="http://www.anatolyalbov.ru/" _blank>Мое портфолио</a>
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://res.cloudinary.com/dmq5fxzth/image/upload/v1621256444/avatar_wwdite.jpg"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Анатолий Альбов</v-list-item-title>
        </v-list-item-content>

        
      </v-list-item>
    </v-card-actions>
  </v-card>
 
  
  
</div>
    
   
</template>

<style scoped>
.picture-page{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.picture-info-card {
    text-align: start;
    
}
.card-info-title {
    font-weight: bold;
    font-size: 1rem;
}

@media screen and (max-width:500xp) {

}
</style>