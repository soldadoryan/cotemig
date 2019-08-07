<template>
  <c-card c-class="horario-de-aula">
    <table class="horarios table-bordered">
      <thead>
        <tr>
          <th></th>
          <th v-for="dia in horarios.colunas">{{dia}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(horario, index) in horarios.linhas">
          <td><b>{{horario}}</b></td>
          <td v-for="disc in horarios.detalhes[index]">{{disc.disciplina}}</td>
        </tr>
      </tbody>
    </table>
  </c-card>
</template>

<script>
import axios from 'axios'
import Card from '../components/Card.vue'

export default {
  components: {
    "c-card": Card,
  },
  data () {
    return {
      horarios: [],
      loading: 0,
    }
  },
  mounted () {
    this.buscarHorarios();
  },
  computed: {
    config () {
      return { headers: { "Authorization":  sessionStorage.getItem("config") } };
    },
  },
  methods: {
    buscarHorarios () {
      var model = this;

      axios.get("https://api.cotemig.com.br:443/v1/horario", this.config).then(function(response) {
          model.horarios = response.data;
          console.log(response.data.linhas);
      });
    }
  }
}
</script>

<style lang="scss">
table.horarios {
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  th, td {
    padding: 30px 5px;
  }
}
</style>
