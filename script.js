const clubes = [
  // SUDESTE
  {
    nome: "Flamengo", estado: "RJ", regiao: "Sudeste", cidade: "Rio de Janeiro",
    fundacao: "1895", estadio: "Maracanã", tipo: "Grande",
    resumo: "Um dos clubes mais populares e conhecidos do futebol brasileiro.",
    historia: "Fundado em 1895 como um grupo de remo, o Flamengo criou seu departamento de futebol em 1911. Ao longo das décadas, construiu uma trajetória marcada por grandes equipes, conquistas nacionais e internacionais e uma torcida espalhada por todo o Brasil.",
    curiosidades: "O clube nasceu ligado ao remo e adotou o futebol no início do século XX. Entre seus grandes ídolos estão Zico, Júnior e Leônidas da Silva."
  },
  {
    nome: "Vasco da Gama", estado: "RJ", regiao: "Sudeste", cidade: "Rio de Janeiro",
    fundacao: "1898", estadio: "São Januário", tipo: "Grande",
    resumo: "Clube histórico conhecido por sua luta contra o preconceito no esporte.",
    historia: "Fundado em 1898, inicialmente dedicado ao remo, o Vasco criou seu departamento de futebol em 1915. O clube teve papel importante na história da inclusão racial e social no futebol brasileiro.",
    curiosidades: "A Resposta Histórica de 1924 é um dos episódios mais marcantes de sua trajetória."
  },
  {
    nome: "Fluminense", estado: "RJ", regiao: "Sudeste", cidade: "Rio de Janeiro",
    fundacao: "1902", estadio: "Maracanã", tipo: "Grande",
    resumo: "Um dos clubes mais antigos e tradicionais do futebol carioca.",
    historia: "Fundado em 1902, o Fluminense foi um dos pioneiros na organização do futebol no Rio de Janeiro. Participou da formação das primeiras competições e construiu uma longa tradição esportiva.",
    curiosidades: "Seu estádio histórico é o Estádio das Laranjeiras, palco de importantes momentos do futebol brasileiro."
  },
  {
    nome: "Botafogo", estado: "RJ", regiao: "Sudeste", cidade: "Rio de Janeiro",
    fundacao: "1904", estadio: "Nilton Santos", tipo: "Grande",
    resumo: "Clube carioca ligado a grandes nomes da história do futebol.",
    historia: "O Botafogo Football Club foi fundado em 1904. Em 1942, uniu-se ao Club de Regatas Botafogo, formando o atual Botafogo de Futebol e Regatas.",
    curiosidades: "Garrincha, Nilton Santos e Jairzinho estão entre os nomes que marcaram sua história."
  },
  {
    nome: "America-RJ", estado: "RJ", regiao: "Sudeste", cidade: "Rio de Janeiro",
    fundacao: "1904", estadio: "Giulite Coutinho", tipo: "Tradicional",
    resumo: "Um dos clubes tradicionais do futebol do Rio de Janeiro.",
    historia: "Fundado em 1904, o America construiu uma trajetória importante no futebol carioca, conquistando títulos estaduais e formando equipes lembradas por diferentes gerações.",
    curiosidades: "Seu uniforme vermelho e branco é uma das marcas tradicionais do futebol do Rio."
  },
  {
    nome: "Bangu", estado: "RJ", regiao: "Sudeste", cidade: "Rio de Janeiro",
    fundacao: "1904", estadio: "Moça Bonita", tipo: "Tradicional",
    resumo: "Clube de origem operária que marcou a história do futebol carioca.",
    historia: "Fundado no bairro de Bangu em 1904, o clube nasceu ligado à comunidade industrial da região. Sua história se confunde com o desenvolvimento do futebol nos bairros do Rio.",
    curiosidades: "O Bangu chegou à decisão do Campeonato Brasileiro de 1985."
  },
  {
    nome: "Olaria", estado: "RJ", regiao: "Sudeste", cidade: "Rio de Janeiro",
    fundacao: "1915", estadio: "Rua Bariri", tipo: "Regional",
    resumo: "Tradicional representante da Zona Norte carioca.",
    historia: "Fundado em 1915, o Olaria construiu sua identidade no bairro que lhe dá nome. O clube participou de diferentes divisões do futebol estadual e revelou jogadores importantes.",
    curiosidades: "Seu estádio, a Rua Bariri, é conhecido por sua ligação com a história do futebol carioca."
  },
  {
    nome: "Madureira", estado: "RJ", regiao: "Sudeste", cidade: "Rio de Janeiro",
    fundacao: "1914", estadio: "Conselheiro Galvão", tipo: "Regional",
    resumo: "Clube tradicional de um dos bairros mais conhecidos do Rio.",
    historia: "Fundado em 1914, o Madureira Esporte Clube representa um bairro de forte identidade cultural e popular. Participa há décadas das competições do futebol carioca.",
    curiosidades: "O clube é conhecido por sua ligação com a cultura e a comunidade de Madureira."
  },
  {
    nome: "Portuguesa-RJ", estado: "RJ", regiao: "Sudeste", cidade: "Rio de Janeiro",
    fundacao: "1924", estadio: "Luso-Brasileiro", tipo: "Regional",
    resumo: "Clube da Ilha do Governador com tradição no futebol carioca.",
    historia: "Fundada em 1924, a Portuguesa da Ilha do Governador representa uma das comunidades tradicionais do futebol do Rio de Janeiro.",
    curiosidades: "Seu estádio é conhecido como Luso-Brasileiro."
  },
  {
    nome: "Americano", estado: "RJ", regiao: "Sudeste", cidade: "Campos dos Goytacazes",
    fundacao: "1914", estadio: "Ary de Oliveira e Souza", tipo: "Regional",
    resumo: "Um dos clubes tradicionais do futebol do Norte Fluminense.",
    historia: "Fundado em Campos dos Goytacazes, o Americano construiu uma trajetória de destaque no futebol do interior do estado do Rio de Janeiro.",
    curiosidades: "É um dos representantes históricos da cidade de Campos."
  },
  {
    nome: "Volta Redonda", estado: "RJ", regiao: "Sudeste", cidade: "Volta Redonda",
    fundacao: "1976", estadio: "Raulino de Oliveira", tipo: "Regional",
    resumo: "Representante do Sul Fluminense no futebol brasileiro.",
    historia: "Fundado em 1976, o Volta Redonda Futebol Clube cresceu junto com a cidade e passou a representar o Sul Fluminense em competições estaduais e nacionais.",
    curiosidades: "Seu apelido é Voltaço."
  },
  {
    nome: "Corinthians", estado: "SP", regiao: "Sudeste", cidade: "São Paulo",
    fundacao: "1910", estadio: "Neo Química Arena", tipo: "Grande",
    resumo: "Clube paulista de enorme tradição popular.",
    historia: "Fundado em 1910 por um grupo de trabalhadores no bairro do Bom Retiro, o Corinthians se tornou um dos principais clubes do país.",
    curiosidades: "A Democracia Corinthiana marcou a história do clube nos anos 1980."
  },
  {
    nome: "Palmeiras", estado: "SP", regiao: "Sudeste", cidade: "São Paulo",
    fundacao: "1914", estadio: "Allianz Parque", tipo: "Grande",
    resumo: "Clube de origem italiana e trajetória marcante.",
    historia: "Fundado em 1914 como Palestra Italia, o clube adotou o nome Sociedade Esportiva Palmeiras em 1942.",
    curiosidades: "A mudança de nome ocorreu durante a Segunda Guerra Mundial."
  },
  {
    nome: "São Paulo", estado: "SP", regiao: "Sudeste", cidade: "São Paulo",
    fundacao: "1930", estadio: "Morumbi", tipo: "Grande",
    resumo: "Clube paulista com conquistas importantes no Brasil e no exterior.",
    historia: "Fundado em 1930, o São Paulo Futebol Clube passou por uma reorganização em 1935, ano de sua refundação. Construiu uma trajetória marcada por títulos nacionais e internacionais.",
    curiosidades: "O Morumbi é um dos estádios mais conhecidos do país."
  },
  {
    nome: "Santos", estado: "SP", regiao: "Sudeste", cidade: "Santos",
    fundacao: "1912", estadio: "Vila Belmiro", tipo: "Grande",
    resumo: "Clube mundialmente conhecido pela história de Pelé.",
    historia: "Fundado em 1912, o Santos ganhou projeção internacional com equipes históricas, especialmente a geração liderada por Pelé nos anos 1960.",
    curiosidades: "Pelé é o maior símbolo da história santista."
  },
  {
    nome: "Guarani", estado: "SP", regiao: "Sudeste", cidade: "Campinas",
    fundacao: "1911", estadio: "Brinco de Ouro", tipo: "Tradicional",
    resumo: "Clube de Campinas que conquistou o Campeonato Brasileiro.",
    historia: "Fundado em 1911, o Guarani construiu uma história importante no futebol paulista e nacional. Em 1978, conquistou o Campeonato Brasileiro.",
    curiosidades: "É um dos clubes tradicionais do interior paulista."
  },
  {
    nome: "Ponte Preta", estado: "SP", regiao: "Sudeste", cidade: "Campinas",
    fundacao: "1900", estadio: "Moisés Lucarelli", tipo: "Tradicional",
    resumo: "Uma das instituições mais antigas do futebol brasileiro.",
    historia: "Fundada em 1900, a Associação Atlética Ponte Preta tem uma das trajetórias mais antigas do futebol nacional e uma forte ligação com Campinas.",
    curiosidades: "A Macaca é o mascote tradicional do clube."
  },
  {
    nome: "Portuguesa", estado: "SP", regiao: "Sudeste", cidade: "São Paulo",
    fundacao: "1920", estadio: "Canindé", tipo: "Tradicional",
    resumo: "Clube paulistano de origem ligada à comunidade portuguesa.",
    historia: "Fundada em 1920, a Portuguesa de Desportos construiu uma trajetória importante no futebol paulista, com participações marcantes em competições nacionais.",
    curiosidades: "O Canindé é sua casa histórica."
  },
  {
    nome: "Atlético-MG", estado: "MG", regiao: "Sudeste", cidade: "Belo Horizonte",
    fundacao: "1908", estadio: "Arena MRV", tipo: "Grande",
    resumo: "Um dos clubes mais tradicionais de Minas Gerais.",
    historia: "Fundado em 1908, o Atlético Mineiro construiu uma história de rivalidades, títulos e grandes jogadores no futebol brasileiro.",
    curiosidades: "Seu mascote é o Galo."
  },
  {
    nome: "Cruzeiro", estado: "MG", regiao: "Sudeste", cidade: "Belo Horizonte",
    fundacao: "1921", estadio: "Mineirão", tipo: "Grande",
    resumo: "Clube mineiro de grande trajetória nacional e internacional.",
    historia: "Fundado em 1921 como Palestra Itália, o clube passou a se chamar Cruzeiro Esporte Clube em 1942.",
    curiosidades: "O nome Cruzeiro faz referência à constelação do Cruzeiro do Sul."
  },
  {
    nome: "América-MG", estado: "MG", regiao: "Sudeste", cidade: "Belo Horizonte",
    fundacao: "1912", estadio: "Independência", tipo: "Tradicional",
    resumo: "Clube centenário do futebol mineiro.",
    historia: "Fundado em 1912, o América Mineiro é uma das instituições tradicionais de Belo Horizonte e do futebol de Minas Gerais.",
    curiosidades: "O Coelho é o mascote do clube."
  },
  {
    nome: "Rio Branco-ES", estado: "ES", regiao: "Sudeste", cidade: "Vitória",
    fundacao: "1913", estadio: "Kleber Andrade", tipo: "Tradicional",
    resumo: "Um dos clubes históricos do futebol capixaba.",
    historia: "Fundado em 1913, o Rio Branco Atlético Clube é uma das equipes mais tradicionais do Espírito Santo e tem forte presença na história estadual.",
    curiosidades: "Seu apelido é Capa-Preta."
  },

  // SUL
  {
    nome: "Grêmio", estado: "RS", regiao: "Sul", cidade: "Porto Alegre",
    fundacao: "1903", estadio: "Arena do Grêmio", tipo: "Grande",
    resumo: "Clube gaúcho com uma trajetória de conquistas internacionais.",
    historia: "Fundado em 1903, o Grêmio Foot-Ball Porto Alegrense construiu uma história marcada por rivalidades regionais e títulos importantes.",
    curiosidades: "O clássico Gre-Nal é uma das rivalidades mais conhecidas do Brasil."
  },
  {
    nome: "Internacional", estado: "RS", regiao: "Sul", cidade: "Porto Alegre",
    fundacao: "1909", estadio: "Beira-Rio", tipo: "Grande",
    resumo: "Um dos principais representantes do futebol gaúcho.",
    historia: "Fundado em 1909, o Sport Club Internacional se tornou uma das grandes instituições do futebol brasileiro.",
    curiosidades: "Seu estádio é o Beira-Rio, às margens do Guaíba."
  },
  {
    nome: "Juventude", estado: "RS", regiao: "Sul", cidade: "Caxias do Sul",
    fundacao: "1913", estadio: "Alfredo Jaconi", tipo: "Tradicional",
    resumo: "Clube da Serra Gaúcha com conquistas nacionais.",
    historia: "Fundado em 1913, o Juventude representa Caxias do Sul e construiu uma trajetória importante no futebol do Rio Grande do Sul.",
    curiosidades: "Conquistou a Copa do Brasil em 1999."
  },
  {
    nome: "Athletico-PR", estado: "PR", regiao: "Sul", cidade: "Curitiba",
    fundacao: "1924", estadio: "Ligga Arena", tipo: "Grande",
    resumo: "Clube paranaense conhecido por sua estrutura e história.",
    historia: "Fundado em 1924 a partir da união de clubes da cidade de Curitiba, o Athletico construiu uma trajetória de destaque no futebol nacional.",
    curiosidades: "Seu estádio passou por grandes reformas para a Copa do Mundo de 2014."
  },
  {
    nome: "Coritiba", estado: "PR", regiao: "Sul", cidade: "Curitiba",
    fundacao: "1909", estadio: "Couto Pereira", tipo: "Tradicional",
    resumo: "Um dos clubes mais antigos do Paraná.",
    historia: "Fundado em 1909, o Coritiba Foot Ball Club é uma instituição histórica do futebol paranaense.",
    curiosidades: "Seu apelido é Coxa."
  },
  {
    nome: "Figueirense", estado: "SC", regiao: "Sul", cidade: "Florianópolis",
    fundacao: "1921", estadio: "Orlando Scarpelli", tipo: "Tradicional",
    resumo: "Clube tradicional da capital catarinense.",
    historia: "Fundado em 1921, o Figueirense construiu uma longa trajetória no futebol de Santa Catarina.",
    curiosidades: "Seu nome faz referência à região da Figueira, em Florianópolis."
  },
  {
    nome: "Avaí", estado: "SC", regiao: "Sul", cidade: "Florianópolis",
    fundacao: "1923", estadio: "Ressacada", tipo: "Tradicional",
    resumo: "Um dos representantes históricos do futebol catarinense.",
    historia: "Fundado em 1923, o Avaí Futebol Clube tem forte ligação com Florianópolis e com a cultura esportiva de Santa Catarina.",
    curiosidades: "Seu mascote é o Leão da Ilha."
  },

  // NORDESTE
  {
    nome: "Bahia", estado: "BA", regiao: "Nordeste", cidade: "Salvador",
    fundacao: "1931", estadio: "Arena Fonte Nova", tipo: "Grande",
    resumo: "Um dos clubes de maior tradição do Nordeste.",
    historia: "Fundado em 1931, o Esporte Clube Bahia conquistou espaço nacional e se tornou uma das principais referências do futebol nordestino.",
    curiosidades: "Foi o primeiro campeão brasileiro, em 1959."
  },
  {
    nome: "Vitória", estado: "BA", regiao: "Nordeste", cidade: "Salvador",
    fundacao: "1899", estadio: "Barradão", tipo: "Tradicional",
    resumo: "Clube centenário e tradicional da Bahia.",
    historia: "Fundado em 1899, inicialmente como clube de críquete, o Vitória passou a desenvolver o futebol e se tornou um dos principais clubes baianos.",
    curiosidades: "Seu clássico contra o Bahia é conhecido como Ba-Vi."
  },
  {
    nome: "Sport", estado: "PE", regiao: "Nordeste", cidade: "Recife",
    fundacao: "1905", estadio: "Ilha do Retiro", tipo: "Grande",
    resumo: "Um dos clubes mais conhecidos de Pernambuco.",
    historia: "Fundado em 1905, o Sport Club do Recife construiu uma trajetória de destaque no futebol pernambucano e nacional.",
    curiosidades: "Seu mascote é o Leão."
  },
  {
    nome: "Náutico", estado: "PE", regiao: "Nordeste", cidade: "Recife",
    fundacao: "1901", estadio: "Aflitos", tipo: "Tradicional",
    resumo: "Clube centenário da capital pernambucana.",
    historia: "Fundado em 1901, o Clube Náutico Capibaribe começou ligado aos esportes aquáticos e desenvolveu uma importante tradição no futebol.",
    curiosidades: "Seu estádio é conhecido como Aflitos."
  },
  {
    nome: "Santa Cruz", estado: "PE", regiao: "Nordeste", cidade: "Recife",
    fundacao: "1914", estadio: "Arruda", tipo: "Tradicional",
    resumo: "Clube de forte identidade popular em Pernambuco.",
    historia: "Fundado em 1914, o Santa Cruz Futebol Clube construiu uma das torcidas mais conhecidas do Nordeste.",
    curiosidades: "Seu estádio, o Arruda, é um marco do futebol pernambucano."
  },
  {
    nome: "Fortaleza", estado: "CE", regiao: "Nordeste", cidade: "Fortaleza",
    fundacao: "1918", estadio: "Arena Castelão", tipo: "Grande",
    resumo: "Clube cearense de grande tradição.",
    historia: "Fundado em 1918, o Fortaleza Esporte Clube é uma das principais instituições esportivas do Ceará.",
    curiosidades: "Seu mascote é o Leão do Pici."
  },
  {
    nome: "Ceará", estado: "CE", regiao: "Nordeste", cidade: "Fortaleza",
    fundacao: "1914", estadio: "Arena Castelão", tipo: "Grande",
    resumo: "Um dos clubes mais tradicionais do futebol cearense.",
    historia: "Fundado em 1914, o Ceará Sporting Club construiu uma história centenária e uma das maiores rivalidades regionais do país.",
    curiosidades: "O clássico contra o Fortaleza é conhecido como Clássico-Rei."
  },
  {
    nome: "ABC", estado: "RN", regiao: "Nordeste", cidade: "Natal",
    fundacao: "1915", estadio: "Frasqueirão", tipo: "Tradicional",
    resumo: "Clube histórico do futebol potiguar.",
    historia: "Fundado em 1915, o ABC Futebol Clube é uma das instituições mais tradicionais do Rio Grande do Norte.",
    curiosidades: "Seu rival histórico é o América de Natal."
  },
  {
    nome: "América-RN", estado: "RN", regiao: "Nordeste", cidade: "Natal",
    fundacao: "1915", estadio: "Arena das Dunas", tipo: "Tradicional",
    resumo: "Um dos clubes históricos de Natal.",
    historia: "Fundado em 1915, o América Futebol Clube é um dos principais representantes do futebol potiguar.",
    curiosidades: "O clássico contra o ABC é conhecido como Clássico Rei."
  },
  {
    nome: "CSA", estado: "AL", regiao: "Nordeste", cidade: "Maceió",
    fundacao: "1913", estadio: "Rei Pelé", tipo: "Tradicional",
    resumo: "Clube tradicional de Alagoas.",
    historia: "Fundado em 1913, o Centro Sportivo Alagoano é uma das instituições mais conhecidas do futebol alagoano.",
    curiosidades: "Seu maior rival regional é o CRB."
  },
  {
    nome: "CRB", estado: "AL", regiao: "Nordeste", cidade: "Maceió",
    fundacao: "1912", estadio: "Rei Pelé", tipo: "Tradicional",
    resumo: "Um dos clubes históricos de Alagoas.",
    historia: "Fundado em 1912, o Clube de Regatas Brasil construiu uma trajetória importante no futebol do estado.",
    curiosidades: "O confronto com o CSA é conhecido como Clássico das Multidões."
  },
  {
    nome: "Sampaio Corrêa", estado: "MA", regiao: "Nordeste", cidade: "São Luís",
    fundacao: "1923", estadio: "Castelão", tipo: "Tradicional",
    resumo: "Clube maranhense de destaque no futebol nacional.",
    historia: "Fundado em 1923, o Sampaio Corrêa Futebol Clube é uma das principais instituições esportivas do Maranhão.",
    curiosidades: "Seu apelido é Bolívia Querida."
  },

  // NORTE
  {
    nome: "Remo", estado: "PA", regiao: "Norte", cidade: "Belém",
    fundacao: "1905", estadio: "Baenão", tipo: "Tradicional",
    resumo: "Um dos clubes mais populares da região Norte.",
    historia: "Fundado em 1905, o Clube do Remo tem uma história centenária no Pará e protagoniza uma das maiores rivalidades da região.",
    curiosidades: "Seu clássico contra o Paysandu é conhecido como Re-Pa."
  },
  {
    nome: "Paysandu", estado: "PA", regiao: "Norte", cidade: "Belém",
    fundacao: "1914", estadio: "Curuzu", tipo: "Tradicional",
    resumo: "Clube paraense com história nacional e regional.",
    historia: "Fundado em 1914, o Paysandu Sport Club construiu uma trajetória de conquistas e forte presença no futebol do Pará.",
    curiosidades: "O Papão é um dos apelidos conhecidos do clube."
  },
  {
    nome: "Amazonas", estado: "AM", regiao: "Norte", cidade: "Manaus",
    fundacao: "2019", estadio: "Arena da Amazônia", tipo: "Regional",
    resumo: "Clube mais recente que ganhou espaço no futebol amazonense.",
    historia: "Fundado em 2019, o Amazonas Futebol Clube é um projeto recente do futebol de Manaus e conquistou espaço nas competições nacionais.",
    curiosidades: "Seu mascote é a Onça-Pintada."
  },
  {
    nome: "Nacional-AM", estado: "AM", regiao: "Norte", cidade: "Manaus",
    fundacao: "1913", estadio: "Arena da Amazônia", tipo: "Tradicional",
    resumo: "Um dos clubes históricos do futebol amazonense.",
    historia: "Fundado em 1913, o Nacional Futebol Clube é uma das instituições mais tradicionais do Amazonas.",
    curiosidades: "É conhecido como Naça."
  },

  // CENTRO-OESTE
  {
    nome: "Goiás", estado: "GO", regiao: "Centro-Oeste", cidade: "Goiânia",
    fundacao: "1943", estadio: "Hailé Pinheiro", tipo: "Grande",
    resumo: "Um dos principais clubes do futebol goiano.",
    historia: "Fundado em 1943, o Goiás Esporte Clube se tornou uma das principais forças do Centro-Oeste e participou de diversas competições nacionais.",
    curiosidades: "Seu apelido é Esmeraldino."
  },
  {
    nome: "Vila Nova", estado: "GO", regiao: "Centro-Oeste", cidade: "Goiânia",
    fundacao: "1943", estadio: "Onésio Brasileiro Alvarenga", tipo: "Tradicional",
    resumo: "Clube goiano de forte tradição popular.",
    historia: "Fundado em 1943, o Vila Nova Futebol Clube construiu uma trajetória importante no futebol de Goiás.",
    curiosidades: "Seu mascote é o Tigre."
  },
  {
    nome: "Atlético-GO", estado: "GO", regiao: "Centro-Oeste", cidade: "Goiânia",
    fundacao: "1937", estadio: "Antônio Accioly", tipo: "Tradicional",
    resumo: "Clube histórico da capital goiana.",
    historia: "Fundado em 1937, o Atlético Clube Goianiense é uma das equipes tradicionais de Goiânia.",
    curiosidades: "Seu mascote é o Dragão."
  },
  {
    nome: "Cuiabá", estado: "MT", regiao: "Centro-Oeste", cidade: "Cuiabá",
    fundacao: "2001", estadio: "Arena Pantanal", tipo: "Regional",
    resumo: "Clube mato-grossense que alcançou o cenário nacional.",
    historia: "Fundado em 2001, o Cuiabá Esporte Clube cresceu no futebol estadual e alcançou competições nacionais de destaque.",
    curiosidades: "É conhecido como Dourado."
  },
  {
    nome: "Brasiliense", estado: "DF", regiao: "Centro-Oeste", cidade: "Taguatinga",
    fundacao: "2000", estadio: "Boca do Jacaré", tipo: "Regional",
    resumo: "Clube do Distrito Federal com trajetória nacional.",
    historia: "Fundado em 2000, o Brasiliense Futebol Clube ganhou destaque rapidamente no futebol do Distrito Federal e chegou a decisões nacionais.",
    curiosidades: "Seu mascote é o Jacaré."
  }
];

