<template>
  <v-card class="form-preview-card"> asdf </v-card>
</template>

<script>
export default {
  props: {
    jsonSchema: {
      type: Object,
      default: () => {},
    },
    uiSchema: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
};
</script>

<style>
.form-preview-card {
  min-height: 90vh;
}
</style>