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
                      class="w-60 rounded bg-gray-200">
            
                <p v-if="invalidForm" class="text-lightpink">
                  <b>Please write something!!!</b>            
                </p>                           
    </div>   
    <button class="submitbutton">
      Submit
    </button>                      
  </form>
</div>
</template>

<script>
  
  export default {

    data() {
      return {
        form: '',        
        invalidForm: false        
      }
    },

  methods:{
    submitform() {
      this.invalidForm = this.form === '' ? true : false      
    },
    
    validateForm() {
        this.invalidForm = this.form === '' ? true : false
    }
  }
}
</script>