// Elementos da página
const lista = document.getElementById("lista-clubes");
const busca = document.getElementById("busca");
const filtroRegiao = document.getElementById("filtro-regiao");
const filtroEstado = document.getElementById("filtro-estado");
const contador = document.getElementById("contador");
const semResultados = document.getElementById("sem-resultados");

let tipoSelecionado = "";

// Preenche a lista de estados
const estados = [...new Set(clubes.map(clube => clube.estado))].sort();

estados.forEach(estado => {
  const option = document.createElement("option");
  option.value = estado;
  option.textContent = estado;
  filtroEstado.appendChild(option);
});

// Cria os cards
function mostrarClubes() {
  const termo = busca.value.toLowerCase().trim();
  const regiao = filtroRegiao.value;
  const estado = filtroEstado.value;

  const encontrados = clubes.filter(clube => {
    const correspondeBusca = [
      clube.nome,
      clube.cidade,
      clube.estado,
      clube.regiao
    ].join(" ").toLowerCase().includes(termo);

    const correspondeRegiao = !regiao || clube.regiao === regiao;
    const correspondeEstado = !estado || clube.estado === estado;
    const correspondeTipo = !tipoSelecionado ||
      clube.tipo === tipoSelecionado ||
      (tipoSelecionado === "Historico" && clube.fundacao < "1930");

    return correspondeBusca && correspondeRegiao &&
      correspondeEstado && correspondeTipo;
  });

  lista.innerHTML = "";

  encontrados.forEach((clube, indice) => {
    const card = document.createElement("article");
    card.className = "clube-card";

    const imagem = document.createElement("div");
    imagem.className = "clube-imagem";
    imagem.innerHTML = `<span>${clube.nome}</span>`;

    const info = document.createElement("div");
    info.className = "clube-info";

    const local = document.createElement("span");
    local.className = "clube-local";
    local.textContent = `${clube.cidade} • ${clube.estado}`;

    const titulo = document.createElement("h3");
    titulo.textContent = clube.nome;

    const resumo = document.createElement("p");
    resumo.textContent = clube.resumo;

    const rodape = document.createElement("div");
    rodape.className = "clube-rodape";

    const fundacao = document.createElement("small");
    fundacao.textContent = `Fundado em ${clube.fundacao}`;

    const botao = document.createElement("button");
    botao.className = "ver-historia";
    botao.textContent = "LER HISTÓRIA →";
    botao.addEventListener("click", () => abrirHistoria(clube));

    rodape.append(fundacao, botao);
    info.append(local, titulo, resumo, rodape);
    card.append(imagem, info);
    lista.appendChild(card);
  });

  contador.textContent = `${encontrados.length} clubes encontrados`;
  semResultados.hidden = encontrados.length !== 0;
}

