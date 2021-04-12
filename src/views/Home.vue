<template>
  <div class="homep">
    <img alt="Vue logo" src="../assets/logo.jpg">
    <p>EGOIST 10 Year Anniversary</p>
    <span>Encouragement Form</span>    
  

  <form @submit.prevent="submitForm">
    <div>                        
          <label class="text-lg leading-normal">From Fans:</label>
            <input type="text"
                     id="submitform"
                     v-model="form"
                     @blur="validateForm"
                      class="rounded bg-gray-200">
            
                <p v-if="invalidForm" class="text-lightpink">
                  <b>Please write something!!!</b>            
                </p>                           
    </div>   
    <button class="text-lightpink bg-black hover:text-opacity-80 border-lightpink">
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
        invalidForm: false,
        
        
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
