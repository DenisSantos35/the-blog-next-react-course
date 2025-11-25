# Servidor

Os requisitos para deploy vão ser:

- Um servidor linux com IP válido que não mude, com acesso SSH (vou usar Ubunto 24.07 na Google Cloud Platgorm)
 - Um domínio que você possa configurar registros de DNS (Registro tipo A já funciona)
 
Comandos para iniciar o site do zero:
 ```sh
 # Ter o node instalado
 # instalar todos os pacotes
  npm i 
# configure o .env.local
  npm run migrate

  npm run seed # Seed é opcional

# build do next
  npm run build
  npm start # apenas paa teste
 ```

 Documentação para subir um servidor

  - acessar https://console.cloud.google.com/
  - criar o projeto
  - No menu de navegação Acessar: (Compute Engine - Instâncias de VM)
  - Em Instâncias de VM vamos criar um PC dentro da rede da google
    - Clicar em criar instância

    **Em configuração de máquina:**
      - Colocar nome da instância (the blog)
      - Escolher Região (south-america) // onde estará o servidor
      - Excolher tipos de máqunas para cargas de trabalhos comuns, otimizadas para custo e flexibilidade: (E2)
      - No tipo de máquina manter (e2-medium (2vCPU, 1 núcleos, 4 GB memória))
        obs: tem outros tipos mais em conta
      - Em configurações avançadas não mecher em nada.
    
    **Em SO e armazenamento**
      - Selecionar imagem - mudar: (versão: Ubuntu 24.04 LTS (x86/64, amd64 noble image built o 2025-04-15, ),Tipo de disco: Disco permanete equilabrado, Tamanho do disco: 10 GB)
      - configuração avançada não mecher em nada.

    **Protecao de dados**
      - Não mecher em nada

    **Rede**
      - Em firewall permitir (Permitir tráfego HTTP, Permitir tráfego HTTPS)
    
    **Observabilidade**
      - Não mecher em nada
    
    **Segurança**
      - Não mecher em nada

    **Avançado**
      - Não mecher em nada
    
    --clicar em Criar a máquina

    Após criado vamos retornar para instância de VM, onde teremos o nosso
      - IP interno:

      - IP externo: 
        -- este vamos redirecionar para o nosso subdominio.
        **obs: este IP não é fixo, para mantelo fixo e necessario fixar**
         -- para fixar ir em menu de navegação:
          - REDE VPC
            - ENDEREÇOS IP
              - Voce verá os ips interno e externos que em com informação temporário
                - No IP externo, vá nos 3 pontinhos e selecionar promover a estático.
                - Após ele tornára extático.
                **Após ir na cloudfare**
                - escolher DNS
                  -Registros:
                    --Clicar em adicionar um registro
                      - Clicar em Status dos proxy (desmarcar)
                      - Criar registro
                        -- Tipo: A
                        -- Nome: theblog (ou nome do site que estiver fazendo)
                        -- Endereço: colocar o IP Externo criado na google cloud platform
                        -- manter ativo
                        **clicar em salvar**

    **Apos configs acessar servidor via SSH**
    - no terminal acessar ssh dominio.
      - Achar a chave publica ssh no pc, abrir com notepad e copiar a chave
      - Após ir no google cloud platiform
      - ir em COMPUTE ENGINE, INTANCIAS VM
        - ir em CONFIGURAÇÕES, METADADOS
          - ir em CHAVES SSH
            - Adicionar chave SSH
              - em CHAVE SSH 1: Colar a chave copiada.
                - aparecerá o nome de usuário que será utilizado para acessar o servidor.
              - Após colada ja terá acesso ao servidor.

      - retornar ao terminal e colocar o comando:
        -- ssh nomeusuario@dominio.com.br
         - vai entrar no servidor
         **Agora vamos configurar o servidor**
            **comandos terminal**
              - acessar: ssh nomeusuario@dominio.com.br
              - sair: exit ou ctrl + C
              - reiniciar o server: sudo reboot
            
  **inicializar servidor**

```sh
  ssh nomeusuario@dominio.com.br
  - rodar 
  sudo apt update -y
  sudo apt upgrade -y

  Caso no servidor não estiver git instalado rodar:
  sudo apt install git
```

Git

