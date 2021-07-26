<template>
  <b-list-group style="">
    <menu-items/>
    <menu-items/>
    <menu-items/>
    <menu-items/>
  </b-list-group>
</template>

<script lang="ts">
import Vue from "vue";
import MenuItems from '@/components/menu-items/menu-items.vue'
export default Vue.extend({
  name: "Menu",
  components: {
      MenuItems
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./menu.scss" lang="scss" scoped />