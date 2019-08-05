<template>
  <div class="col-lg-4 col-12">
    <c-card c-class="aviso">
      <div class="titulo">
        {{ cTitulo }}
      </div>
      <div class="autor-data">
        Por {{ cAutor }} em {{ cData }}
      </div>
      <div class="conteudo-html" ref="conteudoHtml" v-html="cConteudo"></div>
    </c-card>
  </div>
</template>

<script>

import Card from '../components/Card.vue'

export default {
  props: {
    cConteudo: String,
    cTitulo: String,
    cData: String,
    cAutor: String,
  },
  components: {
    "c-card": Card,
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.conteudo-html {
  margin-top: 50px;

  img {
    width: 100%;
    height: auto;
    margin-top: 50px;
  }
}
</style>
