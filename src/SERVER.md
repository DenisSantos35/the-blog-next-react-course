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