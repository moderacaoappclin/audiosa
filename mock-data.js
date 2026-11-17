// DADOS FICTÍCIOS. Não use informações de pacientes, documentos reais ou credenciais.
export const DEMO_DATE = '2026-11-17';
export const PEOPLE = [
  { id:'marcia', name:'Dra. Márcia', role:'Fonoaudióloga', rate:60, note:'Percentual informado; base de cálculo ainda não confirmada.' },
  { id:'eleonora', name:'Dra. Eleonora', role:'Fonoaudióloga', rate:70, note:'Percentual informado; base de cálculo ainda não confirmada.' },
  { id:'amanda', name:'Dra. Amanda', role:'Fonoaudióloga', rate:null, note:'Regra contratual pendente.' },
  { id:'simone', name:'Dra. Simone', role:'Responsável por aprovações de correções e estornos', rate:null, note:'Não há percentual de repasse confirmado.' },
];
export const CATEGORIES={entrada:['Consulta / serviço','Aparelho auditivo','Recebimento diverso','Outras receitas'],saida:['Fornecedor de AASI','Aluguel e estrutura','Serviços terceirizados','Repasse profissional','Tributos','Despesas operacionais','Outras despesas']};
export const initialTransactions = [
  {id:'FIN-1001', date:'2026-11-03',description:'Recebimento de serviço — DEMO',kind:'entrada',category:'Consulta / serviço',gross:2400,fees:0,net:2400,method:'pix',status:'pago',professional:'marcia',stone:false,notes:'Exemplo técnico sem dados de pacientes'},
  {id:'FIN-1002', date:'2026-11-05',description:'Venda AASI demonstrativa — Stone',kind:'entrada',category:'Aparelho auditivo',gross:5900,fees:0,net:5900,method:'cartao',status:'pago',professional:'eleonora',stone:true,notes:'Taxas não calculadas: tabela oficial pendente'},
  {id:'FIN-1003', date:'2026-11-08',description:'Serviço de avaliação — DEMO',kind:'entrada',category:'Consulta / serviço',gross:780,fees:0,net:780,method:'pix',status:'pago',professional:'marcia',stone:false,notes:''},
  {id:'FIN-1004', date:'2026-11-09',description:'Serviço de contabilidade — DEMO',kind:'saida',category:'Serviços terceirizados',gross:1200,fees:0,net:1200,method:'pix',status:'pago',professional:'',stone:false,notes:''},
  {id:'FIN-1005', date:'2026-11-10',description:'Aluguel da unidade — DEMO',kind:'saida',category:'Aluguel e estrutura',gross:3200,fees:0,net:3200,method:'transferencia',status:'pago',professional:'',stone:false,notes:''},
  {id:'FIN-1006', date:'2026-11-12',description:'Venda AASI em processamento — DEMO',kind:'entrada',category:'Aparelho auditivo',gross:7300,fees:0,net:7300,method:'cartao',status:'pendente',professional:'marcia',stone:true,notes:'Conciliação pendente'},
  {id:'FIN-1007', date:'2026-11-18',description:'Fornecedor de equipamentos — DEMO',kind:'saida',category:'Fornecedor de AASI',gross:1800,fees:0,net:1800,method:'boleto',status:'pendente',professional:'',stone:false,notes:''},
  {id:'FIN-1008', date:'2026-11-25',description:'Recebimento programado — DEMO',kind:'entrada',category:'Recebimento diverso',gross:1500,fees:0,net:1500,method:'pix',status:'pendente',professional:'',stone:false,notes:''}
];
export const initialInstallments = [
  {id:'PAR-101',parent:'Compra parcelada demonstrativa',index:1,total:4,due:'2026-12-10',amount:500,status:'pendente'},
  {id:'PAR-102',parent:'Compra parcelada demonstrativa',index:2,total:4,due:'2027-01-10',amount:500,status:'pendente'},
  {id:'PAR-103',parent:'Compra parcelada demonstrativa',index:3,total:4,due:'2027-02-10',amount:500,status:'pendente'},
  {id:'PAR-104',parent:'Compra parcelada demonstrativa',index:4,total:4,due:'2027-03-10',amount:500,status:'pendente'}
];
export const initialRecurring=[
  {id:'REC-01',description:'Contabilidade (exemplo)',amount:1200,day:12,frequency:'mensal',status:'ativo'},
  {id:'REC-02',description:'Software administrativo (exemplo)',amount:699,day:10,frequency:'mensal',status:'ativo'}
];
export const initialStone=[
  {id:'ST-4512',sale:'FIN-1002',gross:5900,fee:null,advance:null,deposit:null,status:'aguardando',note:'Tabela oficial de taxas e extrato não fornecidos'},
  {id:'ST-4513',sale:'FIN-1006',gross:7300,fee:null,advance:null,deposit:null,status:'aguardando',note:'Pagamento demonstrativo a conferir'}
];
export const initialAudit=[
  {id:'AUD-01',date:'17/11/2026',who:'Sistema demonstrativo',action:'Ambiente de demonstração aberto',detail:'Nenhum backend conectado'}
];
export const previousMonths = [
 {m:'Jun',income:13400,expense:7600},{m:'Jul',income:15200,expense:8800},{m:'Ago',income:17100,expense:10200},
 {m:'Set',income:16500,expense:9400},{m:'Out',income:19200,expense:11400},{m:'Nov',income:0,expense:0}
];
