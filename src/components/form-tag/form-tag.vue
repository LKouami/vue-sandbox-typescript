<template>
  <div>
    <b-form-group label="Tagged input using dropdown" label-for="tags-with-dropdown">
      <b-form-tags id="tags-with-dropdown" v-model="value" no-outer-focus class="mb-2">
        <template v-slot="{ tags, disabled, addTag, removeTag }">
         <div class="row">
         <div class="col-auto">
<b-dropdown size="sm" boundary="viewport" dropright variant="outline-secondary" block menu-class="">
            <template #button-content>
               Destinataire
            </template>
            <b-dropdown-form @submit.stop.prevent="() => {}">
              
                <b-form-input
                  v-model="search"
                  id="tag-search-input"
                  type="search"
                  size="sm"
                  autocomplete="off"
                 ></b-form-input>
            </b-dropdown-form>
            
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button
              v-for="option in availableOptions"
              :key="option"
              @click="onOptionClick({ option, addTag })"
            >
              {{ option }}
            </b-dropdown-item-button>
            <b-dropdown-item-button style="width: 20vw">

            </b-dropdown-item-button>
            <b-dropdown-text v-if="availableOptions.length === 0">
              There are no tags available to select
            </b-dropdown-text>
          </b-dropdown>
          </div>
          <div class="col-auto justify-content-center align-items-center d-flex">
            <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>
          </div>
         </div>
          
          
        </template>
      </b-form-tags>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
        search: '',
        value: []
      }
    },
    computed: {
      criteria() {
        // Compute the search criteria
        return this.search.trim().toLowerCase()
      },
      availableOptions() {
        const criteria = this.criteria
        // Filter out already selected options
        const options = this.options.filter(opt => this.value.indexOf(opt) === -1)
        if (criteria) {
          // Show only options that match criteria
          return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1);
        }
        // Show all options available
        return options
      },
      searchDesc() {
        if (this.criteria && this.availableOptions.length === 0) {
          return 'There are no tags matching your search criteria'
        }
        return ''
      }
    },
    methods: {
      onOptionClick({ option, addTag }) {
        addTag(option)
        this.search = ''
      }
    }
  }
</script>
<style lang="scss" >
// .dropdown-menu.show {
//   display: flex;
//   /* width: 100px; */
//   flex-direction: column;
//   width: 25vw !important;
// }

// .form-control-sm {
//     height: calc(1.5em + 0.5rem + 2px);
//     padding: 0.25rem 0.5rem;
//     font-size: 0.875rem;
//     line-height: 1.5;
//     border-radius: 0.2rem;
//     width: 100% !important;
// }
</style>