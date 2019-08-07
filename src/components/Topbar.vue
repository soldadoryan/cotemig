<template>
  <div id="topbar">
    <div class="logo">
      <img src="/img/topbar/logo-elipse.png">
    </div>
    <div class="ultimo-acesso">
      Último acesso: {{ultimoAcesso}}
    </div>
    <ul class="opcoes">
      <li>
        <button class="btn-horarios" @click="irHorarios">
          <img src="img/topbar/quadro_de_horarios.png">
          Quadro de horários
        </button>
      </li>
      <li class="show-xs"><img src="img/topbar/menu.png"></li>
      <li><img src="img/topbar/notificacoes.png"></li>
      <li class="hide-xs"><img src="img/topbar/configuracao.png"></li>
      <li><img src="img/topbar/logout.png"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    ultimoAcesso: String,
  },
  methods: {
    irHorarios () {
      window.location="/quadro-de-horarios";
    }
  }
}
</script>

<style lang="scss">
$p-color: #64b145;

@media (max-width: 576px) {
  #topbar {
    width: 100% !important;
    left: 0;

    .opcoes {
      li {
        margin-left: 30px !important;

        &.hide-xs {
          display: none;
        }

        &.show-xs {
          display: inline-block;
        }
      }
    }

    .btn-horarios {
      display: none;
    }

    .logo {
      display: inline-block !important;
    }

    .ultimo-acesso {
      display: none !important;
    }
  }
}

#topbar {
  background-color: white;
  width: calc(100% - 240px);
  position: fixed;
  top: 0;
  right: 0;
  height: 60px;
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.33);
  z-index: 1050;

  .ultimo-acesso {
    height: 100%;
    display: inline-block;
    line-height: 60px;
    font-weight: bold;
    margin-left: 20px;
    position: absolute;
    top: 0;
    left: 20px;
  }

  .logo {
    height: 100%;
    display: none;
    line-height: 60px;
    font-weight: bold;
    margin-left: 20px;
    position: absolute;
    top: 0;
    left: 20px;

    img {
      margin-top: 15px;
      height: 30px;
    }
  }

  .opcoes {
    height: 100%;
    list-style: none;
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-right: 20px;
    position: absolute;
    top: 0;
    right: 20px;

    li {
      height: 100%;
      display: inline-block;
      margin-left: 40px;
      vertical-align: middle;

      &.show-xs {
        display: inline-block
      }

      img {
        height: 20px;
        margin-top: 20px;
      }

      button {
        background-color: $p-color;
        height: 40px;
        margin-top: 10px;
        font-weight: bold;
        color: white;
        border-radius: 5px;
        border: 0;
        padding: 0 20px;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;

        span {
          display: inline;
          vertical-align: middle;
        }

        img {
          width: 16px;
          height: 16px;
          margin-top: 0;
          margin-right: 2px;
          display: inline;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
