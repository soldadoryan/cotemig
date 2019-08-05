<template>
  <div id="menu">
    <div class="title">
      <img src="/img/logo.png" alt="">
    </div>
    <div class="perfil">
      <img :src="foto">
      <small>{{nome}}</small>
      <small>{{grupo}} - {{cursoSigla}}</small>
    </div>
    <ul class="itens-menu">
      <li @click="ir('/avisos')" :class="{active: (menuMarcado == 0)}"><img src="img/menu/quadro_de_avisos.png"> Quadro de avisos</li>
      <li @click="ir('/notas-e-faltas')" :class="{active: (menuMarcado == 1)}"><img src="img/menu/notas_e_faltas.png"> Notas e faltas</li>
      <li @click="ir('/area-de-arquivos')" :class="{active: (menuMarcado == 2)}"><img src="img/menu/area_de_arquivos.png"> Área de arquivos</li>
      <li @click="ir('/estagios')" :class="{active: (menuMarcado == 3)}"><img src="img/menu/estagios.png"> Estágios</li>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        menuMarcado: 0,
      }
    },
    mounted () {
      switch(window.location.pathname) {
        case "/avisos":
          this.menuMarcado = 0;
        break;
        case "/notas-e-faltas":
          this.menuMarcado = 1;
        break;
        case "/area-de-arquivos":
          this.menuMarcado = 2;
        break;
        case "/estagios":
          this.menuMarcado = 3;
        break;
      }
    },
    props: {
      foto: String,
      nome: String,
      grupo: String,
      cursoSigla: String,
    },
    methods: {
      ir (url) {
        window.location = url;
      }
    }
  }
</script>

<style lang="scss" scoped>
  $p-color: #64b145;

  @media (max-width: 576px) {
    #menu {
      display: none;
    }
  }

  #menu {
    background-color: $p-color;
    width: 240px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 1px 16px 0px rgba(0,0,0,0.33);
    z-index: 1050;

    .title {
      height: 60px;
      margin-bottom: 25px;

      img {
        display: block;
        margin: 0 auto;
        height: 40px;
        margin-top: 10px;
      }

    }

    .perfil {
      img {
        width: 85px;
        height: 85px;
        object-fit: cover;
        object-position: top;
        display: block;
        margin: 0 auto;
        border-radius: 50%;
      }

      small {
        display: block;
        text-align: center;
        margin-top: 10px;
        font-size: 15px;
        // font-weight: bold;
        color: white;
      }
    }

    .itens-menu {
      padding: 0;
      margin: 50px auto 0;
      display: block;
      list-style: none;
      width: 80%;

      li {
        padding: 15px 10px;
        border-radius: 3px;
        color: white;
        margin-bottom: 1px;
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

        img {
          display: inline-block;
          vertical-align: middle;
          height: 24px;
          margin-top: -4px;
          margin-right: 10px;
        }

        &.active {
          background-color: rgba(255, 255, 255, 0.3);
          border-bottom: 0;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
          border-bottom: 0;
        }

        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
</style>
