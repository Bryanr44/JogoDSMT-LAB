
const questions = {
    easy: [
      { question: "Se o sistema MPGOOGLE estiver falhando ou apresentando erros, qual deve ser a primeira ação a ser tomada?", options: ["Reiniciar o sistema e aguardar que o erro seja corrigido automaticamente.", "Solicitar que o usuário tente acessar o sistema novamente em outra máquina ou navegador.", "Ignorar o erro e pedir para o usuário tentar usar o sistema em um horário diferente.", "Abrir um chamado com a descrição do erro e os prints para análise."], correct: "Abrir um chamado com a descrição do erro e os prints para análise." },
      { question: "Qual deve ser a ação tomada quando é solicitado suporte para computadores não patrimoniados (particulares) no MPMG?", options: ["Realizar qualquer tipo de manutenção, sem restrições, para garantir o bom funcionamento do equipamento", "Apenas orientar verbalmente sobre como resolver problemas simples, desde que o usuário autorize", "Manter os computadores sem realizar qualquer tipo de intervenção, mesmo que o usuário precise de ajuda", "Realizar manutenção completa no equipamento, desde que o usuário solicite formalmente"], correct: "Apenas orientar verbalmente sobre como resolver problemas simples, desde que o usuário autorize" },
      { question: "Quando um usuário solicita acesso ao E-ponto, qual é o procedimento correto?", options: ["O acesso é dado apenas após uma avaliação detalhada pelo departamento de TI", "A solicitação deve ser enviada diretamente ao fornecedor do sistema, LG, para análise manual", "O acesso é automaticamente concedido aos servidores, membros e estagiários cadastrados", "O usuário precisa aguardar a criação de um incidente para que o acesso seja habilitado"], correct: "O acesso é automaticamente concedido aos servidores, membros e estagiários cadastrados" },
      { question: "Quando é solicitado um novo aparelho com novo ramal (VoIP), qual a ação correta a ser tomada?", options: ["Informar ao solicitante que a solicitação será atendida automaticamente no próximo ciclo de manutenção programada, sem a necessidade de abertura de chamado ou detalhes sobre a instalação.", "Criar um novo ramal sem necessidade de confirmação de local ou de quem acompanhará a instalação, bastando apenas que o pedido seja feito por e-mail.", "Abrir um chamado com a solicitação confirmando o local e a pessoa que irá acompanhar a instalação do novo aparelho.", "Informar que a instalação só pode ser realizada após a liberação de um orçamento para compra de novos aparelhos, sem necessidade de confirmar quem acompanhará o processo."], correct: "Abrir um chamado com a solicitação confirmando o local e a pessoa que irá acompanhar a instalação do novo aparelho." },
      { question: "Se um membro do interior solicitar a senha para o usuário 'PGJMG', qual procedimento deve ser seguido?", options: ["Solicitar o e-mail com a justificativa para a solicitação da senha e encaminhar ao Spool DSMT para análise, considerando a possibilidade de ações específicas dependendo do contexto da comarca.", "Verificar com a equipe do Kace se o computador está conectado corretamente à rede e, em seguida, criar a senha para o usuário diretamente.", "Informar o membro que a senha será fornecida apenas após um processo formal no SEI, e aguardar a aprovação da solicitação de criação de login.", "Pedir para o membro tentar redefinir a senha diretamente pelo sistema, já que o processo de solicitação não é necessário para a maioria dos casos."], correct: "Solicitar o e-mail com a justificativa para a solicitação da senha e encaminhar ao Spool DSMT para análise, considerando a possibilidade de ações específicas dependendo do contexto da comarca." },
      { question: "Quando um usuário solicita uma instalação do Python em seu computador, qual é o procedimento correto?", options: ["Realizar a instalação diretamente, pois o Python é uma ferramenta amplamente usada", "Fornecer o link de download para o usuário e orientá-lo sobre a instalação", "Pedir para o usuário enviar um formulário de solicitação oficial para avaliação via SEI", "Registrar a solicitação em um chamado e esperar a liberação da ferramenta pela STI"], correct: "Pedir para o usuário enviar um formulário de solicitação oficial para avaliação via SEI" },
      { question: "Quando solicitado a criação de um usuário para estagiário, qual o procedimento correto a ser seguido?", options: ["Criar o nome do usuário com base no primeiro nome do estagiário seguido de um número aleatório", "Criar o nome do usuário utilizando o nome completo e o ano de ingresso do estagiário", "Criar o nome do usuário com a primeira letra do primeiro nome e a primeira letra do sobrenome, seguido de '.trainee'", "Criar o nome do usuário com a primeira letra do primeiro nome, o último sobrenome e o sufixo '.estagio'"], correct: "Criar o nome do usuário com a primeira letra do primeiro nome, o último sobrenome e o sufixo '.estagio'" },
      { question: "Quando um usuário solicita acesso ao E-proc, qual é a orientação correta?", options: ["Orientar o usuário a entrar em contato com o TJMG através do e-mail e telefone específicos", "Fornecer o acesso imediatamente, sem necessidade de outros procedimentos", "Encaminhar a solicitação diretamente para o departamento de TI para análise", "Pedir ao usuário para criar uma conta no portal do E-proc por conta própria"], correct: "Orientar o usuário a entrar em contato com o TJMG através do e-mail e telefone específicos" },
      { question: "Quando um computador está fora do padrão, o que deve ser feito?", options: ["Orientar o solicitante a encaminhar o computador ao Laboratório DSMT para padronização", "Ignorar o problema e continuar usando o computador", "Configurar o computador manualmente sem necessidade de apoio", "Solicitar a troca do computador imediatamente sem mais verificações"], correct: "Orientar o solicitante a encaminhar o computador ao Laboratório DSMT para padronização" },
      { question: "Quando um usuário solicita o download de mídias de plataformas como YouTube e redes sociais, qual a orientação correta?", options: ["Realizar o download diretamente, pois a STI possui ferramentas próprias para isso", "Informar ao usuário que ele deve baixar as mídias diretamente e enviar para a STI", "Orientar o usuário a entrar em contato com o Gaeciber ou GSI, pois a STI não realiza esse tipo de serviço", "Negar o pedido, pois o download de mídias de redes sociais é proibido por política interna"], correct: "Orientar o usuário a entrar em contato com o Gaeciber ou GSI, pois a STI não realiza esse tipo de serviço"}
    ],
    medium: [
      { question: "O que significa a sigla SQL?", options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "System Query Language"], correct: "Structured Query Language" },
      { question: "Qual o propósito do Node.js?", options: ["Executar JavaScript no servidor", "Desenvolver sites", "Criar apps móveis", "Servir conteúdo estático"], correct: "Executar JavaScript no servidor" },
      { question: "Qual framework é usado com React para gerenciamento de estado?", options: ["Redux", "Vue.js", "Angular", "Spring"], correct: "Redux" },
      { question: "O que é o MongoDB?", options: ["Banco de dados NoSQL", "Banco de dados SQL", "Linguagem de consulta", "Servidor de banco de dados"], correct: "Banco de dados NoSQL" },
      { question: "O que é o NPM?", options: ["Gerenciador de pacotes para Node.js", "Editor de código", "Framework para front-end", "Banco de dados"], correct: "Gerenciador de pacotes para Node.js" },
      { question: "Qual dessas opções é um banco de dados SQL?", options: ["MySQL", "MongoDB", "CouchDB", "Firebase"], correct: "MySQL" },
      { question: "O que é API RESTful?", options: ["Conjunto de convenções para design de APIs", "Framework para JavaScript", "Banco de dados relacional", "Linguagem de consulta"], correct: "Conjunto de convenções para design de APIs" },
      { question: "O que significa a sigla JSON?", options: ["JavaScript Object Notation", "Java Syntax Object Notation", "JavaScript Online Notation", "JSON Object Notation"], correct: "JavaScript Object Notation" },
      { question: "O que é o Webpack?", options: ["Empacotador de módulos JavaScript", "Framework", "Banco de dados", "Editor de código"], correct: "Empacotador de módulos JavaScript" },
      { question: "O que é o Bootstrap?", options: ["Framework de front-end", "Framework de back-end", "Editor de código", "Banco de dados"], correct: "Framework de front-end" }
    ],
    hard: [
      { question: "O que é o Kubernetes?", options: ["Orquestrador de containers", "Framework de JavaScript", "Banco de dados", "Ferramenta de controle de versão"], correct: "Orquestrador de containers" },
      { question: "Se um usuário está recebendo um 'Erro de Conexão de Rede' e você está acessando remotamente, qual pode ser a causa?", options: ["O firewall local do usuário está bloqueando a conexão", "A placa de vídeo do usuário está com defeito", "O computador está sem memória RAM", "O usuário não tem permissão para acessar a internet"], correct: "O firewall local do usuário está bloqueando a conexão" },
      { question: "O que é GraphQL?", options: ["Uma linguagem de consulta", "Uma biblioteca JavaScript", "Um banco de dados", "Um framework"], correct: "Uma linguagem de consulta" },
      { question: "Qual dessas ferramentas é usada para teste de API?", options: ["Postman", "React", "MongoDB", "Docker"], correct: "Postman" },
      { question: "Qual é a primeira coisa a se fazer quando o computador de um usuário trava durante uma atualização de software?", options: ["Desligar o computador", "Tentar reiniciar o computador em modo de segurança", "Desinstalar o programa", "Tentar acessar remotamente e reiniciar a atualização"], correct: "Tentar reiniciar o computador em modo de segurança" },
      { question: "O que é o Docker?", options: ["Plataforma de containerização", "Ferramenta de build", "Framework", "Banco de dados"], correct: "Plataforma de containerização" },
      { question: "O que é o TypeScript?", options: ["Uma linguagem de programação baseada em JavaScript", "Banco de dados", "Editor de código", "Framework"], correct: "Uma linguagem de programação baseada em JavaScript" },
      { question: "Qual o papel do WebSocket?", options: ["Comunicação bidirecional em tempo real", "Gerenciamento de pacotes", "Banco de dados", "Framework JavaScript"], correct: "Comunicação bidirecional em tempo real" },
      { question: "Qual a diferença entre SQL e NoSQL?", options: ["SQL é relacional, NoSQL não é", "SQL é usado para programação, NoSQL é para interfaces", "SQL é mais rápido", "NoSQL é melhor para grandes volumes"], correct: "SQL é relacional, NoSQL não é" },
      { question: "Em um suporte remoto, o que deve ser feito quando o usuário não consegue acessar a rede Wi-Fi?", options: ["Verificar se o cabo de rede está conectado corretamente no computador", "Pedir para o usuário reiniciar o modem e o roteador", "Forçar a reinstalação do sistema operacional", "Desinstalar o software antivírus"], correct: "Pedir para o usuário reiniciar o modem e o roteador" }
    ]
  };

