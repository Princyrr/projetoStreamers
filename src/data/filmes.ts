import { Filme } from '../types/types';

export const filmesDestaque: Filme[] = [
  {
    id: 1,
    titulo: "Interestelar",
    generos: ["Ficção Científica", "Aventura", "Drama"],
    descricao: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
    poster: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2014,
    duracao: "2h 49m",
    classificacao: "12",
    avaliacao: 8.6,
    elenco: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    diretor: "Christopher Nolan"
  },
  {
    id: 2,
    titulo: "Matrix",
    generos: ["Ação", "Ficção Científica"],
    descricao: "Um hacker descobre que o mundo em que vive é uma simulação criada por máquinas superinteligentes e se une a um grupo de rebeldes para lutar contra essa opressão virtual.",
    poster: "https://images.pexels.com/photos/3062543/pexels-photo-3062543.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 1999,
    duracao: "2h 16m",
    classificacao: "14",
    avaliacao: 8.7,
    elenco: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    diretor: "Lana e Lilly Wachowski"
  },
  {
    id: 3,
    titulo: "Vingadores: Ultimato",
    generos: ["Ação", "Aventura", "Ficção Científica"],
    descricao: "Após Thanos eliminar metade das criaturas vivas, os Vingadores buscam uma forma de reverter essa tragédia e restaurar o equilíbrio do universo.",
    poster: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/4048182/pexels-photo-4048182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2019,
    duracao: "3h 1m",
    classificacao: "12",
    avaliacao: 8.4,
    elenco: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    diretor: "Anthony e Joe Russo"
  }
];

export const filmesAcao: Filme[] = [
  {
    id: 4,
    titulo: "Mad Max: Estrada da Fúria",
    generos: ["Ação", "Aventura", "Ficção Científica"],
    descricao: "Em um mundo pós-apocalíptico, Max se une a Furiosa para fugir de um tirano que controla os recursos hídricos e mantém mulheres como propriedade.",
    poster: "https://images.pexels.com/photos/3692638/pexels-photo-3692638.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/6249454/pexels-photo-6249454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2015,
    duracao: "2h",
    classificacao: "16",
    avaliacao: 8.1,
    elenco: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    diretor: "George Miller"
  },
  {
    id: 5,
    titulo: "John Wick",
    generos: ["Ação", "Thriller", "Crime"],
    descricao: "Um ex-assassino sai da aposentadoria para se vingar dos gangsters que mataram seu cachorro, último presente de sua falecida esposa.",
    poster: "https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2014,
    duracao: "1h 41m",
    classificacao: "16",
    avaliacao: 7.4,
    elenco: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
    diretor: "Chad Stahelski"
  },
  {
    id: 6,
    titulo: "Missão Impossível",
    generos: ["Ação", "Aventura", "Espionagem"],
    descricao: "Ethan Hunt e sua equipe embarcam em uma missão para recuperar um material perigoso que caiu em mãos erradas.",
    poster: "https://images.pexels.com/photos/9608069/pexels-photo-9608069.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2018,
    duracao: "2h 27m",
    classificacao: "12",
    avaliacao: 7.7,
    elenco: ["Tom Cruise", "Henry Cavill", "Ving Rhames"],
    diretor: "Christopher McQuarrie"
  },
  {
    id: 7,
    titulo: "Duro de Matar",
    generos: ["Ação", "Thriller"],
    descricao: "Um policial de Nova York tenta salvar sua esposa e outros reféns mantidos por terroristas durante uma festa de Natal em um arranha-céu de Los Angeles.",
    poster: "https://images.pexels.com/photos/6577903/pexels-photo-6577903.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 1988,
    duracao: "2h 12m",
    classificacao: "14",
    avaliacao: 8.2,
    elenco: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"],
    diretor: "John McTiernan"
  },
  {
    id: 8,
    titulo: "Velozes e Furiosos",
    generos: ["Ação", "Crime", "Thriller"],
    descricao: "Um policial infiltrado em uma gangue de corridas ilegais se vê dividido entre o dever e sua lealdade ao líder do grupo.",
    poster: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2001,
    duracao: "1h 46m",
    classificacao: "14",
    avaliacao: 6.8,
    elenco: ["Vin Diesel", "Paul Walker", "Michelle Rodriguez"],
    diretor: "Rob Cohen"
  }
];

