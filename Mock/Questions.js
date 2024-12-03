var questions = [
    {
        "id": "1",
        "type": "",
        "description": {
            "title": "Topic 1, Windows Server 2016 virtual machine",
            "CaseStudy": "Este é um estudo de caso. Os estudos de caso não são cronometrados separadamente. Você pode usar o tempo de exame que " +
            "quiser para concluir cada caso. No entanto, pode haver estudos de caso e seções adicionais "+
            "neste exame. Você deve administrar seu tempo para garantir que consiga concluir todas as questões incluídas " +
            "neste exame no tempo fornecido. <br><br>" +
            "Para responder às perguntas incluídas em um estudo de caso, você precisará referenciar informações que são " +
            "fornecidas no estudo de caso. Os estudos de caso podem conter exibições e outros recursos que fornecem " +
            "mais informações sobre o cenário descrito no estudo de caso. Cada pergunta é " +
            "independente das outras perguntas neste estudo de caso<br><br>" + 
            "No final deste estudo de caso, uma tela de revisão aparecerá. Esta tela permite que você revise suas " +
            "respostas e faça alterações antes de passar para a próxima seção do exame. Depois de começar uma " +
            "nova seção, você não pode retornar a esta seção.",
            "ToStartTheCaseStudy": "Para exibir a primeira pergunta neste estudo de caso, clique no botão Avançar. Use os botões no painel esquerdo " +
            "para explorar o conteúdo do estudo de caso antes de responder às perguntas. Clicar nesses botões " +
            "exibe informações como requisitos de negócios, ambiente existente e declarações de problemas. " +
            "Se o estudo de caso tiver uma guia Todas as informações, observe que as informações exibidas são idênticas às informações exibidas nas guias subsequentes. Quando estiver pronto para responder a uma pergunta, clique no " +
            "botão Pergunta para retornar à pergunta.",
            "CurrentEnvironment": {
                "type": "Windows Server 2016 virtual machine",
                "description": "A máquina virtual (VM) executa o BizTalk Server 2016. A VM executa os seguintes fluxos de trabalho:<br><br>" +
                "Transporte Oceânico – Este fluxo de trabalho reúne e valida informações de contêineres, incluindo conteúdo de contêineres e avisos de chegada em vários portos de embarque.<br><br>" +
                "Transporte terrestre – Este fluxo de trabalho reúne e valida informações de transporte, incluindo uso de combustível, número de paradas e rotas.<br><br>" +
                "A VM suporta as seguintes chamadas de API REST:<br><br>" +
                "Container API – Esta API fornece informações sobre o contêiner, incluindo peso, conteúdo e outros atributos.<br><br>" + 
                "Location API – Esta API fornece informações de localização sobre portos de escala e paradas de rastreamento.<br><br>" +
                "Shipping REST API – Esta API fornece informações de envio para uso e exibição no site de envio.<br><br>",
                "ShippingData": "O aplicativo usa o banco de dados de armazenamento de documentos MongoDB JSON para todas as informações de contêiner e transporte.",
                "ShippingWebSite": "O site exibe informações de rastreamento de contêineres de transporte e conteúdo de contêineres. O site está localizado em http://shipping.wideworldimporters.com/",
                "ProposedSolution": "O aplicativo de envio local deve ser movido para o Azure. A VM foi migrada para uma nova" +
                "VM Standard_D16s_v3 do Azure usando o Azure Site Recovery e deve permanecer em execução no Azure para " +
                "concluir as migrações de componentes do BizTalk. Você cria uma VM Standard_D16s_v3 do Azure para hospedar " +
                "o BizTalk Server. O diagrama de arquitetura do Azure para a solução proposta é mostrado abaixo:",
                "ProposedSolutionImage": "q1"
            },
            "Requirements": {
                "ShippingLogicApp": "O aplicativo Shipping Logic deve atender aos seguintes requisitos:<br><br>" + 
                "Dê suporte aos fluxos de trabalho de transporte marítimo e terrestre usando um aplicativo lógico.<br><br>" +
                "Suporta o formato de mensagem X12 do protocolo padrão da indústria para várias mensagens, incluindo detalhes do conteúdo da embarcação e avisos de chegada." +
                "Proteja recursos para a VNet corporativa e use recursos de armazenamento dedicados com um modelo de custo fixo.<br><br>" +
                "Manter a conectividade local para dar suporte a aplicativos legados e migrações finais do BizTalk<br><br>",
                "ShippingFunctionApp": "Implemente pontos de extremidade de função seguros usando segurança em nível de aplicativo e inclua o Azure Active Directory(Azure AD).",
                "REST APIs": "As APIs REST que dão suporte à solução devem atender aos seguintes requisitos:<br><br>" +
                "Proteja recursos para a VNet corporativa. <br>" +
                "Permita a implantação em um local de teste no Azure sem incorrer em custos adicionais.<br>" +
                "Escale automaticamente para dobrar a capacidade durante os horários de pico de envio sem causar tempo de inatividade do aplicativo.<br>" +
                "Minimize custos ao selecionar um modelo de pagamento do Azure.",
                "ShippingWebsite": "Use a Rede de Distribuição de Conteúdo (CDN) do Azure e garanta o máximo desempenho para conteúdo dinâmico ao mesmo tempo em que minimiza a latência e os custos.",
                "Issues": {
                    "type": "Windows Server 2016 VM",
                    "typeValue": "A VM mostra alta latência de rede, jitter e alta utilização da CPU. A VM é crítica e não foi feita backup no passado. A VM deve habilitar uma restauração rápida de um snapshot de 7 dias para incluir restauração in-loco de discos em caso de falha.",
                    "ShippingWebsiteRESTAPIs": "A seguinte mensagem de erro é exibida enquanto você testa o site:<br><br>" +
                    "Falha ao carregar http://test-shippingapi.wideworldimporters.com/: Nenhum cabeçalho 'Access-Control-Allow-Origin' está presente no recurso solicitado. Origem 'http://test.wideworldimporters.com/' portanto, não tem permissão de acesso."
                }
            }
        },
        "questions": [
            {
                "type": "select",
                "enunciate": "Você precisa configurar o Azure CDN para o site de Envio.<br><br>" +
                "Quais opções de configuração você deve usar? Para responder, selecione as opções apropriadas na área de resposta.<br><br>" +
                "OBSERVAÇÃO: Cada seleção correta vale um ponto",
                "enunciateImage": "q2",
                "Explanation": "Cenário: Site de envio" +
                "Use a Rede de Distribuição de Conteúdo (CDN) do Azure e garanta o desempenho máximo para conteúdo dinâmico ao mesmo tempo em que minimiza a latência e os custos. " +
                "Camada: Padrão<br>" +
                "Perfil: Akamai<br>" +
                "Otimização: Aceleração dinâmica de site<br>" +
                "A aceleração dinâmica de site (DSA) está disponível para os perfis Azure CDN Standard da Akamai, Azure CDN Standard da Verizon e Azure CDN Premium da Verizon."
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "chose",
                "enunciate": "",
                "enunciateImage": "",
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "response": "",
                "Explanation": ""
            },
            {
                "type": "position",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "chose",
                "enunciate": "",
                "enunciateImage": "",
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "response": "",
                "Explanation": ""
            },
            {
                "type": "chose",
                "enunciate": "",
                "enunciateImage": "",
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "response": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            }
        ]
        
    },
    {
        "id": "",
        "type": "",
        "description": {
            "title": "",
            "CaseStudy": "",
            "ToStartTheCaseStudy": "",
            "CurrentEnvironment": "",
            "ShippingData": "",
            "ShippingWebSite": "",
            "ProposedSolution": "",
            "ProposedSolutionImage": "",
            "Requirements": {
                "ShippingLogicApp": "",
                "ShippingFunctionApp": "",
                "REST APIs": "",
                "ShippingWebsite": "",
                "Issues": {
                    "type": "",
                    "typeValue": "",
                    "ShippingWebsiteRESTAPIs": ""
                }
            }
        },
        "questions": [
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "chose",
                "enunciate": "",
                "enunciateImage": "",
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "response": "",
                "Explanation": ""
            },
            {
                "type": "position",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "chose",
                "enunciate": "",
                "enunciateImage": "",
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "response": "",
                "Explanation": ""
            },
            {
                "type": "chose",
                "enunciate": "",
                "enunciateImage": "",
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "response": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            }
        ]
        
    },
    {
        "id": "",
        "type": "",
        "description": {
            "title": "",
            "CaseStudy": "",
            "ToStartTheCaseStudy": "",
            "CurrentEnvironment": "",
            "ShippingData": "",
            "ShippingWebSite": "",
            "ProposedSolution": "",
            "ProposedSolutionImage": "",
            "Requirements": {
                "ShippingLogicApp": "",
                "ShippingFunctionApp": "",
                "REST APIs": "",
                "ShippingWebsite": "",
                "Issues": {
                    "type": "",
                    "typeValue": "",
                    "ShippingWebsiteRESTAPIs": ""
                }
            }
        },
        "questions": [
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "chose",
                "enunciate": "",
                "enunciateImage": "",
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "response": "",
                "Explanation": ""
            },
            {
                "type": "position",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "chose",
                "enunciate": "",
                "enunciateImage": "",
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "response": "",
                "Explanation": ""
            },
            {
                "type": "chose",
                "enunciate": "",
                "enunciateImage": "",
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "response": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            },
            {
                "type": "select",
                "enunciate": "",
                "enunciateImage": "",
                "Explanation": ""
            }
        ]
        
    }
]