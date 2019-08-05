<template>
  <div class="quadro-avisos row">
    <c-aviso v-for="aviso in avisos" :c-titulo="aviso.titulo" :c-autor="aviso.autor" :c-conteudo="aviso.conteudo" :c-data="aviso.data"></c-aviso>
  </div>
</template>

<script>
  import axios from 'axios'
  import Aviso from '../components/Aviso.vue'

  export default {
    data () {
      return {
        avisos: [],
      }
    },
    components: {
      "c-aviso": Aviso
    },
    computed: {
      config () {
        return { headers: { "Authorization":  sessionStorage.getItem("config") } };
      }
    },
    mounted() {
      var model = this;

      console.log(this.config);

      axios.get("https://api.cotemig.com.br/v1/avisos", this.config).then(function(response) {
        model.avisos = response.data;
      });
    }
  }
</script>

<style lang="scss" scoped>
  .quadro-avisos {
    width: 100%;
  }
</style>
