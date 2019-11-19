<template>
  <div>

    <b-card v-if="all === undefined" class="mt-3" header="Mes Résultats">
      <div v-for="(questions,index) in questionnaires" :key="index">
        <b-button @click="inverseVisibility(-index-1)" variant="primary" class="mb-1">
          Afficher test du {{questions.date}}
        </b-button>
        <b-collapse v-model="visible[-index-1]">
          <Result  :date="questions.date" :questions="questions"></Result>
        </b-collapse>
      </div>
    </b-card>

    <b-card v-if="all === true" class="mt-3" header="Tout les résultats">
      <div v-for="(questions,index) in questionnaires" :key="index">
        <b-button @click="inverseVisibility(-index-1)" variant="primary" class="mb-1">
          Afficher test du {{questions.date}} par {{questions.user.firstname}} {{questions.user.lastname}} ({{questions.user.company}})
        </b-button>
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
    //l'affichage des résultats individuels ou de tous dépendrant de la valeur de la variable de all
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
      //on récupère l'utilisateur courant
      //si personne n'est connecté on va sur la page de connexion
      try {
        this.user = JSON.parse(sessionStorage.getItem("currentUser"))
      } catch (e) {
        this.$router.push("/")
      }
      //on récupère les résultats
      try{
         this.questionnaires = JSON.parse(localStorage.getItem("results"))
         //si on veut afficher les résultats individuels du compte courant on va filtrer les résultats
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
      // fonction qui permet de cacher ou d'afficher un des résultats
      inverseVisibility(index){
        this.visible[index] = !this.visible[index]
      }
    }
  }
</script>