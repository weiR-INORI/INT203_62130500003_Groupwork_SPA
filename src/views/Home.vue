<template>
  <div class="homep">
    <img class="inori" src="../assets/inori.jpg">
    <div class="head">
    <p>EGOIST 10 Year Anniversary</p>    
    <span>Encouragement Form</span>    
    </div>

    <form @submit.prevent="submitForm">
      <div class="body">                        
          <label>From Fans:</label>
            <input type="text"
                     id="submitform"
                     v-model="form"
                     @blur="validateForm"
                      class="h-12 w-60 rounded bg-gray-200">
            
                <p v-if="invalidForm" class="text-lightpink">
                  <b>Please write something!!!</b>            
                </p>                           
      </div>   
      <button class="submitbutton">
        Submit
      </button>                      
    </form>
    <div class="showResult">
      <ul v-for="encourage in encourageResults" :key="encourage.id">
       <li>
         <p>{{ encourage.data }}</p>
       </li>
      </ul>
    </div>     
  </div>
   
</template>

<script>
  
  export default {

    data() {
      return {
        form: '',        
        invalidForm: false,
        encourageResults: [],
        url:'http://localhost:4000/encourageResults'
      }
    },

  methods:{
    submitForm() {
      this.invalidForm = this.form === '' ? true : false     
      
      console.log(`form value: ${this.form}`)

      if(this.form !== ''){
        this.encourageResults.push({
          data: this.form
        })
      }
      this.form = ''
      console.log(`data: ${this.encourageResults[0].name}`)
    },
    
    validateForm() {
        this.invalidForm = this.form === '' ? true : false
    },

    addForm(newForm){

    }
  }
}
</script>
