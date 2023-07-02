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

  await client.request(options);
}

// /api/v2/users/{user_id}/tickets/requested

async function listRequesterTickets() {
  const requesterId = (await client.get('ticket.requester.id'))[
    'ticket.requester.id'
  ];

  const options = {
    url: `/api/v2/users/${requesterId}/tickets/requested`,
    type: 'GET',
  };
  return client.request(options);
}

async function showRequesterTickets() {
  const ticketsList = (await listRequesterTickets()).tickets;

  const table = document.getElementById('tickets-table');
  const tbody = table.getElementsByTagName('tbody')[0];
  tbody.innerHTML = '';

  for (const ticket of ticketsList) {
    const ticketId = ticket.id;
    const ticketCreationDate = ticket.created_at;
    const ticketStatus = ticket.status;
    const ticketUrl = `https://thiago7045.zendesk.com/agent/tickets/${ticketId}`;

    const newRow = document.createElement('tr');

    const tdTicketId = document.createElement('td');
    const tdTicketLink = document.createElement('a');

    tdTicketLink.href = ticketUrl;
    tdTicketLink.textContent = ticketId;
    tdTicketId.appendChild(tdTicketLink);

    const tdTicketStatus = document.createElement('td');
    tdTicketStatus.textContent = ticketStatus;

    const tdTicketCreationDate = document.createElement('td');
    tdTicketCreationDate.textContent = ticketCreationDate;

    newRow.appendChild(tdTicketId);
    newRow.appendChild(tdTicketStatus);
    newRow.appendChild(tdTicketCreationDate);

    tbody.appendChild(newRow);
  }
}

const Core = {
  updateSubject,
  showRequesterTickets,
};

export default Core;
