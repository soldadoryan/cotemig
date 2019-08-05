<template>
  <div class="boletim">
    <div class="row">
      <div class="col-lg-4">
        <c-card c-class="tab-boletim">
          <ul v-for="etapa in boletim.etapas">
            <li class="title">{{etapa.nome}}</li>
            <li v-for="(disciplina, index) in etapa.disciplinas"
            v-bind:key="index"
            :class="{active: (cDisciplina == disciplina) }" @click="carregarNotas(disciplina)">{{disciplina.nome}}</li>
          </ul>
        </c-card>
      </div>
      <div class="col-lg-8">
        <c-card c-class="table-boletim">
          <h4 class="title">{{cDisciplina.nome}}</h4>
          <span class="faltas">Faltas: {{cDisciplina.faltas}}</span>
          <table class="notas">
            <thead>
              <tr>
                <th></th>
                <th>Nota</th>
                <th>Média</th>
                <th>Valor</th>
                <th>Data atualização</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(aval, index) in cDisciplina.avaliacoes" :key="index" :class="{'total': (aval.nome == 'Total')}">
                <td>{{aval.nome}}</td>
                <td class="number" :class="{'up': (aval.nota >= aval.media && aval.nota != ''), 'down': (aval.nota < aval.media && aval.nota != '')}">
                  <span v-if="aval.nota != ''">{{aval.nota}}</span>
                  <span class="none" v-if="aval.nota == ''"> -- </span>
                </td>
                <td class="number">{{aval.media}}</td>
                <td class="number">{{aval.valor}}</td>
                <td>
                  <span v-if="aval.dataatualizacao != ''">{{aval.dataatualizacao}}</span>
                  <span v-if="aval.dataatualizacao == '' || !aval.dataatualizacao">--</span>
                </td>
                <td>
                  <span class="success" v-if="aval.nota > aval.media">Acima da média</span>
                  <span class="warning" v-if="aval.nota == aval.media">Média</span>
                  <span class="error" v-if="aval.nota < aval.media && aval.nota != ''">Abaixo da média</span>
                  <span class="default" v-if="aval.nota == ''">Sem nota</span>
                </td>
              </tr>
            </tbody>
          </table>
        </c-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.boletim {
  .tab-boletim {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 15px 10px;
        background-color: rgba(0, 0, 0, 0.05);
        margin-bottom: 15px;
        cursor: pointer;
        border-radius: 3px;
        font-size: 0.9rem;
        transition: all 0.5s;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }

        &.active {
          background-color: #64b145;
          color: white;
        }

        &.title {
          background: white;
          text-transform: capitalize;
          color: #001737;
          font-weight: bold;
          cursor: default;
        }
      }
    }
  }

  .table-boletim {
    h4 {
      padding: 10px;
      margin: 0;
    }

    span.faltas {
      padding-left: 10px;
    }

    .notas {
      width: 100%;
      text-align: left;
      border-collapse: collapse;

      th, td {
        padding: 15px;
      }

      thead {
        tr {
          background-color: white;
        }
      }

      tbody {
        tr {
          border-top: 1px solid rgba(0, 0, 0, 0.1);

          &.total {
            font-weight: bold;
          }

          td {
            margin: 0;

            span {
              &.success {
                border-radius: 4px;
                color: white;
                padding: 4px;
                font-size: 0.8rem;
                font-weight: bold;
                background-color: #51c81c;
              }

              &.error {
                border-radius: 4px;
                color: white;
                padding: 4px;
                font-size: 0.8rem;
                font-weight: bold;
                background-color: #fc381d;
              }

              &.warning {
                border-radius: 4px;
                padding: 4px;
                font-size: 0.8rem;
                font-weight: bold;
                background-color: #fcb41d;
              }

              &.default {
                border-radius: 4px;
                padding: 4px;
                font-size: 0.8rem;
                font-weight: bold;
                background-color: rgba(0, 0, 0, 0.1);
              }
            }

            &.number {
              font-size: 1.1rem;

              &.up {
                color: #51c81c;
              }

              &.down {
                color: #fc381d;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import axios from 'axios'

import Card from '../components/Card.vue'

export default {
  components: {
    "c-card": Card,
  },
  data() {
    return {
      boletim: {},
      cDisciplina: {},
    }
  },
  computed: {
    config: function() {
      return { headers: { "Authorization": sessionStorage.getItem("config")} };
    }
  },
  mounted () {
    var model = this;

    axios.get("https://api.cotemig.com.br/v1/boletim", this.config).then(function(response) {
      model.boletim = response.data;
      model.carregarNotas(response.data.etapas[0].disciplinas[0]);
    });
  },
  methods: {
    carregarNotas (disciplina) {
      this.cDisciplina = disciplina;
    }
  }
}
</script>
