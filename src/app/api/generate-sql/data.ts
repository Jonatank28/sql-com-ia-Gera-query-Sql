import { ACTION } from 'next/dist/client/components/app-router-headers'
import { text } from 'stream/consumers'

export const data = `
CREATE TABLE 'alternativa' (
  'alternativaID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'alternativa_item' (
  'alternativaItemID' int(11) NOT NULL,
  'alternativaID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'anexo' (
  'anexoID' int(11) NOT NULL,
  'titulo' varchar(255) NOT NULL,
  'arquivo' text NOT NULL,
  'tamanho' float NOT NULL COMMENT 'mb',
  'tipo' varchar(50) NOT NULL,
  'grupoAnexoItemID' int(11) NOT NULL,
  'usuarioID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL,
  'fornecedorID' int(11) NOT NULL DEFAULT 0,
  'recebimentoMpID' int(11) NOT NULL DEFAULT 0,
  'naoConformidadeID' int(11) NOT NULL DEFAULT 0,
  'dataHora' datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
CREATE TABLE 'apresentacao' (
  'apresentacaoID' int(11) NOT NULL,
  'nome' varchar(200) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo. 0->Inativo',
  'dataCadastro' date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'atividade' (
  'atividadeID' int(11) NOT NULL,
  'nome' text NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'cargo' (
  'cargoID' int(11) NOT NULL,
  'nome' text NOT NULL,
  'dataCadastro' date DEFAULT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'categoria' (
  'categoriaID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'divisor' (
  'divisorID' int(11) NOT NULL,
  'papelID' int(11) NOT NULL COMMENT 'Cliente, Fornecedor...',
  'nome' varchar(255) NOT NULL,
  'ordem' int(11) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'extensao' (
  'extensaoID' int(11) NOT NULL,
  'nome' varchar(20) NOT NULL,
  'mimetype' text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'fabrica_fornecedor' (
  'fabricaFornecedorID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL COMMENT 'unidadeID da fábrica',
  'fornecedorCnpj' varchar(18) NOT NULL COMMENT 'CNPJ do fornecedor',
  'obs' text DEFAULT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'fabrica_fornecedor_grupoanexo' (
  'fabricaFornecedorGrupoAnexoID' int(11) NOT NULL,
  'fabricaFornecedorID' int(11) NOT NULL,
  'grupoAnexoID' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
CREATE TABLE 'fornecedor' (
  'fornecedorID' int(11) NOT NULL,
  'fabricante' int(11) NOT NULL DEFAULT 0 COMMENT '1->Sim, 0->Não',
  'importador' int(11) NOT NULL DEFAULT 0 COMMENT '1->Sim, 0->Não',
  'dataAvaliacao' date DEFAULT NULL,
  'cnpj' varchar(18) NOT NULL,
  'razaoSocial' varchar(255) DEFAULT NULL,
  'nome' varchar(255) DEFAULT NULL COMMENT 'Nome Fantasia',
  'email' varchar(255) DEFAULT NULL,
  'telefone' varchar(15) DEFAULT NULL,
  'brasil' int(11) DEFAULT NULL COMMENT '1->Fornecedor do Brasil, 0->Fornecedor estrangeiro',
  'cep' varchar(10) DEFAULT NULL,
  'logradouro' varchar(255) DEFAULT NULL,
  'numero' varchar(20) DEFAULT NULL,
  'complemento' varchar(255) DEFAULT NULL,
  'bairro' varchar(255) DEFAULT NULL,
  'cidade' varchar(255) DEFAULT NULL,
  'estado' varchar(255) DEFAULT NULL,
  'pais' varchar(255) DEFAULT NULL,
  'ie' varchar(255) DEFAULT NULL,
  'responsavel' varchar(255) DEFAULT NULL COMMENT 'Nome do fornecedor\r\nresponsável pelo preenchimento',
  'principaisClientes' varchar(255) DEFAULT NULL,
  'registroEstabelecimentoID' int(11) DEFAULT NULL,
  'numeroRegistro' varchar(255) DEFAULT NULL COMMENT 'Nº registro do estabelecimento (se não for ISENTO)',
  'obs' text DEFAULT NULL COMMENT 'Obs do formulário',
  'obsConclusao' text DEFAULT NULL,
  'unidadeID' int(11) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 10 COMMENT '10->Pendente (fornecedor não preencheu ainda)\r\n20->Acessou o link\r\n30->Em preenchimento (já salvou)\r\n40->Fornecedor concluiu preenchimento\r\n50->Reprovado\r\n60->Aprovado Parcial\r\n70->Aprovado\r\n',
  'atual' int(11) NOT NULL COMMENT '1->Avaliação atual desse fornecedor (última), 0->Não é a avaliação atual desse fornecedor (antiga)',
  'registroMapa' varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'fornecedor_atividade' (
  'fornecedorAtividadeID' int(11) NOT NULL,
  'fornecedorID' int(11) NOT NULL,
  'atividadeID' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'fornecedor_categoria' (
  'fornecedorCategoriaID' int(11) NOT NULL,
  'fornecedorID' int(11) NOT NULL,
  'categoriaID' int(11) NOT NULL COMMENT '1->Fabricante, 2->Importador'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'fornecedor_resposta' (
  'fornecedorRespostaID' int(11) NOT NULL,
  'fornecedorID' int(11) NOT NULL,
  'parFornecedorBlocoID' int(11) NOT NULL COMMENT 'ID do bloco',
  'itemID' int(11) NOT NULL,
  'resposta' varchar(255) NOT NULL COMMENT 'Descrição da resposta',
  'respostaID' int(11) NOT NULL COMMENT 'Se for resposta selecionável, guarda ID do alternativa_item',
  'pontuacao' int(11) DEFAULT NULL COMMENT 'Opcional',
  'obs' text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'fornecedor_sistemaqualidade' (
  'fornecedorSistemaQualidadeID' int(11) NOT NULL,
  'fornecedorID' int(11) NOT NULL,
  'sistemaQualidadeID' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'grupoanexo' (
  'grupoanexoID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'descricao' text DEFAULT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo',
  'unidadeID' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'grupoanexo_item' (
  'grupoanexoitemID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'descricao' text DEFAULT NULL,
  'obrigatorio' int(11) NOT NULL DEFAULT 0 COMMENT '1->Obrigatório, 0->Opcional',
  'grupoanexoID' int(11) NOT NULL COMMENT 'Grupo do item',
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'grupoanexo_parformulario' (
  'grupoanexoParformularioID' int(11) NOT NULL,
  'grupoAnexoID' int(11) NOT NULL,
  'parFormularioID' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
CREATE TABLE 'item' (
  'itemID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'parFormularioID' int(11) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'menu' (
  'menuID' int(11) NOT NULL,
  'divisorID' int(11) NOT NULL COMMENT 'Divisor do menu',
  'nome' varchar(255) NOT NULL,
  'icone' varchar(255) NOT NULL,
  'rota' varchar(255) DEFAULT NULL COMMENT 'Se nula possui sub itens',
  'ordem' int(11) NOT NULL,
  'novo' int(11) NOT NULL DEFAULT 0 COMMENT '1 => Novo\r\n0 = > ''''',
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1 => Ativo\r\n0 => Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
CREATE TABLE 'movimentacaoformulario' (
  'movimentacaoFormularioID' int(11) NOT NULL,
  'parFormularioID' int(11) NOT NULL COMMENT 'Tipo do formulário: 1->Fornecedor, 2->Recebimento MP, ...',
  'id' int(11) NOT NULL COMMENT 'id do formulário',
  'usuarioID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL,
  'papelID' int(11) NOT NULL COMMENT '1->Fábrica, 2->Fornecedor',
  'dataHora' datetime NOT NULL,
  'statusAnterior' int(11) NOT NULL,
  'statusAtual' int(11) NOT NULL,
  'observacao' text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'papel' (
  'papelID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo',
  'dataCadastro' date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_formulario' (
  'parFormularioID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'tabela' varchar(255) NOT NULL,
  'obs' text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_fornecedor' (
  'parFornecedorID' int(11) NOT NULL,
  'ordem' int(11) NOT NULL DEFAULT 1 COMMENT 'Ordem de exibição no formulário',
  'nomeCampo' varchar(255) NOT NULL,
  'tabela' varchar(255) DEFAULT NULL,
  'nomeColuna' varchar(255) NOT NULL COMMENT 'Deve possuir uma coluna com esse nome na tabela fornecedor',
  'tipo' varchar(50) NOT NULL,
  'obs' text DEFAULT NULL COMMENT 'Obs para desenvolvimento'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_fornecedor_bloco' (
  'parFornecedorBlocoID' int(11) NOT NULL,
  'ordem' int(11) NOT NULL COMMENT 'Ordem de exibição',
  'nome' varchar(255) NOT NULL,
  'obs' int(11) NOT NULL DEFAULT 1 COMMENT '1->Possui obs no bloco, 0->Não possui obs',
  'unidadeID' int(11) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_fornecedor_bloco_atividade' (
  'parFornecedorBlocoAtividadeID' int(11) NOT NULL,
  'parFornecedorBlocoID' int(11) NOT NULL,
  'atividadeID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_fornecedor_bloco_categoria' (
  'parFornecedorBlocoCategoriaID' int(11) NOT NULL,
  'parFornecedorBlocoID' int(11) NOT NULL,
  'categoriaID' int(11) NOT NULL COMMENT '1->Fabricante, 2->Importador',
  'unidadeID' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_fornecedor_bloco_item' (
  'parFornecedorBlocoItemID' int(11) NOT NULL,
  'parFornecedorBlocoID' int(11) NOT NULL,
  'ordem' int(11) NOT NULL,
  'itemID' int(11) NOT NULL,
  'alternativaID' int(11) NOT NULL COMMENT 'Forma de resposta no formulário',
  'obs' int(11) NOT NULL DEFAULT 1 COMMENT '1->Possui obs, 0->Não possui obs',
  'obrigatorio' int(11) NOT NULL DEFAULT 0 COMMENT '1->Obrigatório, 0->Não obrigatório',
  'pontuacao' int(11) NOT NULL DEFAULT 0 COMMENT '1->Tem pontuação, 0->Não tem pontuação',
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_fornecedor_bloco_item_pontuacao' (
  'parFornecedorBlocoItemPontuacaoID' int(11) NOT NULL,
  'parFornecedorBlocoItemID' int(11) NOT NULL,
  'alternativaID' int(11) NOT NULL,
  'alternativaItemID' int(11) NOT NULL COMMENT 'Sim, Não...',
  'pontuacao' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_fornecedor_unidade' (
  'parFornecedorUnidadeID' int(11) NOT NULL,
  'parFornecedorID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL,
  'obrigatorio' int(11) NOT NULL DEFAULT 1 COMMENT '1->Obrigatório, 0->Não obrigatório'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_recebimentomp' (
  'parRecebimentompID' int(11) NOT NULL,
  'ordem' int(11) NOT NULL COMMENT 'Ordem de exibição no formulário',
  'nomeCampo' varchar(255) NOT NULL,
  'tabela' varchar(255) DEFAULT NULL COMMENT 'Somente para opções de selecionar uma alternativa (fazer join)',
  'nomeColuna' varchar(255) NOT NULL COMMENT 'Deve possuir uma coluna com esse nome na tabela recebimentomp',
  'tipo' varchar(10) NOT NULL,
  'obs' text DEFAULT NULL COMMENT 'Obs pra desenvolvimento'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_recebimentomp_bloco' (
  'parRecebimentompBlocoID' int(11) NOT NULL,
  'ordem' int(11) NOT NULL COMMENT 'Ordem de exibição',
  'nome' varchar(255) NOT NULL,
  'obs' int(11) NOT NULL DEFAULT 1 COMMENT '1->Possui obs no bloco, 0->Não possui obs',
  'unidadeID' int(11) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_recebimentomp_bloco_item' (
  'parRecebimentompBlocoItemID' int(11) NOT NULL,
  'parRecebimentompBlocoID' int(11) NOT NULL,
  'ordem' int(11) NOT NULL,
  'itemID' int(11) NOT NULL,
  'alternativaID' int(11) NOT NULL COMMENT 'Forma de resposta no formulário',
  'obs' int(11) NOT NULL DEFAULT 1 COMMENT '1->Possui obs, 0->Não possui obs',
  'obrigatorio' int(11) NOT NULL DEFAULT 0 COMMENT '1->Obrigatório, 0->Não obrigatório',
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_recebimentomp_naoconformidade' (
  'parRecebimentompNaoconformidadeID' int(11) NOT NULL,
  'ordem' int(11) NOT NULL,
  'nomeCampo' varchar(255) NOT NULL,
  'tabela' varchar(255) DEFAULT NULL,
  'nomeColuna' varchar(255) NOT NULL,
  'tipo' varchar(255) NOT NULL,
  'obs' text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_recebimentomp_naoconformidade_bloco' (
  'parRecebimentompNaoconformidadeBlocoID' int(11) NOT NULL,
  'ordem' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'tipo' int(11) NOT NULL COMMENT '1->Produto,2->Transporte',
  'fornecedorPreenche' int(11) NOT NULL DEFAULT 0 COMMENT '1->Sim, 0->Não',
  'obs' text DEFAULT NULL,
  'unidadeID' int(11) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_recebimentomp_naoconformidade_bloco_item' (
  'parRecebimentompNaoconformidadeBlocoItemID' int(11) NOT NULL,
  'parRecebimentompNaoconformidadeBlocoID' int(11) NOT NULL,
  'ordem' int(11) NOT NULL,
  'itemID' int(11) NOT NULL,
  'alternativaID' int(11) NOT NULL,
  'obs' int(11) NOT NULL DEFAULT 0 COMMENT '1->Sim, 0->Não',
  'obrigatorio' int(11) NOT NULL DEFAULT 0 COMMENT '1->Sim, 0->Não',
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_recebimentomp_naoconformidade_unidade' (
  'parRecebimentompNaoconformidadeUnidadeID' int(11) NOT NULL,
  'parRecebimentompNaoconformidadeID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_recebimentomp_produto' (
  'parRecebimentompProdutoID' int(11) NOT NULL,
  'ordem' int(11) NOT NULL,
  'nomeCampo' varchar(255) NOT NULL,
  'nomeColuna' varchar(255) NOT NULL,
  'tabela' varchar(255) DEFAULT NULL COMMENT 'Se houver join com outra tabela (select)',
  'tipo' varchar(10) NOT NULL,
  'obs' text DEFAULT NULL COMMENT 'Obs pra desenvolvimento'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_recebimentomp_produto_unidade' (
  'parRecebimentompProdutoUnidadeID' int(11) NOT NULL,
  'parRecebimentompProdutoID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL,
  'obrigatorio' int(11) NOT NULL DEFAULT 0 COMMENT '1->Obrigatório, 0->Não obrigatório'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'par_recebimentomp_unidade' (
  'parRecebimentompUnidadeID' int(11) NOT NULL,
  'parRecebimentompID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL,
  'obrigatorio' int(11) NOT NULL DEFAULT 0 COMMENT '1->Obrigatório, 0->Não obrigatório'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'permissao' (
  'permissaoID' int(11) NOT NULL,
  'rota' varchar(255) NOT NULL,
  'papelID' int(11) NOT NULL COMMENT 'Cliente, Fornecedor...',
  'usuarioID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL,
  'ler' int(11) NOT NULL DEFAULT 0 COMMENT '1 => True\r\n0 => False',
  'inserir' int(11) NOT NULL DEFAULT 0 COMMENT '1 => True\r\n0 => False',
  'editar' int(11) NOT NULL DEFAULT 0 COMMENT '1 => True\r\n0 => False',
  'excluir' int(11) NOT NULL DEFAULT 0 COMMENT '1 => True\r\n0 => False'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
CREATE TABLE 'pessoa' (
  'pessoaID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'cpf' varchar(14) NOT NULL,
  'unidadeID' int(11) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo',
  'dataCadastro' date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'produto' (
  'produtoID' int(11) NOT NULL,
  'nome' varchar(200) NOT NULL,
  'unidadeMedida' varchar(20) DEFAULT NULL,
  'unidadeID' int(11) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo. 0->Inativo',
  'dataCadastro' date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'profissao' (
  'profissaoID' int(11) NOT NULL,
  'nome' text NOT NULL,
  'dataCadastro' date DEFAULT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'recebimentomp' (
  'recebimentompID' int(11) NOT NULL,
  'pessoaID' int(11) DEFAULT NULL COMMENT 'Profissional',
  'tipoOperacaoID' int(11) DEFAULT NULL COMMENT 'Recepção ou Expedição',
  'data' date DEFAULT NULL,
  'dataEdicao' date DEFAULT NULL,
  'dataRevisao' date DEFAULT NULL,
  'nf' varchar(255) DEFAULT NULL,
  'fornecedorID' int(11) DEFAULT NULL,
  'transportadorID' int(11) DEFAULT NULL,
  'placa' varchar(9) DEFAULT NULL,
  'motorista' varchar(255) DEFAULT NULL,
  'tipoVeiculoID' int(11) DEFAULT NULL,
  'obs' text DEFAULT NULL,
  'obsConclusao' text DEFAULT NULL,
  'unidadeID' int(11) NOT NULL,
  'status' int(11) DEFAULT 10 COMMENT '10->Pendente (ainda não concluiu) \r\n30->Reprovado \r\n40->Aprovado Parcial \r\n50->Aprovado	',
  'dataCadastro' date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'recebimentomp_naoconformidade' (
  'recebimentompNaoconformidadeID' int(11) NOT NULL,
  'recebimentompID' int(11) NOT NULL,
  'fornecedorID' int(11) DEFAULT NULL,
  'dataEmissao' date DEFAULT NULL,
  'numeroRelatorio' varchar(255) DEFAULT NULL,
  'tipoNaoconformidadeID' int(11) DEFAULT NULL,
  'produtoID' int(11) DEFAULT NULL,
  'fabricacao' varchar(255) DEFAULT NULL,
  'lote' varchar(255) DEFAULT NULL,
  'quantidade' float DEFAULT NULL,
  'unidadeID' int(11) NOT NULL,
  'obs' text DEFAULT NULL,
  'obsConclusao' text DEFAULT NULL,
  'status' int(11) DEFAULT NULL,
  'dataCadastro' date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'recebimentomp_naoconformidade_resposta' (
  'recebimentompNaoconformidadeRespostaID' int(11) NOT NULL,
  'recebimentompNaoconformidadeID' int(11) NOT NULL,
  'parRecebimentompNaoconformidadeBlocoID' int(11) NOT NULL COMMENT 'ID do bloco',
  'itemID' int(11) NOT NULL,
  'resposta' text DEFAULT NULL,
  'respostaID' int(11) DEFAULT NULL,
  'obs' text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'recebimentomp_produto' (
  'recebimentompProdutoID' int(11) NOT NULL,
  'recebimentompID' int(11) NOT NULL,
  'produtoID' int(11) DEFAULT NULL,
  'apresentacaoID' int(11) DEFAULT NULL,
  'atividadeID' int(11) DEFAULT NULL,
  'quantidade' int(11) DEFAULT NULL,
  'possuiLaudo' int(11) DEFAULT NULL COMMENT 'checkBox: 1->Marcado, 0->Não marcado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'recebimentomp_resposta' (
  'recebimentompRespostaID' int(11) NOT NULL,
  'recebimentompID' int(11) NOT NULL,
  'parRecebimentompBlocoID' int(11) NOT NULL COMMENT 'ID do bloco',
  'itemID' int(11) NOT NULL,
  'resposta' varchar(255) NOT NULL COMMENT 'Descrição da resposta',
  'respostaID' int(11) DEFAULT NULL COMMENT 'Se for resposta selecionável, guarda ID do alternativa_item',
  'obs' text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'registroestabelecimento' (
  'registroEstabelecimentoID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo',
  'dataCadastro' date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'sistemaqualidade' (
  'sistemaQualidadeID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'submenu' (
  'submenuID' int(11) NOT NULL,
  'menuID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'icone' varchar(255) NOT NULL,
  'rota' varchar(255) NOT NULL,
  'ordem' int(11) NOT NULL,
  'novo' int(11) NOT NULL DEFAULT 0 COMMENT '1 => "Novo''\r\n0 => ""',
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1 => Ativo\r\n0 => Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
CREATE TABLE 'tiponaoconformidade' (
  'tipoNaoconformidadeID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'tipooperacao' (
  'tipooperacaoID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo',
  'dataCadastro' date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'tipoveiculo' (
  'tipoVeiculoID' int(11) NOT NULL,
  'nome' varchar(200) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo. 0->Inativo',
  'dataCadastro' date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'transportador' (
  'transportadorID' int(11) NOT NULL,
  'nome' varchar(200) NOT NULL,
  'unidadeID' int(11) NOT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo. 0->Inativo',
  'dataCadastro' date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'unidade' (
  'unidadeID' int(11) NOT NULL,
  'nomeFantasia' varchar(255) NOT NULL,
  'razaoSocial' varchar(255) DEFAULT NULL,
  'cnpj' varchar(20) DEFAULT NULL,
  'telefone1' varchar(20) DEFAULT NULL,
  'telefone2' varchar(20) DEFAULT NULL,
  'email' varchar(255) DEFAULT NULL,
  'responsavel' varchar(255) DEFAULT NULL,
  'cep' varchar(10) DEFAULT NULL,
  'logradouro' varchar(255) DEFAULT NULL,
  'numero' varchar(20) DEFAULT NULL COMMENT 'Nº do logradouro',
  'complemento' varchar(255) DEFAULT NULL,
  'bairro' varchar(255) DEFAULT NULL,
  'cidade' varchar(255) DEFAULT NULL,
  'uf' varchar(2) DEFAULT NULL,
  'dataCadastro' date DEFAULT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1->Ativo, 0->Inativo',
  'tituloRelatorio' varchar(255) DEFAULT NULL,
  'cabecalhoRelatorio' text DEFAULT NULL,
  'extensoesAnexo' int(11) DEFAULT NULL COMMENT 'Extensões de anexos permitidos (separados por ;)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'unidade_extensao' (
  'unidadeExtensaoID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL,
  'extensaoID' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE 'usuario' (
  'usuarioID' int(11) NOT NULL,
  'nome' varchar(255) NOT NULL,
  'cpf' varchar(14) DEFAULT NULL,
  'cnpj' varchar(20) DEFAULT NULL,
  'dataNascimento' date DEFAULT NULL,
  'rg' varchar(20) DEFAULT NULL,
  'email' varchar(255) NOT NULL,
  'senha' varchar(255) NOT NULL,
  'admin' int(11) NOT NULL DEFAULT 0 COMMENT '1->Acesso todo sistema, 0->Usuário normal\r\n',
  'role' varchar(255) DEFAULT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1 => Ativo\r\n0 => Inativo',
  'imagem' text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE 'usuario_unidade' (
  'usuarioUnidadeID' int(11) NOT NULL,
  'usuarioID' int(11) NOT NULL,
  'unidadeID' int(11) NOT NULL,
  'papelID' int(11) NOT NULL COMMENT 'Cliente, Fornecedor...',
  'profissaoID' int(11) DEFAULT NULL,
  'registroConselhoClasse' varchar(50) DEFAULT NULL,
  'status' int(11) NOT NULL DEFAULT 1 COMMENT '1 => Ativo\r\n0 => Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
CREATE TABLE 'usuario_unidade_cargo' (
  'usuarioUnidadeCargoID' int(11) NOT NULL,
  'usuarioUnidadeID' int(11) NOT NULL,
  'cargoID' int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


ALTER TABLE'alternativa'
  MODIFY'alternativaID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
ALTER TABLE'alternativa_item'
  MODIFY'alternativaItemID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
ALTER TABLE'anexo'
  MODIFY'anexoID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'apresentacao'
  MODIFY'apresentacaoID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE'atividade'
  MODIFY'atividadeID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE'cargo'
  MODIFY'cargoID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE'categoria'
  MODIFY'categoriaID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
ALTER TABLE'divisor'
  MODIFY'divisorID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
ALTER TABLE'extensao'
  MODIFY'extensaoID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'fabrica_fornecedor'
  MODIFY'fabricaFornecedorID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE'fabrica_fornecedor_grupoanexo'
  MODIFY'fabricaFornecedorGrupoAnexoID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'fornecedor'
  MODIFY'fornecedorID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE'fornecedor_atividade'
  MODIFY'fornecedorAtividadeID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'fornecedor_categoria'
  MODIFY'fornecedorCategoriaID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'fornecedor_resposta'
  MODIFY'fornecedorRespostaID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'fornecedor_sistemaqualidade'
  MODIFY'fornecedorSistemaQualidadeID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'grupoanexo'
  MODIFY'grupoanexoID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
ALTER TABLE'grupoanexo_item'
  MODIFY'grupoanexoitemID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE'grupoanexo_parformulario'
  MODIFY'grupoanexoParformularioID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE'item'
  MODIFY'itemID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE'menu'
  MODIFY'menuID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
ALTER TABLE'movimentacaoformulario'
  MODIFY'movimentacaoFormularioID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE'papel'
  MODIFY'papelID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE'par_formulario'
  MODIFY'parFormularioID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE'par_fornecedor'
  MODIFY'parFornecedorID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
ALTER TABLE'par_fornecedor_bloco'
  MODIFY'parFornecedorBlocoID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE'par_fornecedor_bloco_atividade'
  MODIFY'parFornecedorBlocoAtividadeID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
ALTER TABLE'par_fornecedor_bloco_categoria'
  MODIFY'parFornecedorBlocoCategoriaID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
ALTER TABLE'par_fornecedor_bloco_item'
  MODIFY'parFornecedorBlocoItemID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE'par_fornecedor_bloco_item_pontuacao'
  MODIFY'parFornecedorBlocoItemPontuacaoID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'par_fornecedor_unidade'
  MODIFY'parFornecedorUnidadeID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
ALTER TABLE'par_recebimentomp'
  MODIFY'parRecebimentompID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
ALTER TABLE'par_recebimentomp_bloco'
  MODIFY'parRecebimentompBlocoID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE'par_recebimentomp_bloco_item'
  MODIFY'parRecebimentompBlocoItemID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
ALTER TABLE'par_recebimentomp_naoconformidade'
  MODIFY'parRecebimentompNaoconformidadeID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
ALTER TABLE'par_recebimentomp_naoconformidade_bloco'
  MODIFY'parRecebimentompNaoconformidadeBlocoID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'par_recebimentomp_naoconformidade_bloco_item'
  MODIFY'parRecebimentompNaoconformidadeBlocoItemID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'par_recebimentomp_naoconformidade_unidade'
  MODIFY'parRecebimentompNaoconformidadeUnidadeID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'par_recebimentomp_produto'
  MODIFY'parRecebimentompProdutoID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
ALTER TABLE'par_recebimentomp_produto_unidade'
  MODIFY'parRecebimentompProdutoUnidadeID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=164;
ALTER TABLE'par_recebimentomp_unidade'
  MODIFY'parRecebimentompUnidadeID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
ALTER TABLE'permissao'
  MODIFY'permissaoID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'pessoa'
  MODIFY'pessoaID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE'produto'
  MODIFY'produtoID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
ALTER TABLE'profissao'
  MODIFY'profissaoID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'recebimentomp'
  MODIFY'recebimentompID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'recebimentomp_naoconformidade'
  MODIFY'recebimentompNaoconformidadeID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'recebimentomp_naoconformidade_resposta'
  MODIFY'recebimentompNaoconformidadeRespostaID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'recebimentomp_produto'
  MODIFY'recebimentompProdutoID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'recebimentomp_resposta'
  MODIFY'recebimentompRespostaID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'registroestabelecimento'
  MODIFY'registroEstabelecimentoID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'sistemaqualidade'
  MODIFY'sistemaQualidadeID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE'submenu'
  MODIFY'submenuID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
ALTER TABLE'tiponaoconformidade'
  MODIFY'tipoNaoconformidadeID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'tipooperacao'
  MODIFY'tipooperacaoID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
ALTER TABLE'tipoveiculo'
  MODIFY'tipoVeiculoID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
ALTER TABLE'transportador'
  MODIFY'transportadorID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE'unidade'
  MODIFY'unidadeID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
ALTER TABLE'unidade_extensao'
  MODIFY'unidadeExtensaoID' int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE'usuario'
  MODIFY'usuarioID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
ALTER TABLE'usuario_unidade'
  MODIFY'usuarioUnidadeID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
ALTER TABLE'usuario_unidade_cargo'
  MODIFY'usuarioUnidadeCargoID' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
ALTER TABLE'alternativa_item'
  ADD CONSTRAINT'FK_alternativa_item_alternativa_alternativaID' FOREIGN KEY ('alternativaID') REFERENCES'alternativa' ('alternativaID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'anexo'
  ADD CONSTRAINT'FK_anexo_fornecedor_fornecedorID' FOREIGN KEY ('fornecedorID') REFERENCES'fornecedor' ('fornecedorID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_anexo_grupoanexo_item_grupoanexoitemID' FOREIGN KEY ('grupoAnexoItemID') REFERENCES'grupoanexo_item' ('grupoanexoitemID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_anexo_recebimentomp_recebimentompID' FOREIGN KEY ('recebimentoMpID') REFERENCES'recebimentomp' ('recebimentompID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_anexo_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_anexo_usuario_usuarioID' FOREIGN KEY ('usuarioID') REFERENCES'usuario' ('usuarioID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'divisor'
  ADD CONSTRAINT'FK_divisor_papel_papelID' FOREIGN KEY ('papelID') REFERENCES'papel' ('papelID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'fabrica_fornecedor'
  ADD CONSTRAINT'FK_fabrica_fornecedor_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'fabrica_fornecedor_grupoanexo'
  ADD CONSTRAINT'FK_fabrica_fo_fabricaFornecedorID' FOREIGN KEY ('fabricaFornecedorID') REFERENCES'fabrica_fornecedor' ('fabricaFornecedorID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_fabrica_fornecedor_grupoanexo_grupoanexo_grupoanexoID' FOREIGN KEY ('grupoAnexoID') REFERENCES'grupoanexo' ('grupoanexoID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'fornecedor'
  ADD CONSTRAINT'FK_fornecedor_registroestabelecimento_registroEstabelecimentoID' FOREIGN KEY ('registroEstabelecimentoID') REFERENCES'registroestabelecimento' ('registroEstabelecimentoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_fornecedor_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'fornecedor_atividade'
  ADD CONSTRAINT'FK_fornecedor_atividade_atividade_atividadeID' FOREIGN KEY ('atividadeID') REFERENCES'atividade' ('atividadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_fornecedor_atividade_fornecedor_fornecedorID' FOREIGN KEY ('fornecedorID') REFERENCES'fornecedor' ('fornecedorID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'fornecedor_categoria'
  ADD CONSTRAINT'FK_fornecedor_categoria_categoria_categoriaID' FOREIGN KEY ('categoriaID') REFERENCES'categoria' ('categoriaID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_fornecedor_categoria_fornecedor_fornecedorID' FOREIGN KEY ('fornecedorID') REFERENCES'fornecedor' ('fornecedorID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'fornecedor_resposta'
  ADD CONSTRAINT'FK_fornecedor_resposta_fornecedor_fornecedorID' FOREIGN KEY ('fornecedorID') REFERENCES'fornecedor' ('fornecedorID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_fornecedor_resposta_item_itemID' FOREIGN KEY ('itemID') REFERENCES'item' ('itemID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_fornecedor_resposta_par_fornecedor_bloco_parFornecedorBlocoID' FOREIGN KEY ('parFornecedorBlocoID') REFERENCES'par_fornecedor_bloco' ('parFornecedorBlocoID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'fornecedor_sistemaqualidade'
  ADD CONSTRAINT'FK_fornecedo_sistemaqualidade_sistemaQualidadeID' FOREIGN KEY ('sistemaQualidadeID') REFERENCES'sistemaqualidade' ('sistemaQualidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_fornecedor_sistemaqualidade_par_fornecedor_parFornecedorID' FOREIGN KEY ('fornecedorID') REFERENCES'par_fornecedor' ('parFornecedorID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'grupoanexo'
  ADD CONSTRAINT'FK_grupoanexo_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'grupoanexo_item'
  ADD CONSTRAINT'FK_grupoanexo_item_grupoanexo_grupoanexoID' FOREIGN KEY ('grupoanexoID') REFERENCES'grupoanexo' ('grupoanexoID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'grupoanexo_parformulario'
  ADD CONSTRAINT'FK_grupoanexo_parformulario_grupoanexo_grupoanexoID' FOREIGN KEY ('grupoAnexoID') REFERENCES'grupoanexo' ('grupoanexoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_grupoanexo_parformulario_par_formulario_parFormularioID' FOREIGN KEY ('parFormularioID') REFERENCES'par_formulario' ('parFormularioID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'item'
  ADD CONSTRAINT'FK_item_par_formulario_parFormularioID' FOREIGN KEY ('parFormularioID') REFERENCES'par_formulario' ('parFormularioID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'menu'
  ADD CONSTRAINT'FK_menu_divisor_divisorID' FOREIGN KEY ('divisorID') REFERENCES'divisor' ('divisorID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'movimentacaoformulario'
  ADD CONSTRAINT'FK_movimentacaoformulario_papel_papelID' FOREIGN KEY ('papelID') REFERENCES'papel' ('papelID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_movimentacaoformulario_par_formulario_parFormularioID' FOREIGN KEY ('parFormularioID') REFERENCES'par_formulario' ('parFormularioID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_movimentacaoformulario_par_fornecedor_parFornecedorID' FOREIGN KEY ('id') REFERENCES'par_fornecedor' ('parFornecedorID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_movimentacaoformulario_par_recebimentomp_parRecebimentompID' FOREIGN KEY ('id') REFERENCES'par_recebimentomp' ('parRecebimentompID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_movimentacaoformulario_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_movimentacaoformulario_usuario_usuarioID' FOREIGN KEY ('usuarioID') REFERENCES'usuario' ('usuarioID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_fornecedor_bloco'
  ADD CONSTRAINT'FK_par_fornecedor_bloco_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_fornecedor_bloco_atividade'
  ADD CONSTRAINT'FK_par_fornecedor_bloco_ativid' FOREIGN KEY ('parFornecedorBlocoID') REFERENCES'par_fornecedor_bloco' ('parFornecedorBlocoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_fornecedor_bloco_atividade_atividade_atividadeID' FOREIGN KEY ('atividadeID') REFERENCES'atividade' ('atividadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_fornecedor_bloco_atividade_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_fornecedor_bloco_categoria'
  ADD CONSTRAINT'FK_par_fornecedopar_fornecedor_bloco_parFornecedorBlocoID' FOREIGN KEY ('parFornecedorBlocoID') REFERENCES'par_fornecedor_bloco' ('parFornecedorBlocoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_fornecedor_bloco_categoria_categoria_categoriaID' FOREIGN KEY ('categoriaID') REFERENCES'categoria' ('categoriaID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_fornecedor_bloco_categoria_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_fornecedor_bloco_item'
  ADD CONSTRAINT'FK_par_fornecedor_bloco_ite' FOREIGN KEY ('parFornecedorBlocoID') REFERENCES'par_fornecedor_bloco' ('parFornecedorBlocoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_fornecedor_bloco_item_alternativa_alternativaID' FOREIGN KEY ('alternativaID') REFERENCES'alternativa' ('alternativaID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_fornecedor_bloco_item_item_itemID' FOREIGN KEY ('itemID') REFERENCES'item' ('itemID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_fornecedor_bloco_item_pontuacao'
  ADD CONSTRAINT'FK_par_fornecedor_bloco_item_parFornecedorBlocoItemID' FOREIGN KEY ('parFornecedorBlocoItemID') REFERENCES'par_fornecedor_bloco_item' ('parFornecedorBlocoItemID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_fornecedor_bloco_item_pontuacao_alternativa_alternativaID' FOREIGN KEY ('alternativaID') REFERENCES'alternativa' ('alternativaID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_pontuacao_alternativa_item_alternativaItemID' FOREIGN KEY ('alternativaItemID') REFERENCES'alternativa_item' ('alternativaItemID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_fornecedor_unidade'
  ADD CONSTRAINT'FK_par_fornecedor_unidade' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_fornecedor_unidade_par_fornecedor_parFornecedorID' FOREIGN KEY ('parFornecedorID') REFERENCES'par_fornecedor' ('parFornecedorID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_recebimentomp_bloco'
  ADD CONSTRAINT'FK_par_recebimentomp_bloco_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'fk_parRecebimentompBlocoID' FOREIGN KEY ('parRecebimentompBlocoID') REFERENCES'recebimentomp_resposta' ('parRecebimentompBlocoID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_recebimentomp_bloco_item'
  ADD CONSTRAINT'FK_ar_recrRecebimentompBlocoID' FOREIGN KEY ('parRecebimentompBlocoID') REFERENCES'par_recebimentomp_bloco' ('parRecebimentompBlocoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_recebimentomp_bloco_item_alternativa_alternativaID' FOREIGN KEY ('alternativaID') REFERENCES'alternativa' ('alternativaID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_recebimentomp_bloco_item_item_itemID' FOREIGN KEY ('itemID') REFERENCES'item' ('itemID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_recebimentomp_naoconformidade_bloco'
  ADD CONSTRAINT'FK_par_recebimentomp_naoconformidade_bloco_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_recebimentomp_naoconformidade_bloco_item'
  ADD CONSTRAINT'FK_par_recebimentomp_naoconformidade_bloco_item_item_itemID' FOREIGN KEY ('itemID') REFERENCES'item' ('itemID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_precebinformidadecebimentompNaoconformidadeBlocoID' FOREIGN KEY ('parRecebimentompNaoconformidadeBlocoID') REFERENCES'par_recebimentomp_naoconformidade_bloco' ('parRecebimentompNaoconformidadeBlocoID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_recebimentomp_naoconformidade_unidade'
  ADD CONSTRAINT'FK_par_nformentompNaoconformidadeID' FOREIGN KEY ('parRecebimentompNaoconformidadeID') REFERENCES'par_recebimentomp_naoconformidade' ('parRecebimentompNaoconformidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_recebimentomp_naoconformidade_unidade_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_recebimentomp_produto_unidade'
  ADD CONSTRAINT'FK_par_r_produto_parRecebimentompProdutoID' FOREIGN KEY ('parRecebimentompProdutoID') REFERENCES'par_recebimentomp_produto' ('parRecebimentompProdutoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_recebimentomp_produto_unidade_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'par_recebimentomp_unidade'
  ADD CONSTRAINT'FK_par_recebimenr_recebimentomp_parRecebimentompID' FOREIGN KEY ('parRecebimentompID') REFERENCES'par_recebimentomp' ('parRecebimentompID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_par_recebimentomp_unidade_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'permissao'
  ADD CONSTRAINT'FK_permissao_papel_papelID' FOREIGN KEY ('papelID') REFERENCES'papel' ('papelID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_permissao_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_permissao_usuario_usuarioID' FOREIGN KEY ('usuarioID') REFERENCES'usuario' ('usuarioID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'pessoa'
  ADD CONSTRAINT'pessoa_ibfk_1' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID');
ALTER TABLE'produto'
  ADD CONSTRAINT'FK_produto_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'produto_ibfk_1' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'profissao'
  ADD CONSTRAINT'FK_profissao_usuario_unidade_profissaoID' FOREIGN KEY ('profissaoID') REFERENCES'usuario_unidade' ('profissaoID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'recebimentomp'
  ADD CONSTRAINT'FK_recebimentomp_fornecedor_fornecedorID' FOREIGN KEY ('fornecedorID') REFERENCES'fornecedor' ('fornecedorID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_pessoa_pessoaID' FOREIGN KEY ('pessoaID') REFERENCES'pessoa' ('pessoaID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_tipooperacao_tipooperacaoID' FOREIGN KEY ('tipoOperacaoID') REFERENCES'tipooperacao' ('tipooperacaoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_tipoveiculo_tipoVeiculoID' FOREIGN KEY ('tipoVeiculoID') REFERENCES'tipoveiculo' ('tipoVeiculoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_transportador_transportadorID' FOREIGN KEY ('transportadorID') REFERENCES'transportador' ('transportadorID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'recebimentomp_naoconformidade'
  ADD CONSTRAINT'FK_midaddadeID' FOREIGN KEY ('tipoNaoconformidadeID') REFERENCES'tiponaoconformidade' ('tipoNaoconformidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_naoconformidade_fornecedor_fornecedorID' FOREIGN KEY ('fornecedorID') REFERENCES'fornecedor' ('fornecedorID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_naoconformidade_produto_produtoID' FOREIGN KEY ('produtoID') REFERENCES'produto' ('produtoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_naoconformidade_recebimentomp_recebimentompID' FOREIGN KEY ('recebimentompID') REFERENCES'recebimentomp' ('recebimentompID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_naoconformidade_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'recebimentomp_naoconformidade_resposta'
  ADD CONSTRAINT'FK_recebimecntompNaoconformidadeID' FOREIGN KEY ('recebimentompNaoconformidadeID') REFERENCES'recebimentomp_naoconformidade' ('recebimentompNaoconformidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_naoconformidade_resposta_item_itemID' FOREIGN KEY ('itemID') REFERENCES'item' ('itemID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_remidcerRecebimentompNaoconformidadeBlocoID' FOREIGN KEY ('parRecebimentompNaoconformidadeBlocoID') REFERENCES'par_recebimentomp_naoconformidade_bloco' ('parRecebimentompNaoconformidadeBlocoID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'recebimentomp_produto'
  ADD CONSTRAINT'FK_recebimentomp_produto_apresentacao_apresentacaoID' FOREIGN KEY ('apresentacaoID') REFERENCES'apresentacao' ('apresentacaoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_produto_atividade_atividadeID' FOREIGN KEY ('atividadeID') REFERENCES'atividade' ('atividadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_produto_produto_produtoID' FOREIGN KEY ('produtoID') REFERENCES'produto' ('produtoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_produto_recebimentomp_recebimentompID' FOREIGN KEY ('recebimentompID') REFERENCES'recebimentomp' ('recebimentompID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'recebimentomp_resposta'
  ADD CONSTRAINT'FK_recebimentomp_resposta_alternativa_item_alternativaItemID' FOREIGN KEY ('respostaID') REFERENCES'alternativa_item' ('alternativaItemID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_resposta_item_itemID' FOREIGN KEY ('itemID') REFERENCES'item' ('itemID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentomp_resposta_recebimentomp_recebimentompID' FOREIGN KEY ('recebimentompID') REFERENCES'recebimentomp' ('recebimentompID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_recebimentompbLOCOiTEM' FOREIGN KEY ('parRecebimentompBlocoID') REFERENCES'par_recebimentomp_bloco' ('parRecebimentompBlocoID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'submenu'
  ADD CONSTRAINT'FK_submenu_menu_menuID' FOREIGN KEY ('menuID') REFERENCES'menu' ('menuID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'transportador'
  ADD CONSTRAINT'FK_transportador_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'transportador_ibfk_1' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'unidade'
  ADD CONSTRAINT'FK_unidade_usuario_unidade_usuarioUnidadeID' FOREIGN KEY ('unidadeID') REFERENCES'usuario_unidade' ('usuarioUnidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'unidade_extensao'
  ADD CONSTRAINT'FK_unidade_extensao_extensao_extensaoID' FOREIGN KEY ('extensaoID') REFERENCES'extensao' ('extensaoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_unidade_extensao_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'usuario_unidade'
  ADD CONSTRAINT'FK_usuario_unidade_papel_papelID' FOREIGN KEY ('papelID') REFERENCES'papel' ('papelID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_usuario_unidade_profissao_profissaoID' FOREIGN KEY ('profissaoID') REFERENCES'profissao' ('profissaoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_usuario_unidade_unidade_unidadeID' FOREIGN KEY ('unidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_usuario_unidade_usuario_usuarioID' FOREIGN KEY ('usuarioID') REFERENCES'usuario' ('usuarioID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'usuario_unidade_ibfk_1' FOREIGN KEY ('usuarioID') REFERENCES'usuario' ('usuarioID') ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE'usuario_unidade_cargo'
  ADD CONSTRAINT'FK_usuario_unidade_cargo_cargo_cargoID' FOREIGN KEY ('cargoID') REFERENCES'cargo' ('cargoID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'FK_usuario_unidade_cargo_unidade_unidadeID' FOREIGN KEY ('usuarioUnidadeID') REFERENCES'unidade' ('unidadeID') ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT'cargoID' FOREIGN KEY ('cargoID') REFERENCES'cargo' ('cargoID') ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;
`
