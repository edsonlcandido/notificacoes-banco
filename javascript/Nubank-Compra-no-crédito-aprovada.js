const texto = "Compra de R$ 28,45 APROVADA em AMAZON MARKETPLACE para cartão final 3456.";

// Ajuste da expressão regular para capturar o valor corretamente mesmo com espaços
const valorMatch = texto.match(/R\$ ?(\d+,\d{2})/);
const valor = valorMatch ? parseFloat(valorMatch[1].replace(',', '.')) : null;

// Ajuste para capturar a descrição
const descricaoMatch = texto.match(/em (.+?) (?:para|$)/);
const descricao = descricaoMatch ? descricaoMatch[1] : null;

// Criar o objeto com as informações extraídas
const resultado = {
  valor: valor,
  descricao: descricao
};

// Retornar o objeto no formato esperado
return resultado;