```sh
  ssh-keygen # (enter, enter, enter)
  #ACESSAR A PASTA DENTRO DO SERVIDOR
  ls ~ # acessa a pasta principal home
  ls -lah #lista todas as pastas ocultas
  cat .ssh/id_ed25519.pub # vai mostrar a chave publica.(COPIA A CHAVE  E COLOCA NAS SUAS CHAVES SSH DO GITHUB)

  #Após copiado va ao repositório git hub e acesse
   #-seetings - deploy keeys - Add deploy keys 
   # e cola a chave no campo onde esta key, e clica em add keys

   # Após colocar a key ssh retornar no code do git hub, e copiar o link que consta ssh

  git clone ENDERECO_SSH NOME_DA_PASTA
  # Ao rodar este comando voce clonara o projeto para dentro do servidor
  # para ver o projeto rodar
  ls -lah #lista todas as pastas ocultas
```

**instalar no servidor NVM E NODE**

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
#Sair e entrar novamente para atualizar as váriaveis
nvm install --lts
node --version #só para conferir a instalação
npm -g install npm@latest
```
Comandos para iniciar o site do zero:
 ```sh
 # entrar na pasta que esta o site
 cd theblog
 # Ter o node instalado
 # instalar todos os pacotes
  npm i 
# configure o .env.local
  npm run migrate

  npm run seed # Seed é opcional

# build do next
  npm run build
  npm start # apenas paa teste
 ```

 Sua senha
 ```sh
 # NO SEU COMPUTADOR, COLOQUE A SENHA NO generate-hashed-password.ts
 npx tsx src/utils/generate-hashed-password.ts
 #APAGUE A SENHA E SALVE O ARQUIVO
 ```
Configurando o .env.local
```sh
# DICA: é mais fácil editar esse arquivo no seu computador e colar no servidor
cd pasta_do_projeto
cp .env-example .env.local
nano .env.local
# Ajuste variáveis de ambiente se precisar (ctrl + o / ctrl + x)
```

Se tiver tudo certo, podemos rodar uma build para teste
```sh
cd pasta_do_projeto
npm run build
npm start
```

Se rodou tudo bonitinho, vamos para o Nginx
```sh
sudo apt install nginx -y #Só isso ja deve subir algo na porta 80
# apos dentro do servidor acessr 
ls /etc/nginx/sites-available/
ls /etc/nginx/sites-enabled/
# vai aparecer uma pasta default
# apagar esta pasta
sudo rm /etc/nginx/sites-enabled/default

```

Configurando para por 80 - (Meu dominio: theblog.otaviomiranda.com.br)
```sh
# aqui vamos criar o site dentro do nginx
sudo nano /etc/ngnix/sites-avaible/meu_subdominio (example:theblog.otaviomiranda.com.br)
```

Edita os dados abaixo:\
`theblog.otaviomiranda.com.br`\
Se voce mudou a porta da aplicação, mude `3000`para o número que escolheu.
Também ajuste os caminhos `/home/luizotavio/theblog/public` e 
`/home/luizotavio/theblog/public/uploads/`

server {
  listen 80;
  server_name theblog.otaviomiranda.com.br;

  #Desativa buffer para suportar Streaming e Suspense do Next.js
  proxy_buffering off;
  proxy_set_header X-Accel-Bufering no;

  #Servir arquivos estáticos do /public
  location /public/ {
    alias /home/denis/theblog/public;
  }

  # Servi arquivos estaticos do /public/uploads
  location /uploads/ {
    alias /hom/denis/theblog/public/uploads/;
  }

  #Resto do tráfego passa pro app Node (Next.js)
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarder-For $proxy_add_x_forwarder_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    #Permitir Websocket (caso use algum no futuro)
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }

  location /_next/ {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarder-For $proxy_add_x_forwarder_for;
    proxy_set_header X-Forwarded-Proto $scheme;    
  }
}

Salva o arquivo (ctrl + o / ctrl + x) e vamos criar um link simbólico para pasta sites-enabled (é ela que ativa os sites):

```sh
sudo rm /etc/nginx/sites-enabled/default # Apaga o site default que o nginx ativou
sudo ln -s /etc/nginx/sites-avaible/theblog.otaviomiranda.com.br /etc/nginx/sites-enabled/
sudo nginx -t #confere se está tudo certo
sudo systemctl reload nginx
npm start
```
Agora bora instalar o certbot para quem tem dominio (não vai funcionar se tu não tem dominio)
```sh
  sudo apt install certbot python3-certbot-nginx -y
  sudo certbot --nginx -d theblog.otaviomiranda.com.br
  sudo nginx -t #confere se tá tudo certo
  sudo systemctl reload nginx
