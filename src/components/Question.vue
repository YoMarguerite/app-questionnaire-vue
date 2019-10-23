<template>
  <div v-if="question != null">
    <h3>{{question.titre}}</h3>
    <ul>
      <li v-for="choix in question.choix" :key="choix">
        {{choix}}
      </li>
    </ul>
<!--    <b-form>-->
<!--      <b-form-checkbox v-for="choix in question.choix" :key="choix"-->
<!--                       id="checkbox-1"-->
<!--                       v-model="status"-->
<!--                       name="checkbox-1"-->
<!--                       value="accepted"-->
<!--                       unchecked-value="not_accepted"-->
<!--      >-->
<!--        I accept the terms and use-->
<!--      </b-form-checkbox>-->
<!--    </b-form>-->
    <b-button variant="primary">ok</b-button>
  </div>
</template>

<script>
  export default {
    name: 'Question',
    data: function () {
      return {
      }
    },
    props: {
      question:null
    }
  }
</script>
