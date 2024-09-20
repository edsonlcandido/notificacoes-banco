const texto = "Você recebeu um Pix de José XXX.456.789-XX do(a) PICPAY, no valor de R$ 167,32 em 20/09/2024.";

// Extrair o valor em formato numérico, considerando o formato com vírgula
const valorMatch = texto.match(/R\$ ?(\d+,\d{2})/);
const valor = valorMatch ? parseFloat(valorMatch[1].replace(',', '.')) : null;

// Extrair a descrição (Pix de José)
const descricaoMatch = texto.match(/Pix de ([^\s]+)/);
const descricao = descricaoMatch ? `Pix de ${descricaoMatch[1]}` : null;

// Criar o objeto com as informações extraídas
const resultado = {
  valor: valor,
  descricao: descricao,
  conta: "ITAÚ"
};

// Retornar o objeto no formato esperado
return resultado;
