<template>
  <div class="col-lg-4">
    <c-card class="item-diretorio">
      <img :src="urlDir" v-if="!isDir">
      <img src="/img/diretorios/folder.png" v-if="isDir">
      <div class="titulo" :title="titulo">
        {{titulo.substring(0,30)}}<span v-if="titulo.length > 30">...</span>
      </div>
    </c-card>
  </div>

</template>

<script>
import Card from '../components/Card.vue'

export default {
  components: {
    "c-card": Card,
  },
  computed: {
    urlDir () {
      if(this.titulo.includes(".pdf")) return "/img/diretorios/pdf.png";
      else if(this.titulo.includes(".jpg") || this.titulo.includes(".jpeg")) return "/img/diretorios/jpg.png";
      else if(this.titulo.includes(".png") || this.titulo.includes(".emf")) return "/img/diretorios/png.png";
      else if(this.titulo.includes(".doc")) return "/img/diretorios/doc.png";
    }
  },
  props: {
    isDir: Boolean,
    titulo: String,
  }
}
</script>

<style lang="scss">
.item-diretorio {
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;

  img {
    display: inline-block;
    margin-right: 20px;
    width: 40px;
  }


  .titulo {
    font-weight: bold;
    display: inline;
    font-size: 1.2rem;
  }
}
</style>
