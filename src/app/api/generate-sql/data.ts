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
`
