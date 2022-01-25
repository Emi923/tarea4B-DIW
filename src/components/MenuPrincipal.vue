<template>
<section id="menu-principal">
    <div class="container">
        <div class="nom-empresa">
            <img src="../assets/logo-cerveza.png" alt="Logo de la empresa">
            <span class="titulo-web">ComidaDomicilio</span>
        </div>
         
    <nav>
        <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#">MENÚS</a></li>
            <li><a href="#">PIZZAS</a></li>
            <li><a href="#">HAMBURGUESAS</a></li>
            <li><a href="#">BOCADILLOS</a></li>
            <li><a href="#">BEBIDA</a></li>
        </ul>
    </nav>
    <div class=grupo>
        <a class="registro" href="#">REGISTRO</a>
        <a class="login" href="#">INICIAR SESIÓN</a>
    </div>
</div>
</section>
  
</template>

<script>
export default {

}
</script>

<style>
section#menu-principal {
    background: #F18F35;
    z-index:999;
    padding:0.7rem;
}

section#menu-principal .container {
    display: flex;
    justify-content: space-between;
}

section#menu-principal .container nav ul {
    display:flex;
    list-style: none;
    padding: 0;
    margin:0rem 0.7rem;
}
section#menu-principal .container nav ul li a, .registro:hover, .login:hover{
    background-color: #F18F35;
    text-decoration: none;
    color:white;
    font-weight: 700;
    padding-left: 1rem;
    padding-right: 1rem;
}
section#menu-principal .container nav ul li a:hover,.active{
background-color:blue;
    text-decoration: none;
    
    font-weight: 700;
    padding: 1rem;
} 
.registro, .login {

    background-color:blue;
    text-decoration: none;
    color:white;
    font-weight: 700;
    padding: 1rem;
}
#menu-principal .titulo-web{
    color: white;
    font-weight: bold;
}
#menu-principal img{
    width: 20px;
}



</style>