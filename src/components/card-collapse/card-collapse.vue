<template>
<div >

  <b-card
  no-body
  class="bCardClass"
  >

      <b-card-header >
      <div class="row" >
              <div class="col-1 imageCol" @click="test()" >
                  <b-avatar  variant="info" src="https://placekitten.com/300/300" size="3rem"></b-avatar>
                  
              </div>
              <div class="col-9" @click="test()"  >
                  <div class="row emailRow">
                      <b-card-text> <strong>Lucas KOUAMI</strong>  'lucaskouami@gmail.com'</b-card-text>
                  </div>
                  <div class="row mailContentRow"  >
                      <b-card-text>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.  </b-card-text>
                  </div>
              </div>
              <div class="col-2"  >
                  <div class="row iconsRow" >
                      <div class="col-2 justify-content-start d-flex">
                          <b-icon-arrow90deg-left> </b-icon-arrow90deg-left>
                      </div>
                      <div class="col-2 justify-content-start d-flex">
                          <b-icon-arrow90deg-right> </b-icon-arrow90deg-right>
                      </div>
                      <div class="col-2 justify-content-start d-flex">
                          <b-icon-printer-fill></b-icon-printer-fill>
                      </div>
                      
                  </div>
                  <div class="row datePriorityRow">
                      <b-card-text class="mb-0">Ven. 09 Jui. 2021</b-card-text>
                      <b-card-text class="mb-0">Important</b-card-text>
                  </div>
              </div>
          </div>
    </b-card-header>
         <b-collapse id="accordion-1" visible:false accordion="my-accordion" role="tabpanel">
      <b-card-body>
      hello world
      </b-card-body>
         </b-collapse>
  </b-card>

  
</div>

</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CardCollapse',
  props: {
  },
  data() {
      return {
          
      }
    },
    methods: {
     test(){
         this.$root.$emit('bv::toggle::collapse', 'accordion-1')
     }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./card-collapse.scss" lang="scss" scoped />