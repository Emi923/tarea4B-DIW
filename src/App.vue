<template>
<Cabecera />
<MenuPrincipal />
<div class="container">
  <BarraBusqueda />
  <CaminoMigas />
  <div class="dos-columnas">
    <ProductoImagen />
    <ProductoDatos />
  </div>
  <div class="container">
    <ProductoDescripcion />
  </div>
</div>
  <Pie />

</template>

<script>
import Cabecera from './components/Cabecera.vue'
import MenuPrincipal from './components/MenuPrincipal.vue'
import BarraBusqueda from './components/BarraBusqueda.vue'
import CaminoMigas from './components/CaminoMigas.vue'
import ProductoImagen from './components/ProductoImagen.vue'
import ProductoDatos  from './components/ProductoDatos.vue'
import ProductoDescripcion from './components/ProductoDescripcion.vue'
import Pie from './components/Pie.vue'

export default {
  name: 'App',
  components: { Cabecera, 
                MenuPrincipal, 
                BarraBusqueda, 
                CaminoMigas, 
                ProductoImagen, 
                ProductoDatos,
                ProductoDescripcion, Pie }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Titillium+Web:wght@300;400;700&display=swap');

body{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#app {
  font-family: 'Titillium Web', sans-serif;
}
.container {
    max-width: 1400px;
    margin: auto;
}

.boton {
  background-color: #1abc9c;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
  border: none;
}
.dos-columnas {
  display: flex;
  margin: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