// Ranking
let ranking = {
    easy: JSON.parse(localStorage.getItem("ranking_easy")) || [],
    medium: JSON.parse(localStorage.getItem("ranking_medium")) || [],
    hard: JSON.parse(localStorage.getItem("ranking_hard")) || []
};

// Variáveis do Jogo
let currentQuestionIndex = 0;
let score = 0;
let username = '';
let currentDifficulty = '';
let shuffledOptions = [];

document.getElementById("start-button").addEventListener("click", () => {
    username = document.getElementById("username").value.trim();
    if (username) {
        document.getElementById("initial-screen").style.display = "none";
        document.getElementById("difficulty-screen").style.display = "block";
    }
});

document.querySelectorAll(".difficulty-button").forEach(button => {
    button.addEventListener("click", () => {
        currentDifficulty = button.getAttribute("data-difficulty");
        currentQuestionIndex = 0;
        score = 0;
        shuffleOptions();
        showQuestion();
        document.getElementById("difficulty-screen").style.display = "none";
        document.getElementById("quiz-screen").style.display = "block";
    });
});

function showQuestion() {
    const questionData = questions[currentDifficulty][currentQuestionIndex];
    document.getElementById("quiz-question").textContent = questionData.question;
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function shuffleOptions() {
    const currentQuestion = questions[currentDifficulty][currentQuestionIndex];
    shuffledOptions = [...currentQuestion.options];
    shuffledOptions.sort(() => Math.random() - 0.5);
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentDifficulty][currentQuestionIndex].correct;
    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < 10) {
        shuffleOptions();
        showQuestion();
    } else {
        showRanking();
    }
}

function showRanking() {
    // Adicionar pontuação ao ranking
    ranking[currentDifficulty].push({ name: username, score });
    
    // Ordenar ranking de forma decrescente
    ranking[currentDifficulty].sort((a, b) => b.score - a.score);
    
    // Salvar ranking no localStorage
    localStorage.setItem(`ranking_${currentDifficulty}`, JSON.stringify(ranking[currentDifficulty]));
    
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("ranking-screen").style.display = "block";
    
    // Exibir Ranking
    const rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = '';
    ranking[currentDifficulty].forEach(entry => {
        const div = document.createElement("div");
        div.textContent = `${entry.name}: ${entry.score} pontos`;
        rankingList.appendChild(div);
    });
}

document.getElementById("restart-button").addEventListener("click", () => {
    document.getElementById("ranking-screen").style.display = "none";
    document.getElementById("initial-screen").style.display = "block";
    document.getElementById("username").value = '';
});
