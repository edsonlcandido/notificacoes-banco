// texto = Você passou sem interrupções por Passagem*SP-360 - Jundiai - Norte, do dia 17/09/2024 07:45, o valor de R$ 5.80 foi debitado da sua conta.
// Pegar o texto da mensagem
var texto = $('Tipo Inter').item.json.message;

// Verificar se a variável "texto" contém uma string
if (!texto || typeof texto !== 'string') {
  return { error: 'Texto inválido ou não encontrado' };
}

// Ajuste na expressão regular para capturar o valor corretamente, incluindo vírgulas e diferentes espaços
const valorMatch = texto.match(/R\$ ?(\d+[\.,]\d{2})/);
const valor = valorMatch ? parseFloat(valorMatch[1].replace(',', '.')) : null;

// Verificar se o valor foi corretamente capturado
if (!valor) {
  return { error: 'Valor não encontrado na mensagem' };
}

// Ajuste na expressão regular para capturar a descrição (parte antes de "no dia")
const descricaoMatch = texto.match(/por (.+?), no dia/);
const descricao = descricaoMatch ? descricaoMatch[1].trim() : null;

// Verificar se a descrição foi corretamente capturada
if (!descricao) {
  return { error: 'Descrição não encontrada na mensagem' };
}

// Criar o objeto com as informações extraídas
const resultado = {
  valor: valor,
  descricao: descricao,
  conta: "INTER",
  data: $('Tipo Inter').item.json.formattedDate // Campo de data já validado
};

// Retornar o objeto no formato esperado
return resultado;