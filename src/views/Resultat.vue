<template>
  <div>
    <b-card v-if="all == null" class="mt-3" header="Mes Résultats">
      <div v-for="(questions,index) in questionnaires" :key="index">
        <b-button @click="visible[index-1] = !visible[index-1]" variant="primary">Afficher test du {{questions.date}}</b-button>
        <b-collapse v-model="visible[index-1]">
          <Result  :date="questions.date" :questions="questions"></Result>
        </b-collapse>
      </div>
    </b-card>
    <b-card v-if="all == true" class="mt-3" header="Tout les résultats">
      
      <div v-for="(questions,index) in questionnaires" :key="index">
        <b-button @click="visible[index-1] = !visible[index-1]" variant="primary">Afficher test du {{questions.date}} par {{questions.user.firstname}} {{questions.user.lastname}} ({{questions.user.company}})}}</b-button>
        <b-collapse v-model="visible[index-1]">
          <Result  :date="questions.date" :questions="questions"></Result>
        </b-collapse>
      </div>
    </b-card>
  </div>
</template>

<script>
  import Result from '../components/Result.vue'
  export default {
    props:{
      all:null
    },
    data: function () {
      return {
        user: null,
        questionnaires:[],
        visible:[]
      }
    },
    components: {
      Result
    },
    mounted() {
      try {
        this.user = JSON.parse(sessionStorage.getItem("currentUser"))
      } catch (e) {
        this.$router.push("/")
      }
      try{
         this.questionnaires = JSON.parse(localStorage.getItem("results"))
         if(this.all === null){
          this.questionnaires = this.questionnaires.filter((q) => {
            //eslint-disable-next-line
            console.log(q.user.firstname)
            return (q.user.firstname===this.user.firstname)&&(q.user.lastname===this.user.lastname)&&(q.user.company===this.user.company)
          })
         }
      }catch(e){
        this.questionnaires = []
      }
      this.questionnaires.map(() => {
        this.visible.push(false)
      })
    }
  }
</script>