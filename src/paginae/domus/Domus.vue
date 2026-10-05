<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>


<template>
    <div class="bg-domus-navy h-screen w-screen text-white font-sans text-center flex flex-col items-center justify-center gap-12 fixed overflow-hidden">

        <img class="absolute opacity-20" src="/imagines/tonitrui.png"/>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-20 transition-all z-10">
            <span class="text-domus-cyan">Diseño</span> Web y 
            <br> Apps <span class="text-domus-cyan">interactivas</span>
        </h1>

        <p class="text-lg md:text-2xl transition-all">
            Aprendiendo a crear aplicaciones Web
        </p>
        
        <div class="z-10">
            <Button variant="domus" class="mr-2">
                <RouterLink to="/indecision">Sí o no</RouterLink>
            </Button>
            <Button variant="domus" class="mr-2">
                <RouterLink to="/batman">Batman</RouterLink>
            </Button>
            <Button variant="domus" class="mr-2">
                <RouterLink to="/simpsons">Simpsons</RouterLink>
            </Button>
            <Button variant="domus" class="mr-2">
                <a href="https://www.upv.es">UPV</a>
            </Button>
        </div>
    </div>
</template>

<style scoped>


</style>
