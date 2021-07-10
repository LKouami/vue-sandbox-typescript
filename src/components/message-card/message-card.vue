<template>
<div class="messageCardContainer">

  <b-card
  no-body
  no-border
  class="messageCard"
  >

      <b-card-header class="messageCardHeader" >
      <div class="row" >
              <div class="col-auto messageCardImage"  @click="openDetails()" >
                  <b-avatar  variant="info" src="https://placekitten.com/300/300" size="3rem"></b-avatar>
                  
              </div>
              <div class="col-9" @click="openDetails()"  >
                  <div class="row senderDescription">
                      <b-card-text> <strong>Lucas KOUAMI</strong>  'lucaskouami@gmail.com'</b-card-text>
                  </div>
                  <div class="row messageContent"  >
                      <b-card-text>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.  </b-card-text>
                  </div>
              </div>
              <div class="col-2"  >
                  <div class="row cardHeaderActions justify-content-end" >
                      <div class="col-2 justify-content-center d-flex" >
                          <b-icon-arrow90deg-left @click="openCollapse2()"> </b-icon-arrow90deg-left>
                      </div>
                      <div class="col-2 justify-content-center d-flex">
                          <b-icon-arrow90deg-right> </b-icon-arrow90deg-right>
                      </div>
                      <div class="col-2 justify-content-center d-flex">
                          <b-icon-printer-fill></b-icon-printer-fill>
                      </div>
                      
                  </div>
                  <div class="row messageDatePriority justify-content-end">
                      <div class="col-auto">
                        <b-card-text class="mb-0">Ven. 09 Jui. 2021 à 18h15</b-card-text>
                        <b-card-text class="mb-0">Important</b-card-text>
                      </div>
                      
                  </div>
              </div>
          </div>
    </b-card-header>
         <b-collapse class="messageDetails"  id="accordion-1" visible:false accordion="my-accordion" role="tabpanel">
      <b-card-body>
      hello world

      <b-collapse visible:false id="accordion-2">
          <compose-message> </compose-message>
      </b-collapse>
      </b-card-body>
         </b-collapse>
  </b-card>

  
</div>

</template>

<script lang="ts">
import Vue from 'vue';
import ComposeMessage from '../compose-message/compose-message.vue'
export default Vue.extend({
  name: 'MessageCard',
  components:{
      ComposeMessage
  },
  props: {
  },
  data() {
      return {
          
      }
    },
    methods: {
     openDetails(){
         this.$root.$emit('bv::toggle::collapse', 'accordion-1')
     },
     openCollapse2(){
         this.$root.$emit('bv::toggle::collapse', 'accordion-2')
     }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./message-card.scss" lang="scss" scoped />