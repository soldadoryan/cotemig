<template>
  <div>
    <c-menu :foto="dadosUser.fotoPerfilURL" :nome="dadosUser.nome" :grupo="dadosUser.grupo" :curso-sigla="dadosUser.cursoSigla"></c-menu>
    <c-topbar :ultimo-acesso="dadosUser.ultimoAcesso"></c-topbar>
  </div>
</template>

<script>
import axios from 'axios'

import Menu from '../components/Menu.vue'
import Topbar from '../components/Topbar.vue'

export default {
  data () {
    return {
      dadosUser: {},
    }
  },
  components: {
    "c-menu": Menu,
    "c-topbar": Topbar,
  },
  computed: {
    config () {
      return { headers: { "Authorization":  sessionStorage.getItem("config") } };
    }
  },
  mounted () {
    var model = this;
    axios.get("https://api.cotemig.com.br/v1/perfil", this.config).then(function(response) {
      model.dadosUser = response.data;
    });
  }
}
</script>

<style lang="scss">

</style>
