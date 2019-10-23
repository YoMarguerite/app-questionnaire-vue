<template>
  <div class="about">
    <b-card class="mt-3" header="Questionnaire">
      <Question :question="questions.questions[pages[page]]"></Question>
    </b-card>
  </div>
</template>

<script>
  import Question from '../components/Question.vue'
  import questions from '../assets/questionnaire.json'
  export default {
    props:{
      user: null
    },
    data: function () {
      return {
        questions,
        pages:[],
        page:0
      }
    },
    components: {
      Question
    },
    mounted() {
      if(this.user === null){
        this.$router.back();
      }
      var i = 0;
      while( i<questions.nb){
        let random = Math.floor(Math.random() * Math.floor(questions.questions.length))
        if(this.pages.indexOf(random) === -1){
          this.pages.push(random)
          i++
        }
      }
    }
  }
</script>