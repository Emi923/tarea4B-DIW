<template>
<section id="menu-principal">
    <div class="container">
    <nav>
        <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#">ORDENADORES</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">MÓVILES</a></li>
            <li><a href="#">TABLETS</a></li>
            <li><a href="#">MULTIMEDIA</a></li>
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
    background: #1abc9c;
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
    background-color: #1abc9c;
    text-decoration: none;
    color:white;
    font-weight: 700;
    padding-left: 1rem;
    padding-right: 1rem;
}
section#menu-principal .container nav ul li a:hover,.active, .registro, .login {

    background-color:black;
    text-decoration: none;
    color:white;
    font-weight: 700;
    padding: 1rem;
}




</style>