```

Eu tive alguns problemas de permissões quando fiz a configuração, tive que dar permissão a pasta da raiz do projeto até a pasta uploads, assim (mas teste primeiro para saber se precisa).
O mais simples mesmo é mudar o usuário do Nginx de www-data para seu nome de usuário:

```sh
sudo chmod o+x /home #primeiro na home (até chegar em uploads)
sudo chmod o+x /home/luizotavio
sudo chmod o+x /home/luizotavio/theblog
sudo chmod o+x /home/luizotavio/theblog/public
# Só aqui fiz recursão para evitar mudar todos os arquivos do projeto
sudo chmod -R o+rx /home/luizotavio/theblog/public/uploads
```

Agora vamos usar o pm2 para manter o app sempre abero e iniciando junto com o sistema caso a gente reinicie
```sh
  npm install -g pm2
  pm2 start --name theblog -- start #
  pm2 save
  pm2 startup #Copia  e cola o resultado desse comando e pressiona ENTER
  pm2 save # Só para garantir

  # Ver
  pm2 list #listar
  pm2 restart theblog # reinicia
  pm2 stop thebolg #parar
  pm2 start theblog # inicia
  pm2 log theblog # veja o log do next (important para debug)

  # O sqlite não lida muito bem com cluster (várias instâncias do node rodando ao mesmo tempo)
  # mas se você trocar a base de dados, para postegreSQL, MySQL, etx, use os comandos abaixo:
  pm2 delete theblog # reinicia
  pm2 start npm --name the blog -- start -i max # modo cluster, 1 instância por core do processador
  pm2 save
```
Depois de fazer todas as configurações, meu arquivo final do NGinx ficou assim


#############################################
# BLOCO HTTPS – Site principal (porta 443) #
#############################################

server {
  server_name theblog.otaviomiranda.com.br;

  # (opcional) Define o caminho raiz do projeto – Next.js não usa diretamente, mas não atrapalha
  root /home/luizotavio/theblog;

  # Desativa buffer de proxy – necessário para funcionar corretamente o Streaming e Suspense no Next.js
  proxy_buffering off;
  proxy_set_header X-Accel-Buffering no;

  # --- SEGURANÇA BÁSICA ---

  # Oculta a versão do NGINX no header "Server"
  server_tokens off;

  # Bloqueia acesso a arquivos ocultos (ex: .env, .git, etc)
  location ~ /\. {
    deny all;
  }

  # Bloqueia acesso a arquivos sensíveis por extensão
  location ~* \.(sql|bak|zip|tar|gz|env|log)$ {
    deny all;
  }

  # Permite apenas métodos HTTP comuns (evita ataque com métodos como DELETE, OPTIONS, etc)
  if ($request_method !~ ^(GET|POST|HEAD)$ ) {
    return 444;
  }

  # Headers de segurança
  add_header X-Content-Type-Options nosniff;
  add_header X-Frame-Options SAMEORIGIN;
  add_header X-XSS-Protection "1; mode=block";
  charset utf-8;

  # --- LOGS ---
  access_log /var/log/nginx/theblog.access.log;
  error_log /var/log/nginx/theblog.error.log;

  # --- GZIP ---
  gzip on;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

  # --- ROTAS DO NEXT.JS ---

  # SOMENTE os IPs abaixo podem acessar /admin
  location /admin {
    allow 123.123.123.123; # IP permitido
    allow 123.123.123.124; # IP permitido
    allow 192.168.0.0/24; # Rede inteira permitida
    allow 187.108.118.0/24; # Rede inteira permitida
    deny all;

    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
  }

  # Arquivos internos do Next.js (chunks, css, etc)
  location /_next/ {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  # Arquivos públicos acessíveis diretamente, como imagens
  location /public/ {
    alias /home/luizotavio/theblog/public/;
  }

  # Pasta de uploads – acessível diretamente. IMPORTANTE: qualquer rota "/uploads" do Next será ignorada
  location /uploads/ {
    alias /home/luizotavio/theblog/public/uploads/;
  }

  # Todas as outras rotas passam para o servidor Next.js (SSR)
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    # Suporte a WebSocket (caso use no futuro)
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
  }

  # --- HTTPS (SSL) ---
  listen 443 ssl; # managed by Certbot
  ssl_certificate /etc/letsencrypt/live/theblog.otaviomiranda.com.br/fullchain.pem; # managed by Certbot
  ssl_certificate_key /etc/letsencrypt/live/theblog.otaviomiranda.com.br/privkey.pem; # managed by Certbot
  include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

#############################################
# BLOCO HTTP – Redirecionamento (porta 80) #
#############################################

server {
  # Redireciona todo tráfego HTTP para HTTPS
  if ($host = theblog.otaviomiranda.com.br) {
    return 301 https://$host$request_uri;
  } # managed by Certbot

  listen 80;
  server_name theblog.otaviomiranda.com.br;
  return 404; # fallback se algo passar sem redirecionar
}








    


