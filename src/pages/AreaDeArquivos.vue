<template>
  <div id="home">
    <c-header></c-header>
    <c-contain>
      <c-titulo c-titulo="Área de arquivos" c-desc="Veja os principais avisos da instituição"></c-titulo>
      <c-diretorios></c-diretorios>
    </c-contain>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Conteudo from '../components/Conteudo.vue'
import Titulo from '../components/Titulo.vue'
import Diretorios from '../components/Diretorios.vue'

export default {
  components: {
    "c-header": Header,
    "c-contain": Conteudo,
    "c-titulo": Titulo,
    "c-diretorios": Diretorios,
  },
  mounted() {

  }
}
</script>

<style lang="scss" >
html {
  height: auto;
}

#home {
  height: 100%;
}
</style>
