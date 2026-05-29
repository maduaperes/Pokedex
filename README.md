# Pokedex

## Visão Geral
A **Pokedex** é uma aplicação web interativa desenvolvida com tecnologias front-end nativas (HTML5, CSS3 e JavaScript). O projeto tem como objetivo principal consumir uma API pública externa baseada no protocolo REST para buscar, tratar e renderizar dinamicamente informações detalhadas sobre diferentes criaturas do universo Pokémon, utilizando identificadores textuais (nomes) ou numéricos (IDs).

---

## Funcionalidades Principais
* **Consulta Dinâmica:** Busca assíncrona de dados estruturados utilizando parâmetros de entrada flexíveis (ID ou nome).
* **Consumo de API RESTful:** Integração robusta com serviços de dados externos para recuperação de informações em tempo real.
* **Manipulação Ativa do DOM:** Renderização em tempo real de atributos essenciais, incluindo nomes, identificadores e os respectivos sprites visuais oficiais.
* **Tratamento de Exceções:** Sistema integrado para gerenciar falhas de rede ou entradas inválidas (como registros não localizados na base de dados).

---

## Tecnologias e Conceitos Utilizados
* **Estruturação de Interface:** HTML5 semântico
* **Estilização e Layout:** CSS3 com foco em responsividade e centralização de elementos
* **Programação e Lógica:** JavaScript Assíncrono (Vanilla JS) utilizando a API Fetch e Promises
* **Fonte de Dados:** PokéAPI (serviço público e gratuito de dados estruturados)

---

## Estrutura do Projeto
Organização dos arquivos que compõem o repositório:

```text
Pokedex/
├── index.html       # Estrutura base da interface, campos de entrada e containers de exibição
├── style.css        # Identidade visual, estilização dos componentes e regras de responsividade
└── app.js           # Lógica de requisição assíncrona, tratamento de JSON e atualização do DOM

```

---

## Detalhes de Implementação

### Camada de Apresentação (HTML/CSS)

A interface fornece um campo de captura de texto otimizado associado a um contêiner dinâmico de resultados. O layout foi desenvolvido para se adaptar a diferentes dimensões de tela, garantindo consistência visual tanto em ambientes desktop quanto em dispositivos móveis.

### Camada de Comportamento (JavaScript)

A lógica central baseia-se no uso de funções assíncronas (`async/await`) para gerenciar as requisições HTTP direcionadas aos endpoints da PokéAPI. Após o retorno bem-sucedido dos dados em formato JSON, o script extrai as propriedades necessárias e atualiza os nós específicos da árvore do DOM de forma limpa, substituindo os estados anteriores.

---

## Como Executar o Projeto

1. **Clonar o repositório:**
```bash
git clone [https://github.com/maduaperes/Pokedex.git](https://github.com/maduaperes/Pokedex.git)

```


2. **Navegar até a pasta:**
```bash
cd Pokedex

```


3. **Executar a aplicação:**
Abra o arquivo `index.html` diretamente em qualquer navegador web moderno ou utilize utilitários de servidor local, como a extensão Live Server.

---

## Objetivo Educacional

Este repositório atua como um projeto prático de portfólio desenvolvido para consolidar os seguintes tópicos técnicos:

* Manipulação e controle de requisições assíncronas em JavaScript.
* Parsing e tratamento de objetos JSON complexos.
* Atualização de elementos de interface de forma reativa a eventos do usuário.
