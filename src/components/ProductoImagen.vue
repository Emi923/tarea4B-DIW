<template>
  <section id="producto-imagen">
      <div class="img-big"> 
          <img v-bind:src="fotos[0]" alt="Hamburguesa bacon">
      </div>
        <div class="img-mini">
          <a @click="cambiarFoto(1)"><img  v-bind:src="fotos[1]" alt="Hamburguesa bacon"></a>
          <a @click="cambiarFoto(2)"><img  v-bind:src="fotos[2]" alt="Hamburguesa bacon"></a>
          <a @click="cambiarFoto(3)"><img  v-bind:src="fotos[3]" alt="Hamburguesa bacon"></a>
        </div>
      </section>    
</template>

<script>
export default {
    Name: 'ProductoImagen',
    data () {
        return {
            fotos: [
                require ('../assets/hamburguesa1.jpg'),
                require ('../assets/hamburguesa1.jpg'),
                require ('../assets/hamburguesa2.jpg'),
                require ('../assets/hamburguesa3.jpg')]
        }
    },
    methods: {
        cambiarFoto(id) {
            this.fotos[0] = this.fotos[id]
        }
    }

}
</script>

<style escoped>
#producto-imagen {
    border-radius: 25px;
    padding: 1rem;
    margin: 1rem;
    flex: 0 1 50%;
    width: 50%;
}
.img-mini {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.img-mini img {
    width: 100px;
    border:2px solid #d8d8d8;
    
}
.img-big img{
    width: 100%;
}
</style>