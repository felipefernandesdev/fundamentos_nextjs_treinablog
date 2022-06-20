import type { NextPage } from "next";
import PostBody from "../../ui/components/PostBody/PostBody";

const MeuPost: NextPage = () => {
  return <>
    <PostBody post={
      {
        id: '',
        title: 'O que é FastAPI?',
        picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/03/o-que-e-fastapi.png',
        content: (
          <>
            <p>Quando falamos de frameworks para o desenvolvimento web no ecossistema Python o primeiro nome que vem à cabeça é quase sempre Django ou então o Flask, porém o ecossistema Python é bem rico e possui muitos outros frameworks voltados para o desenvolvimento de API’s, um deles é o FastAPI, que é relativamente novo e que vem ganhando um número cada vez maior de entusiastas. Neste artigo vamos falar um pouco sobre o funcionamento e quais as características desse framework.</p>
            <h3>O que é FastAPI?</h3>
            <p>O FastAPI é um framework Python focado no desenvolvimento de API’s, tem como principais características ser moderno, rápido e simples. É um framework relativamente novo, teve a sua primeira versão lançada no dia 15 de Novembro de 2018, mas não se engane, apesar de ser novo ele não é inferior aos outros frameworks que já estão no mercado há mais tempo, como o Django ou o Flask.</p>
            <h3>Um pouco da história do FastAPI</h3>
            <p>O FastAPI foi desenvolvido e atualmente é mantido por Sebastián Ramírez, o mesmo diz no próprio site do framework que teve a ideia de criar o FastAPI a partir de algumas dificuldades encontradas ao utilizar os frameworks que existiam na época para realizar a tarefa de desenvolver API’s, além de que na maioria das vezes esses frameworks não possuíam o suporte para os recursos mais modernos do Python, como o recurso de type hints por exemplo.</p>
          </>
        ),
      description: '',
      slug:''
      }
    } />
  </>
}

export default MeuPost;