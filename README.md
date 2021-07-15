# Teste ETEG CX APP - Junior - Desenvolvedor Fullstack

`Olá, agradecemos seu interesse em fazer parte da ETEG!`

### O que é o teste?

`O teste se resume na criação de um APP dentro da Zendesk, com as características citadas abaixo, utilizando apenas vanilla JavaScript junto a SDK que já está utilizada como exemplo no boilerplate na pasta app desse repositório. Boa sorte, e happy coding 😄`

### O que você precisa fazer? ⭐

1. Alterar o manifest, para que o APP fique disponível ao invés da barra lateral de usuário, fique na página de tickets.
2. Criação de um botão e campo de texto que irá alterar o assunto do ticket para o padrão `Nome do Ticket + Data e Hora` (dica: trabalhe no App.js)

Dicas: Você pode utilizar a função get: `client.get('ticket.subject')`, para recuperar um objeto. As [referênciais dos objetos do ticket](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#json-format) estão na documentação abaixo no Zendesk Support API, em JSON Format.

## Documentações úteis ZAF (Zendesk App Framework) e Zendesk Support API

- Documentação do ZAF com as classes e funções que você pode utilizar dentro do APP, algumas delas já estão dentro da pasta de exemplo: https://developer.zendesk.com/api-reference/apps/apps-core-api/client_api/
- Documentação do Zendesk Support API para listagem de objetos do ticket: https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#json-format

## Alocando o APP na Zendesk

1. Crie uma conta Trial(gratuita) [clicando aqui](https://www.zendesk.com.br/register) para que você tenha acesso a Zendesk.
2. Após validar seu email, entre na sua instância Zendesk. 
3. Vá em *Configurações > Gerenciar > Aplicativos Privados > Carregador aplicativo privado* para que você possa testá-lo dentro da Zendesk. Atenção: Você precisa compactar em *.zip* a pasta APP para carregá-lo.

![Admin Zendesk](admin_zendesk.png?raw=true)

## Visualizando o APP na Zendesk

- Siga para Visualizações, e abra um ticket de teste.

![Visualizações](visualizacoes.png?raw=true)

- Após entrar no ticket, siga para a barra lateral direita(sidebar), e selecione o menu APP's para visualizá-lo.

![Ver APP no Ticket](ver_app_ticket.png?raw=true)