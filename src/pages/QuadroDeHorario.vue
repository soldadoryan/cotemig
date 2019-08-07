<template>
  <div class="horarios">
    <c-header></c-header>
    <c-contain>
      <c-titulo c-titulo="Quadro de Horário" c-desc="Veja o horário das aulas de suas disciplinas matriculadas."></c-titulo>
      <c-horarios></c-horarios>
    </c-contain>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Conteudo from '../components/Conteudo.vue'
import Titulo from '../components/Titulo.vue'
import Horarios from '../components/Horarios.vue'

export default {
  components: {
    "c-header": Header,
    "c-contain": Conteudo,
    "c-titulo": Titulo,
    "c-horarios": Horarios,
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
