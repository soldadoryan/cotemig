<template>
  <div class="row">
    <div class="col-lg-12">
      <c-card c-class="diretorios">
        <div class="navegador">
          <div class="url">
            <span class="link-diretorios" v-if="loading == 0" @click="getDiretorios('/')"><img src="/img/diretorios/home.png"> /</span>
            <span class="link-diretorios" @click="getDiretorios(caminho)" v-for="caminho in pilhaDiretorios" v-bind="caminho" v-if="caminho != '/' && loading == 0">{{caminho}} /</span>
            <i v-if="loading == 1" class="fas fa-spinner fa-pulse"></i>
          </div>
          <div class="content-dir">
            <div class="row" v-if="diretorio.arvore.length > 0 && loading == 0">
              <c-item-diretorio v-for="dir in diretorio.arvore" :titulo="dir.nome" :is-dir="dir.diretorio" @click.native="getDiretorios(dir.nome)"></c-item-diretorio>
            </div>
            <div class="row erro-dir align-items-center" v-if="diretorio.arvore.length == 0">
              <div class="col-lg-12">
                <h2 class="text-center">=( <br> Esta pasta está vazia.</h2>
              </div>
            </div>
            <div class="row erro-dir align-items-center" v-if="loading == 1">
              <div class="col-lg-12 text-center">
                <i class="fas fa-spinner fa-pulse"></i>
              </div>
            </div>
          </div>
        </div>
      </c-card>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

import Card from '../components/Card.vue'
import ItemDiretorio from '../components/ItemDiretorio.vue'

export default {
  mounted() {
    this.getDiretorios();
    this.pilhaDiretorios;
  },
  data () {
    return {
      diretorio: {},
      pilhaDiretorios: [],
      loading: 1,
    }
  },
  methods: {
    getDiretorios (url="") {
      var model = this;

      model.loading = 1;

      if(url != "") {
        if(model.pilhaDiretorios.indexOf(url) != -1) {
          for (var i = model.pilhaDiretorios.length; i > model.pilhaDiretorios.indexOf(url); i--) {
            model.pilhaDiretorios.splice(i);
          }
        } else {
          model.pilhaDiretorios.push(url);
        }
        axios.get("https://api.cotemig.com.br/v1/arquivos/" + this.caminhoTotal, this.config).then(function(response) {
          model.diretorio = response.data;
          model.loading = 0;
        });
      } else {
        axios.get("https://api.cotemig.com.br/v1/arquivos", this.config).then(function(response) {
          model.diretorio = response.data;
          model.pilhaDiretorios.push(response.data.caminho);
          model.loading = 0;
        });
      }
    }
  },
  computed: {
    config () {
      return { headers: { "Authorization":  sessionStorage.getItem("config") } };
    },
    caminhoTotal () {
      var fullPath = "";
      this.pilhaDiretorios.forEach(function(v) {
        if(v == '/') fullPath += v;
        else fullPath += (v + '/');
      });
      return fullPath;
    }
  },
  components: {
    "c-card": Card,
    "c-item-diretorio": ItemDiretorio,
  },
}
</script>

<style lang="scss">
.navegador {
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
  border: 1px solid #d9d9d9;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  .erro-dir {
    height: 400px;

    h2 {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  .url {
    background-color: rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #d9d9d9;
    line-height: 40px;

    .fas.fa-spinner {
      margin-left: 10px;
    }

    img {
      height: 16px;
      margin-top: -5px;
      margin-left: 10px;
    }

    span.link-diretorios {
      cursor: pointer;
      padding: 10px 3px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }

  .content-dir {
    margin: 20px;

    .fas.fa-spinner {
      font-size: 50px;
      color: rgba(0, 0, 0, .3);
    }
  }

}
</style>
