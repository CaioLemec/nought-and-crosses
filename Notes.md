
## Iniciando no React: (START TEORICO)

## O que é Node? 
Node é uma plataforma que possibilita rodar o JavaScript sem a utilização do browser.
Ele é composto por muitos recursos que irão auxiliar na programação no Backend e no Frontend.
Exemplo: (Motor V8, encontrado em browsers) API'S (File System, HTTP, Websocket).

## Como instalar o Node?
É recomendado instalar o node via terminal, pois fazendo isso possuímos um maior controle além de 
ser mais fácil realizar alterações posteriormente. Basta instalar para seu sistema operacional.
```https://nodejs.org/en/download/package-manager/#windows```

## O que é NPM?
NPM (Node packed manager) é gerenciador de pacotes. Ele que gerencia as dependências de 
um determinado projeto. 
Obs: No linux nós já usavamos um gerenciador de pacote especifico da distro Ubuntu quando 
usávamos o comando <strong>apt-get</strong>.
No Windowns temos o <strong>chocolatey</strong>, No MacOs temos o <strong>Homebew</strong>.

## O que é Yarn?
Yarn é um gerenciador de pacotes concorrente do NPM. Yarn foi desenvolvido pelo facebook com 
a promessa de ser um gerenciador de pacote mais rápido. As diferenças eram notáveis no ínicio, 
porem hoje o NPM e YARN são similares.

## O que é React?
Antes de entender o que é o react, devemos entender a diferença entre biblioteca e frameworks.

<strong>Framework</strong>: Caixa de ferramenta, cheia de recursos. O foco dos frameworks é mais amplo, eles 
podem ser coleções de api's e até mesmo bibliotecas. Ex: (Angular, Ionic, Next).

<strong>Biblioteca</strong>: Diferentemente dos frameworks, bibliotecas resolvem problemas pequenos, direcionados.
Elas são uma coleção de códigos voltados a resolver um determinado tipo de problema.
Ex: (React, moment, jQuery).


## Beleza mas, o que é React?
É uma biblioteca de “componentização” voltada para desenvolvimento web, ele é responsável 
por fazer a camada de view em um projeto. Esta biblioteca separa tudo em pequenos componentes 
para depois juntar e formar uma interface. O conceito de “componentização” pode ser traduzido 
como reutilização, ou seja, um componente pode ser reutilizado diversas vezes em uma aplicação.
OBS: O React Native, é o mesmo sistema de componentização, porem voltado para desenvolvimento mobile.

## Criando um projeto com React.

No terminal, dentro da pasta do seu projeto basta usar a linha de comando: 
```npx create-react-app nome-do-projeto.```
Depois de abrir o projeto com ```npm start```, não poderemos fechar o terminal, a solução é criar outra aba de
terminal com o comando ```control+shift+t``` para abrir e editar o projeto.

## O que é e para que serve ITCSS (Inverted Triangle CSS)?

ITCSS é a forma de arquitetar um projeto visando mitigar pequenos problemas do CSS. Que envolve basicamente visualizar todo o CSS em camadas, que montadas formam um triângulo de cabeça para baixo. Essa organização hierárquica ajuda a organizar o CSS da forma mais efetiva, diminuindo conflitos e sobrescritas.

<h3> Primeiro nível - Settings </h3>

A camada do <strong>topo</strong> leva as settings onde retém arquivos como colors.css 
size.css e spacing.css. Esses arquivos levam variáveis como as do padrão CSS e utilizam-se
de parâmetros da root. Ex: ```--var-color-primary: #fff``` ```--sizing-small: 10rem```

<h3> Segundo nível - Tools </h3>

O segundo nível leva a pasta tools, onde botamos funções que refletem a comportamentos repetitivos. 
e aplicam-se a diferentes componentes dentro do projeto. Exemplo: Centralizar um objeto.

<h3> Terceiro nível - Generic </h3>

O terceiro nível leva a pasta generic, onde podemos encontrar arquivos como reset.css.

<h3> Quarto nível - Base </h3>

Aqui ficarão as estilizações básicas, a última camada que veremos seletores em tags diretamente. 
Portanto aqui ficarão estilos para os headings h1-h6, blockquotes, a, buttons, etc.

<h3> Quinto nível - Objects </h3>

O quinto nível são os objects onde tem como principal caracterisca ser simples, facil reaproveitamento
em contextos diferentes. Pequenos pedaços da interface que devem evitar receber espaçamentos e posicionamentos. 
<strong>STATELESS</strong>. EX: LOGO, TITLE.

<h3> Sexto nível - Components </h3>

O sexto nível são os components onde tem como principal característica ser composto por objetcs, não
tem facil reutilização. O component pode ter propriedades de espaçamento e posicionamentos em seus elementos 
internos, porem não pode-se aplicar ao component em si. <strong>STATEFULL</strong>. Ex: Header compondo title e logo.

<h3> Sétimo nível - Trumps </h3>

Essa camada é a responsável pela maior especificidade de todas. A ideia dos trumps é que eles sejam usados para 
classes reativas, comumente aquelas que queremos que aconteça não importa o que aconteça, o clássico .hidden.
Faz todo sentido que para esses casos, o !important seja utilizado.  É importante que você não confunda a existência 
dessa camada e saia colocando tudo aqui, essa camada somente deverá ser utilizada em casos que não vá afetar a 
estrutura da página.

<li> A especificidade vai crescendo linearmente e lentamente de camada a camada.</li>
<li> Progressivamente adicionamos estilos, nunca removemos.</li>
<li> Cada camada é mais detalhada e explícita que a anterior.</li>
<li> Se você cria um objeto genérico, ele pode ser extendido/reutilizado, aproveite isso.</li>
<li> Tudo que você cria tem um lugar específico para ficar.</li>
<li> Trabalhando assim, diga adeus aos problemas de especificidade.</li>

## Estrutura com RSCSS

O RSCSS é um "método" para melhor a maneira como o código é escrito e facilitar sua manutenção.
Nossos componentes, estes objects e components dentro do react, serão escritos com duas palavras
para descrer o que é aquele object ou component. A classe destes componentes, serão o mesmo nome
porem separados por um hífem. Na estrutura do CSS é obrigado sempre descrever o pai para seu
filho direto usando o sinal de >. OBS: Variações levam 1 palavra inciando-se com hífem.

<h3> Exemplo: </h3>

```
NOME DA PASTA DE UM OBJECT ALEATÓRIO: AboutLink    ( PODE SER OBJECT OU COMPOENENT)
NOME DA CLASSE DESTE OBJECT ALEATÓRIO: about-link.
PEGANDO UM FILHO DIRETO: about-link > .button  (EXEMPLO DE UM BUTTON COMO SENDO FILHO DIRETO DO OBJECT EM QUESTÃO)
PEGANDO UMA VARIAÇÃO DE UM FILHO: about-link > .button.-variation (EXEMPLO DE UMA VARIAÇÂO DO BUTTON)
```
