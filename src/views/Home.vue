<template>
  <div class="homep">
    <img class="inori" src="../assets/inori.jpg">
    <div class="head">
    <p>EGOIST 10 Year Anniversary</p>    
    <p>Encouragement Form</p>    
    </div>

    <form @submit.prevent="submitForm">
      <div class="body">                        
          <label>From Fans:</label>
            <input type="text"
                     id="submitform"
                     v-model="form"
                     @blur="validateForm"
                      class="mt-4 h-12 w-80 rounded bg-gray-200">
            
                <p v-if="invalidForm" class="text-lightpink pt-4">
                  <b>Please write something!!!</b>            
                </p>
                                           
      </div>   
      <button class="submitbutton" @click="validForm">
        Submit
      </button>                      
    </form>
    
    <li-ne></li-ne>

    <div class="pt-4 font-serif">Other Fans Say:</div>

    <div class="showResult">
      <ul v-for="encourage in encourageResults" :key="encourage.id">
       <li>
        
         <p class="font-serif">{{ encourage.data }}</p>
         
          <button @click="showEncourageResults(encourage)" class="editIcon">
          <img src="../assets/pencil.png"/>
          </button>

          <button @click="deleteEncourageResults(encourage.id)" class="deleteIcon">
          <img src="../assets/xmark.png"/>
          </button>
        
       </li>
      </ul>
    </div>

    <li-ne class="pb-4"></li-ne>

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
        editForm: false,
        editEncourageId: '',
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

        //Edit-2
        if(this.editForm){
          this.editEncourageResults({
            id:this.editEncourageId,
            data: this.form
          })
        }
        else{
          //Post-2
          this.addForm({
          data: this.form
        })
        }
        
      }
      this.form = ''
      //console.log(`data: ${this.encourageResults[0].name}`)
    },
    
    validateForm() {
        this.invalidForm = this.form === '' ? true : false        
    },

    validForm() {
      if (this.invalidForm){
      return
      }
      alert("Submit Complete")
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
        this.encourageResults=this.encourageResults.filter(encourage=>encourage.id !== deleteForm)
      }
      catch(error){
        console.log(`deleteEncourageResults False!!! ${error}`)   
      }
    },

    //Edit
    showEncourageResults(beforeForm){
      this.editForm = true
      this.editEncourageId=beforeForm.id
      this.form=beforeForm.data
    },

    async editEncourageResults(afterForm){
      try{
        const res = await fetch(`${this.url}/${afterForm.id}`,{
          method: 'PUT',
          headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify({
          data: afterForm.data
        })
      })
      const resdata = await res.json()
      this.encourageResults=this.encourageResults.map(encourage => encourage.id === afterForm.id
      ? {...encourage, data: resdata.data} : encourage)
      this.editForm = false,
      this.editEncourageId = '',
      this.form = ''
      }
      catch(error){
        console.log(`editEncourageResults False!!! ${error}`) 
      }
    }
  },

  //Get-2
  async created(){
    this.encourageResults = await this.getencourageResults()
  }
}
</script>
