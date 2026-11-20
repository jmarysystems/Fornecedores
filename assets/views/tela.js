import { render as base } from '../crud.js';

const CONFIG = {
  "titulo": "Fornecedores",
  "tabela": "fornecedores",
  "modulo": "fornecedor",
  "singular": "fornecedor",
  "ordem": "razao_social",
  "filtro": "Razão social, CNPJ, cidade",
  "cep": true,
  "colunas": [
    { "campo": "razao_social", "rotulo": "Razão social" },
    { "campo": "cnpj_cpf", "rotulo": "CNPJ/CPF", "classe": "mono" },
    { "campo": "cidade", "rotulo": "Cidade" },
    { "campo": "whatsapp", "rotulo": "WhatsApp" },
    { "campo": "ativo", "rotulo": "Ativo" }
  ],
  "campos": [
    { "campo": "razao_social", "rotulo": "Razão social", "obrigatorio": true },
    { "campo": "nome_fantasia", "rotulo": "Nome fantasia" },
    { "campo": "cnpj_cpf", "rotulo": "CNPJ/CPF" },
    { "campo": "contato_nome", "rotulo": "Contato" },
    { "campo": "email", "rotulo": "E-mail", "tipo": "email" },
    { "campo": "whatsapp", "rotulo": "WhatsApp" },
    { "campo": "prazo_entrega", "rotulo": "Prazo de entrega" },
    { "campo": "tipo_pagamento", "rotulo": "Tipo de pagamento" },
    { "campo": "prazo_pagamento_dias", "rotulo": "Prazo de pagamento (dias)", "tipo": "numero" },
    { "campo": "observacoes", "rotulo": "Observações" },
    { "campo": "ativo", "rotulo": "Ativo", "tipo": "check" },

    { "campo": "cep", "rotulo": "CEP", "aba": "Localização" },
    { "campo": "nome_endereco", "rotulo": "Nome da rua / avenida", "aba": "Localização" },
    { "campo": "numero", "rotulo": "Número", "aba": "Localização" },
    { "campo": "apartamento", "rotulo": "Apartamento", "aba": "Localização" },
    { "campo": "bloco", "rotulo": "Bloco", "aba": "Localização" },
    { "campo": "bairro", "rotulo": "Nome bairro", "aba": "Localização" },
    { "campo": "complemento", "rotulo": "Complemento", "aba": "Localização" },
    { "campo": "sigla_pais", "rotulo": "Sigla país", "aba": "Localização" },
    { "campo": "codigo_ibge_pais", "rotulo": "Código IBGE país", "aba": "Localização" },
    { "campo": "pais", "rotulo": "Nome país", "aba": "Localização" },
    { "campo": "sigla_estado", "rotulo": "Sigla estado", "aba": "Localização" },
    { "campo": "codigo_ibge_estado", "rotulo": "Código IBGE estado", "aba": "Localização" },
    { "campo": "estado", "rotulo": "Nome estado", "aba": "Localização" },
    { "campo": "codigo_ibge_municipio", "rotulo": "Código IBGE município", "aba": "Localização" },
    { "campo": "cidade", "rotulo": "Nome município", "aba": "Localização" },
    { "campo": "latitude", "rotulo": "Latitude", "aba": "Localização" },
    { "campo": "longitude", "rotulo": "Longitude", "aba": "Localização" }
  ]
};

export function render(raiz, ctx) {
  return base(raiz, ctx, CONFIG);
}
