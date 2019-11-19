<template>
  <div v-if="questions != null" style="pointer-events: none;">
    <h3>{{questions.score}}/{{questions.questions.length}}</h3>
    <b-card v-for="question in questions.questions" :key="question.titre">
      <h3>{{question.titre}}</h3>
       <b-form>
          <b-form-checkbox v-for="choix in question.choix" :key="choix.libelle"
                v-model="choix.check"
                :state="choix.result"
          >{{choix.libelle}}</b-form-checkbox>
        </b-form>
    </b-card>
    <b-card-footer>{{date}}</b-card-footer>
  </div>
</template>

<script>
  export default {
    name: 'Result',
    props: {
      date:null,
      questions:null
    },
    created() {
      var score = 0;
      this.questions.questions.map((q) => {
        var bool = true
        q.choix.map((choix) => {
          if((q.result.indexOf(choix.libelle) != -1) !== choix.check){
            bool = false
          }
          choix.result = (q.result.indexOf(choix.libelle) != -1) === choix.check
        })
        if(bool){
          score++
        }
      })
      this.questions.score = score
      this.questions.date = this.date
      if(this.questions.user == undefined){
        this.questions.user = JSON.parse(sessionStorage.getItem("currentUser"))

        var results
        try {
          results = JSON.parse(localStorage.getItem('results'))
        } catch (e) {
          if(!Array.isArray(results)){
            results = []
          }
        }
        
        results.push(this.questions)
        localStorage.setItem('results',JSON.stringify(results))
      }
    }
  }
</script>
