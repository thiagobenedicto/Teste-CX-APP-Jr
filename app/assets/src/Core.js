function updateSubject() {
  // Obtém o valor digitado no campo digite o novo assunto
  let subject = document.getElementById('text-id').value;

  // Faz algo com o resultado
  console.log('Valor digitado: ' + subject);
}

const Core = {
  updateSubject,
};

export default Core;
