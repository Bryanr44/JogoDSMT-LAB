
const questions = {
    easy: [
      { question: "Qual é o atalho para copiar no Windows?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + P"], correct: "Ctrl + C" },
      { question: "Qual desses programas é usado para navegação na internet?", options: ["Microsoft Word", "Google Chrome", "Adobe Photoshop", "Excel"], correct: "Google Chrome" },
      { question: "O que fazer quando o computador está muito lento?", options: ["Reiniciar o computador", "Jogar fora o computador", "Comprar um computador novo", "Desligar o monitor"], correct: "Reiniciar o computador" },
      { question: "O que significa HTML?", options: ["HyperText Markup Language", "Hyper Transfer Markup Language", "HighText Markup Language", "HyperText Machine Language"], correct: "HyperText Markup Language" },
      { question: "Qual é a função do CSS?", options: ["Estilizar páginas web", "Criar animações", "Desenvolver back-end", "Desenvolver aplicações móveis"], correct: "Estilizar páginas web" },
      { question: "Qual linguagem é usada no front-end?", options: ["JavaScript", "Python", "Java", "C"], correct: "JavaScript" },
      { question: "O que é Node.js?", options: ["Ambiente de execução para JavaScript", "Framework", "Banco de dados", "Linguagem de programação"], correct: "Ambiente de execução para JavaScript" },
      { question: "O que significa HTTP?", options: ["HyperText Transfer Protocol", "HyperText Translation Protocol", "Hyper Time Transfer Protocol", "High Transfer Protocol"], correct: "HyperText Transfer Protocol" },
      { question: "O que é uma variável?", options: ["Espaço para armazenar dados", "Função de repetição", "Objeto de classe", "Comando de condição"], correct: "Espaço para armazenar dados" },
      { question: "O que significa API?", options: ["Application Programming Interface", "Application of Programming Interface", "Internal Programming Application", "Interface for Application Programming"], correct: "Application Programming Interface"}
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