export const filmesDrama: Filme[] = [
  {
    id: 9,
    titulo: "O Poderoso Chefão",
    generos: ["Drama", "Crime"],
    descricao: "A saga da família Corleone, que retrata o patriarca Vito Corleone e a ascensão de seu filho Michael como novo chefe da máfia italiana em Nova York.",
    poster: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/3880179/pexels-photo-3880179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 1972,
    duracao: "2h 55m",
    classificacao: "14",
    avaliacao: 9.2,
    elenco: ["Marlon Brando", "Al Pacino", "James Caan"],
    diretor: "Francis Ford Coppola"
  },
  {
    id: 10,
    titulo: "Um Sonho de Liberdade",
    generos: ["Drama"],
    descricao: "Dois homens condenados à prisão perpétua desenvolvem uma forte amizade ao longo dos anos, encontrando consolo e redenção através de atos básicos de decência.",
    poster: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 1994,
    duracao: "2h 22m",
    classificacao: "16",
    avaliacao: 9.3,
    elenco: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    diretor: "Frank Darabont"
  },
  {
    id: 11,
    titulo: "Forrest Gump",
    generos: ["Drama", "Romance"],
    descricao: "As décadas na vida de Forrest Gump, um homem com QI abaixo da média que, inadvertidamente, influencia vários eventos históricos nos Estados Unidos.",
    poster: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 1994,
    duracao: "2h 22m",
    classificacao: "14",
    avaliacao: 8.8,
    elenco: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    diretor: "Robert Zemeckis"
  },
  {
    id: 12,
    titulo: "A Lista de Schindler",
    generos: ["Drama", "História", "Guerra"],
    descricao: "Um empresário alemão salva a vida de mais de mil judeus durante o Holocausto ao empregá-los em suas fábricas.",
    poster: "https://images.pexels.com/photos/8108039/pexels-photo-8108039.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 1993,
    duracao: "3h 15m",
    classificacao: "14",
    avaliacao: 8.9,
    elenco: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
    diretor: "Steven Spielberg"
  },
  {
    id: 13,
    titulo: "O Senhor dos Anéis: O Retorno do Rei",
    generos: ["Aventura", "Fantasia", "Drama"],
    descricao: "Gandalf e Aragorn lideram o Mundo dos Homens contra Sauron, enquanto Frodo e Sam se aproximam do Monte da Perdição com o Um Anel.",
    poster: "https://images.pexels.com/photos/4482843/pexels-photo-4482843.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2003,
    duracao: "3h 21m",
    classificacao: "12",
    avaliacao: 8.9,
    elenco: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    diretor: "Peter Jackson"
  }
];

export const filmesComedia: Filme[] = [
  {
    id: 14,
    titulo: "Se Beber, Não Case!",
    generos: ["Comédia"],
    descricao: "Três amigos acordam de uma despedida de solteiro em Las Vegas sem memória da noite anterior e com o noivo desaparecido.",
    poster: "https://images.pexels.com/photos/374897/pexels-photo-374897.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/3671148/pexels-photo-3671148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2009,
    duracao: "1h 40m",
    classificacao: "16",
    avaliacao: 7.7,
    elenco: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
    diretor: "Todd Phillips"
  },
  {
    id: 15,
    titulo: "Superbad",
    generos: ["Comédia"],
    descricao: "Dois estudantes do ensino médio planejam uma grande festa de formatura onde esperam perder a virgindade, mas seus planos se complicam.",
    poster: "https://images.pexels.com/photos/9607306/pexels-photo-9607306.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2007,
    duracao: "1h 53m",
    classificacao: "18",
    avaliacao: 7.6,
    elenco: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
    diretor: "Greg Mottola"
  },
  {
    id: 16,
    titulo: "Divertida Mente",
    generos: ["Animação", "Comédia", "Família"],
    descricao: "As cinco emoções na mente de uma garota - Alegria, Tristeza, Raiva, Medo e Nojinho - discordam sobre como lidar com sua nova vida em São Francisco.",
    poster: "https://images.pexels.com/photos/19065880/pexels-photo-19065880/free-photo-of-modelo-de-plastico-de-um-cerebro-humano.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2015,
    duracao: "1h 35m",
    classificacao: "Livre",
    avaliacao: 8.1,
    elenco: ["Amy Poehler", "Phyllis Smith", "Bill Hader"],
    diretor: "Pete Docter"
  },
  {
    id: 17,
    titulo: "Meu Malvado Favorito",
    generos: ["Animação", "Comédia", "Família"],
    descricao: "Um vilão planeja roubar a lua, mas sua vida muda quando adota três meninas órfãs.",
    poster: "https://images.pexels.com/photos/3888968/pexels-photo-3888968.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2010,
    duracao: "1h 35m",
    classificacao: "Livre",
    avaliacao: 7.6,
    elenco: ["Steve Carell", "Jason Segel", "Russell Brand"],
    diretor: "Pierre Coffin, Chris Renaud"
  },
  {
    id: 18,
    titulo: "Deadpool",
    generos: ["Ação", "Comédia", "Aventura"],
    descricao: "Um ex-militar se torna um mercenário moralmente flexível com fator de cura acelerado após um experimento que deu errado.",
    poster: "https://images.pexels.com/photos/14115927/pexels-photo-14115927.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2016,
    duracao: "1h 48m",
    classificacao: "18",
    avaliacao: 8.0,
    elenco: ["Ryan Reynolds", "Morena Baccarin", "Ed Skrein"],
    diretor: "Tim Miller"
  }
];

