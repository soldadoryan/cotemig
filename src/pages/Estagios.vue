<template>
  <div class="avisos">
    <c-header></c-header>
    <c-contain>
      <c-titulo c-titulo="Vagas disponíveis" c-desc="As principais vagas de estágio e emprego."></c-titulo>
      <c-quadro-estagios></c-quadro-estagios>
    </c-contain>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Conteudo from '../components/Conteudo.vue'
import Titulo from '../components/Titulo.vue'
import QuadroEstagios from '../components/QuadroEstagios.vue'

export default {
  components: {
    "c-header": Header,
    "c-contain": Conteudo,
    "c-titulo": Titulo,
    "c-quadro-estagios": QuadroEstagios,
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
