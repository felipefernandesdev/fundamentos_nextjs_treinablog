import type { NextPage } from "next";
import PostBody from "../../ui/components/PostBody/PostBody";

const MeuPost: NextPage = () => {
  return <>
    <PostBody post={{
        id: '',
        
        title: 'Formas de se trabalhar com Bootstrap 5',
        picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/04/Formas_de_se_trabalhar_com_o_Bootstrap_5.jpg',
        content: (
          <>
            <p>Existem diferentes formas de se trabalhar com Bootstrap em nossos projetos. Hoje vamos descobrir que maneiras são essas.</p>
            <p>Muito diferente do que se imagina, o Bootstrap pode ser adicionado de diversas formas. Logo abaixo veremos em detalhes cada uma dessas opções, porém, muitas pessoas ainda não gostam de trabalhar com Bootstrap em seus projetos, por falta de conhecimento em relação ao framework, ou, por acreditar que todos os componentes disponíveis ficarão iguais em todos os sites. Vamos quebrar esse tabu e aprender a trabalhar com o framework. Vamos saber também todos as maneiras possíveis.</p>
            <h3>Bootstrap via CDN</h3>
            <p>Primeiramente, precisamos saber o que é “CDN”, a sigla vem de Content Delivery Network, que nada mais é, do que um conjunto de servidores espalhados pelo mundo, para que seu conteúdo seja acessado de uma forma estável. Caso queira aprender em mais detalhes sobre CDN’s, recomendo a leitura do artigo O que é CDN? que temos aqui no nosso blog.</p>
            <p>Agora que temos essa informação, vamos entender essa forma de importação. Quando usamos o Bootstrap dessa forma, todas às vezes que alguém carregar o nosso site, o servidor mais próximo da localidade de quem está acessando, irá fornecer os estilos para a página. Independentemente de você fazer uso, se é apenas do sistema de grid, ou de algum componente específico. Logo, seu carregamento irá carregar estilos desnecessários. Causando lentidão dependendo da velocidade da internet do usuário.</p>
            <p>Outro ponto importante é que, neste caso, não é possível a alteração de nenhuma variável, ou classe do Bootstrap. Você terá que utiliza-lo da maneira com que aparecerem de exemplo no seu site oficial. Sendo possível, eventualmente, sobrescrever as classes se quiser alterar alguma cor, borda ou espaçamento. Ainda assim, é uma prática não recomendada, pelo fato da possibilidade de causar conflitos entre as classes.</p>
            <p>Certamente, essa é uma forma de se utilizar bem simples. Não requer nenhuma habilidade especial para efetuar esse procedimento. O desenvolvedor consegue fazer o uso de todas as classes necessárias sem nenhum problema. Justo da alta estabilidade dos servidores, torna a implementação via CDN a forma mais comum do uso do Bootstrap.</p>
          </>
      ),
      description: '',
      slug:''
      }} />
  </>
}

export default MeuPost;