<template>
  <div>
    <div class="quadro-estagios row">
      <c-estagio v-for="est in estagios"
      :c-titulo="est.empresa"
      :c-bolsa="est.bolsa"
      :c-endereco="est.localizacao"
      :c-vagas="est.vagas"
      :c-funcao="est.funcao"
      :c-idade="est.idade"
      :c-curso="est.curso"
      :c-conhecimento="est.conhecimento"
      :c-horario="est.disponibilidade"
      :c-beneficios="est.beneficio"></c-estagio>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-6 col-sm-8 col-12 text-center">
        <i class="fas fa-spinner fa-pulse" v-if="loading == 1"></i>
        <button ref="btn_carregar_estagios" type="button" @click="carregarMaisEstagios" name="carregar_estagios" v-if="loading == 0">Ver mais</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Estagio from '../components/Estagio.vue'

export default {
  data () {
    return {
      offset: 0,
      limit: 3,
      auxEstagios: [],
      loading: 0,
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
    carregarMaisEstagios() {
      this.offset += 3;

      this.buscarEstagios();

      var top = this.$refs["btn_carregar_estagios"].offsetTop;
    },
    buscarEstagios () {
      var model = this;

      model.loading = 1;

      axios.get("https://api.cotemig.com.br:443/v1/estagios?o=" + this.offset + "&l=" + this.limit, this.config).then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          model.auxEstagios.push(response.data[i]);
        }
        model.loading = 0;
        window.setTimeout(function () {
          window.scroll({
            top: 10000,
            left: 0,
            behavior: 'smooth'
          });
        }, 250);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.quadro-estagios {
  width: 100%;

}

i.fas.fa-spinner {
  font-size: 2rem;
  display: block;
  color: rgba(0, 0, 0, 0.3);
}

button[name="carregar_estagios"] {
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-bottom: 50px;
  border: 0px;
  width: 100%;
  height: 40px;
}
</style>
