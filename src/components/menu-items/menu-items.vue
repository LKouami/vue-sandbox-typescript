<template>
    <b-list-group-item
      href="#"
      class="d-flex align-items-center p-2"
    >
      <b-row class="m-0 w-100 align-items-center justify-content-between">
        <b-col class="d-flex" md="auto" cols="auto" > & </b-col>
        <b-col class="d-flex p-0" align-self="start" md="" cols="auto" 
          >Cras justo odio</b-col
        >
        <b-col class="d-flex" md="auto" cols="auto" 
          ><b-badge variant="primary" pill>1567</b-badge></b-col
        >
      </b-row>
    </b-list-group-item>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MenuItems",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./menu-items.scss" lang="scss" scoped />