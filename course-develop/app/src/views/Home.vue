<template>
  <v-container fluid>

    <!-- Nosso primeiro componente -->
    <BeerList />

  </v-container>
</template>

<script>
// Importação do componente
import BeerList from "../components/BeerList.vue";

export default {
  // Registro do componente
  components: {
    BeerList
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
