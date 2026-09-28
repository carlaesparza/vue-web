<script setup lang="ts">
import { House } from '@lucide/vue';

</script>



<template>
    <div class="batman">
        <RouterLink to="/">
            <House class="icon-home" />
        </RouterLink>

        <header class="titulus">
            <h1>Batman</h1>
            <div id="titulus-batman" class="titulus-img"></div>
            <p>Él puede tomar la decisión que nadie más puede, la decisión correcta</p>
        </header>
    
    </div>
    
    
</template>

<style scoped>

.batman {
    font-family: Arial, Helvetica, sans-serif;
}



.icon-home {
    width: 3rem;
    height: 3rem;
    color: slateblue;
}

.icon-home:hover {
    color: white;
    background-color: slateblue;


}

.titulus-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../imagines/batman/batman.jpg");
  min-height: 100vh;
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none; 
  font-family: batman;
}

.titulus > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events:none;
  font-family: batman;
  display: none;
}

@media (min-width: 768px) {
    .titulus > p {
        display: block;
    }
}


</style>