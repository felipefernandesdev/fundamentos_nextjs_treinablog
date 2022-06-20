import { BlogPost } from "../../@types/BlogPostInterface";

export default function useIndex() { 
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'O que é FastAPI?',
      description: 'Neste artigo vamos falar um pouco sobre o funcionamento, história e quais as principais características do framework web FastAPI.',
      picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/03/o-que-e-fastapi.png',
      slug: 'o-que-e-fastapi',      
    },
    {
      id: '2',
      title: 'Formas de se trabalhar com Bootstrap 5',
      description: 'Existem algumas maneiras diferentes de se trabalhar com Bootstrap em nossos projetos, vamos descobrir todas as formas do uso do framework.',
      picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/04/Formas_de_se_trabalhar_com_o_Bootstrap_5.jpg',
      slug: 'formas-de-se-trabalhar-com-bootstrap-5',
    }
  ];

  
  return {
    posts
  }

}