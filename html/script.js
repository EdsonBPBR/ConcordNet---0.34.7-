function elementoEstaVisivel(elemento, offset) {
    var rect = elemento.getBoundingClientRect();
    return (
        rect.top >= -offset &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset
    );
}

function lidarComRolar() {
    var retangulo = document.querySelector('.retangulo05');
    var colunas = document.querySelectorAll('.coluna01_tabela02');


    if (elementoEstaVisivel(retangulo, 220) && !retangulo.classList.contains('show')) {
        retangulo.classList.add('show');
    }


    colunas.forEach(function (coluna, index) {
        if (elementoEstaVisivel(coluna, 220) && !coluna.classList.contains('aparecer')) {
            setTimeout(function () {
                coluna.classList.add('aparecer');
            }, index * 220);
        } else if (!elementoEstaVisivel(coluna, 220) && coluna.classList.contains('aparecer')) {
            coluna.classList.remove('aparecer');
        }
    });
}

window.addEventListener('scroll', lidarComRolar);

lidarComRolar();




document.addEventListener("DOMContentLoaded", function () {
    var retangulo = document.querySelector(".retangulo05");

    function handleScroll() {
        var rect = retangulo.getBoundingClientRect();
        var isVisible = (rect.top >= -rect.height / 2) && (rect.bottom <= window.innerHeight + rect.height / 2);

        if (isVisible) {
            retangulo.classList.add("show");
        } else {
            retangulo.classList.remove("show");
        }
    }

    window.addEventListener("scroll", handleScroll);


    handleScroll();
});





function formatarCEP(input) {

    let valor = input.value.replace(/\D/g, '');


    if (valor.length > 5) {
        valor = valor.substring(0, 5) + '-' + valor.substring(5);
    }

    input.value = valor;
}





document.addEventListener('DOMContentLoaded', function () {
    const secaoAnimada = document.getElementById('secaoAnimada');

    function handleScroll() {
        const secaoTop = secaoAnimada.getBoundingClientRect().top;
        const secaoBottom = secaoAnimada.getBoundingClientRect().bottom;

        if (secaoTop < window.innerHeight / 2 && secaoBottom > 0) {
            secaoAnimada.classList.add('animar');
        } else {
            secaoAnimada.classList.remove('animar');
        }
    }
    document.addEventListener('scroll', handleScroll);
    handleScroll();
});





document.addEventListener('DOMContentLoaded', function() {
    var retangulo = document.getElementById('retangulo08');

    function verificarAnimacao() {
        var boundingRect = retangulo.getBoundingClientRect();

        if (boundingRect.top < window.innerHeight && boundingRect.bottom >= 0) {
            retangulo.classList.add('ativo');
        } else {
            retangulo.classList.remove('ativo');
        }
    }

    window.addEventListener('scroll', verificarAnimacao);
    

    verificarAnimacao();
});




document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".coluna_campo_retangulo15");
    const itemsPerSlide = 3;
    let currentIndex = Math.floor(Math.random() * Math.ceil(carouselItems.length / itemsPerSlide));

    function showItems(index) {
      const startIndex = index * itemsPerSlide;
      const endIndex = startIndex + itemsPerSlide;

      carouselItems.forEach((item, i) => {
        item.style.display = (i >= startIndex && i < endIndex) ? "inline-block" : "none";
      });
    }

    function nextItems() {
      currentIndex = (currentIndex + 1) % Math.ceil(carouselItems.length / itemsPerSlide);
      showItems(currentIndex);
    }

    function startCarousel() {
      showItems(currentIndex);
      setInterval(nextItems, 5000);
    }

    startCarousel();
  });



  document.addEventListener("DOMContentLoaded", function () {
    var elementos = document.querySelectorAll('.retangulo04');
    var ativado = false;

    function handleScroll() {
        var distanciaDoTopo = window.scrollY;

        if (distanciaDoTopo >= 550 && !ativado) {
            ativarAnimacao();
        }

        if (distanciaDoTopo < 600 && ativado) {
            desativarAnimacao();
        }
    }

    function ativarAnimacao() {
        elementos.forEach(function (elemento, index) {
            var rect = elemento.getBoundingClientRect();
            var direcao = index % 2 === 0 ? 'left' : 'right';

            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                anime({
                    targets: elemento,
                    translateX: direcao === 'left' ? [-50, 0] : [50, 0],
                    opacity: [0, 1],
                    duration: 290,
                    easing: 'easeInOutQuad',
                    delay: 150 * index,
                    autoplay: true
                });
            }
        });

        ativado = true;
    }
    function desativarAnimacao() {
        ativado = false;
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
});




function togglePesquisa() {
    var campoPesquisa = document.getElementById('campoPesquisa');
    campoPesquisa.classList.toggle('active');
}

function pesquisar(event) {
    if (event.key === "Enter") {
        var pesquisa = document.getElementById('campoPesquisa').querySelector('input').value.toLowerCase();
        var elementos = document.querySelectorAll('.elemento_pesquisavel');

        for (var i = 0; i < elementos.length; i++) {
            var textoElemento = elementos[i].textContent.toLowerCase();

            if (textoElemento.includes(pesquisa)) {
                elementos[i].scrollIntoView({ behavior: "smooth" });
                campoPesquisa.classList.remove('active');  
                break;
            }
        }
    }
}





window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    let divisao1Ocultar = document.querySelector('#divisao1_ocultar');

    header.classList.toggle('rolagem', window.scrollY > 0);

    if (window.scrollY > 0) {
        divisao1Ocultar.style.height = '0';
        divisao1Ocultar.style.padding = '0';
    } else {
        divisao1Ocultar.style.height = '';
        divisao1Ocultar.style.padding = '';
    }
});