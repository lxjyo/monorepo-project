<template>
  <vue-button>default</vue-button>
  <vue-button type="primary" @click="onClick('primary')">primary</vue-button>
  <vue-button type="success">success</vue-button>
  <vue-button type="warning">warning</vue-button>
  <vue-button type="danger">danger</vue-button>
  <vue-button type="info">info</vue-button>

  <vue-button type="primary" ghost>primary</vue-button>
  <vue-button type="success" ghost>success</vue-button>
  <vue-button type="warning" ghost>warning</vue-button>
  <vue-button type="danger" ghost>danger</vue-button>
  <vue-button type="info" ghost>info</vue-button>

  <vue-button type="primary" ghost round>primary</vue-button>
  <vue-button type="success" ghost round>success</vue-button>
  <vue-button type="warning" ghost round>warning</vue-button>
  <vue-button type="danger" ghost round icon="address">danger</vue-button>
  <vue-button type="info" ghost round icon="accessibility">info</vue-button>

  <vue-button type="primary" ghost round icon="access-levels"
    >primary</vue-button
  >

  <vue-button type="primary" disabled>primary</vue-button>
  <vue-button type="success" disabled>success</vue-button>
  <vue-button type="warning" disabled>warning</vue-button>
  <vue-button type="danger" disabled>danger</vue-button>
  <vue-button type="info" disabled>info</vue-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  methods: {
    onClick(type: string) {
      console.log(type);
    },
  },
});
</script>
