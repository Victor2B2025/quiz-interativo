export const perguntas = [
    {
        enunciado: "Você prefere doce ou salgado?",  //a pergunta
        alternativas: [
            {
                texto: "salgado", //primeira alternativa
                afirmacao: [
                    "salgado é realmente muito bom", //comentário para a resposta
                    "mas em execesso faz mal kk"        //segundo comentário
                ],
                proxima: 1,
            },
            {
                texto: "doce",
                afirmacao: [
                    "doce é muito bom",
                    "uma escolha diferente, mais não estou aqui pra julgar"
                ],
                proxima: 1,
            }
        ]
    },
    {
        enunciado: "praia ou fazenda?",
        alternativas: [
            {
                texto: "praia",
                afirmacao: [
                    "praia é um ótimo gosto",
                    "muito bom"
                ],
                proxima: 2,
            },
            {
                texto: "fazenda",
                afirmacao: [
                    "fazenda é uma otima escolha",
                    "tem bom gosto"
                ],
                proxima: 2,
            }
        ]
    },
    {
        enunciado: "sair ou ficar em casa?",
        alternativas: [
            {
                texto: "sair",
                afirmacao: [
                    "é bom sair de casa pra dar um role",
                    "mais ficar no conforto de casa é bom também"
                ],
                proxima: 3,
            },
            {
                texto: "ficar em casa",
                afirmacao: [
                    "você tem um gosto bom por opitar ficar no conforto de casa",
                    "boa escolha"
                ],
                proxima: 3,
            }
        ]
    },
    {
        enunciado: "computador ou console",
        alternativas: [
            {
                texto: "computador",
                afirmacao: [
                    "você tem um bom gosto",
                    "um custo alto mais vale a pena"
                ],
                proxima: 4,
            },
            {
                texto: "console",
                afirmacao: [
                    "muito bom, tem um otimo conforto",
                    "pode jogar tranquilo no sofá kk"
                ],
                proxima: 4,
            }
        ]
    },
    {
        enunciado: "android ou iphone",
        alternativas: [
            {
                texto: "android",
                afirmacao: [
                    "você tem bom gosto, custo beneficio e bom",
                    "alguns até superam o iphone"
                ],
            },
            {
                texto: "iphone",
                afirmacao: [
                    "voce tem um bom gosto",
                    "e o valor compensa com a qualidade"
                ],
            }
        ]
    }
]
