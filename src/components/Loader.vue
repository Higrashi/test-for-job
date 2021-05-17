<template>
    <div class='loaderOverlay'>
        <div class='loaderContainer'></div>
    </div> 
</template>

<script>
export default {
    name: 'Loader'
}
</script>

<style scoped>
.loaderOverlay {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loaderContainer {
    display: inline-block;
    width: 70px;
    height: 70px;
    border: 3px solid rgba(195, 195, 195, 0.6);
    border: 5px solid #20b2aa;
    border-radius: 50%;
    border-top-color: #636767;
    border-top-color: #16736E;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
  }
</style>