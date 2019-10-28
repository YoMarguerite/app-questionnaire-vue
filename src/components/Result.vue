<template>
  <div v-if="questions != null">
    <h3>{{questions.score}}/{{questions.questions.length}}</h3>
    <b-card v-for="question in questions.questions" :key="question.titre">
      <h3>{{question.titre}}</h3>
       <b-form>
          <b-form-input v-for="choix in question.choix" :key="choix.libelle"
                  v-model="choix.libelle"
                  :state="(question.result.indexOf(choix.libelle) != -1) === choix.check"
                  readonly
          ></b-form-input>
        </b-form>
    </b-card>  
  </div>
</template>

<script>
  export default {
    name: 'Result',
    props: {
      questions:null
    },
    mounted() {
      var score = 0;
      this.questions.questions.map((q) => {
        var bool = true
        q.choix.map((choix) => {
          if((q.result.indexOf(choix.libelle) != -1) !== choix.check){
            bool = false
          }
        })
        if(bool){
          score++
        }
      })
      this.questions.score = score
    }
  }
</script>
