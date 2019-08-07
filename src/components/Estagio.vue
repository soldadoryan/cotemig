<template>
  <div class="col-lg-4 col-md-4 col-sm-6 col-12">
    <c-card c-class="estagio">
      <div class="call-estagio">
        <div class="titulo_empresa">
          {{ cTitulo.substring(0, 35) }}<span v-if="cTitulo.length > 35">...</span>
        </div>
        <div class="Bolsa">
          {{ cBolsa }}
        </div>
      </div>
      <div class="info-estagio">
        <b>Horário de trabalho: </b><small>{{cHorario}}</small>
        <b>Função: </b><small>{{cFuncao}}</small>
        <b>Benefícios: </b><small>{{cBeneficios}}</small>
        <b>Conhecimentos necessários: </b><small>{{cConhecimento}}</small>
        <b>Endereço: </b><small>{{cEndereco}}</small>
        <b>Vagas: </b><small>{{cVagas}}</small>
        <b>Idade mínima: </b><small>{{cIdade}}</small>
        <b>Ano / Período em curso: </b><small>{{cCurso}}</small>
      </div>
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
    cEndereco: String,
    cVagas: String,
    cFuncao: String,
    cIdade: String,
    cCurso: String,
    cConhecimento: String,
    cHorario: String,
    cBeneficios: String,
  },
  components: {
    "c-card": Card,
  }
}
</script>

<style lang="scss">

</style>