export const filmesLancamentos: Filme[] = [
  {
    id: 19,
    titulo: "Duna: Parte 2",
    generos: ["Ficção Científica", "Aventura", "Drama"],
    descricao: "Paul Atreides se une a Chani e os Fremen em uma guerra de vingança contra os conspiradores que destruíram sua família.",
    poster: "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/1527934/pexels-photo-1527934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2024,
    duracao: "2h 46m",
    classificacao: "14",
    avaliacao: 8.8,
    elenco: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    diretor: "Denis Villeneuve"
  },
  {
    id: 20,
    titulo: "Godzilla e Kong: O Novo Império",
    generos: ["Ação", "Ficção Científica", "Aventura"],
    descricao: "Godzilla e Kong devem se unir contra uma ameaça colossal oculta dentro do nosso mundo, desafiando sua própria existência.",
    poster: "https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2024,
    duracao: "1h 55m",
    classificacao: "12",
    avaliacao: 7.0,
    elenco: ["Rebecca Hall", "Brian Tyree Henry", "Dan Stevens"],
    diretor: "Adam Wingard"
  },
  {
    id: 21,
    titulo: "Planeta dos Macacos: O Reinado",
    generos: ["Ficção Científica", "Ação", "Aventura"],
    descricao: "Muitas sociedades de macacos cresceram desde que César trouxe seu povo à liberdade, enquanto muitos grupos humanos lutam para sobreviver.",
    poster: "https://images.pexels.com/photos/4201659/pexels-photo-4201659.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2024,
    duracao: "2h 25m",
    classificacao: "14",
    avaliacao: 7.6,
    elenco: ["Owen Teague", "Freya Allan", "Kevin Durand"],
    diretor: "Wes Ball"
  },
  {
    id: 22,
    titulo: "Os Fantasmas Ainda se Divertem: Beetlejuice 2",
    generos: ["Comédia", "Terror", "Fantasia"],
    descricao: "A família Deetz retorna à casa onde tudo começou, inadvertidamente liberando Beetlejuice de volta ao mundo dos vivos.",
    poster: "https://images.pexels.com/photos/7801441/pexels-photo-7801441.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/6497119/pexels-photo-6497119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2024,
    duracao: "1h 44m",
    classificacao: "12",
    avaliacao: 7.4,
    elenco: ["Michael Keaton", "Winona Ryder", "Jenna Ortega"],
    diretor: "Tim Burton"
  },
  {
    id: 23,
    titulo: "Alien: Romulus",
    generos: ["Terror", "Ficção Científica"],
    descricao: "Um grupo de jovens colonizadores espaciais enfrenta a forma de vida mais aterrorizante do universo enquanto investiga uma estação abandonada.",
    poster: "https://images.pexels.com/photos/6185245/pexels-photo-6185245.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ano: 2024,
    duracao: "1h 59m",
    classificacao: "16",
    avaliacao: 7.8,
    elenco: ["Cailee Spaeny", "David Jonsson", "Archie Renaux"],
    diretor: "Fede Alvarez"
  }
];

export const todosCategorias = [
  {
    id: "lancamentos",
    titulo: "Últimos Lançamentos",
    filmes: filmesLancamentos
  },
  {
    id: "acao",
    titulo: "Ação e Aventura",
    filmes: filmesAcao
  },
  {
    id: "drama",
    titulo: "Drama",
    filmes: filmesDrama
  },
  {
    id: "comedia",
    titulo: "Comédia",
    filmes: filmesComedia
  }
];

export const buscarFilmePorId = (id: number): Filme | undefined => {
  const todosFilmes = [
    ...filmesDestaque,
    ...filmesAcao,
    ...filmesDrama, 
    ...filmesComedia,
    ...filmesLancamentos
  ];
  
  return todosFilmes.find(filme => filme.id === id);
};

export const buscarFilmes = (termo: string): Filme[] => {
  const todosFilmes = [
    ...filmesDestaque,
    ...filmesAcao,
    ...filmesDrama, 
    ...filmesComedia,
    ...filmesLancamentos
  ];
  
  const termoLowerCase = termo.toLowerCase();
  
  return todosFilmes.filter(filme => 
    filme.titulo.toLowerCase().includes(termoLowerCase) ||
    filme.generos.some(genero => genero.toLowerCase().includes(termoLowerCase)) ||
    filme.descricao.toLowerCase().includes(termoLowerCase) ||
    filme.diretor.toLowerCase().includes(termoLowerCase) ||
    filme.elenco.some(ator => ator.toLowerCase().includes(termoLowerCase))
  );
};