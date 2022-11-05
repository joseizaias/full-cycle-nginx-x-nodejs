# full-cycle-nginx-x-nodejs

Serão criados três containers
-> dbmysql -> armazena o mysql com o database: fcdb
-> nginx -> armazena o ngxinx que será usado como proxy reverso
-> nodeapp -> que armazena a aplicação no nodejs

<< É necessário ter o docker e docker-compose previamente instalados>>

primeiro clone o repositório e depois acesse a pasta onde os arquivos foram instalados e execute o comando:
-> docker-compose up -d

os três containers serão criados e configurados.

depois dos containers estarem instalados e rodando, 
para acessar a aplicação, acessar a seguinte url via um browser (Edge, Chrome, Firefox, etc...)
-> http://localhost:8888

este link acessa o nginx que refireciona para o nodeapp. No nodeapp a aplicação utiliza a porta: 3333, que só é 
acessada via o nginx.