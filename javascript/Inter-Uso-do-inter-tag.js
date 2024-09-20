const texto = "Você passou sem interrupções por Passagem*SP-360 - Jundiai - Norte, do dia 17/09/2024 07:45, o valor de R$ 5,80 foi debitado da sua conta.";

// Extrair o valor em formato numérico, considerando o formato com vírgula
const valorMatch = texto.match(/R\$ ?(\d+,\d{2})/);
const valor = valorMatch ? parseFloat(valorMatch[1].replace(',', '.')) : null;

// Extrair a descrição (parte antes de "do dia")
const descricaoMatch = texto.match(/por (.+?), do dia/);
const descricao = descricaoMatch ? descricaoMatch[1] : null;

// Criar o objeto com as informações extraídas
const resultado = {
  valor: valor,
  descricao: descricao
};

// Retornar o objeto no formato esperado
return resultado;
