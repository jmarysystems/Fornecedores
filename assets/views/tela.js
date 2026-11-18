import { render as base } from '../crud.js';

const CONFIG = {
  "titulo": "Fornecedores",
  "tabela": "fornecedores",
  "modulo": "cotacao",
  "singular": "fornecedor",
  "ordem": "razao_social",
  "filtro": "Razão social, CNPJ, cidade",
  "colunas": [
    {
      "campo": "razao_social",
      "rotulo": "Razão social"
    },
    {
      "campo": "cnpj_cpf",
      "rotulo": "CNPJ/CPF",
      "classe": "mono"
    },
    {
      "campo": "cidade",
      "rotulo": "Cidade"
    },
    {
      "campo": "whatsapp",
      "rotulo": "WhatsApp"
    }
  ],
  "campos": [
    {
      "campo": "razao_social",
      "rotulo": "Razão social",
      "obrigatorio": true
    },
    {
      "campo": "nome_fantasia",
      "rotulo": "Nome fantasia"
    },
    {
      "campo": "cnpj_cpf",
      "rotulo": "CNPJ/CPF"
    },
    {
      "campo": "contato_nome",
      "rotulo": "Contato"
    },
    {
      "campo": "email",
      "rotulo": "E-mail",
      "tipo": "email"
    },
    {
      "campo": "whatsapp",
      "rotulo": "WhatsApp"
    },
    {
      "campo": "cidade",
      "rotulo": "Cidade"
    },
    {
      "campo": "estado",
      "rotulo": "Estado"
    },
    {
      "campo": "ativo",
      "rotulo": "Ativo",
      "tipo": "check"
    }
  ]
};

export function render(raiz, ctx) {
  return base(raiz, ctx, CONFIG);
}
