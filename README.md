# Projeto de Lista de Pokémons

Este projeto foi desenvolvido com React e utiliza a API [PokeAPI](https://pokeapi.co/) para listar, selecionar e comparar Pokémons.

## Funcionalidades
- **Lista de Pokémons:** Exibe uma lista de Pokémons com suas imagens.
- **Detalhes de Pokémons:** Mostra as informações detalhadas de cada Pokémon.
- **Seleção de Pokémons:** Permite selecionar dois Pokémons para comparar suas estatísticas.
- **Comparação de Pokémons:** Mostra uma comparação entre dois Pokémons selecionados.


![Logo](assets/logo.png)



## Tecnologias Utilizadas
- React
- React Router Dom
- API PokeAPI
- CSS Modules

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto-pokemon.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd projeto-pokemon
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o projeto:
   ```bash
   npm start
   ```

## Estrutura de Arquivos
- **/src**
  - **/components**
    - `Header.jsx`
    - `PokemonList.jsx`
    - `PokemonItem.jsx`
  - **/pages**
    - `PokemonDetails.jsx`
    - `PokemonSelector.jsx`
    - `PokemonComparison.jsx`
  - **/context**
    - `PokemonContext.jsx`
  - **/styles**
    - `PokemonList.module.css`
    - `PokemonDetails.module.css`
    - `PokemonSelector.module.css`

## Contribuições
Sinta-se à vontade para fazer um fork deste repositório e abrir pull requests.
```

### 2. Adicionar e dar commit ao projeto no Git

Se o seu projeto já está inicializado com Git, siga os comandos abaixo. Caso ainda não tenha inicializado o Git no seu projeto, faça isso com o comando `git init` antes de seguir os próximos passos.

```bash
# Adicionar todos os arquivos
git add .

# Dar commit com uma mensagem
git commit -m "Primeiro commit - Adicionado projeto de Pokémons"

# Enviar para o repositório remoto (se já tiver configurado um)
git push origin main
```

### 3. Subir o projeto para o GitHub

Caso ainda não tenha o repositório no GitHub, crie um novo repositório, e então siga as instruções para adicionar o repositório remoto ao seu projeto:

```bash
git remote add origin https://github.com/seu-usuario/projeto-pokemon.git
git branch -M main
git push -u origin main
```

# Pos_React_Pokemon_app
