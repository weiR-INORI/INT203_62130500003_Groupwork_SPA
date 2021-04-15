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
                      class="mt-4 h-12 w-80 rounded bg-gray-200">
            
                <p v-if="invalidForm" class="text-lightpink">
                  <b>Please write something!!!</b>            
                </p>                           
      </div>   
      <button class="submitbutton">
        Submit
      </button>                      
    </form>
    
    <li-ne></li-ne>

    <div class="showResult">
      <ul v-for="encourage in encourageResults" :key="encourage.id">
       <li>
        <div class="">
         <p>{{ encourage.data }}</p>
         
          <button @click="editEncourageResults(encourage)" class="editIcon">
          <img src="../assets/pencil.png"/>
          </button>

          <button @click="deleteEncourageResults(encourage.id)" class="deleteIcon">
          <img src="../assets/xmark.png"/>
          </button>
        </div>
       </li>
      </ul>
    </div>

  </div>
   
</template>

<script>
  
  export default {
    name: 'App',
    components: {
    
  },

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
        //this.encourageResults.push({
        //data: this.form
        //})

        //Post-2
        this.addForm({
          data: this.form
        })
      }
      this.form = ''
      //console.log(`data: ${this.encourageResults[0].name}`)
    },
    
    validateForm() {
        this.invalidForm = this.form === '' ? true : false
    },

    //Post
    async addForm(newForm){
      try {
      const res = await fetch(this.url,{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify({
          data: newForm.data
        })
      })
      const resdata = await res.json()
      this.encourageResults=[...this.encourageResults, resdata]
      }
        catch(error){
        console.log(`addForm False!!! ${error}`)      
        }
    },

    //Get
    async getencourageResults(){
      try {
      const res = await fetch(this.url)
      const resdata = await res.json()
      return resdata
      }
      catch(error){
        console.log(`getencourageResults False!!! ${error}`)    
      }
    },

    //Delete
    async deleteEncourageResults(deleteForm) {
      try {
        await fetch(`${this.url}/${deleteForm}`,{
          method: 'DELETE'
        })
        this.encourageResults=this.encourageResults.filter(encourage=>encourage.id!==deleteForm)
      }
      catch(error){
        console.log(`deleteEncourageResults False!!! ${error}`)   
      }
    }
  },

  //Get-2
  async created(){
    this.encourageResults = await this.getencourageResults()
  }
}
</script>
