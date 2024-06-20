//funçao que insere alguns produtos padroes no localstorage
function listaProdutos() {
  let produtos = [
    {
      nome: "Gabinete Gamer",
      preco: "R$190,00",
      descrição:"O teclado gamer é um periférico essencial para qualquer jogador, projetado para oferecer desempenho superior, durabilidade e uma experiência de uso confortável e personalizável. Com características avançadas, ele proporciona uma vantagem competitiva e eleva a experiência de jogo a um novo patamar.",
      imagem: "../img/produtos/gabinetegamer",
      categoria: "Perifericos PC",
    },
    {
      nome: "Mouse Gamer",
      preco: "R$ 80,00",
      descrição:"O mouse gamer é um periférico essencial para jogadores que buscam precisão, velocidade e conforto durante suas sessões de jogo. Projetado com tecnologias avançadas e características específicas, ele proporciona uma experiência de jogo otimizada, permitindo que os jogadores obtenham o máximo desempenho em seus jogos favoritos.",
      imagem: "../img/produtos/mouse-gamer-redragon.png",
      categoria: "Perifericos PC",
    },
    {
      nome: "Memoria Ram DDR4",
      preco: "R$ 85,00",
      descrição:"A memória RAM DDR4 (Double Data Rate 4) é a quarta geração de memórias RAM DDR, amplamente utilizada em computadores e dispositivos eletrônicos modernos. Ela oferece uma série de melhorias em relação às gerações anteriores, como a DDR3, proporcionando um desempenho superior, maior eficiência energética e maior capacidade de armazenamento.",
      imagem: "../img/produtos/memoria-kingston-fury-beast-8gb.png",
      categoria: "Perifericos PC",
    },
    {
      nome: "Monitor Gamer",
      preco: "R$ 200,00",
      descrição:"O monitor gamer é um componente essencial para qualquer setup de jogo, projetado para oferecer a melhor qualidade visual e performance. Com especificações avançadas, ele proporciona uma experiência de jogo imersiva e fluida, garantindo que cada detalhe seja exibido com precisão e clareza.",
      imagem: "../img/produtos/monitor-gamer-viewsonic.png",
      categoria: "Perifericos PC",
    },
    {
      nome: "Teclado Gamer",
      preco: "R$ 120,00",
      descrição:"O teclado gamer é um periférico essencial para qualquer jogador, projetado para oferecer desempenho superior, durabilidade e uma experiência de uso confortável e personalizável. Com características avançadas, ele proporciona uma vantagem competitiva e eleva a experiência de jogo a um novo patamar.",
      imagem: "../img/produtos/teclado-gamer-rise.png",
      categoria: "Perifericos PC",
    },
    {
      nome: "Placa de Video",
      preco: "R$ 130,00",
      descrição:"A placa de vídeo gamer, também conhecida como GPU (Graphics Processing Unit), é um componente crítico em qualquer computador de alto desempenho, especialmente para jogos. Ela é responsável por renderizar imagens, vídeos e animações com alta qualidade e velocidade, proporcionando uma experiência visual imersiva e fluida.",
      imagem: "../img/produtos/placavideo.jpg",
      categoria: "Perifericos PC",
    },
    {
      nome: "Controle Xbox",
      preco: "R$ 70,00",
      descrição:"O controle de Xbox, desenvolvido pela Microsoft, é amplamente reconhecido por seu design ergonômico, durabilidade e versatilidade. Utilizado tanto em consoles Xbox quanto em PCs, ele oferece uma experiência de jogo precisa e confortável, sendo uma escolha popular entre jogadores casuais e profissionais.",
      imagem: "../img/produtos/console1.png",
      categoria: "Console",
    },
    {
      nome: "PS5",
      preco: "R$ 5000,00",
      descrição:"O PlayStation 5 (PS5) é a mais recente geração de consoles da Sony, lançado em novembro de 2020. Projetado para oferecer uma experiência de jogo de última geração, o PS5 traz avanços significativos em desempenho, gráficos, e funcionalidades, proporcionando uma experiência de jogo imersiva e revolucionária",
      imagem: "../img/produtos/console2.png",
      categoria: "Console",
    },
    {
      nome: "Super Nintendo",
      preco: "R$ 800,00",
      descrição:"O Super Nintendo Entertainment System (SNES), lançado pela Nintendo em 1990 no Japão e em 1991 na América do Norte, é um dos consoles de videogame mais icônicos e amados da história. Ele trouxe inovações técnicas significativas e uma biblioteca de jogos clássicos que continuam a ser apreciados por fãs de todas as idades.",
      imagem: "../img/produtos/console3.png",
      categoria: "Console",
    },
    {
      nome: "Controle Nintendo Switch",
      preco: "R$ 500,00",
      descrição:"Os Joy-Con são os controles primários do Nintendo Switch, destacáveis e versáteis, podendo ser utilizados de diversas formas.",
      imagem: "../img/produtos/console4.png",
      categoria: "Console",
    },
    {
      nome: "Xbox",
      preco: "R$ 4000,00",
      descrição:"O mais recente console de videogame da Microsoft, lançado em novembro de 2020. É parte da nova geração de consoles Xbox, oferecendo avanços significativos em desempenho, gráficos e funcionalidades para proporcionar uma experiência de jogo de próxima geração.",
      imagem: "../img/produtos/console5.png",
      categoria: "Console",
    },
    {
      nome: "Game Boy Color XYZ",
      preco: "R$ 550,00",
      descrição:"O Game Boy Color foi um console portátil lançado pela Nintendo em 1998 como sucessor do popular Game Boy original. Ele foi o primeiro console portátil da Nintendo a apresentar uma tela colorida, o que proporcionou uma experiência de jogo mais vibrante e imersiva em comparação com seu antecessor.",
      imagem: "../img/produtos/console6.png",
      categoria: "Console",
    },
    {
      nome: "Camisa Atari",
      preco: "R$ 55,00",
      imagem: "../img/produtos/diversos1.png",
      categoria: "Diversos",
    },
    {
      nome: "Camisa SNES",
      preco: "R$ 50,00",
      imagem: "../img/produtos/diversos2.png",
      categoria: "Diversos",
    },
    {
      nome: "Boneco Sonic",
      preco: "R$ 85,00",
      imagem: "../img/produtos/diversos3.png",
      categoria: "Diversos",
    },
    {
      nome: "Despertador Retrô",
      preco: "R$ 90,00",
      imagem: "../img/produtos/diversos4.png",
      categoria: "Diversos",
    },
    {
      nome: "Camisa X-tudo",
      preco: "R$ 55,00",
      imagem: "../img/produtos/diversos5.png",
      categoria: "Diversos",
    },
    {
      nome: "Fantasia Pikachu",
      preco: "R$ 300,00",
      imagem: "../img/produtos/diversos6.png",
      categoria: "Diversos",
    },
  ];

  if (localStorage.length > 0) {
    return 0;
  }
  for (i = 0; i < produtos.length; i++) {
    var produto = JSON.stringify(produtos[i]);
    var chave = "produto " + i;
    localStorage.setItem(chave, produto);
  }

  localStorage.setItem("quantidadeProdutos", i);
  localStorage.setItem("NomeSelecionado", "0");
}
