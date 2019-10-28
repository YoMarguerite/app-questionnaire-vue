<template>
  <div v-if="question != null">
    <h3>{{question.titre}}</h3>
    <b-form>
      <b-form-checkbox v-for="choix in question.choix"
                       :key="choix.libelle"
                       v-model="choix.check"
      >
        {{choix.libelle}}
      </b-form-checkbox>
      <br>
      <b-button v-if="index > 0" @click="before" variant="primary">Question Précédente</b-button>
      <b-button v-if="index < 1" @click="onSubmit" class="float-lg-right" variant="primary">Question Suivante</b-button>
      <b-button v-if="index === 1" @click="onSubmit" class="float-lg-right" variant="primary">Terminer</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'Question',
    data: function () {
      return {
          form: null
      }
    },
    props: {
      index:null,
      question:null
    },
    methods: {
      before(){
          this.$emit("before")
      },
      onSubmit() {
          this.$emit("resultQuestion",this.question)
      }
    }
  }
</script>
