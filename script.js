
/* =========================================
   FOCO NO ESPORTE
   Catálogo e história dos clubes brasileiros
========================================= */

// Elementos da página
const lista = document.getElementById("listaClubes");
const busca = document.getElementById("busca");
const filtroRegiao = document.getElementById("filtroRegiao");
const filtroEstado = document.getElementById("filtroEstado");
const filtroCategoria = document.getElementById("filtroCategoria");
const quantidade = document.getElementById("quantidadeResultados");
const semResultados = document.getElementById("semResultados");
const modal = document.getElementById("modalClube");

// Verifica se os elementos principais existem no HTML
if (
  !lista ||
  !busca ||
  !filtroRegiao ||
  !filtroEstado ||
  !filtroCategoria ||
  !quantidade ||
  !semResultados ||
  !modal
) {
  console.error(
    "Foco no Esporte: confira os IDs dos elementos no index.html."
  );
} else {

// =========================================
// DADOS DOS CLUBES
// Acrescente os demais clubes nesta lista.
// =========================================

const clubes = [
   {
    nome: "America-RJ",
    sigla: "AME",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1904,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Giulite Coutinho",
    historia: "O America Football Club é uma das instituições históricas do futebol carioca.",
    titulos: "Campeonatos Cariocas e outras conquistas estaduais.",
    curiosidade: "Seu mascote é o Diabo."
  },
  {
    nome: "Olaria",
    sigla: "OLA",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1915,
    tipo: "Histórico",
    cor: "#1685bd",
    estadio: "Estádio da Rua Bariri",
    historia: "Clube da Zona Norte carioca conhecido por sua participação no futebol estadual.",
    titulos: "Conquistas nas competições estaduais e divisões de acesso.",
    curiosidade: "A Rua Bariri é um dos estádios tradicionais do futebol carioca."
  },
  {
    nome: "Portuguesa-RJ",
    sigla: "POR",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1924,
    tipo: "Tradicional",
    cor: "#087a45",
    estadio: "Estádio Luso-Brasileiro",
    historia: "A Associação Atlética Portuguesa representa a Ilha do Governador e tem tradição no futebol fluminense.",
    titulos: "Conquistas estaduais e participações em competições nacionais.",
    curiosidade: "Seu estádio é conhecido como Luso-Brasileiro."
  },
  {
    nome: "Madureira",
    sigla: "MAD",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1914,
    tipo: "Tradicional",
    cor: "#7b2028",
    estadio: "Estádio Conselheiro Galvão",
    historia: "Clube tradicional do subúrbio carioca, participante frequente das competições estaduais.",
    titulos: "Conquistas e campanhas importantes no futebol carioca.",
    curiosidade: "O clube tem forte ligação histórica com o bairro de Madureira."
  },
  {
    nome: "Americano",
    sigla: "AMEC",
    cidade: "Campos dos Goytacazes",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1914,
    tipo: "Tradicional",
    cor: "#111111",
    estadio: "Estádio Antônio Ferreira de Medeiros",
    historia: "Clube do Norte Fluminense com participação histórica no futebol do estado.",
    titulos: "Conquistas estaduais e regionais.",
    curiosidade: "É um dos nomes tradicionais do futebol de Campos dos Goytacazes."
  },
  {
    nome: "Ponte Preta",
    sigla: "PON",
    cidade: "Campinas",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1900,
    tipo: "Tradicional",
    cor: "#111111",
    estadio: "Estádio Moisés Lucarelli",
    historia: "A Associação Atlética Ponte Preta é um dos clubes mais antigos do futebol brasileiro.",
    titulos: "Conquistas estaduais e nacionais, incluindo a Série C de 2025.",
    curiosidade: "É conhecida como Macaca."
  },
  {
    nome: "Guarani",
    sigla: "GUA",
    cidade: "Campinas",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1911,
    tipo: "Tradicional",
    cor: "#087a45",
    estadio: "Brinco de Ouro da Princesa",
    historia: "Clube campineiro de grande tradição no futebol paulista e brasileiro.",
    titulos: "Campeão brasileiro de 1978 e campeão da Série B de 1981.",
    curiosidade: "Protagoniza o Dérbi Campineiro com a Ponte Preta."
  },
  {
    nome: "XV de Piracicaba",
    sigla: "XV",
    cidade: "Piracicaba",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1913,
    tipo: "Tradicional",
    cor: "#111111",
    estadio: "Estádio Barão da Serra Negra",
    historia: "O Nhô Quim é um clube tradicional do interior paulista.",
    titulos: "Campeão brasileiro da Série C de 1995.",
    curiosidade: "Representa uma das cidades importantes do interior de São Paulo."
  },
  {
    nome: "São Bento",
    sigla: "SBE",
    cidade: "Sorocaba",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1913,
    tipo: "Histórico",
    cor: "#1764a0",
    estadio: "Estádio Walter Ribeiro",
    historia: "O Esporte Clube São Bento é uma instituição tradicional do futebol sorocabano.",
    titulos: "Conquistas estaduais e participações em divisões do Campeonato Paulista.",
    curiosidade: "Seu uniforme tradicional utiliza tons de azul."
  },
  {
    nome: "Santo André",
    sigla: "SAN",
    cidade: "Santo André",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1967,
    tipo: "Tradicional",
    cor: "#f0c419",
    estadio: "Estádio Bruno José Daniel",
    historia: "O Esporte Clube Santo André construiu sua história no futebol paulista e nacional.",
    titulos: "Campeão da Copa do Brasil de 2004.",
    curiosidade: "A conquista nacional de 2004 marcou a história do clube."
  },
  {
    nome: "Juventus da Mooca",
    sigla: "JUV",
    cidade: "São Paulo",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1924,
    tipo: "Tradicional",
    cor: "#7b2028",
    estadio: "Estádio Conde Rodolfo Crespi",
    historia: "O Clube Atlético Juventus é uma das instituições tradicionais do futebol paulistano.",
    titulos: "Conquistas estaduais e campanhas históricas nas divisões paulistas.",
    curiosidade: "Sua casa fica no bairro da Mooca."
  },
  {
    nome: "Villa Nova",
    sigla: "VNO",
    cidade: "Nova Lima",
    estado: "MG",
    regiao: "Sudeste",
    fundacao: 1908,
    tipo: "Histórico",
    cor: "#c8102e",
    estadio: "Estádio Castor Cifuentes",
    historia: "O Villa Nova Atlético Clube é um dos clubes tradicionais do futebol mineiro.",
    titulos: "Campeonatos Mineiros e conquistas estaduais.",
    curiosidade: "É conhecido como Leão do Bonfim."
  },
  {
    nome: "Tupi",
    sigla: "TUP",
    cidade: "Juiz de Fora",
    estado: "MG",
    regiao: "Sudeste",
    fundacao: 1912,
    tipo: "Tradicional",
    cor: "#111111",
    estadio: "Estádio Municipal Radialista Mário Helênio",
    historia: "O Tupi Football Club representa Juiz de Fora e tem longa trajetória no futebol mineiro.",
    titulos: "Conquistas estaduais e título da Série D de 2011.",
    curiosidade: "É conhecido como Galo Carijó."
  },
  {
    nome: "Desportiva Ferroviária",
    sigla: "DES",
    cidade: "Cariacica",
    estado: "ES",
    regiao: "Sudeste",
    fundacao: 1963,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Engenheiro Araripe",
    historia: "Clube tradicional do Espírito Santo, ligado historicamente aos ferroviários.",
    titulos: "Conquistas estaduais e participações nacionais.",
    curiosidade: "Sua história está ligada à antiga Companhia Vale do Rio Doce."
  },
  {
    nome: "Joinville",
    sigla: "JEC",
    cidade: "Joinville",
    estado: "SC",
    regiao: "Sul",
    fundacao: 1976,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Arena Joinville",
    historia: "O Joinville Esporte Clube construiu uma história marcante no futebol catarinense.",
    titulos: "Conquistas estaduais e campeão brasileiro da Série C de 2011.",
    curiosidade: "É conhecido como JEC ou Coelho."
  },
  {
    nome: "Figueirense",
    sigla: "FIG",
    cidade: "Florianópolis",
    estado: "SC",
    regiao: "Sul",
    fundacao: 1921,
    tipo: "Tradicional",
    cor: "#111111",
    estadio: "Estádio Orlando Scarpelli",
    historia: "O Figueirense é um dos clubes tradicionais da capital catarinense.",
    titulos: "Conquistas estaduais e nacionais.",
    curiosidade: "Seu mascote é o Figueirense Furacão do Estreito."
  },
  {
    nome: "Avaí",
    sigla: "AVA",
    cidade: "Florianópolis",
    estado: "SC",
    regiao: "Sul",
    fundacao: 1923,
    tipo: "Tradicional",
    cor: "#1764a0",
    estadio: "Estádio da Ressacada",
    historia: "O Avaí Futebol Clube possui uma longa história no futebol de Santa Catarina.",
    titulos: "Conquistas estaduais e participações nacionais.",
    curiosidade: "O clube é conhecido como Leão da Ilha."
  },
  {
    nome: "Caxias",
    sigla: "CAX",
    cidade: "Caxias do Sul",
    estado: "RS",
    regiao: "Sul",
    fundacao: 1935,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Centenário",
    historia: "O Sociedade Esportiva e Recreativa Caxias do Sul representa a Serra Gaúcha.",
    titulos: "Conquistas estaduais e participações nacionais.",
    curiosidade: "Mantém rivalidade local com o Juventude."
  },
  {
    nome: "Pelotas",
    sigla: "PEL",
    cidade: "Pelotas",
    estado: "RS",
    regiao: "Sul",
    fundacao: 1908,
    tipo: "Histórico",
    cor: "#1764a0",
    estadio: "Estádio Boca do Lobo",
    historia: "O Esporte Clube Pelotas é uma instituição histórica do futebol gaúcho.",
    titulos: "Conquistas estaduais e regionais.",
    curiosidade: "Seu estádio é conhecido como Boca do Lobo."
  },
  {
    nome: "Paraná Clube",
    sigla: "PAR",
    cidade: "Curitiba",
    estado: "PR",
    regiao: "Sul",
    fundacao: 1989,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Durival Britto",
    historia: "O Paraná Clube surgiu da união de tradições do futebol curitibano.",
    titulos: "Conquistas estaduais e campeão brasileiro da Série B de 1992.",
    curiosidade: "Seu uniforme tradicional combina vermelho, azul e branco."
  },
  {
    nome: "Campinense",
    sigla: "CAM",
    cidade: "Campina Grande",
    estado: "PB",
    regiao: "Nordeste",
    fundacao: 1915,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Amigão",
    historia: "O Campinense Clube é um dos nomes tradicionais do futebol paraibano.",
    titulos: "Conquistas estaduais e campeão da Copa do Nordeste de 2013.",
    curiosidade: "É conhecido como Raposa."
  },
  {
    nome: "Treze",
    sigla: "TRE",
    cidade: "Campina Grande",
    estado: "PB",
    regiao: "Nordeste",
    fundacao: 1925,
    tipo: "Tradicional",
    cor: "#111111",
    estadio: "Estádio Amigão",
    historia: "O Treze Futebol Clube é um clube tradicional da Paraíba.",
    titulos: "Conquistas estaduais e participações em competições nacionais.",
    curiosidade: "É conhecido como Galo da Borborema."
  },
  {
    nome: "Icasa",
    sigla: "ICA",
    cidade: "Juazeiro do Norte",
    estado: "CE",
    regiao: "Nordeste",
    fundacao: 2002,
    tipo: "Regional",
    cor: "#087a45",
    estadio: "Estádio Mauro Sampaio",
    historia: "A Associação Desportiva Recreativa e Cultural Icasa representa Juazeiro do Norte no futebol cearense.",
    titulos: "Conquistas estaduais e participações nacionais.",
    curiosidade: "O clube já disputou a Série B do Campeonato Brasileiro."
  },
  {
    nome: "Ferroviário",
    sigla: "FER",
    cidade: "Fortaleza",
    estado: "CE",
    regiao: "Nordeste",
    fundacao: 1933,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Presidente Vargas",
    historia: "O Ferroviário Atlético Clube nasceu ligado aos trabalhadores da Rede de Viação Cearense.",
    titulos: "Conquistas estaduais e nacionais.",
    curiosidade: "É conhecido como Tubarão da Barra."
  },
  {
    nome: "Sampaio Corrêa",
    sigla: "SAM",
    cidade: "São Luís",
    estado: "MA",
    regiao: "Nordeste",
    fundacao: 1923,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Castelão",
    historia: "O Sampaio Corrêa Futebol Clube é um dos principais representantes do futebol maranhense.",
    titulos: "Conquistas estaduais e títulos nacionais em diferentes divisões.",
    curiosidade: "É conhecido como Bolívia Querida."
  },
  {
    nome: "Moto Club",
    sigla: "MOT",
    cidade: "São Luís",
    estado: "MA",
    regiao: "Nordeste",
    fundacao: 1937,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Nhozinho Santos",
    historia: "O Moto Club de São Luís é um clube histórico do futebol maranhense.",
    titulos: "Conquistas estaduais e participações nacionais.",
    curiosidade: "É conhecido como Papão do Norte."
  },
  {
    nome: "ASA",
    sigla: "ASA",
    cidade: "Arapiraca",
    estado: "AL",
    regiao: "Nordeste",
    fundacao: 1952,
    tipo: "Tradicional",
    cor: "#111111",
    estadio: "Estádio Coaracy da Mata Fonseca",
    historia: "A Agremiação Sportiva Arapiraquense é um dos clubes tradicionais de Alagoas.",
    titulos: "Conquistas estaduais e campanhas nacionais.",
    curiosidade: "É conhecido como Fantasma das Alagoas."
  },
  {
    nome: "Rio Branco-AC",
    sigla: "RBC",
    cidade: "Rio Branco",
    estado: "AC",
    regiao: "Norte",
    fundacao: 1919,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Arena da Floresta",
    historia: "O Rio Branco Football Club é uma das instituições tradicionais do futebol acreano.",
    titulos: "Conquistas estaduais e participações nacionais.",
    curiosidade: "É conhecido como Estrelão."
  },
  {
    nome: "Fast Clube",
    sigla: "FAS",
    cidade: "Manaus",
    estado: "AM",
    regiao: "Norte",
    fundacao: 1930,
    tipo: "Tradicional",
    cor: "#111111",
    estadio: "Estádio da Colina",
    historia: "O Nacional Fast Clube possui história no futebol amazonense.",
    titulos: "Conquistas estaduais e participações regionais.",
    curiosidade: "É conhecido como Rolo Compressor."
  },
  {
    nome: "Tuna Luso",
    sigla: "TUN",
    cidade: "Belém",
    estado: "PA",
    regiao: "Norte",
    fundacao: 1903,
    tipo: "Histórico",
    cor: "#087a45",
    estadio: "Estádio Francisco Vasques",
    historia: "A Tuna Luso Brasileira é uma tradicional associação esportiva paraense.",
    titulos: "Conquistas estaduais e título nacional da Série B de 1985.",
    curiosidade: "Sua origem está ligada à comunidade portuguesa de Belém."
  },
  {
    nome: "Baré",
    sigla: "BAR",
    cidade: "Boa Vista",
    estado: "RR",
    regiao: "Norte",
    fundacao: 1946,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Canarinho",
    historia: "O Baré Esporte Clube é uma das equipes tradicionais de Roraima.",
    titulos: "Conquistas estaduais e participações regionais.",
    curiosidade: "É conhecido como Índio da Consolata."
  },
  {
    nome: "Brasiliense",
    sigla: "BRA",
    cidade: "Brasília",
    estado: "DF",
    regiao: "Centro-Oeste",
    fundacao: 2000,
    tipo: "Tradicional",
    cor: "#f0c419",
    estadio: "Estádio Serejão",
    historia: "O Brasiliense Futebol Clube ganhou destaque rapidamente no futebol do Distrito Federal.",
    titulos: "Campeão brasileiro da Série C de 2002 e campeão da Copa Verde de 2020.",
    curiosidade: "É conhecido como Jacaré."
  },
  {
    nome: "Gama",
    sigla: "GAM",
    cidade: "Brasília",
    estado: "DF",
    regiao: "Centro-Oeste",
    fundacao: 1975,
    tipo: "Tradicional",
    cor: "#087a45",
    estadio: "Estádio Bezerrão",
    historia: "A Sociedade Esportiva do Gama é uma das equipes tradicionais do Distrito Federal.",
    titulos: "Conquistas estaduais e participações nacionais.",
    curiosidade: "É conhecido como Periquito."
  },
  {
    nome: "Dom Bosco",
    sigla: "DBO",
    cidade: "Cuiabá",
    estado: "MT",
    regiao: "Centro-Oeste",
    fundacao: 1925,
    tipo: "Histórico",
    cor: "#1764a0",
    estadio: "Arena Pantanal",
    historia: "O Clube Esportivo Dom Bosco é uma instituição histórica do futebol mato-grossense.",
    titulos: "Conquistas estaduais e participações regionais.",
    curiosidade: "É um dos clubes tradicionais da capital Cuiabá."
  },
  {
    nome: "Operário-MS",
    sigla: "OPE",
    cidade: "Campo Grande",
    estado: "MS",
    regiao: "Centro-Oeste",
    fundacao: 1938,
    tipo: "Tradicional",
    cor: "#111111",
    estadio: "Estádio Jacques da Luz",
    historia: "O Operário Futebol Clube é um nome histórico do futebol sul-mato-grossense.",
    titulos: "Conquistas estaduais e participações nacionais.",
    curiosidade: "Protagoniza o tradicional Comerário com o Comercial-MS."
  }
   {
    nome: "Bangu",
    sigla: "BAN",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1904,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Moça Bonita",
    historia: "Clube tradicional da Zona Oeste do Rio de Janeiro, com destaque na história do Campeonato Carioca.",
    titulos: "Campeonatos Cariocas de 1933 e 1966.",
    curiosidade: "Foi vice-campeão brasileiro em 1985."
  },
  {
    nome: "Flamengo",
    sigla: "FLA",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1895,
    tipo: "Grande",
    cor: "#e30613",
    estadio: "Maracanã",
    historia: "Fundado em 1895, o Clube de Regatas do Flamengo nasceu como uma agremiação de remo e se tornou um dos clubes mais populares do Brasil.",
    titulos: "Conquistas nacionais e internacionais em diferentes competições.",
    curiosidade: "O futebol do clube foi organizado oficialmente em 1911."
  },
  {
    nome: "Fluminense",
    sigla: "FLU",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1902,
    tipo: "Grande",
    cor: "#a00000",
    estadio: "Maracanã",
    historia: "Fundado em 1902, o Fluminense é um dos clubes tradicionais do futebol brasileiro e tem uma longa história no esporte carioca.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "O clube foi fundado no bairro das Laranjeiras, no Rio de Janeiro."
  },
  {
    nome: "Vasco da Gama",
    sigla: "VAS",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1898,
    tipo: "Grande",
    cor: "#111111",
    estadio: "São Januário",
    historia: "Fundado em 1898, o Club de Regatas Vasco da Gama construiu uma trajetória marcante no esporte brasileiro.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "São Januário foi inaugurado em 1927."
  },
  {
    nome: "Botafogo",
    sigla: "BOT",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1904,
    tipo: "Grande",
    cor: "#111111",
    estadio: "Estádio Nilton Santos",
    historia: "Fundado em 1904, o Botafogo é um dos clubes históricos do futebol carioca, conhecido por sua tradição e por grandes jogadores.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "O clube tem uma estrela solitária como um dos principais símbolos."
  },
  {
    nome: "Corinthians",
    sigla: "COR",
    cidade: "São Paulo",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1910,
    tipo: "Grande",
    cor: "#111111",
    estadio: "Neo Química Arena",
    historia: "Fundado em 1910, o Sport Club Corinthians Paulista construiu uma grande torcida e uma história importante no futebol brasileiro.",
    titulos: "Conquistas estaduais, nacionais e mundiais.",
    curiosidade: "O clube foi fundado por um grupo de trabalhadores no bairro do Bom Retiro."
  },
  {
    nome: "Palmeiras",
    sigla: "PAL",
    cidade: "São Paulo",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1914,
    tipo: "Grande",
    cor: "#087a3d",
    estadio: "Allianz Parque",
    historia: "Fundado em 1914 como Palestra Italia, o Palmeiras é um dos clubes mais tradicionais do futebol brasileiro.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "O clube adotou o nome Palmeiras em 1942."
  },
  {
    nome: "Santos",
    sigla: "SAN",
    cidade: "Santos",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1912,
    tipo: "Grande",
    cor: "#222222",
    estadio: "Vila Belmiro",
    historia: "Fundado em 1912, o Santos ganhou projeção internacional com equipes históricas e grandes jogadores.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "Pelé construiu grande parte de sua carreira no clube."
  },
  {
    nome: "Grêmio",
    sigla: "GRE",
    cidade: "Porto Alegre",
    estado: "RS",
    regiao: "Sul",
    fundacao: 1903,
    tipo: "Grande",
    cor: "#1685bd",
    estadio: "Arena do Grêmio",
    historia: "Fundado em 1903, o Grêmio é um clube tradicional do futebol gaúcho e brasileiro.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "Suas cores tradicionais são azul, preto e branco."
  },
  {
    nome: "Internacional",
    sigla: "INT",
    cidade: "Porto Alegre",
    estado: "RS",
    regiao: "Sul",
    fundacao: 1909,
    tipo: "Grande",
    cor: "#d71920",
    estadio: "Beira-Rio",
    historia: "Fundado em 1909, o Sport Club Internacional tem uma longa trajetória no futebol do Rio Grande do Sul.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "O Beira-Rio é a casa tradicional do clube."
  },
  {
    nome: "Bahia",
    sigla: "BAH",
    cidade: "Salvador",
    estado: "BA",
    regiao: "Nordeste",
    fundacao: 1931,
    tipo: "Tradicional",
    cor: "#1685d1",
    estadio: "Arena Fonte Nova",
    historia: "Fundado em 1931, o Esporte Clube Bahia é uma das principais instituições do futebol nordestino.",
    titulos: "Conquistas estaduais e nacionais.",
    curiosidade: "O clube foi o primeiro campeão brasileiro da era Taça Brasil, em 1959."
  },
  {
    nome: "Sport Recife",
    sigla: "SPT",
    cidade: "Recife",
    estado: "PE",
    regiao: "Nordeste",
    fundacao: 1905,
    tipo: "Tradicional",
    cor: "#d71920",
    estadio: "Ilha do Retiro",
    historia: "Fundado em 1905, o Sport Club do Recife possui uma história importante no futebol pernambucano.",
    titulos: "Conquistas estaduais e nacionais.",
    curiosidade: "O leão é o mascote tradicional do clube."
  },
  {
    nome: "Paysandu",
    sigla: "PAY",
    cidade: "Belém",
    estado: "PA",
    regiao: "Norte",
    fundacao: 1914,
    tipo: "Tradicional",
    cor: "#1764a0",
    estadio: "Curuzu",
    historia: "Fundado em 1914, o Paysandu Sport Club é um dos clubes tradicionais do futebol paraense.",
    titulos: "Conquistas estaduais e regionais.",
    curiosidade: "O clube é conhecido pelo apelido Papão da Curuzu."
  }
];

// =========================================
// NOMES DOS ESTADOS
// =========================================

const nomesEstados = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins"
};

