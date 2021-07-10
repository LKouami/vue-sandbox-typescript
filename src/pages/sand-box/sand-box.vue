<template>
  <div style="background-color: beige">
    <br>
    <message-card-group/>
    <br>
  </div>
</template>
<script lang="ts">
import MessageCardGroup from "../../components/message-card-group/message-card-group.vue";
import Vue from "vue";
export default Vue.extend({
  name: "SandBox",

  components: {
    MessageCardGroup
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
