<template>
  <div>

    <b-card v-if="all === undefined" class="mt-3" header="Mes Résultats">
      <div v-for="(questions,index) in questionnaires" :key="index">
        <b-button @click="inverseVisibility(-index-1)" variant="primary" class="mb-1">Afficher test du {{questions.date}}</b-button>
        <b-collapse v-model="visible[-index-1]">
          <Result  :date="questions.date" :questions="questions"></Result>
        </b-collapse>
      </div>
    </b-card>

    <b-card v-if="all === true" class="mt-3" header="Tout les résultats">
      <div v-for="(questions,index) in questionnaires" :key="index">
        <b-button @click="inverseVisibility(-index-1)" variant="primary" class="mb-1">Afficher test du {{questions.date}} par {{questions.user.firstname}} {{questions.user.lastname}} ({{questions.user.company}})</b-button>
        <b-collapse v-model="visible[-index-1]">
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
         if(this.all === undefined){
          this.questionnaires = this.questionnaires.filter((q) => {
            return (q.user.firstname===this.user.firstname)&&(q.user.lastname===this.user.lastname)&&(q.user.company===this.user.company)
          })
         }
      }catch(e){
        this.questionnaires = []
      }
    },
    methods:{
      inverseVisibility(index){
        this.visible[index] = !this.visible[index]
      }
    }
  }
</script>