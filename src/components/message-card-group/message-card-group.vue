<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <b-card no-body class="messageCardGroupContainer">
          <b-card-header>
            <div class="row">
              <div class="col-auto cardGroupHeaderImage">
                <b-avatar
                  class="cardGroupAvatar"
                  variant="info"
                  src="https://placekitten.com/300/300"
                  size="3rem"
                ></b-avatar>
              </div>
              <div class="col-auto d-flex align-items-center">
                <!-- <div style="background-color: blue; height:25px; width: 2500px" class=" "> -->
                <!-- <p style="background-color: blue; vertical-align: middle;"> Entête du composant (Objet du message)</p> -->
                <b-card-text class="cardGroupHeaderObject">
                <span > Entête du composant (Objet du message) </span>
                </b-card-text>
                <!-- </div> -->
              </div>
            </div>
          </b-card-header>
        </b-card>
      </div>
    </div>
    <div class="row messageCardContainer">
      <message-card />
      <message-card />
      <message-card />
      <message-card />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import MessageCard from "../message-card/message-card.vue";
export default Vue.extend({
  name: "MessageCardGroup",

  components: {
    MessageCard,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style src="./message-card-group.scss" lang="scss" scoped />
