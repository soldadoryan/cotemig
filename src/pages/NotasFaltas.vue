<template>
  <div id="home">
    <c-header></c-header>
    <c-contain>
      <c-titulo c-titulo="Notas e Faltas" c-desc="Atenção: Notas e faltas para simples conferência, não tem valor como documento."></c-titulo>
      <c-boletim></c-boletim>
    </c-contain>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Conteudo from '../components/Conteudo.vue'
import Titulo from '../components/Titulo.vue'
import Boletim from '../components/Boletim.vue'

export default {
  components: {
    "c-header": Header,
    "c-contain": Conteudo,
    "c-titulo": Titulo,
    "c-boletim": Boletim,
  },
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
