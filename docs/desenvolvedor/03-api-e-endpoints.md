# Documentação da API (RESTful) e Endpoints

A API do Portal do Candidato segue os padrões RESTful e serve como a espinha dorsal da aplicação, conectando o front-end ao banco de dados. Toda a documentação dos endpoints está disponível de forma interativa através do Swagger UI.

### 1. Acessando a Documentação Interativa (Swagger)

Com o ambiente Docker em execução, a documentação da API fica instantaneamente disponível e pronta para uso.

> **URL do Swagger:** [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

Nesta página, você poderá:
-   Visualizar todos os endpoints disponíveis, agrupados por funcionalidade.
-   Verificar os parâmetros necessários para cada requisição (path, query, body).
-   Inspecionar os schemas dos corpos de requisição e resposta.
-   Testar as chamadas de API diretamente pelo navegador.

### 2. Fluxo de Autenticação (JWT)

A API utiliza **JWT (JSON Web Token)** para proteger rotas sensíveis, garantindo que apenas usuários autenticados possam acessar ou modificar dados. O fluxo padrão é:

1.  **Login:** O front-end envia as credenciais (email e senha) para o endpoint de autenticação (ex: `POST /auth/login`).
2.  **Recebimento do Token:** Se as credenciais estiverem corretas, a API retorna um token JWT válido.
3.  **Envio do Token:** Para acessar rotas protegidas, o front-end deve incluir este token no cabeçalho (header) de cada requisição subsequente, utilizando o seguinte formato:
    ```http
    Authorization: Bearer <seu_token_jwt>
    ```

### 3. Principais Grupos de Endpoints

Os endpoints da API são organizados em torno das principais entidades do portal. Abaixo estão os grupos que você encontrará no Swagger:

-   **Autenticação:**
    -   Endpoints responsáveis por criar contas de usuário e gerar tokens de acesso.
    -   Exemplos: `POST /auth/register`, `POST /auth/login`.

-   **Candidatos:**
    -   Endpoints para gerenciar as informações dos candidatos. Permitem a criação, visualização e atualização de perfis.
    -   Exemplos: `GET /candidatos/{id}`, `PUT /candidatos/{id}`.

-   **Processos Seletivos:**
    -   Endpoints que listam os processos seletivos disponíveis e seus detalhes.
    -   Exemplos: `GET /processos-seletivos`, `GET /processos-seletivos/{id}`.

-   **Inscrições:**
    -   Endpoints para gerenciar a inscrição de um candidato em um processo seletivo. Permitem criar uma nova inscrição e visualizar as inscrições existentes de um usuário.
    -   Exemplos: `POST /inscricoes`, `GET /candidatos/{id}/inscricoes`.