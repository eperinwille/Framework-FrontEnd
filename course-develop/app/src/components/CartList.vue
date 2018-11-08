<template>
  <v-list two-line subheader>
    <v-subheader inset>Shopping Cart</v-subheader>

    <v-list-tile
      v-for="beer in beers"
      :key="beer.id"
      avatar
       >
       
      <v-list-tile-avatar>
        <img :src="beer.image_url">
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ beer.name }}</v-list-tile-title>
        <v-list-tile-sub-title>Quantidade: {{ beer.quantity }}</v-list-tile-sub-title>
    
      </v-list-tile-content>

      <v-list-tile-action>
       <v-btn icon v-on:click="removeToCart(beer)">
         <v-icon>delete</v-icon>
  </v-btn>
      </v-list-tile-action>
    </v-list-tile>

    <v-divider inset></v-divider>


  </v-list>
</template>


<script>
import store from "@/store/cart.js";

export default {
  computed: {
    beers() {
      return store.state.beers;
    }
  },
  methods: {
    removeToCart(beer) {
      store.commit("removeToCart", beer);
    }
  }
};
</script>
