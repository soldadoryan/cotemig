<template>
  <div class="titulo">
    <h4>{{ cTitulo }}</h4>
    <p>{{ cDesc }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      cTitulo: String,
      cDesc: String,
    }
  }
</script>

<style lang="scss">
  .titulo {
    display: block;
    margin-bottom: 25px;

    h4 {
      font-size: 1.5rem;
      margin-bottom: 0;
    }

    p {
      color: #666;
    }
  }
</style>
