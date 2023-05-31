# API de Loja de Itens Medievais

API de Loja de Itens Medievais
Este projeto consiste na criação de uma API de loja de itens medievais, utilizando Typescript. Através desta API, será possível realizar as operações básicas de um banco de dados, conhecidas como CRUD (Create, Read, Update e Delete).

A aplicação será desenvolvida com camadas distintas, incluindo Models, Services e Controllers, para garantir uma estrutura organizada e modular. O banco de dados utilizado será o MySQL, onde serão armazenadas as informações dos produtos da loja.

Serão criados endpoints para realizar operações de leitura e escrita no banco de dados, permitindo a interação com os itens medievais disponíveis na loja.

## Tecnologias utilizadas
**TypeScript**: Linguagem de programação utilizada para o desenvolvimento da API.
- **Node.js**: Ambiente de execução JavaScript utilizado para rodar a aplicação no servidor.
- **MySQL**: Banco de dados relacional utilizado para armazenar as informações dos produtos da loja.
- **Express**: Framework web utilizado para criar as rotas e gerenciar as requisições HTTP na API.
- **Docker**: Plataforma de contêineres utilizada para encapsular e isolar a aplicação e o banco de dados em ambientes reproduzíveis.
- **Docker Compose**: Ferramenta utilizada para orquestrar e gerenciar múltiplos contêineres Docker de forma simplificada.
- **npm**: Gerenciador de pacotes utilizado para instalar as dependências e executar comandos na aplicação.

## Pré-requisitos

Certifique-se de ter os seguintes componentes instalados em seu sistema antes de prosseguir:

- Node.js
- Docker
- Docker Compose

## Configuração do ambiente

1. Clone este repositório em sua máquina:

```shell
git clone git@github.com:matheusPrado007/project-smith.git
```
2. Navegue até o diretório do projeto:
```cd project-smith/ ```
3. Instale as dependências do projeto:
4. ```npm install```
5. Inicie os contêineres Docker usando o Docker Compose:
6. ```docker-compose up -d ```
7. Aguarde até que os contêineres sejam iniciados e o ambiente esteja configurado corretamente.
