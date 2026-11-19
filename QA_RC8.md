# QA de demonstração RC8 (execução com Chromium headless e JavaScript embutido)

## Passou
- Entrada com `DEV`/`DEV2026`; 9 aplicativos no launcher.
- Renderização individual dos 9 aplicativos sem exceções JavaScript nos testes executados.
- Cadastro fictício de pessoa e abertura de ficha.
- Orçamento fictício: criação, edição de rascunho, emissão, aceite e geração de cobrança prevista vinculada ao Financeiro.
- Passo a Passo: avanço de etapa e acesso aos tutoriais.
- Contingência: criação de ficha, download `.xlsx` genuíno (ZIP/OpenXML), reimportação do próprio modelo e revisão por código.
- Marketing: Canvas criado e exportação PNG prevista por função do navegador; ajuda e formulário de métricas acessíveis.
- Chamados: protocolo local fictício.
- Exportações financeiras: `.xlsx` verdadeiro validado com `zipfile`; PDF validado por cabeçalho `%PDF`.
- Recepção simulada não recebe menu do Resumo Financeiro.
- Mobile de 390 px sem overflow horizontal no launcher.
- Nenhuma exceção JavaScript nas baterias automatizadas acima.

## Limites de teste
- Os testes foram executados sobre HTML, CSS e JS carregados no Chromium em memória; não houve E2E remoto em GitHub Pages, nem verificação do ambiente Supabase.
- A imagem de marca local não foi renderizada na bateria em memória; seu arquivo existe no ZIP e sua referência relativa é correta para GitHub Pages.
- Não foi realizada auditoria de acessibilidade completa, segurança, desempenho em iOS/Android reais nem RESTORE de dados.
- Menus e interações dos módulos futuros são prototípicos e não representam os seus requisitos legais/operacionais concluídos.
- Paridade de planilha, Stone, repasses e DRE ainda precisam validação na etapa financeira técnica.

**Resultado:** DEMONSTRAÇÃO NAVEGÁVEL apta à apresentação interna, NÃO aprovada para uso com dados reais.
