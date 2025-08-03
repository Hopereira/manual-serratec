# Ambiente Local com Docker

Este projeto é configurado para ser executado inteiramente com Docker, o que simplifica drasticamente a configuração do ambiente de desenvolvimento.

### 1. Pré-requisitos

-   **Docker e Docker Compose:** Essenciais para a orquestração dos contêineres. A forma mais fácil de obtê-los é instalando o Docker Desktop.
-   **Git:** Para clonar o repositório.

### 2. Passo a Passo para Execução

#### **Passo 2.1: Clonar o Repositório**

Abra seu terminal e execute os comandos abaixo para clonar o projeto e entrar na pasta.

```bash
git clone [https://github.com/RTIC-STEM/2024_2_Serratec_Portal_do_Candidato.git](https://github.com/RTIC-STEM/2024_2_Serratec_Portal_do_Candidato.git)
cd 2024_2_Serratec_Portal_do_Candidato

Você tem toda a razão. Peço desculpas pelo erro de formatação. O passo 2.2 não estava claro como um bloco de código executável.

Vamos corrigir o arquivo desenvolvedor/02-ambiente-local.md inteiro para garantir que todos os comandos e blocos de código estejam em Markdown correto e fáceis de copiar.

Pode substituir todo o conteúdo do arquivo desenvolvedor/02-ambiente-local.md por este texto corrigido:

Markdown

# Ambiente Local com Docker

Este projeto é configurado para ser executado inteiramente com Docker, o que simplifica drasticamente a configuração do ambiente de desenvolvimento.

### 1. Pré-requisitos

-   **Docker e Docker Compose:** Essenciais para a orquestração dos contêineres. A forma mais fácil de obtê-los é instalando o Docker Desktop.
-   **Git:** Para clonar o repositório.

### 2. Passo a Passo para Execução

#### **Passo 2.1: Clonar o Repositório**

Abra seu terminal e execute os comandos abaixo para clonar o projeto e entrar na pasta.

```bash
git clone [https://github.com/RTIC-STEM/2024_2_Serratec_Portal_do_Candidato.git](https://github.com/RTIC-STEM/2024_2_Serratec_Portal_do_Candidato.git)
cd 2024_2_Serratec_Portal_do_Candidato
Passo 2.2: Criar o Arquivo de Variáveis de Ambiente (.env)
O projeto utiliza um arquivo .env na raiz para configurar portas e credenciais. O método recomendado é copiar o arquivo de exemplo .env.example (se ele existir no repositório).

Execute o seguinte comando no terminal:

Bash

# Este comando copia o arquivo de exemplo para um novo arquivo .env
# que será efetivamente usado pela aplicação.
cp .env.example .env
!!! note "Caso o .env.example não exista"
Se o arquivo .env.example não estiver no repositório, crie manualmente um arquivo chamado .env na raiz do projeto e cole o seguinte conteúdo dentro dele:

```ini
POSTGRES_DB=candidato
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
DB_PORT=5432
BACKEND_PORT=8080
FRONTEND_PORT=3000
```
Passo 2.3: Construir e Iniciar os Contêineres
Este é o comando principal. Ele irá construir as imagens e iniciar todos os serviços.

Bash

docker-compose up --build
Dica: Para rodar os contêineres em segundo plano (modo "detached"), use a flag -d: docker-compose up -d --build.

Passo 2.4: Acessar os Serviços
Após a execução, o ambiente estará disponível:

Front-End (Portal): http://localhost:3000

Back-End (API Docs): http://localhost:8080/swagger-ui/index.html

Banco de Dados (Host): Acesso externo na porta 5433.

3. Gerenciando os Contêineres
Para parar todos os serviços:

Bash

docker-compose down
Para visualizar os logs de um serviço (ex: backend):

Bash

docker-compose logs -f backend
Para verificar os contêineres em execução:

Bash

docker ps