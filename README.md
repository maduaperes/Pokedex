# Pokédex

## Visão Geral

A **Pokédex** é uma aplicação web simples desenvolvida com HTML, CSS e JavaScript que permite buscar informações de Pokémon por nome ou ID.  
O projeto consome dados de uma API pública para exibir informações como nome, imagem e características básicas do Pokémon pesquisado.

---

## Estrutura do Projeto

```
├── index.html
├── style.css
├── app.js
├── README.md
└── .gitattributes
```


---

## Funcionalidades

- Busca de Pokémon por nome ou ID
- Exibição de dados dinâmicos via API
- Interface simples e responsiva
- Exibição de imagem oficial do Pokémon
- Atualização dinâmica da área de resultados

---

## Interface

### index.html
Página principal da Pokédex. Contém:

- Campo de entrada para nome ou ID do Pokémon  
- Botão de busca  
- Área de exibição das informações retornadas pela API  

---

## JavaScript

### app.js
Responsável por toda a lógica da aplicação, incluindo:

- Requisição à API de Pokémon
- Processamento dos dados retornados
- Atualização dinâmica do DOM
- Tratamento de erros (Pokémon não encontrado, requisições inválidas)

---

## CSS

### style.css
Define o visual da Pokédex, incluindo:

- Layout centralizado da interface
- Estilização do input e botão
- Organização da área de exibição de informações
- Responsividade básica para diferentes tamanhos de tela

---

## API Utilizada

O projeto utiliza a API pública:

- https://pokeapi.co/

Ela fornece dados completos sobre Pokémon, incluindo sprites, nomes, tipos e estatísticas.

---

## Como Executar

1. Baixe ou clone o repositório
2. Abra o arquivo `index.html` em um navegador moderno
3. Digite o nome ou ID de um Pokémon
4. Clique em **Buscar**

---

## Exemplo de Uso

- Pikachu
- Charizard
- 25
- 150

---

## Objetivo

O objetivo do projeto é praticar:

- Consumo de APIs REST
- Manipulação de DOM com JavaScript puro
- Tratamento de dados assíncronos
- Criação de interfaces interativas

---
