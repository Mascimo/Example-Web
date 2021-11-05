window.onload = function () {

    // set o menu mobille caso acesse do mesmo
    var tela = window.innerWidth
    if (tela <= 1126) {
        var menu2 = document.getElementById("menuVariable")
        menu2.innerHTML = "<img id='menu_mobile'  onclick='menuOn()' src='./imagens/01.png' width='50'> </img>"
    }


    // Mudança de cor do menu
    var barra = document.getElementById("menu");

    barra.addEventListener("mouseover", function () {
        let x = document.getElementById("divi");
        x.style.backgroundColor = "#1a538499"
    });

    barra.addEventListener("mouseout", function () {
        let x = document.getElementById("divi");
        x.style.backgroundColor = "#008fd0"
    })


    // muda cor do botão caso não esteja em mobille
    if (tela > 1126) {
        corBotao();
    }


    // Links Internos
    var menuitens = document.querySelectorAll("#body a[href^='#']");

    menuitens.forEach(item => {
        item.addEventListener("click", scrollId);
    })

}



// Responsavel por mudar cor do botão
function corBotao() {

    var botao = document.getElementById("menu05");

    botao.addEventListener("mouseover", function () { botao.style.backgroundColor = "#1a538499" });
    botao.addEventListener("mouseout", function () { botao.style.backgroundColor = "#008fd0" })
}


// responsavel pelo ajuste do menu de acordo com o tamanho da tela
function redimencionamento_menu() {

    var xx = window.innerWidth


    if (xx <= 1126) {

        var menu2 = document.getElementById("menuVariable")

        menu2.innerHTML = "<img id='menu_mobile' onclick='menuOn()' src='./imagens/01.png' width='50'> </img>"
    }

    if (xx >= 1127) {

        //Desliga menu lateral caso ativo
        let menu = document.getElementById("menuRight")
        menu.className = "off"

        var menu2 = document.getElementById("menuVariable")


        menu2.innerHTML = "<a href='#menuContact' class='class_menu' id='menu01'>Página inicial</a><a href='#servicos' class='class_menu'>Serviços</a><a href='#who' class='class_menu'>Quem Somos</a><a href='#Talk' class='class_menu'>Fale Conosco</a><a href='#information' class='class_menu' id='menu05'>Estamos Online</a>"
        corBotao();
    }

}



// Menu lateral
function menuOn() {
    let menu = document.getElementById("menuRight")
    menu.className = "on"
}

function menuOff() {
    let menu = document.getElementById("menuRight")
    menu.className = "off"
}


// Links Internos

function scrollId(event) {

    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');  // ta pegando a tag #css que coloquei de cada elemento

    const posicao = document.querySelector(id).offsetTop;   //especificando o local onde esta o link para saber distancia do topo

    window.scroll({
        top: posicao - 120,
        behavior: "smooth",
    });
}
