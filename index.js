var intervalID = window.setInterval(updateScreen, 500);
var c = document.getElementById("console");

var txt = [
  "Atualmente, atuo como Functional Analyst no Departamento de TI",
"– Divisão de Desenvolvimento de Sistemas no BOC (Bank of China Brasil)",
"",  
"================================================",
"onde trabalho com:",
"...",
"*SQL Server: Utilizado para analise de processamento, ", 
"parametrização ou possível modificação do sistema. ",
"...",
"*Sistemas PLD: Prevenção e lavagem de dinheiro (Sistema SIRCOI)",
"...",
"*GRI: Gestão de Riscos Operacionais (AOL, Agenda Legal e RO - Controles Internos) - (Contábil)",
"...",
"*Winfina: Credito imobiliário (IMB) ",
"...",
"*Sispro: Gestão patrimonial.",
"...",
"*FepWeb: Firmas e Poderes Web (Cambio)",
"================================================",
"*Como desenvolvedor com base em Java, tenho experiência nos processos de esteira",
"e na aplicação BGCC-Client Captura, adquirida durante minha atuação na SIS Consultoria.",
"...",
"*Minhas principais atividades incluíram:",
"...",
"Teste de Software: Utilizando SoapUI e Postman para gerar requisições",
"de teste e validar o funcionamento das aplicações.",
"...",
"Gerenciamento de Requisições (SIGS): Início de alterações por meio de Requisições",
"de Serviço (RS) no sistema interno do Bradesco, obtendo aprovações das superintendências e do DITI.",
"Mitigação de Vulnerabilidades: Após o commit para o servidor de desenvolvimento (IC)", 
"utilizei Fortify para identificar e remover vulnerabilidades críticas e altas antes do teste pelo setor de qualidade.",
"...",
"Anteriormente, colaborei com a HexaIT, prestando serviços de análise e suporte, atendendo clientes como Stefanini", 
"QMC Telecom, Itaú, Advanta, TIVIT, Rede D'Or (São Luiz) e Banco do Brasil. Estou em migração para a área de TI", 
"desenvolvendo conhecimentos em SAP, SEI, Java e MySQL.",
"Profissional sênior em Logística",
"...",
"Como profissional sênior em logística, fui responsável por gerir todo o processo logístico,",
"desde a programação da compra de matérias-primas, máquinas e materiais, até o desenvolvimento", 
"de estratégias para armazenagem e distribuição de produtos. Tive experiência no acompanhamento",
"de indicadores de desempenho operacional e transporte, além da elaboração de planilhas de controle.",
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}
