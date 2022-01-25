<template>
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
    <ProductosRelacionados />
  </div>
</div>
  <Pie />

</template>

<script>
import MenuPrincipal from './components/MenuPrincipal.vue'
import BarraBusqueda from './components/BarraBusqueda.vue'
import CaminoMigas from './components/CaminoMigas.vue'
import ProductoImagen from './components/ProductoImagen.vue'
import ProductoDatos  from './components/ProductoDatos.vue'
import ProductoDescripcion from './components/ProductoDescripcion.vue'
import Pie from './components/Pie.vue'
import ProductosRelacionados from './components/ProductosRelacionados.vue'

export default {
  name: 'App',
  components: { 
                MenuPrincipal, 
                BarraBusqueda, 
                CaminoMigas, 
                ProductoImagen, 
                ProductoDatos,
                ProductoDescripcion, Pie,
                ProductosRelacionados }
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
  background-color: #F18F35;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
  border: 1px solid #F18F35;
}
.boton:hover{
  background-color: white;
  color: #F18F35;
}
.dos-columnas {
  display: flex;
  margin: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
