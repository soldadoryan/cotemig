<template>
  <div class="col-lg-4 col-12">
    <c-card c-class="estagio">
      <div class="titulo_empresa">
        {{ cTitulo.substring(0, 35) }}<span v-if="cTitulo.length > 35">...</span>
      </div>
      <div class="Bolsa">
        {{ cBolsa }}
      </div>
      <slot></slot>
    </c-card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  props: {
    cTitulo: String,
    cBolsa: String,
    cBeneficios: String,
    cHorarios: String,
  },
  components: {
    "c-card": Card,
  }
}
</script>

<style lang="scss">

</style>
