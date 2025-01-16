const questions = {
    easy: [
      { question: "Pergunta 1 Modo Fácil: Se o sistema MPGOOGLE estiver falhando ou apresentando erros, qual deve ser a primeira ação a ser tomada?", options: ["Reiniciar o sistema e aguardar que o erro seja corrigido automaticamente.", "Solicitar que o usuário tente acessar o sistema novamente em outra máquina ou navegador.", "Ignorar o erro e pedir para o usuário tentar usar o sistema em um horário diferente.", "Abrir um chamado com a descrição do erro e os prints para análise."], correct: "Abrir um chamado com a descrição do erro e os prints para análise." },
      { question: "Pergunta 2 Modo Fácil: Qual deve ser a ação tomada quando é solicitado suporte para computadores não patrimoniados (particulares) no MPMG?", options: ["Realizar qualquer tipo de manutenção, sem restrições, para garantir o bom funcionamento do equipamento.", "Apenas orientar verbalmente sobre como resolver problemas simples, desde que o usuário autorize.", "Manter os computadores sem realizar qualquer tipo de intervenção, mesmo que o usuário precise de ajuda.", "Realizar manutenção completa no equipamento, desde que o usuário solicite formalmente."], correct: "Apenas orientar verbalmente sobre como resolver problemas simples, desde que o usuário autorize." },
      { question: "Pergunta 3 Modo Fácil: Quando um usuário solicita acesso ao E-ponto, qual é o procedimento correto?", options: ["O acesso é dado apenas após uma avaliação detalhada pelo departamento de TI.", "A solicitação deve ser enviada diretamente ao fornecedor do sistema, LG, para análise manual.", "O acesso é automaticamente concedido aos servidores, membros e estagiários cadastrados.", "O usuário precisa aguardar a criação de um incidente para que o acesso seja habilitado."], correct: "O acesso é automaticamente concedido aos servidores, membros e estagiários cadastrados." },
      { question: "Pergunta 4 Modo Fácil: Quando é solicitado um novo aparelho com novo ramal (VoIP), qual a ação correta a ser tomada?", options: ["Informar ao solicitante que a solicitação será atendida automaticamente no próximo ciclo de manutenção programada, sem a necessidade de abertura de chamado ou detalhes sobre a instalação.", "Criar um novo ramal sem necessidade de confirmação de local ou de quem acompanhará a instalação, bastando apenas que o pedido seja feito por e-mail.", "Abrir um chamado com a solicitação confirmando o local e a pessoa que irá acompanhar a instalação do novo aparelho.", "Informar que a instalação só pode ser realizada após a liberação de um orçamento para compra de novos aparelhos, sem necessidade de confirmar quem acompanhará o processo."], correct: "Abrir um chamado com a solicitação confirmando o local e a pessoa que irá acompanhar a instalação do novo aparelho." },
      { question: "Pergunta 5 Modo Fácil: Se um membro do interior solicitar a senha para o usuário 'PGJMG', qual procedimento deve ser seguido?", options: ["Solicitar o e-mail com a justificativa para a solicitação da senha e encaminhar ao Spool DSMT para análise., considerando a possibilidade de ações específicas dependendo do contexto da comarca.", "Verificar com a equipe do Kace se o computador está conectado corretamente à rede e, em seguida, criar a senha para o usuário diretamente.", "Informar o membro que a senha será fornecida apenas após um processo formal no SEI, e aguardar a aprovação da solicitação de criação de login.", "Pedir para o membro tentar redefinir a senha diretamente pelo sistema, já que o processo de solicitação não é necessário para a maioria dos casos."], correct: "Solicitar o e-mail com a justificativa para a solicitação da senha e encaminhar ao Spool DSMT para análise, considerando a possibilidade de ações específicas dependendo do contexto da comarca." },
      { question: "Pergunta 6 Modo Fácil: Quando um usuário solicita uma instalação do Python em seu computador, qual é o procedimento correto?", options: ["Realizar a instalação diretamente, pois o Python é uma ferramenta amplamente usada.", "Fornecer o link de download para o usuário e orientá-lo sobre a instalação.", "Pedir para o usuário enviar um formulário de solicitação oficial para avaliação via SEI.", "Registrar a solicitação em um chamado e esperar a liberação da ferramenta pela STI."], correct: "Pedir para o usuário enviar um formulário de solicitação oficial para avaliação via SEI." },
      { question: "Pergunta 7 Modo Fácil: Quando solicitado a criação de um usuário para estagiário, qual o procedimento correto a ser seguido?", options: ["Criar o nome do usuário com base no primeiro nome do estagiário seguido de um número aleatório.", "Criar o nome do usuário utilizando o nome completo e o ano de ingresso do estagiário.", "Criar o nome do usuário com a primeira letra do primeiro nome e a primeira letra do sobrenome, seguido de '.trainee'.", "Criar o nome do usuário com a primeira letra do primeiro nome, o último sobrenome e o sufixo '.estagio'."], correct: "Criar o nome do usuário com a primeira letra do primeiro nome, o último sobrenome e o sufixo '.estagio'." },
      { question: "Pergunta 8 Modo Fácil: Quando um usuário solicita acesso ao E-proc, qual é a orientação correta?", options: ["Orientar o usuário a entrar em contato com o TJMG através do e-mail e telefone específicos.", "Fornecer o acesso imediatamente, sem necessidade de outros procedimentos.", "Encaminhar a solicitação diretamente para o departamento de TI para análise.", "Pedir ao usuário para criar uma conta no portal do E-proc por conta própria."], correct: "Orientar o usuário a entrar em contato com o TJMG através do e-mail e telefone específicos." },
      { question: "Pergunta 9 Modo Fácil: Quando um computador está fora do padrão, o que deve ser feito?", options: ["Orientar o solicitante a encaminhar o computador ao Laboratório DSMT para padronização.", "Ignorar o problema e continuar usando o computador.", "Configurar o computador manualmente sem necessidade de apoio.", "Solicitar a troca do computador imediatamente sem mais verificações."], correct: "Orientar o solicitante a encaminhar o computador ao Laboratório DSMT para padronização." },
      { question: "Pergunta 10 Modo Fácil: Quando um usuário solicita o download de mídias de plataformas como YouTube e redes sociais, qual a orientação correta?", options: ["Realizar o download diretamente, pois a STI possui ferramentas próprias para isso.", "Informar ao usuário que ele deve baixar as mídias diretamente e enviar para a STI.", "Orientar o usuário a entrar em contato com o Gaeciber ou GSI, pois a STI não realiza esse tipo de serviço.", "Negar o pedido, pois o download de mídias de redes sociais é proibido por política interna."], correct: "Orientar o usuário a entrar em contato com o Gaeciber ou GSI, pois a STI não realiza esse tipo de serviço."}
    ],
    medium: [
      { question: "Pergunta 1 Modo Médio: Quando um problema de lentidão e quedas de internet é relatado, qual é a ação inicial mais apropriada?", options: ["Ignorar qualquer verificação técnica e simplesmente pedir ao usuário que espere até que o problema desapareça por conta própria, acreditando que problemas de internet geralmente se resolvem sozinhos após um tempo.", "Verificar se já existe um chamado registrado no sistema Proativo DRBD para a localidade, e se não, investigar uma possível incidência no Zabbix. Caso não tenha ocorrido, realizar o devido registro no sistema e coletar informações detalhadas de rede.", "Fornecer ao usuário um link de vídeo tutorial sobre como reiniciar seu modem e aguardar o retorno do usuário em 24 horas.", "Pedir para o usuário reiniciar sua conexão e aguardar 10 minutos, sem qualquer coleta de dados ou registros de configurações técnicas, acreditando que esse tipo de solução rápida resolverá todos os problemas."], correct: "Verificar se já existe um chamado registrado no sistema Proativo DRBD para a localidade, e se não, investigar uma possível incidência no Zabbix. Caso não tenha ocorrido, realizar o devido registro no sistema e coletar informações detalhadas de rede." },
      { question: "Pergunta 2 Modo Médio: Quando é solicitado um novo ramal em um telefone VoIP existente, qual a ação correta a ser tomada?", options: ["Confirmar o nome do solicitante e aguardar aprovação de uma nova atualização do sistema antes de prosseguir com qualquer mudança.", "Criar um novo ramal imediatamente, sem precisar registrar qualquer informação adicional, como o MAC e o IP do aparelho.", "Abertura de um chamado solicitando confirmação do local, patrimônio, MAC e IP do aparelho, para garantir que todos os dados necessários sejam corretamente registrados.", "Solicitar ao usuário que realize a alteração no ramal diretamente pelo painel administrativo do sistema, sem necessidade de abertura de chamado."], correct: "Abertura de um chamado solicitando confirmação do local, patrimônio, MAC e IP do aparelho, para garantir que todos os dados necessários sejam corretamente registrados." },
      { question: "Pergunta 3 Modo Médio: Se o Kaspersky está bloqueando um site, qual a melhor ação a ser tomada?", options: ["Limpar o cache do navegador e os arquivos temporários, reiniciar o navegador e, se o problema persistir, simplesmente pausar o Kaspersky e tentar acessar o site novamente, informando a URL ao abrir o chamado.", "Apenas aguardar o bloqueio desaparecer por conta própria, acreditando que o Kaspersky vai liberar o acesso automaticamente após um tempo.", "Tentar ignorar o bloqueio e acessar o site através de outro navegador sem tomar qualquer ação com o Kaspersky, pois o problema não é técnico.", "Entrar em contato diretamente com o suporte técnico do Kaspersky para uma solução imediata sem qualquer coleta de informações do site bloqueado, como a URL ou captura de tela."], correct: "Limpar o cache do navegador e os arquivos temporários, reiniciar o navegador e, se o problema persistir, simplesmente pausar o Kaspersky e tentar acessar o site novamente, informando a URL ao abrir o chamado." },
      { question: "Pergunta 4 Modo Médio: Quando um usuário solicita a criação de uma nova equipe no Microsoft Teams, qual a abordagem correta?", options: ["Criar uma nova equipe independentemente do número de membros ou da justificativa, sem verificar a existência de equipes anteriores, e garantir que todos os dados sejam migrados sem restrições.", "Liberar a criação de novas equipes a qualquer momento, permitindo que o usuário crie equipes sem precisar justificar, ignorando a quantidade mínima de membros e deixando que qualquer pessoa, incluindo estagiários, se tornem os responsáveis.", "Não verificar a necessidade de criar uma nova equipe, simplesmente pedir para o usuário enviar um e-mail à STI, com ou sem justificativa, ignorando a quantidade de participantes ou a recomendação sobre a definição dos proprietários.", "Servidor de banco de dados"], correct: "Verificar se já existe uma equipe no setor, se sim, orientar o uso da equipe existente e, se necessário, criar uma nova equipe, desde que o número de membros seja maior que 3, e os donos sejam devidamente definidos." },
      { question: "Pergunta 5 Modo Médio: Quando uma equipe no Microsoft Teams atinge o limite de armazenamento, qual das ações abaixo deve ser realizada?", options: ["Verificar a lixeira, avaliar o armazenamento de arquivos pessoais e compactar arquivos de áudio ou vídeo. Se necessário liberar mais espaço, encaminhar o chamado para os analistas, explicando as limitações do Teams e orientando o uso do OneDrive para arquivos pessoais.", " Ignorar o limite de armazenamento e permitir que a equipe continue carregando arquivos sem nenhuma verificação, já que o espaço do Teams é ilimitado e não há necessidade de controle de conteúdo.", "Apagar aleatoriamente todos os arquivos de áudio e vídeo armazenados na equipe, sem consultar os responsáveis, sem se preocupar com o impacto na qualidade dos conteúdos ou com os requisitos de publicação, e enviar um relatório simples sem maiores verificações.", "Enviar um aviso para a equipe pedindo para ''se resolverem'', pois o problema de armazenamento não é algo que precisa de intervenção técnica. Caso não consigam, recomendar o uso de um pen drive externo para armazenar os arquivos."], correct: "Verificar a lixeira, avaliar se o conteúdo pessoal está sendo armazenado, e analisar se há arquivos de áudio ou vídeo que podem ser comprimidos para reduzir o tamanho. Caso seja necessário liberar mais espaço (por exemplo, 100 GB), encaminhar o chamado para a fila de analistas, explicando as limitações do Teams para armazenamento de grandes volumes de dados e informando que o OneDrive deve ser utilizado para arquivos pessoais." },
      { question: "Pergunta 6 Modo Médio: Quando um usuário relata falha de hardware em seu PC, notebook, monitor ou outros dispositivos, qual é a primeira ação a ser tomada?", options: ["Solicitar ao usuário que desconecte os cabos e troque as baterias, aguardando 48 horas para verificar se o problema se resolve. Se persistir, encaminhar para análise detalhada.", "Buscar solução remota, realizar testes iniciais e, se o problema persistir, enviar o equipamento para o Laboratório DSMT para reparos e manutenção no ambiente do MPMG.", "Orientar o usuário a resetar o dispositivo com três botões no teclado, reiniciar o sistema e, se não houver falhas críticas, continuar usando o equipamento até o problema desaparecer.", "Informar o usuário que, por se tratar de um problema de hardware, será necessário buscar assistência técnica externa, pois a equipe de suporte não pode resolver falhas físicas."], correct: "Buscar solução remota, realizar testes iniciais e, se o problema persistir, enviar o equipamento para o Laboratório DSMT para reparos e manutenção no ambiente do MPMG." },
      { question: "Pergunta 7 Modo Médio: Se um usuário relatar um erro no portal, qual a ação correta a ser tomada?", options: ["Solicitar ao usuário que limpe o cache do navegador e reinicie o computador para ver se o erro persiste antes de qualquer outra ação.", "Pedir ao usuário para tentar acessar o portal de um dispositivo diferente e, caso o erro persista, orientar a abrir um chamado.", "Pedir para o usuário fazer uma captura de tela, mas não abrir um chamado, já que o erro pode ser temporário e não precisa de intervenção imediata.", "Abrir um chamado com a descrição do erro e incluir os prints relevantes para análise, garantindo que todas as informações sejam claras."], correct: "Abrir um chamado com a descrição do erro e incluir os prints relevantes para análise, garantindo que todas as informações sejam claras." },
      { question: "Pergunta 8 Modo Médio: Em caso de falha ao acessar o E-LISTA, qual deve ser a ação correta a ser realizada?", options: ["Abrir um chamado no iTop contendo prints, descrição do erro, navegador utilizado, nome da lista de envio e o usuário logado que gerou o erro.", "Reiniciar o sistema e tentar acessar novamente sem verificar o tipo de erro.", "Pedir ao usuário para tentar acessar o E-LISTA em outro computador e, se não funcionar, aguardará a próxima atualização do sistema.", "Ignorar o erro, pois o problema será resolvido automaticamente após um curto período de tempo."], correct: "Abrir um chamado no iTop contendo prints, descrição do erro, navegador utilizado, nome da lista de envio e o usuário logado que gerou o erro." },
      { question: "Pergunta 9 Modo Médio: Se um servidor novato encontra um erro ao tentar inserir foto e assinatura para a carteira funcional, qual deve ser a ação recomendada?", options: ["Aconselhar o servidor a tentar novamente mais tarde, pois o sistema pode estar temporariamente fora do ar.", "Verificar se o servidor é novato, abrir um chamado e encaminhar para o Dairton, pedindo confirmação de permissão na ferramenta de Workflow.", "Ignorar o erro e recomendar que o servidor continue com o processo manual.", "Pedir ao servidor para inserir a foto e assinatura em outro computador para ver se o problema persiste."], correct: "Verificar se o servidor é novato, abrir um chamado e encaminhar para o Dairton, pedindo confirmação de permissão na ferramenta de Workflow." },
      { question: "Pergunta 10 Modo Médio: Se um usuário relata que seu computador está com lentidão, qual deve ser a ação recomendada para tentar resolver o problema?", options: ["Limpar temporários, desabilitar itens desnecessários da inicialização, corrigir arquivos via comando 'sfc /scannow' e realizar teste de saúde do HD. Se não melhorar, encaminhar para o laboratório ou a equipe do field.", "Reinstalar o sistema operacional do computador e formatar o disco rígido.", "Desligar e ligar o computador várias vezes até que a lentidão desapareça, sem realizar mais alterações no sistema.", "Ignorar os arquivos temporários e apenas realizar uma atualização de software para tentar resolver a lentidão."], correct: "Limpar temporários, desabilitar itens desnecessários da inicialização, corrigir arquivos via comando 'sfc /scannow' e realizar teste de saúde do HD. Se não melhorar, encaminhar para o laboratório ou a equipe do field." }
    ],
    hard: [
      { question: "Pergunta 1 Modo Difícil: Se um usuário relatar um erro no sistema E-AVALIAÇÃO SERVIDORES, qual é a ação correta a ser tomada?", options: ["Reiniciar o sistema e tentar novamente, sem verificar o tipo específico do erro.", "Verificar se o erro está relacionado a uma falha de conexão ou outro problema em que a STI tem responsabilidade de resolução.", "Enviar o usuário para o suporte técnico externo, sem realizar nenhuma verificação inicial.", "Solicitar ao usuário que aguarde até o próximo ciclo de manutenção programada do sistema."], correct: "Verificar se o erro está relacionado a uma falha de conexão ou outro problema em que a STI tem responsabilidade de resolução." },
      { question: "Pergunta 2 Modo Difícil: Quando ocorre um erro ao tentar acessar o sistema eConsig, qual é o procedimento correto?", options: ["O usuário deve reiniciar o computador e tentar acessar o eConsig novamente, sem a necessidade de realizar qualquer outra ação.", "O sistema eConsig deve ser acessado diretamente pelo link de acesso do banco parceiro, sem necessidade de utilizar os sistemas internos.", "O acesso ao eConsig é feito através da seção ''Crédito Consignado'' nos Sistemas Corporativos. O usuário deve navegar até essa seção para realizar o login corretamente.", "O usuário não tem permissão para acessar a internet"], correct: "O acesso ao eConsig é feito através da seção ''Crédito Consignado'' nos Sistemas Corporativos. O usuário deve navegar até essa seção para realizar o login corretamente." },
      { question: "Pergunta 3 Modo Difícil: Quando uma usuária relata que não está conseguindo acessar o HOD SERPRO, qual é o procedimento correto para resolver o problema?", options: ["Atualizar o navegador Firefox para a versão mais recente disponível, sem considerar outras versões.", "Reverter o navegador Firefox para a versão 40.0 e instalar o Java 8u221, ambos disponíveis no repositório, para garantir a compatibilidade com o sistema.", "Desinstalar o Firefox e utilizar o Google Chrome para acessar o HOD SERPRO, pois esse navegador é mais adequado.", "O usuário precisa entrar em contato com o suporte do banco, pois o sistema eConsig não está disponível na plataforma do MPMG."], correct: "Reverter o navegador Firefox para a versão 40.0 e instalar o Java 8u221, ambos disponíveis no repositório, para garantir a compatibilidade com o sistema." },
      { question: "Pergunta 4 Modo Difícil: Qual é o procedimento correto quando há uma solicitação de acesso ao SISCEAT?", options: ["Solicitar ao coordenador ou membro do setor um e-mail informando o nome do solicitante e a justificativa, e anexar o e-mail em PDF ao chamado para análise.", "O usuário deve preencher um formulário online e aguardar confirmação automática do sistema para obter acesso ao SISCEAT.", "Realizar o cadastro diretamente no sistema do SISCEAT, pois o acesso é concedido sem necessidade de aprovação prévia.", "Encaminhar o pedido ao suporte técnico, sem a necessidade de justificativa ou e-mail, para que o acesso seja liberado imediatamente."], correct: "Solicitar ao coordenador ou membro do setor um e-mail informando o nome do solicitante e a justificativa, e anexar o e-mail em PDF ao chamado para análise." },
      { question: "Pergunta 5 Modo Difícil: Quando o VoIP não está recebendo ligações, qual das alternativas abaixo deve ser tomada?", options: ["Verificar se o recurso ''Não Perturbe'' está ativado e, caso esteja, desativá-lo. Se a opção ''Não Perturbe'' aparecer como uma bolinha com um sinal de menos no visor do aparelho, garantir que o telefone esteja no gancho para desativá-lo corretamente.", "Desconectar a rede elétrica do aparelho por 5 minutos e, em seguida, reiniciar o roteador, mesmo que o problema seja relacionado ao software do VoIP.", "Alterar as configurações de áudio do telefone, sem verificar se o ''Não Perturbe'' está ativado ou se há outros problemas no sistema, e esperar que o problema se resolva automaticamente.", "Ignorar as configurações do telefone e tentar realizar uma atualização de firmware sem consultar a configuração do ''Não Perturbe'', já que o problema pode estar relacionado a falhas de software."], correct: "Verificar se o recurso ''Não Perturbe'' está ativado e, caso esteja, desativá-lo. Se a opção ''Não Perturbe'' aparecer como uma bolinha com um sinal de menos no visor do aparelho, garantir que o telefone esteja no gancho para desativá-lo corretamente." },
      { question: "Pergunta 6 Modo Difícil: Quando há uma solicitação de acesso ao SGPA ou SGPM, qual deve ser o procedimento correto?", options: ["Enviar um e-mail diretamente ao suporte técnico pedindo a liberação do acesso, pois o SGPA e SGPM são sistemas automáticos.", "Solicitar ao usuário que realize o cadastro pessoal no site do SGPA, já que não é necessário nenhum processo adicional para o acesso.", "Fornecer o acesso imediatamente, considerando que o SGPA e SGPM são sistemas públicos e acessíveis para todos os membros do MP.", "Solicitar o acesso diretamente ao SRH - DPAD, pois eles são responsáveis pelo processo de cadastro e liberação do acesso."], correct: "Solicitar o acesso diretamente ao SRH - DPAD, pois eles são responsáveis pelo processo de cadastro e liberação do acesso." },
      { question: "Pergunta 7 Modo Difícil: Se um incidente ocorrer na ADUNA/LINKS, qual a ação correta a ser tomada?", options: ["Acessar diretamente o sistema do GSI e fazer a configuração do MFA do usuário sem abrir um chamado, garantindo que o acesso seja restabelecido imediatamente.", "Revogar todas as sessões autenticadas no Áduna e orientar o usuário sobre a configuração do MFA, garantindo que ele compreenda como acessar o sistema corretamente.", "Informar ao usuário para tentar redefinir sua senha no portal de acesso e continuar tentando até o sistema estar disponível.", "Aconselhar o usuário a tentar fazer login com um navegador diferente ou reiniciar a máquina, pois o problema é provavelmente uma falha temporária."], correct: "Revogar todas as sessões autenticadas no Áduna e orientar o usuário sobre a configuração do MFA, garantindo que ele compreenda como acessar o sistema corretamente." },
      { question: "Pergunta 8 Modo Difícil: Se alguém solicitar acesso ao INFOSEG, qual a orientação correta?", options: ["Informar ao solicitante que o acesso ao INFOSEG foi descontinuado e que eles devem aguardar uma notificação da central sobre a nova plataforma.", "Aconselhar o solicitante a acessar um portal externo que oferece um formulário de cadastro para realizar o procedimento manualmente.", "Solicitar que o solicitante envie um e-mail diretamente para a STI, sem mencionar nenhuma alteração no sistema, aguardando uma análise.", "Orientar o solicitante que o sistema foi migrado para o SINESP, e que o acesso agora é gerido por um suporte próprio. O cadastro pode ser feito diretamente no site do SINESP."], correct: "Orientar o solicitante que o sistema foi migrado para o SINESP, e que o acesso agora é gerido por um suporte próprio. O cadastro pode ser feito diretamente no site do SINESP." },
      { question: "Pergunta 9 Modo Difícil: Se ocorrer um erro no sistema do Channel, qual a ação mais indicada?", options: ["Abrir um chamado com a descrição detalhada do erro e incluir prints de tela, em seguida encaminhar para análise da DRBD para os devidos procedimentos.", "Realizar uma reinicialização completa do sistema, tentar acessar o sistema novamente e aguardar 30 minutos para ver se o erro desaparece. Caso o problema persista, recomeçar o processo da próxima vez que o erro aparecer.", "Informar ao usuário que o problema será resolvido apenas durante o horário de expediente e sugerir que ele faça uma pausa para tentar novamente mais tarde. Não é necessário abrir chamado neste caso.", "Solicitar ao usuário que desconecte a internet, espere 15 minutos, e reabra o sistema, caso o erro tenha desaparecido durante o processo de desconexão."], correct: "Abrir um chamado com a descrição detalhada do erro e incluir prints de tela, em seguida encaminhar para análise da DRBD para os devidos procedimentos." },
      { question: "Pergunta 10 Modo Difícil: Quando o VoIP não está fazendo nem recebendo chamadas, qual a ação correta a ser realizada?", options: ["Verificar se o dispositivo VoIP está conectado à rede e tentar desinstalar e reinstalar o software VoIP, sem necessidade de verificar o IP ou a configuração de rede, e aguardar a resposta do provedor de internet para confirmação do erro.", "Checar se o IP está visível no dispositivo e, se não, reiniciar o roteador. Após isso, verificar o IP do micro conectado à rede 10.24 e coletar o MAC do micro para análise.", "Reiniciar o micro para que ele atualize todas as configurações de rede de forma automática, sem verificar se o IP do VoIP foi reconhecido ou realizar qualquer ação no dispositivo. Isso deve ser suficiente para a solução do problema.", "Realizar uma investigação detalhada, desconectar todos os dispositivos da rede, mudar o IP e realizar um reset completo no servidor, além de verificar todos os detalhes de configuração do micro, para depois, se o problema persistir, considerar o envio de um técnico especializado ao local."], correct: "Checar se o IP está visível no dispositivo e, se não, reiniciar o roteador. Após isso, verificar o IP do micro conectado à rede 10.24 e coletar o MAC do micro para análise." }
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
        button.addEventListener("click", () => showPopup(option)); // Chama a função de pop-up
        optionsContainer.appendChild(button);
    });
}

