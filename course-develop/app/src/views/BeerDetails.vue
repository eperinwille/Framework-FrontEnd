<template>
  <div>
    <v-container grid-list-md>
       <BeerCard :beer="beer"/>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import BeerCard from "../components/BeerCard.vue";

export default {
   mounted() {
    axios
      .get(`https://api.punkapi.com/v2/beers/${this.$route.params.id}`)
      .then(response => (this.beer = response.data[0]));
  },

  data() {
    return {
        beer: null,
    }
  },

  components: {
      BeerCard
  }
};
</script>
