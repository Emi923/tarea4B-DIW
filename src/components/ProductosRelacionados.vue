<template>
  <section id="related-products">
      <h2>COMPLETA TU MENÚ</h2>
      <div class="container-relacionados">
        <div class="producto-realted">
            <img src="../assets/cerveza.jpg" alt="Cerveza Producto">
            <h3>Cerveza estrella levante</h3>
            <p>1.50€</p>
            <button class="boton" data-v-681c90bb=""><span class="material-icons" data-v-681c90bb="">shopping_cart</span> AÑADIR CARRITO</button>
        </div>
        <div class="producto-realted">
            <img src="../assets/gofre.jpg" alt="Gofre Producto">
            <h3>Gofre con nata</h3>
            <p>2.50€</p>
            <button class="boton" data-v-681c90bb=""><span class="material-icons" data-v-681c90bb="">shopping_cart</span> AÑADIR CARRITO</button>
        </div>
        <div class="producto-realted">
            <img src="../assets/patatas-fritas.jpg" alt="Patatas Producto">
            <h3>Patatas clasicas</h3>
            <p>3.50€</p>
            <button class="boton" data-v-681c90bb=""><span class="material-icons" data-v-681c90bb="">shopping_cart</span> AÑADIR CARRITO</button>
        </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
#related-products {
    margin:1rem;
}
h2{
     color: #F18F35;
     text-align: center;
}
.container-relacionados{
    display: flex;
    flex-wrap: wrap;
}
.container-relacionados .producto-realted{
    width: 30%;
    margin: 0 20px;
    text-align: center;
}
.container-relacionados .producto-realted img{
    width: 100%;
}
</style>