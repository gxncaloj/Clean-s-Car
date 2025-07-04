document.addEventListener("DOMContentLoaded", function () {
    const btnServicos = document.getElementById("btn-servicos");
    const secaoServicos = document.getElementById("servicos");

    btnServicos.addEventListener("click", function () {
        secaoServicos.classList.toggle("hidden");
    });
});     
let carros = [
  {
    nome: "Lavagem Completa",
    descricao: "Efetuamos uma lavagem tanto no interior como no exterior do seu veículo.",
    imagem: "sx_A06183000_anb_PROFILINEActifoamEnergy_E03_xx_2020-06-19.jpg"
  },
  {
    nome: "Lavagem Interior",
    descricao: "Limpeza profunda de estofos, tapetes e bancos do seu veiculo.",
    imagem: "lavagem interior.jpg"
  },
  {
    nome: "Lavagem Premium",
    descricao: "Lavagem especial com produtos premium e proteção da pintura.",
    imagem: "lavagem premium.avif"
  }
];

let indiceAtual = 0;

function atualizarSlider() {
  document.querySelector('.imagem-inicio').src = carros[indiceAtual].imagem;
  document.getElementById('carro-nome').textContent = carros[indiceAtual].nome;
  document.getElementById('carro-desc').textContent = carros[indiceAtual].descricao;
}

function proximo() {
  indiceAtual = (indiceAtual + 1) % carros.length;
  atualizarSlider();
}

function anterior() {
  indiceAtual = (indiceAtual - 1 + carros.length) % carros.length;
  atualizarSlider();
}

window.onload = atualizarSlider;

  mostrarCarro();
  document.querySelector('button').addEventListener('click', () => {
    alert('Redirecting to the shop!');
  });
  