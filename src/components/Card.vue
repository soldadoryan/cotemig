<template>
  <div class="card" :class="cClass">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    cClass: String,
  }
}
</script>

<style lang="scss" scoped>

.card {
  width: 100%;
  background-color: #fff;
  border: 1px solid #e4e6f6;
  padding: 20px;
  display: inline-block;

  &.aviso {
    height: 400px;
    overflow-y: auto;
    overflow-x: hidden;

    .titulo {
      font-weight: bold;
      font-size: 15px;
    }

    .autor-data {
      font-size: 14px;
      color: gray;
      margin-top: 10px;
    }

    .conteudo-html {
      img {
        display: block;
        width: auto;
        height: 300px;
        margin: 0 auto
      }

      a {
        display: block;
      }
    }
  }

  &.estagio {
    margin-bottom: 25px;

    .call-estagio {
      cursor: pointer;

      .titulo_empresa {
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 10px;
      }
    }

    .info-estagio {
      margin-top: 20px;

      b {
        font-size: 0.8rem;
      }

      small {
        display: block;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
