import Vue from 'vue' // Importando o vue

// Paginas do sistema
import Login from './pages/Login.vue'
import Avisos from './pages/Avisos.vue'
import NotasFaltas from './pages/NotasFaltas.vue'
import AreaDeArquivos from './pages/AreaDeArquivos.vue'
import Estagios from './pages/Estagios.vue'
import QuadroDeHorario from './pages/QuadroDeHorario.vue'
// import Erro404 from './pages/Erro404.vue'

Vue.config.productionTip = false;

// Rotas do sistema
const rotas = {
  // '/erro404': Erro404,
  '/': Login,
  '/avisos': Avisos,
  '/notas-e-faltas': NotasFaltas,
  '/area-de-arquivos': AreaDeArquivos,
  '/estagios': Estagios,
  '/quadro-de-horarios': QuadroDeHorario,
}

new Vue({
  el: "#app",
  data: {
    rotaAtual: window.location.pathname, // Recolher rota acessada
  },
  computed: {
    tratarPagina: function() {
      return rotas[this.rotaAtual] || Erro404; // Se existir rota retorna pagina, se não retorna 404
    }
  },
  render :  function ( createElement ) {
    return  createElement (this.tratarPagina); // Renderiza pagina no elemento "#app"
  }
});
