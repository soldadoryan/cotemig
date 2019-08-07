<template>
  <div class="conteudo">
    <div class="container-fluid">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

@media (max-width: 576px) {
  .conteudo {
    width: 100% !important;
    margin: 100px 0 0 0 !important;
  }
}

.conteudo {
  width: calc(100% - 320px);
  position: relative;
  margin-top: 100px;
  margin-left: 280px;
}
</style>
