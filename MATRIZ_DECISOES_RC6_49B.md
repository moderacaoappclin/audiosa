# Matriz de rastreabilidade — SGI audiosa.app RC7 (DEMO)

**Legenda:** EX = exercitável localmente; VIS = navegação/fluxo ilustrativo; PAR = preparação parcial; PEND = depende de backend/contrato/QA; N/A = fora deste pacote.

| Decisões e fontes | Requisito | RC7 | Limite de produção |
|---|---|---|---|
| RC6 N01–N03 | Sete aplicativos e Área de Trabalho Acolhedora, tema e mobile | EX | Launcher todos abertos somente DEMO; produção só contratado/autorizado |
| 04B–05B | Paciente único, prontuário longitudinal, vínculo assistencial | VIS | Não há PEP, documentos de saúde ou controles clínicos reais |
| 06C–08B | Atendimento agendado/avulso, check-in, fila, chamada | EX/VIS | Não há transação nem autorização clínica server-side |
| 09C–13B | Encaixe humano, tolerância, agenda e confirmação assistida | VIS | Sem e-mail/SMS/WhatsApp enviado, nem auto-remarcação |
| 14B–16B | RH independente, terceirizado delegado, triagem inteligente | VIS | Nenhuma folha, eSocial, atestado ou dados trabalhistas reais |
| 17B | Convênios, contrato e calculadora financeira | EX/PAR | TISS, guias, elegibilidade, glosas avançadas não operacionais |
| 18B–19B | Central documental, termos AASI, confirmação independente | EX/VIS | Prévia sem assinatura e sem Storage privado |
| 20B–28 | AASI por série, consignação, teste, venda, devolução, inventário | EX/VIS | Sem movimentação física, transações concorrentes ou RLS |
| 29–38 | Identidade, convites, governança, catálogo | EX/VIS | Convites/licenças/autorização reais só via Central/backend |
| 39 | Contas PJ/PF, cartões, VR/VA e fonte do recurso | EX/PAR | Contabilização e vínculo com fatura completos dependem de contrato/back |
| 40 | BI e mobile mais acionáveis | EX/PAR | Gráfico histórico de exemplo, exige testes com dispositivos |
| 41 | Avisos por gestão / Central | EX/VIS | Gestão local apenas memória; Central AA.dev NÃO alterada |
| 42 | Cortesia, prioridade legítima, reclamação objetiva | VIS | Não implementar rotulação automática ou sigilo absoluto contra titular |
| 43 | Repasses por profissional, serviço, vigência e patrimônio | PAR | Taxas/vigências por serviço e contratos reais pendentes |
| 44 | Exportação Excel `.xlsx` e PDF personalizado | EX | PDF simples com identidade textual; refinamento gráfico futuro |
| 45 | Cadastro progressivo, CPF condicional, cronologia | VIS | Deduplicação/CPF/RLS não implementados em produção |
| 46 | Registro retrospectivo WhatsApp/telefone | EX | Somente memória; nenhuma mensagem enviada |
| 47 | Mensagens de bloqueio e prevenção | EX/PAR | Autorizações backend, idempotência e concorrência pendentes |
| 48 | Integração e continuidade, histórico preservado | PAR | Dados locais resetam; backend real somente após Gates |
| 49B | Financeiro demonstrativo + melhorias transversais seguras | EX/VIS | Sem Supabase, Central, GitHub deploy ou módulos clínicos reais |

## Regras de negócio demonstradas com testes automatizados
- Abertura de todos os sete módulos, renderização de telas e ocultação do dashboard gerencial à Recepção.
- Formulário de lançamento com etapas; Recepção propõe → Simone aprova (previsto) → confirma liquidação; caixa apenas na última etapa.
- Geração de três parcelas soma exatamente os centavos e não diminui caixa na contratação.
- XLSX é um arquivo Office Open XML real e foi aberto por `openpyxl`; PDF básico validado por `pypdf`.

## Auditoria necessária antes de alegar paridade total
- Baixar/receber `app.js`, `mock-data.js`, `style.css` e imagens originais atuais; comparar rotas, dados, gráficos, antigas validações, relatórios, OCR, Stone, repasses, taxas e outras rotinas existentes.
- Confrontar planilha Audio Planilha.xlsx, inclusive discrepância de contagem de opções 23/24.
- Obter tabela Stone contratual verdadeira, base de repasse e respostas oficiais da clínica.
- Executar testes gráficos e E2E em navegadores reais; ambiente automatizado deste pacote impediu navegação Playwright por política local.
