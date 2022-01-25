<template>
  <section id="producto-datos">
      <h1>Portátil Huawei MateBoot X</h1>
      <h2>750,69€ <span class="iva">sin IVA: 620,41€</span></h2>
      <div class="wrapper">
          <button class="btn" @click="cambiarContador('-1')" type="button" name="button">-</button>
          <input class="cantidad" type="text" name="name" :value="contador">
          <button class="btn" @click="cambiarContador('1')" type="button" name="button">+</button>
      </div>
      <br>
      <button class="boton"><span class="material-icons">shopping_cart</span> AÑADIR CARRITO</button>
  </section>
</template>

<script>
export default {
  Name: 'ProductoDatos',
    data () {
        return {
            contador: 1
        }
    },
    methods: {
        cambiarContador(num) {
            this.contador += +num;
            if (!isNaN(this.contador) && (this.contador < 0)) {
              this.contador = 0
            }
        }
    }


}
</script>

<style scoped>
section#producto-datos {
  flex: 1 1 18rem;
}
h1 {
  font-size: 2.2rem;
}
h2 {
  font-size:1.7rem;
  color: #1abc9c;
}
span.iva {
  font-size:1rem;
  font-weight: normal;
  color: #282828
}
.wrapper {
  height: 2rem;
  display: flex;
}

.cantidad {
  border: none;
  text-align: center;
  width: 2rem;
  font-size: 1.2rem;
  border: 1px solid #d8d8d8;
}
.btn {
  border: 1px solid #d8d8d8;
  width: 1.8rem;
}
button:focus, input:focus {
  outline: 0;
}

</style>