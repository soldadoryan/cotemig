<template>
  <div class="avisos">
    <c-header></c-header>
    <c-contain>
      <c-titulo c-titulo="Quadro de avisos" c-desc="Veja os principais avisos da instituição"></c-titulo>
      <c-quadro-avisos></c-quadro-avisos>
    </c-contain>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Conteudo from '../components/Conteudo.vue'
import Titulo from '../components/Titulo.vue'
import QuadroAvisos from '../components/QuadroAvisos.vue'

export default {
  components: {
    "c-header": Header,
    "c-contain": Conteudo,
    "c-titulo": Titulo,
    "c-quadro-avisos": QuadroAvisos,
  },
  mounted() {

  }
}
</script>

<style lang="scss" >
html {
  height: auto;
}

.avisos {
  height: 100%;
}
</style>
