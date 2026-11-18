// DADOS 100% SINTÉTICOS. Nenhum CPF, documento, paciente ou contato real.
export const DEMO_DATE='2026-11-18';
export const demoPatients=[
 {id:'PAC-001',name:'Paciente Exemplo A',phone:'(11) 90000-0101',email:'paciente-a@exemplo.invalid',tag:'cortesia',note:'Cortesia condicionada à autorização para avaliação demonstrativa',legal:''},
 {id:'PAC-002',name:'Paciente Exemplo B',phone:'(11) 90000-0102',email:'paciente-b@exemplo.invalid',tag:'pendencia',note:'Solicitou retorno administrativo; não é classificação clínica',legal:''},
 {id:'PAC-003',name:'Paciente Exemplo C',phone:'(11) 90000-0103',email:'paciente-c@exemplo.invalid',tag:'',note:'',legal:'Responsável Exemplo'}
];
export const demoProfessionals=[
 {id:'marcia',name:'Dra. Márcia',rate:60,base:'pendente',notes:'60% informado; base de cálculo e contrato pendentes'},
 {id:'eleonora',name:'Dra. Eleonora',rate:70,base:'pendente',notes:'70% informado; base de cálculo e contrato pendentes'},
 {id:'amanda',name:'Dra. Amanda',rate:null,base:'pendente',notes:'Regra não confirmada'},
 {id:'simone',name:'Dra. Simone',rate:null,base:'pendente',notes:'Sem percentual informado'}
];
export const demoServices=[
 {id:'SV-01',name:'Consulta',duration:60,price:22000},
 {id:'SV-02',name:'Exame/Procedimento',duration:60,price:35000},
 {id:'SV-03',name:'Terapia e treinamento auditivo',duration:60,price:19000},
 {id:'SV-04',name:'Aparelho auditivo',duration:90,price:null},
 {id:'SV-05',name:'Outros',duration:60,price:null}
];
export const demoAccounts=[
 {id:'cx-pj',name:'Conta PJ · Clínica (fictícia)',kind:'pj',opening:3000000,owner:'Clínica Áudio S.A.'},
 {id:'cx-pj2',name:'Outra conta PJ · Demonstração',kind:'pj',opening:900000,owner:'Clínica Áudio S.A.'},
 {id:'cx-cash',name:'Caixa físico · Demonstração',kind:'cash',opening:50000,owner:'Clínica Áudio S.A.'},
 {id:'cx-pf',name:'Conta pessoal de terceiro',kind:'personal',opening:0,owner:'Pessoa externa — não integra caixa da clínica'}
];
export const demoCards=[
 {id:'cc-01',name:'Crédito 1 · PJ (fictício)',kind:'credit',owner:'Clínica Áudio S.A.',limit:600000},
 {id:'va-01',name:'Benefício VA / VR de demonstração',kind:'benefit',owner:'Titular autorizado',limit:null}
];
export const demoTransactions=[
 {id:'FIN-101',kind:'entrada',desc:'Consulta de demonstração',patient:'PAC-001',service:'SV-01',professional:'marcia',gross:22000,fees:0,net:22000,account:'cx-pj',method:'pix',status:'liquidado',date:'2026-11-02',due:'2026-11-02',paid:'2026-11-02',owner:'simone',source:'Demonstração'},
 {id:'FIN-102',kind:'saida',desc:'Fornecedor de insumos · Exemplo',patient:'',service:'',professional:'',gross:13500,fees:0,net:13500,account:'cx-pj',method:'pix',status:'liquidado',date:'2026-11-04',due:'2026-11-04',paid:'2026-11-04',owner:'simone',source:'Demonstração'},
 {id:'FIN-103',kind:'entrada',desc:'Exame demonstrativo a receber',patient:'PAC-002',service:'SV-02',professional:'eleonora',gross:35000,fees:0,net:35000,account:'cx-pj',method:'boleto',status:'previsto',date:'2026-11-15',due:'2026-11-25',paid:'',owner:'simone',source:'Demonstração'},
 {id:'FIN-104',kind:'saida',desc:'Aluguel previsto',patient:'',service:'',professional:'',gross:260000,fees:0,net:260000,account:'cx-pj',method:'boleto',status:'previsto',date:'2026-11-18',due:'2026-11-30',paid:'',owner:'simone',source:'Demonstração'}
];
export const demoInventory=[
 {id:'AASI-01',serial:'AUD-D001',model:'Modelo A · Direito',side:'D',ownership:'Clínica',custody:'Paciente Exemplo A',status:'teste',patient:'PAC-001',until:'2026-11-25',warranty:'2027-06-01',history:['Recebido pela clínica','Disponibilizado para teste PAC-001']},
 {id:'AASI-02',serial:'AUD-E002',model:'Modelo A · Esquerdo',side:'E',ownership:'Fornecedor consignante',custody:'Clínica',status:'conferencia',patient:'PAC-001',until:'',warranty:'2027-05-01',history:['Recebido em consignação','Teste com PAC-001','Devolvido: conferência pendente']},
 {id:'AASI-03',serial:'AUD-D003',model:'Modelo B · Direito',side:'D',ownership:'Fornecedor consignante',custody:'Clínica',status:'disponivel',patient:'',until:'',warranty:'2027-05-01',history:['Recebido em consignação']}
];
export const demoAppointments=[
 {id:'AG-101',patient:'PAC-001',professional:'marcia',date:'2026-11-19',time:'09:00',status:'agendado',source:'agendamento',notes:'Avaliação auditiva demonstrativa'},
 {id:'AG-102',patient:'PAC-002',professional:'eleonora',date:'2026-11-19',time:'10:00',status:'confirmado',source:'agendamento',notes:'Retorno de demonstração'}
];
export const demoHR=[{id:'RH-100',person:'Colaborador Exemplo',category:'Férias',status:'em análise',reviewer:'Dra. Simone',notes:'Solicitação demonstrativa, sem concessão legal'}];
export const demoDocuments=[{id:'DOC-01',type:'Termo de teste AASI',patient:'PAC-001',status:'rascunho não assinado',serial:'AUD-D001',version:'V1 · exemplo'},{id:'DOC-02',type:'Orientações de entrega',patient:'PAC-001',status:'rascunho não assinado',serial:'AUD-D001',version:'V1 · exemplo'}];
