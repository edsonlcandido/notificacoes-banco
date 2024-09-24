var texto = $('Tipo Nubank').item.json.message ;

// Ajustar a expressão regular para lidar com ou sem espaços após o "R$"
const valorMatch = texto.match(/R\$ ?(\d+,\d{2})/);
const valor = valorMatch ? parseFloat(valorMatch[1].replace(',', '.')) : null;

// Extrair a descrição (nome do estabelecimento)
const descricaoMatch = texto.match(/em (.+?) para/);
const descricao = descricaoMatch ? descricaoMatch[1] : null;

// Criar o objeto com as informações extraídas
const resultado = {
  valor: valor,
  descricao: descricao,
  conta: "NUBANK",
  data: $('Tipo Nubank').item.json.formattedDate
};

// Retornar o objeto no formato esperado
return resultado;