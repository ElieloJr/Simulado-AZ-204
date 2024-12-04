var questions = [
    {
        "id": 1,
        "type": "select",
        "useCase": "case1",
        "enunciate": "Você precisa configurar o Azure CDN para o site de Envio.<br><br>" +
                    "Quais opções de configuração você deve usar? Para responder, selecione as opções apropriadas na área de resposta.<br><br>" +
                    "OBSERVAÇÃO: Cada seleção correta vale um ponto.<br>",
        "enunciateImage": "img1",
        "options": [
            {
                "title": "Camada",
                "selectables": [
                    "Standard",
                    "Premium"
                ],
                "response": "Standard"
            },
            {
                "title": "Perfil",
                "selectables": [
                    "Akamai",
                    "Microsoft"
                ],
                "response": "Akamai"
            },
            {
                "title": "Optimization",
                "selectables": [
                    "entrega geral na web",
                    "download de arquivo grande",
                    "aceleração dinâmica do site",
                    "streaming de mídia de vídeo sob demanda"
                ],
                "response": "aceleração dinâmica do site"
            }
        ],
        "Explanation": "Cenário: Site de envio<br>" +
                        "Use a Rede de Distribuição de Conteúdo (CDN) do Azure e garanta o desempenho máximo para conteúdo dinâmico " +
                        "ao mesmo tempo em que minimiza a latência e os custos.<br>" +
                        "Camada: Standard<br>" +
                        "Perfil: Akamai<br>" +
                        "Otimização: Aceleração dinâmica de site<br>" +
                        "A aceleração dinâmica de site (DSA) está disponível para os perfis Azure CDN Standard da Akamai, Azure CDN Standard da Verizon e Azure CDN Premium da Verizon.<br>" +
                        "O DSA inclui várias técnicas que beneficiam a latência e o desempenho do conteúdo dinâmico. As técnicas incluem otimização de rota e rede, otimização de TCP e muito mais.<br>" +
                        "Você pode usar essa otimização para acelerar um aplicativo da web que inclui inúmeras respostas que não são armazenáveis ​​em cache. Exemplos são resultados de pesquisa, transações de checkout ou dados em tempo real<br><br>" +
                        "a. Você pode continuar a usar os principais recursos de cache do Azure CDN para dados estáticos.<br><br>" +
                        "Reference:<br>https://docs.microsoft.com/en-us/azure/cdn/cdn-optimization-overview"
    },
    {
        "id": 2,
        "type": "select",
        "useCase": "case1",
        "enunciate": "Você precisa proteger o aplicativo Shipping Function.<br>" +
                    "Como você deve configurar o aplicativo? Para responder, selecione as opções apropriadas na área de resposta.<br>" +
                    "NOTA: Cada seleção correta vale um ponto.",
        "enunciateImage": "img2",
        "options": [
            {
                "title": "Nível de autorização",
                "selectables": [
                    "Function",
                    "Anonimo",
                    "Admin"
                ],
                "response": "Function"
            },
            {
                "title": "Reivindicações do usuário",
                "selectables": [
                    "JSON Web Token (JWT)",
                    "Shared Access Signature (SAS) token",
                    "API Key"
                ],
                "response": "JSON Web Token (JWT)"
            },
            {
                "title": "Tipo de gatilho",
                "selectables": [
                    "blob",
                    "HTTP",
                    "queue",
                    "timer"
                ],
                "response": "HTTP"
            }
        ],
        "Explanation": "Cenário: Aplicativo de função de envio: implemente pontos de extremidade de função seguros usando segurança em nível de aplicativo e inclua o Azure Active Directory (Azure AD).<br>" +
                        "Caixa 1: Função<br><br>" +
                        "Caixa 2: Token baseado em JSON (JWT)<br>" +
                        "O Azure AD usa tokens baseados em JSON (JWTs) que contêm declarações<br><br>" +
                        "Caixa 3: HTTP<br>" +
                        "Como um aplicativo da Web delega o login no Azure AD e obtém um token<br>" +
                        "A autenticação do usuário acontece pelo navegador. O protocolo OpenID usa mensagens do protocolo HTTP padrão.<br><br>" +
                        "Reference: <br>https://docs.microsoft.com/en-us/azure/active-directory/develop/authentication-scenarios"
    },
    {
        "id": 3,
        "type": "alternative",
        "useCase": "case1",
        "enunciate": "Você precisa proteger o Shipping Logic App.<br><br>" +
                    "O que você deve usar?",
        "enunciateImage": null,
        "options": [
            "A. Azure App Service Environment (ASE)",
            "B. Integração B2B do Azure AD",
            "C. Integration Service Environment (ISE)",
            "D. Ponto de extremidade do serviço VNet"
        ],
        "response": "C. Integration Service Environment (ISE)",
        "Explanation": "Cenário: O Shipping Logic App requer recursos seguros para a VNet corporativa e usa recursos de armazenamento dedicados com um modelo de custo fixo.<br><br>" +
                        "Você pode acessar os recursos da Azure Virtual Network a partir dos Azure Logic Apps usando ambientes de serviço de integração (ISEs).<br><br>" +
                        "Às vezes, seus aplicativos lógicos e contas de integração precisam de acesso a recursos seguros, como máquinas virtuais (VMs) e outros sistemas ou serviços, que estão dentro de uma rede virtual do Azure. Para configurar esse acesso, você pode criar um ambiente de serviço de integração (ISE) onde pode executar seus aplicativos lógicos e criar suas contas de integração.<br><br>"
    },
    
]