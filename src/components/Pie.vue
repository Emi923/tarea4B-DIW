<template>
  <footer id="pie">
    <div class="container-footer">
      <div class="col-flex contactar">
        <h3>Contácta con nosotros</h3>
        <a href="mailto:comidadomicilio@gmail.com">comidadomicilio@gmail.com</a>
        <a href="tel:+34665441021">665 441 021</a>
        <a href="#"> Calle falsa 123</a>
      </div>
      <div class="col-flex redes-sociales">
        <h3>Síguenos en rede sociales</h3>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
      <div class="col-flex info">
        <h3>Información</h3>
        <a href="#">Aviso legal </a>
        <a href="#">Términos y condiciones </a>
        <a href="#">Política de privacidad </a>
      </div>
    </div>
    <div id="post-pie">
      <p>© Copyright 2022 - Todos los derechos reservados </p>
    </div>

  </footer>
</template>

<script>
export default {

}
</script>

<style>
#pie {
    background-color: #333333;
}
#post-pie p {
    padding: 2rem 1rem;
    color: white;
    text-align: center;
    
}
.container-footer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.col-flex{
  display: flex;
  flex-direction: column;
}
.container-footer a:hover, .container-footer h3{
  color: #F18F35;
}
.container-footer a{
  color: white;
  text-decoration: inherit;
  font-size: 1.1rem;
}
</style>