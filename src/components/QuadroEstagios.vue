<template>
  <div class="quadro-estagios row">
    <c-estagio v-for="est in estagios" :c-titulo="est.empresa" :c-bolsa="est.bolsa"></c-estagio>
  </div>
</template>

<script>
import axios from 'axios'
import Estagio from '../components/Estagio.vue'

export default {
  data () {
    return {
      offset: 0,
      limit: 9,
      auxEstagios: [],
    }
  },
  components: {
    "c-estagio": Estagio,
  },
  computed: {
    config () {
      return { headers: { "Authorization":  sessionStorage.getItem("config") } };
    },
    estagios () {
      return this.auxEstagios;
    }
  },
  mounted() {
    this.buscarEstagios();
  },
  methods: {
    buscarEstagios () {
      var model = this;
      axios.get("https://api.cotemig.com.br:443/v1/estagios?o=" + this.offset + "&l=" + this.limit, this.config).then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          model.auxEstagios.push(response.data[i]);
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.quadro-estagios {
  width: 100%;
}
</style>
