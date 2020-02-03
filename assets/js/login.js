function logar(){
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");

    console.log(email.value+senha.value);

if(nome.value == "admin" && senha.value == "123"){
    localStorage.setItem("acesso", true);
    alert("usuário autenticado!");
    window.location.href = "perfiladmin.html";
}else{
    alert("Usuário ou senha invalido!");
}
 }
  
