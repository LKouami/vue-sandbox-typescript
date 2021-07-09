<template>
  <div style="background-color: beige">
    <br>
    <card-collapse/>
    <br>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
 import CardCollapse from "../../components/card-collapse/card-collapse.vue";
export default Vue.extend({
  name: "SandBox",

  components: {
    CardCollapse
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
