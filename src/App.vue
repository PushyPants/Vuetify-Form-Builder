<template>
  <v-app>
    <v-main>
      <playground></playground>
    </v-main>
  </v-app>
</template>

<script>
import Playground from "./components/Playground";

export default {
  name: "App",
  components: {
    Playground,
  },
};
</script>

