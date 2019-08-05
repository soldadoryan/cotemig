<template>
  <div class="login">
    <form @submit.prevent="login">
      <h1>Portal Cotemig</h1>
      <input v-model="matricula" type="text" name="matricula" placeholder="Matrícula"/>
      <input v-model="senha" type="password" name="senha" placeholder="Senha"/>
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted () {
      document.documentElement.style.height = "100%";
  },
  data () {
    return {
      matricula: "",
      senha: "",
    }
  },
  computed: {
    config: function() {
      return { headers: { "Authorization":  "Basic " + btoa(this.matricula + ":" + this.senha)} };
    }
  },
  methods: {
    login: function() {
      var model = this;
      axios.get("https://api.cotemig.com.br/v1/perfil", this.config).then(function(response) {
        sessionStorage.setItem("config", "Basic " + btoa(model.matricula + ":" + model.senha));

        window.location="/avisos";
      }).catch(error => {
        alert(error.response.data.detalhes);
      });
    }
  }

}
</script>

<style lang="scss">
.login {
  height: 100%;

  form {
    width: 30%;
    background: #e9e9e9;
    padding: 25px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    input {
      width: calc(100% - 20px);
      height: 50px;
      padding: 0 10px;
      border: 0;
      font-size: 20px;
      margin-top: 25px;
    }

    button {
      background-color: #64b145;
      color: #fff;
      font-size: 20px;
      padding: 20px;
      margin-top: 25px;
      border: 0;
    }
  }
}
</style>
