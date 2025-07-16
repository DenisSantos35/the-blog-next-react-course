```
SSR -> Server Side Rendering
HTML ESTA SENDO GERADO NO SERVIDOR

CSR -> Client Side Rendering
HTML ESTA SENDO GERADO NO CLIENTE

Static / SSG (Static Side Generate) -> Tenho HTML pronto
PRE RENDERIZA UMA PÁGINA - pagina statica


Dynamic -> Não tenho nada pronto

ISR  -> Incremental Static Regeneration -> Combina static com dynamic -> por tempo
/ <- ISR Gera página Static -> Depois de 60s quero atualizar o conteúdo dela.
/ <- ISR -> Depois que eu atualizar algum conteúdo ela atualiza

ROTAS
/ (barra e uma rota pública) posso usar cache e posso usar SSG
/post/[slug] (uma rota pública) posso usar cache e posso usar SSG

TERÁ CRUD
/admin/post (Rota privada) todo conteudo será dynamic -
  * Ler (R) Lista posts
  * Delete (D) Deleta posts
/admin/post/[id] (Rota privada) todo conteudo será dynamic -
  * Update (U) atualizar um post
/admin/post/new (Rota privada) todo conteudo será dynamic -
  * Create (C) Criar um post

/admin/login (Dynamic) - Fazer o login do usuário
```
