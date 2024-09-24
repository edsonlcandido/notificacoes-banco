// Pegar o texto da mensagem
var texto = $('Tipo Inter').item.json.message;

// Ajuste na expressão regular para capturar o valor corretamente, incluindo vírgulas
const valorMatch = texto.match(/R\$ ?(\d+[\.,]\d{2})/);
const valor = valorMatch ? parseFloat(valorMatch[1].replace(',', '.')) : null;

// Ajuste na expressão regular para capturar a descrição (parte após "no débito no")
const descricaoMatch = texto.match(/no débito no (.+?) o valor/);
const descricao = descricaoMatch ? descricaoMatch[1].trim() : null;

// Verificar se os valores foram corretamente capturados
if (!valor || !descricao) {
  return { error: 'Erro ao capturar valor ou descrição' };
}

// Criar o objeto com as informações extraídas
const resultado = {
  valor: valor,
  descricao: descricao,
  conta: "INTER",
  data: $('Tipo Inter').item.json.formattedDate
};

// Retornar o objeto no formato esperado
return resultado;