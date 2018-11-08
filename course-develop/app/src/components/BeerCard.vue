<template>
  <!-- Adicionando o componente de card -->
  <v-card>
    <!-- Atualizando para melhoria visual -->
    <v-img
      :src="beer.image_url"
      aspect-ratio="1"
      height="200px"
      contain
    ></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{beer.name}}</h3>
        <div>{{beer.tagline}}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="blue" v-on:click="addToCart(beer)">Adicionar</v-btn>
      <v-btn flat color="orange" :to="{name:'details', params:{id:beer.id}}">Detalhes</v-btn>
    </v-card-actions>
  </v-card>
</template>



<script>
import store from "@/store/cart.js";
import CartListVue from './CartList.vue';

export default {
  //Recebendo a prop beer
  props: ["beer"],
  data() {
    return {};
  },
  methods:{
    addToCart(beer) {
      store.commit("addToCart", beer);
    },
    removeToCart(beer){
      store.commit("removeToCart", beer);
    }
  }
};
</script>

