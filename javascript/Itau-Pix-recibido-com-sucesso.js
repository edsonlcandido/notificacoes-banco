const texto = $('Tipo Itau').item.json.message ;

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
  conta: "ITAÚ",
  data: $('Tipo Itau').item.json.formattedDate
};

// Retornar o objeto no formato esperado
return resultado;