// =========================================
// FUNÇÕES AUXILIARES
// =========================================

function normalizar(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function categoriaClube(clube) {
  if (clube.tipo) return clube.tipo;

  return Number(clube.fundacao) < 1930
    ? "Histórico"
    : "Regional";
}

// =========================================
// CONTADORES
// =========================================

const totalClubes = document.getElementById("totalClubes");
const anoAtual = document.getElementById("anoAtual");

if (totalClubes) {
  totalClubes.textContent = clubes.length;
}

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

// =========================================
// PREENCHE OS ESTADOS
// =========================================

function preencherEstados() {
  const estados = [
    ...new Set(clubes.map(clube => clube.estado))
  ].sort();

  estados.forEach(sigla => {
    const existe = [...filtroEstado.options]
      .some(option => option.value === sigla);

    if (existe) return;

    const option = document.createElement("option");
    option.value = sigla;
    option.textContent = nomesEstados[sigla] || sigla;

    filtroEstado.appendChild(option);
  });
}

// =========================================
// MOSTRA OS CLUBES
// =========================================

function mostrarClubes() {
  const termo = normalizar(busca.value);
  const regiao = filtroRegiao.value;
  const estado = filtroEstado.value;
  const categoria = filtroCategoria.value;

  const encontrados = clubes
    .map((clube, indice) => ({ clube, indice }))
    .filter(({ clube }) => {
      const texto = normalizar([
        clube.nome,
        clube.cidade,
        clube.estado,
        nomesEstados[clube.estado],
        clube.regiao
      ].join(" "));

      const correspondeBusca = texto.includes(termo);
      const correspondeRegiao =
        !regiao || clube.regiao === regiao;
      const correspondeEstado =
        !estado || clube.estado === estado;
      const categoriaAtual = categoriaClube(clube);

      const correspondeCategoria =
        !categoria ||
        categoriaAtual === categoria ||
        (
          categoria === "Histórico" &&
          Number(clube.fundacao) < 1930 &&
          categoriaAtual !== "Grande"
        );

      return (
        correspondeBusca &&
        correspondeRegiao &&
        correspondeEstado &&
        correspondeCategoria
      );
    });

  lista.innerHTML = "";

  encontrados.forEach(({ clube, indice }) => {
    const card = document.createElement("button");

    card.className = "clube-card";
    card.type = "button";
    card.dataset.indice = indice;
    card.style.setProperty(
      "--cor-clube",
      clube.cor || "#e50914"
    );

    const simbolo = document.createElement("span");
    simbolo.className = "clube-simbolo";
    simbolo.textContent =
      clube.sigla || clube.nome.substring(0, 3).toUpperCase();

    const regiaoTexto = document.createElement("span");
    regiaoTexto.className = "clube-regiao";
    regiaoTexto.textContent =
      `${clube.regiao} • ${clube.estado}`;

    const titulo = document.createElement("h3");
    titulo.textContent = clube.nome;

    const cidade = document.createElement("p");
    cidade.textContent =
      `${clube.cidade} - ${clube.estado}`;

    const link = document.createElement("span");
    link.className = "ver-historia";
    link.textContent = "CONHECER HISTÓRIA →";

    card.append(
      simbolo,
      regiaoTexto,
      titulo,
      cidade,
      link
    );

    card.addEventListener("click", () => {
      abrirHistoria(indice);
    });

    lista.appendChild(card);
  });

  quantidade.textContent =
    `${encontrados.length} ${
      encontrados.length === 1
        ? "clube encontrado"
        : "clubes encontrados"
    }`;

  semResultados.hidden = encontrados.length > 0;
  lista.hidden = encontrados.length === 0;
}

// =========================================
// ABRE A FICHA DO CLUBE
// =========================================

function abrirHistoria(indice) {
  const clube = clubes[indice];

  if (!clube) return;

  const preencher = (id, texto) => {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.textContent = texto;
    }
  };

  preencher(
    "modalSigla",
    clube.sigla || clube.nome.substring(0, 3).toUpperCase()
  );

  preencher("modalCategoria", categoriaClube(clube));

  preencher(
    "modalLocal",
    `${clube.regiao} • ${nomesEstados[clube.estado] || clube.estado}`
  );

  preencher("modalNome", clube.nome);
  preencher("modalFundacao", `Fundado em ${clube.fundacao}`);

  preencher(
    "modalEstadio",
    clube.estadio || "Informação não cadastrada"
  );

  preencher(
    "modalCidade",
    `${clube.cidade} - ${nomesEstados[clube.estado] || clube.estado}`
  );

  preencher(
    "modalHistoria",
    clube.historia || clube.resumo || "História em atualização."
  );

  preencher(
    "modalTitulos",
    clube.titulos || "Informações sobre títulos em atualização."
  );

  preencher(
    "modalCuriosidade",
    clube.curiosidades ||
    clube.curiosidade ||
    "Curiosidades em atualização."
  );

  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-aberto");
}

