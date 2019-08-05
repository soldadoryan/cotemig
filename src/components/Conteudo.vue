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

.conteudo {
  width: calc(100% - 320px);
  position: relative;
  margin-top: 100px;
  margin-left: 280px;
}
</style>
