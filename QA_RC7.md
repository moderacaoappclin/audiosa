# QA RC7 — Evidências e limites

PASSOU — execução Node ESM isolada dos componentes de renderização para os 7 módulos sem erros de JS; conversões de centavos, gerações de parcelas e previsto ≠ caixa; ocultação do Resumo Financeiro quando perfil Recepção.

PASSOU — formulário financeiro de 3 etapas executado em simulação de DOM/FormData: lançamento previsto sem baixar caixa; encaminhamento de Recepção, aprovação simulada pela Dra. Simone e liquidação posterior com ajuste exatamente uma vez.

PASSOU — geração dos arquivos de exportação, `.xlsx` aberto por openpyxl e PDF válido extraído por pypdf, com conteúdo somente demonstrativo.

PARCIAL — validações de formulário, dados sintéticos, indicações de origem e limites contratuais implementadas localmente. Não substituem backend real, nem constituem validação contábil/jurídica.

NÃO TESTADO EM NAVEGADOR — Playwright/Chromium foi bloqueado pelo ambiente de execução (ERR_BLOCKED_BY_ADMINISTRATOR inclusive para localhost/file), logo sem comprovação de screenshots, toque real, animações, instalação PWA, reader/ARIA ou exportações acionadas no browser.

NÃO COMPROVADO — paridade linha a linha com `app.js`, `style.css`, `mock-data.js` e assets originais do GitHub; os arquivos brutos grandes não puderam ser recuperados integralmente para comparação local. Logo, NÃO declarar 100% das funções antigas preservadas.

NÃO IMPLEMENTADO — autenticação real, RLS, auditoria persistente, Storage privado, validade de assinaturas, comunicação externa, OCR real, APIs bancárias/Stone, TISS e automações fiscais/trabalhistas.