// =========================================
// FECHA A FICHA
// =========================================

function fecharHistoria() {
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-aberto");
}

// =========================================
// PESQUISA E FILTROS
// =========================================

busca.addEventListener("input", mostrarClubes);
filtroRegiao.addEventListener("change", mostrarClubes);
filtroEstado.addEventListener("change", mostrarClubes);
filtroCategoria.addEventListener("change", mostrarClubes);

// =========================================
// LIMPAR FILTROS
// =========================================

const limparFiltros = document.getElementById("limparFiltros");

if (limparFiltros) {
  limparFiltros.addEventListener("click", () => {
    busca.value = "";
    filtroRegiao.value = "";
    filtroEstado.value = "";
    filtroCategoria.value = "";

    mostrarClubes();
  });
}

// =========================================
// BOTÕES DE FECHAMENTO
// =========================================

modal.querySelectorAll("[data-fechar]").forEach(elemento => {
  elemento.addEventListener("click", fecharHistoria);
});

// Fechar clicando fora do conteúdo do modal
modal.addEventListener("click", evento => {
  if (evento.target === modal) {
    fecharHistoria();
  }
});

// Fechar com ESC
document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") {
    fecharHistoria();
  }
});

// =========================================
// INICIALIZAÇÃO
// =========================================

preencherEstados();
mostrarClubes();

} // Fim da verificação dos elementos do HTML
