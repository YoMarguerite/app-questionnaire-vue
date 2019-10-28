<template>
  <div>
    <b-card class="mt-3" header="Identifiez-vous">
      <b-form @submit="onSubmit">
        <b-form-group
                id="input-group-1"
                label="Prénom:"
                label-for="input-1"
                :state="fnState"
                invalid-feedback="Saisissez votre prénom"
        >
          <b-form-input
                  id="input-1"
                  v-model="form.firstname"
                  :state="fnState"
                  placeholder="Entrez votre prénom"
          ></b-form-input>
        </b-form-group>

        <b-form-group
                id="input-group-2"
                label="Nom:"
                label-for="input-2"
                :state="lnState"
                invalid-feedback="Saisissez votre nom"
        >
          <b-form-input
                  id="input-2"
                  v-model="form.lastname"
                  :state="lnState"
                  placeholder="Entrez votre nom"
          ></b-form-input>
        </b-form-group>

        <b-form-group
                id="input-group-3"
                label="Entreprise:"
                label-for="input-3"
                :state="cpState"
                invalid-feedback="Saisissez votre entreprise"
        >
          <b-form-input
                  id="input-3"
                  v-model="form.company"
                  :state="cpState"
                  placeholder="Quel est votre entreprise ?"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Commencer le test</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          company: ''
        },
        fnState: null,
        lnState: null,
        cpState: null
      }
    },
    methods: {
      check() {
        this.fnState = (this.form.firstname != "")
        this.lnState = (this.form.lastname != "")
        this.cpState = (this.form.company != "")
        return (this.fnState)&&(this.lnState)&&(this.cpState)
      },
      onSubmit(evt) {
        if(this.check()) {
          evt.preventDefault()
          sessionStorage.setItem("currentUser", JSON.stringify(this.form))
          this.$emit("setUser")
          this.$router.push({ name: 'questionnaire'})
        }
      },
    }
  }
</script>
