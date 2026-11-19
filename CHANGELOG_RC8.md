# Histórico da atualização — RC8 DEV

Base: RC7.1 integral funcional, sem remover a lógica financeira preexistente.

- Tela de acesso demonstrativo `DEV` / `DEV2026`, com aviso de não segurança.
- Launcher com **9 aplicativos**: Financeiro BI, Cadastro, Documentos, Governança, Atendimento, Agenda, Estoque/AASI, RH, Marketing e Redes.
- Divisão do antigo Cadastro/Governança em dois aplicativos e preservação das identidades sintéticas já existentes.
- Cadastro de pessoas físicas e organizações, múltiplos vínculos, busca, ficha, deduplicação simples e referências em formulários.
- Central Documental com orçamentos editáveis em rascunho, emissão fictícia, aceite declarado e proposta de cobrança vinculada ao Financeiro, sem baixa automática.
- Biblioteca de modelos, impressão pelo navegador, Passo a Passo com etapas por atividade, Kit de Contingência com exportação/importação de planilha própria `.xlsx` e conferência de duplicados.
- Governança com fluxo de solicitação de acesso, aprovação institucional simulada, eventos de risco e visão de módulos.
- Marketing com editor Canvas local, zoom, posição, moldura, marca, exportação PNG, métricas manuais, calendário e ajuda voluntária.
- Ajuda/Chamados demonstrativos com estado local, sem envio à Central AA.dev.
- Persistência dos dados fictícios de campos textuais no navegador local e reset no Laboratório DEV.
- Filtragem aplicada a `reportRows()` para refletir o filtro selecionado nas exportações financeiras.
- Service worker e manifesto identificados com RC8.

Nenhuma conexão de backend, publicação ou migração realizada.
