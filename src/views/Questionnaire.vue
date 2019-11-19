<template>
  <div>
    <b-card v-if="this.page <= this.questions.nb" class="mt-3" header="Questionnaire" :footer="this.page+'/'+this.questions.nb">
      <Question :index="this.page/this.questions.nb" :question="askedQuestion.questions[page]" @before="page--" @resultQuestion="resultQuestion"></Question>
    </b-card>

    <b-card v-if="this.page > this.questions.nb" class="mt-3" header="Résultats">
      <Result :date="this.$filters.formatDate(new Date())" :questions="askedQuestion"></Result>
    </b-card>
  </div>
</template>

<script>
  import Question from '../components/Question.vue'
  import Result from '../components/Result.vue'
  import questions from '../assets/questionnaire.json'
  export default {
    data: function () {
      return {
        user: null,
        questions,
        askedQuestion:{user:this.user,score:0,questions:[]},
        page:0
      }
    },
    components: {
      Question,
      Result
    },
    mounted() {
      try {
          this.user = JSON.parse(sessionStorage.getItem("currentUser"))
        } catch (e) {
          this.$router.push("/")
        }
      if(questions.nb>questions.questions.length){
        questions.nb = questions.questions.length
      }
      var i = 0;
      var pages=[]
      while( i<=questions.nb){
        let random = Math.floor(Math.random() * Math.floor(questions.questions.length))
        if(pages.indexOf(random) === -1){
          pages.push(random);
          this.askedQuestion.questions.push(questions.questions[random])
          i++
        }
      }
    },
    methods: {
      resultQuestion(question){
        this.questions.questions.map((q) => {
          if(q.titre === question.titre){
            q.choix = question.choix
          }
        })
        this.page++
      }
    }
  }
</script>