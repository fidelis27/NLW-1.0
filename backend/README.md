##  Server

Para executar o projeto para baixa-lo e executar na pasta raiz o seguinte comando:
yarn ou npm install

Em seguida para executa-lo, para executar o comando:
yarn dev

Pronto sua aplicação já esta rodado em:

localhost:3333

O server foi criado em nodejs com ts, com as seguintes rotas:

GET '/items' listar todos items
GET '/items/:point_id' traz apenas o itens do ponto de coleta especifico
GET '/points/', traz todo os pontos de coleta
GET '/points/:id', traz o ponto de coleta especifico

POST '/points/', cria o ponto de coleta enviando junto a imagem

##Tecnologia usadas
celebrate (validação de dados)
cors (define meios para um servidor permitir que seus recursos sejam acessados por uma página web)
express ( ele cria abstrações de rotas, middlewares e muitas outras funções para facilitar a criação tanto de API's )
knex (orm)
multer ( gerenciado de upload images)
sqlite3 (banco de dados sql)
ts-node-dev (compilador ts e tem a mesma função de reaload como nodemom)
