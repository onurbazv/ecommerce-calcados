# Internet Shoes
Esse app será um ecommerce de sapatos/tênis, usando firestore para dados e firebase storage para imagens.

Visto que a nossa loja não existe, e eu estou fazendo esse site para pratica e não para vender sapatos, as imagens e informações serão primeiro extraidas da loja Netshoes, uma loja virtual de alta qualidade

## Etapas
- [ ] Extração de Dados
Extrair os dados do site da netshoes

- [ ] Estruturação dos Dados (json)
Estruturar os dados em um arquivo JSON, salvando as imagens localmente na pasta public.
A partir desse momento podemos seguir o caminhos:

1. Começar o design e codificação do app, trabalhando localmente com os dados para depois enviar para o firebase
2. Enviar os dados para o firebase e trabalhar desde o início utilizando requests

- [ ] Envio dos dados para o firebase
- [ ] Início da Codificação


# Next Up

// quase feito, só falta o envio dos dados
- Usar o script de scrape para no minimo triplicar o número de produtos disponíveis
- Revisar dados baixados, incluindo/corrigindo aonde necessário
- Revisão da estrutura de dados
-- Alterar tamanhos para conter o estoque de itens
-- Incluir campo de desconto (O desconto será aplicado no preço inicial do produto)
- Enviar os dados para o firebase após revisão dos mesmos

- Estruturação do cadastro de usuário
-- Parte do cadastro fica mantido na parte AUTH do firebase, mas outra parte, com os dados do mesmo, será mantido em uma outra tabela do FIRESTORE
-- Deverá haver um vínculo entre as 2 entidades nas tabelas separadas
-- No app haverá um contexto para o usuário, esse contexto irá manter os dados das duas estruturas em um único objeto
-- O campo endereços será um Array com objetos no estilo endereço (para evitar a criação de mais uma tabela desnecessariamente)

- Codificação de formulários:
-- Login / Cadastro
-- EXTRA: Reset de senha

- Estruturação da tabela Pedidos no firestore
-- Pedidos devem obrigatoriamente estar vinculados a um usuário (FK)
-- Pedidos devem obrigatoriamente estar vinculados a um endereço (FK)
-- Pedidos devem conter uma lista de entradas no formato [id_produto, tamanho, quantidade] com no mínimo um item
-- Pedidos devem ter um timestamp com a data/horário do pedido
-- Pedidos devem ter um campo para situação, que passará pelos estagios [pagamento pendente, pagamento recebido, processando, enviado, finalizado]
-- Pedidos devem ter um ID único

- Codificação do Perfil de Usuário
-- Mostrar os dados que foram informados no momento de cadastro e possibilitar a alteração dos mesmos
-- Mostrar os endereços do usuário e possibilitar a criação de novos endereços
-- Mostrar os pedidos do usuário

- Codificação do Carrinho
-- Itens serão adicionados aqui e após a finalização do pedido será:
---- 1.1. Login/Cadastro caso não haja nenhum usuário logado
---- 1.2. Cadastro/Seleção de Endereço
---- 2. Realização do Pedido, reduzindo a quantidade em estoque

- Codificação da Página Produto (para produtos específicos)
