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
      <b-button @click="onSubmit" class="float-lg-right" variant="primary">Question Suivante</b-button>
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
      question:null
    },
    methods: {
        onSubmit() {
            this.$emit("resultQuestion",this.question)
        }
    }
  }
</script>
