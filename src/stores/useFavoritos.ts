
import { characters, type Character } from "@/paginae/simpsons/data"
import { defineStore } from "pinia"
import { computed, ref } from "vue"



export const useFavoritosStore = defineStore("favorito", () => {

    const favoritos = ref<Character[]>([
        characters.find(character => character.id === 0)!,
        characters.find(character => character.id === 4)!,
        characters.find(character => character.id === 6)!,
        characters.find(character => character.id === 7)!,
        characters.find(character => character.id === 9)!,
    
    ])

    return {
        favoritos,
        totalFavoritos: computed(() => favoritos.value.length),
    }
})