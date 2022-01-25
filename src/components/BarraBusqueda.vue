<template>
  <section id="barra-busqueda">
      <form @submit.prevent="handleEnviar">
          <input type="text" placeholder="Buscar productos ...">
          <button class="boton">Buscar</button>
      </form>
  </section>
</template>

<script>
export default {
    name: 'BarraBusqueda',
    methods: {
        handleSutmit() {
            console.log("Busqueda enviada")
        }
    }
}
</script>

<style>
section#barra-busqueda {
    margin: 1rem;
}
section#barra-busqueda form {
    display: flex;
    justify-content: center;
    align-items: center;
}
section#barra-busqueda input{
    margin: 1rem;
    padding: 0.7rem 1rem;
    border-style: solid;
    border: 2px solid #1abc9c;
    color: #181818;
    outline: none;
    line-height: 1.4rem;
    border-radius: 25px;
    font-size: 1.2rem;
}


</style>