// Abre a história completa
function abrirHistoria(clube) {
  document.getElementById("modal-local").textContent =
    `${clube.regiao} • ${clube.cidade} / ${clube.estado}`;

  document.getElementById("modal-nome").textContent = clube.nome;
  document.getElementById("modal-resumo").textContent = clube.resumo;
  document.getElementById("modal-fundacao").textContent = clube.fundacao;
  document.getElementById("modal-cidade").textContent = clube.cidade;
  document.getElementById("modal-estado").textContent = clube.estado;
  document.getElementById("modal-estadio").textContent = clube.estadio;
  document.getElementById("modal-historia").textContent = clube.historia;
  document.getElementById("modal-curiosidades").textContent = clube.curiosidades;

  const modal = document.getElementById("modal");
  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function fecharHistoria() {
  const modal = document.getElementById("modal");
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Eventos de pesquisa e filtros
busca.addEventListener("input", mostrarClubes);
filtroRegiao.addEventListener("change", mostrarClubes);
filtroEstado.addEventListener("change", mostrarClubes);

document.querySelectorAll(".categoria").forEach(botao => {
  botao.addEventListener("click", () => {
    document.querySelectorAll(".categoria").forEach(item => {
      item.classList.remove("ativa");
    });

    botao.classList.add("ativa");
    tipoSelecionado = botao.dataset.tipo;
    mostrarClubes();
  });
});

document.getElementById("fechar-modal")
  .addEventListener("click", fecharHistoria);

document.getElementById("fechar-fundo")
  .addEventListener("click", fecharHistoria);

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") fecharHistoria();
});

document.getElementById("ano").textContent = new Date().getFullYear();

// Exibe os clubes ao abrir o site
mostrarClubes();
