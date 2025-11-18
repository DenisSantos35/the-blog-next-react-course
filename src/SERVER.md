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












    


