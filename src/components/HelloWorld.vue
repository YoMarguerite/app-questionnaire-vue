<template>
  <div v-if="question != null">
    <h1>{{question.titre}}</h1>
    <ul>
      <li v-for="choix in question.choix" :key="choix">
        {{choix}}
      </li>
    </ul>
    <button class="btn-primary">YES</button>
    <b-button>ok</b-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: function () {
      return {
        question: {titre:"youpi",
          choix:["ok","non"]}
      }
    },
    props: {

    }
  }
</script>
