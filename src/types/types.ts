export interface Filme {
  id: number;
  titulo: string;
  generos: string[];
  descricao: string;
  poster: string;
  backdrop: string;
  logo?: string;
  ano: number;
  duracao: string;
  classificacao: string;
  avaliacao: number;
  elenco: string[];
  diretor: string;
}