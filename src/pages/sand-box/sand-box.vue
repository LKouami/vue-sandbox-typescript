<template>
  <div style="width: 400px; backgroundcolor: beige">
   <Menu/>
  </div>
</template>
<script lang="ts">
// import FormTag from "../../components/form-tag/form-tag.vue";
import Menu from "@/components/menu/menu.vue"
import Vue from "vue";
export default Vue.extend({
  name: "SandBox",

  components: {
    Menu,
  },
  data() {
    return {
   
    };
    
  },
  methods : {
  }


});
</script>

<style src="./sand-box.scss" lang="scss" scoped />
