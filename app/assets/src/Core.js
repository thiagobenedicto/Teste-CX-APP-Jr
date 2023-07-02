let client = ZAFClient.init();

// Obtém o valor digitado no campo digite o novo assunto
async function updateSubject() {
  // Pega o valor digitado no input no iframe
  const subject = document.getElementById('text-id').value;

  // Retorna a response com o ID do ticket
  const ticketId = (await client.get('ticket.id'))['ticket.id'];

  // Pega data e hora atual e substitui a virgula por espaço e hifen
  const datetime = new Date().toLocaleString().replace(',', ' -');

  // options
  const options = {
    url: `/api/v2/tickets/${ticketId}`,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify({
      ticket: {
        subject: `${subject} ${datetime}`,
      },
    }),
  };

  const responseRequest = await client.request(options);
}

const Core = {
  updateSubject,
};

export default Core;
