<template>
  <section id="producto-imagen">
      <div class="img-big"> 
          <img v-bind:src="fotos[0]" alt="Portátil Huawei MateBoot X">
      </div>
        <div class="img-mini">
          <a @click="cambiarFoto(1)"><img  v-bind:src="fotos[1]" alt="Portátil Huawei MateBoot X"></a>
          <a @click="cambiarFoto(2)"><img  v-bind:src="fotos[2]" alt="Portátil Huawei MateBoot X"></a>
          <a @click="cambiarFoto(3)"><img  v-bind:src="fotos[3]" alt="Portátil Huawei MateBoot X"></a>
          <a @click="cambiarFoto(4)"><img  v-bind:src="fotos[4]" alt="Portátil Huawei MateBoot X"></a>
        </div>
      </section>    
</template>

<script>
export default {
    Name: 'ProductoImagen',
    data () {
        return {
            fotos: [
                require ('../assets/e1.jpg'),
                require ('../assets/e1.jpg'),
                require ('../assets/e2.jpg'),
                require ('../assets/e3.jpg'),
                require ('../assets/e4.jpg')]
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
</style>