function shuffleOptions() {
    const currentQuestion = questions[currentDifficulty][currentQuestionIndex];
    shuffledOptions = [...currentQuestion.options];
    shuffledOptions.sort(() => Math.random() - 0.5);
}

function showPopup(selectedOption) {
    const popupContainer = document.createElement("div");
    popupContainer.style.position = "fixed";
    popupContainer.style.top = "50%";
    popupContainer.style.left = "50%";
    popupContainer.style.transform = "translate(-50%, -50%)";
    popupContainer.style.backgroundColor = "white";
    popupContainer.style.borderradius = "60px";
    popupContainer.style.padding = "20px";
    popupContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    popupContainer.style.textAlign = "center";
    popupContainer.style.zIndex = "1000";

    const correctAnswer = questions[currentDifficulty][currentQuestionIndex].correct;
    const isCorrect = selectedOption === correctAnswer;

    const message = document.createElement("p");
message.textContent = isCorrect
    ? "Resposta correta!"
    : `Resposta errada.`;
message.style.color = "black"; // Define a cor do texto como preta
popupContainer.appendChild(message);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Próxima Pergunta";
    nextButton.style.marginTop = "20px";
    nextButton.style.padding = "10px 20px";
    nextButton.style.backgroundColor = "red";
    nextButton.style.color = "white";
    nextButton.style.border = "none";
    nextButton.style.borderRadius = "5px";
    nextButton.style.cursor = "pointer";

    nextButton.addEventListener("click", () => {
        document.body.removeChild(popupContainer);
        nextQuestion(isCorrect);
    });

    popupContainer.appendChild(nextButton);
    document.body.appendChild(popupContainer);
}

function nextQuestion(isCorrect) {
    if (isCorrect) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions[currentDifficulty].length) {
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
