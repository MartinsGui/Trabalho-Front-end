# Coleção de Carrinhos HotWheels - CRUD

Este projeto é uma aplicação desenvolvida em ReactJS para gerenciar uma coleção de carrinhos HotWheels. Utiliza React Router para navegação entre páginas, Material-UI para estilização e Axios para comunicação com a API.

## Framework (Create React App)

O projeto foi criado utilizando o `create-react-app`, uma ferramenta que configura um ambiente de desenvolvimento moderno e otimizado para React. Ela inclui um servidor de desenvolvimento, suporte a módulos ES, e uma configuração básica de Webpack.

## Estilização (Material-UI)

Para estilização, foi utilizada a biblioteca Material-UI, que proporciona um conjunto de componentes de interface do usuário prontos para uso e uma estilização consistente e moderna. Material-UI foi escolhido devido à sua capacidade de personalização e integração com React.

## Rotas

A navegação da aplicação é gerenciada pela biblioteca `react-router-dom`. As páginas da aplicação são definidas no componente principal `App.js` e são acessíveis através das seguintes rotas:

- **Home:** `/`
- **Sobre:** `/about`
- **Carros:** `/cars`
- **Adicionar Carro:** `/add-car`

As rotas são configuradas no arquivo `App.js`, que também envolve as páginas com o layout de navegação.

## Componentes

- **NavBar:** Componente de navegação que utiliza o `AppBar` e `Drawer` do Material-UI para criar um menu de hambúrguer interativo.
- **Home:** Página inicial com uma imagem e descrição do projeto.
- **About:** Página com informações adicionais sobre o projeto.
- **Cars:** Página que lista todos os carros adicionados e permite exclusão.
- **AddCar:** Página com formulário para adicionar novos carros à coleção.
- **CarList:** Componente que exibe a lista de carros.


## Validação de Formulários

A validação dos formulários é gerenciada pelo `react-hook-form` combinado com a biblioteca `zod`. Estas ferramentas garantem que os dados inseridos estejam corretos antes de serem submetidos.

## Testes Funcionais

O projeto inclui um testes funcionais para garantir que a funcionalidade principal esteja funcionando como esperado. Estes testes são escritos utilizando a biblioteca `jest` e `react-testing-library`.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/MartinsGui/Trabalho-Front-end.git


2. Baixando as dependências 
    npm i ou npm install

3. Rodar o programa (dentro da pasta do arquivo)
    npm start
## Aautor 

Guilherme Martins