import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import Pergunta from "./Pergunta";
import Respostas from "./Respostas";
import Video from "./Video";

const questions = [
  {
    title: "Que dia enviamos a primeira mensagem?",
    options: ["09/02/2024", "02/09/2024", "03/09/2024"],
    correctAns: "02/09/2024",
  },
  {
    title: "Que dia nos vimos pela primeira vez?",
    options: ["10/09/2024", "11/09/2024", "09/09/2024"],
    correctAns: "11/09/2024",
  },
  {
    title: "Qual foi a primeira mensagem que te mandei?",
    options: ["Eai torcedora do papao", "Eai torcedora do papão", "Eai"],
    correctAns: "Eai torcedora do papão",
  },
  {
    title: "Qual foi sua resposta?",
    options: [
      "KAKAKAKAKAKAKK oi torcedor do vitoria",
      "KKKKKKKKKK oi torcedor do vitoria",
      "KAKAKAKAKK oi torcedor do vitoria",
    ],
    correctAns: "KAKAKAKAKAKAKK oi torcedor do vitoria",
  },
  {
    title: "Que dia eu percebi que te amava?",
    options: ["05/09/2024", "09/09/2024", "07/09/2024"],
    correctAns: "05/09/2024",
  },
  {
    title: "Quando foi nosso primeiro 'eu te amo'?",
    options: ["05/09/2024", "09/09/2024", "07/09/2024"],
    correctAns: "09/09/2024",
  },
  {
    title: "Onde foi nosso primeiro 'eu te amo'?",
    options: ["Salvador", "Ciudad de Panamá", "Belo Horizonte"],
    correctAns: "Belo Horizonte",
  },
  {
    title: "O que falou antes de falar que me amava?",
    options: [
      "to gostando de voce",
      "bora fazer um acordo [...]",
      "vai dar tudo certo",
    ],
    correctAns: "vai dar tudo certo",
  },
  {
    title: "O que disse quando percebeu que eu ia te ver?",
    options: [
      "mentira q tu vem aqui",
      "mentira q ru vem aqui",
      "mentira q tu vrm aqui",
    ],
    correctAns: "mentira q ru vem aqui",
  },
  {
    title: "Quando fui te ver depois da primeira vez?",
    options: ["12/09/2024", "11/09/2024", "13/09/2024"],
    correctAns: "12/09/2024",
  },
  {
    title: "Que dia conheceu meus pais?",
    options: ["15/09/2024", "13/09/2024", "14/09/2024"],
    correctAns: "14/09/2024",
  },
  {
    title: "Que dia nossos pais se conheceram?",
    options: ["25/09/2024", "29/09/2024", "23/09/2024"],
    correctAns: "29/09/2024",
  },
  {
    title: "Que dia fomos à igreja juntos pela primeira vez?",
    options: ["25/09/2024", "29/09/2024", "23/09/2024"],
    correctAns: "29/09/2024",
  },
  {
    title: "Que dia é meu aniversário?",
    options: ["04/10", "03/10", "05/10"],
    correctAns: "04/10",
  },
  {
    title: "Com que roupa fui pro meu aniversário:",
    options: [
      "Camisa da Nike",
      "Camisa do Nattanzinho (a mesma q te pedi em namoro)",
      "Camisa do Vitória",
    ],
    correctAns: "Camisa do Vitória",
  },
  {
    title: "Fomos combinando no estilo, no meu aniversário?",
    options: ["Sim", "Não", "Talvez..."],
    correctAns: "Sim",
  },
  {
    title: "Você mim ama? (Eliminatória)",
    options: ["Claro meu bebezinio, te amo muito", "Não", "Não sei"],
    correctAns: "Claro meu bebezinio, te amo muito",
  },
  {
    title: "O que aconteceu no dia do Círio?",
    options: [
      "Cheguei muito cedo",
      "Tentaram invadir minha casa",
      "Chorei muito",
    ],
    correctAns: "Tentaram invadir minha casa",
  },
  {
    title: "Que dia te pedi namoro?",
    options: ["12/10/2024", "18/10/2024", "19/10/2024"],
    correctAns: "19/10/2024",
  },
  {
    title: "O que de alarmante aconteceu assim que cheguei em casa?",
    options: [
      "Estava morrendo de saudades",
      "Descobri que a aliança cai",
      "Meus pais ficaram putos que cheguei tarde",
    ],
    correctAns: "Estava morrendo de saudades",
  },
  {
    title:
      "Quanto tempo faz que te pedi em namoro (levando dia 12/12/2024 como base)?",
    options: ["1 mês e 23 dias", "1 mês e 20 dias", "51 dias"],
    correctAns: "1 mês e 23 dias",
  },
  {
    title: "Onde vamos casar?",
    options: [
      "Basílica Santuário de Nossa Senhora de Nazaré",
      "Basílica de Nazaré",
      "Basílica de Nossa Senhora de Nazaré",
    ],
    correctAns: "Basílica Santuário de Nossa Senhora de Nazaré",
  },
  {
    title: "Qual a nossa cor?",
    options: ["Vermelho", "Azul", "Azul claro"],
    correctAns: "Azul claro",
  },
  {
    title: "Qual foi nossa fantasia na nossa primeira festa juntos?",
    options: ["Nattanzinho Lima", "Papai Noel", "Coringa do Vitória"],
    correctAns: "Coringa do Vitória",
  },
  {
    title: "Qual foi a primeira frase que eu disse no capítulo 16?",
    options: [
      "Marcado por presentinhos, postagens e muito amorzinho",
      "Nosso primeiro mês juntos, mesmo que tivesse doente, o dia foi muito especial.",
      "Primeiro de muitos meses juntos [...]",
    ],
    correctAns:
      "Nosso primeiro mês juntos, mesmo que tivesse doente, o dia foi muito especial.",
  },
  {
    title:
      "Qual foi o apelido carinhoso que usei quando te mandei mensagem no capitulo 16?",
    options: ["meu amor", "vida", "gatinha"],
    correctAns: "meu amor",
  },
  {
    title:
      "No capitulo 11, qual foi a palavra que finalizei o primeiro parágrafo?",
    options: ["amo", "universo", "lado"],
    correctAns: "amo",
  },
  {
    title: "Você me ama quanto?",
    options: [
      "Assim...",
      "Muuuuuito meu bebezinio oh meu Deus que coisa fofa",
      "Razoável",
    ],
    correctAns: "Muuuuuito meu bebezinio oh meu Deus que coisa fofa",
  },
  {
    title: "Qual programa utilizei para escrever o código desse site?",
    options: ["VS Code", "React JS", "JavaScript"],
    correctAns: "VS Code",
  },
  {
    title: "Qual linguagem utilizei para programar esse site?",
    options: ["VS Code", "React JS", "JavaScript"],
    correctAns: "JavaScript",
  },
  {
    title: "Qual framework utilizei pra contruir esse site?",
    options: ["VS Code", "React JS", "JavaScript"],
    correctAns: "React JS",
  },
  {
    title: "Quantas fotos e vídeos tinha no meu grupo do WhatsApp?",
    options: [
      "170 fotos e 22 vídeos",
      "172 fotos e 25 vídeos",
      "174 fotos e 28 vídeos",
    ],
    correctAns: "174 fotos e 28 vídeos",
  },
  {
    title:
      "Quantos dias faltavam pra o seu aniversário quando terminei esse site?",
    options: ["5 dias", "10 dias", "6 dias"],
    correctAns: "5 dias",
  },
  {
    title:
      "Quem é a menina mais linda do mundo que mais me faz feliz todos os dias e que completa meu sorriso diário, a mulher que eu juro sempre amar, estar do lado, dar carinho e tudo que há de bom?",
    options: [
      "Luana Fiuza de Melo Finotelo do Amaral",
      "Luana de Melo Fiuza do Amaral",
      "Luana Finotelo de Fiuza do Amaral e Melo",
    ],
    correctAns: "Luana Fiuza de Melo Finotelo do Amaral",
  },
  {
    title: "Você me ama?????",
    options: [
      "SIMMMMMMMMMMMMM MEU AMORRRRRRRRRRRRRRRRR TE AMO MUITO!!!!",
      "nao",
      "nah ahn",
    ],
    correctAns: "SIMMMMMMMMMMMMM MEU AMORRRRRRRRRRRRRRRRR TE AMO MUITO!!!!",
  },
  {
    title: "Me dá beijinho agora.",
    options: [
      "*fui, dei beijo e disse que amo",
      "*fui e dei beijo",
      "*não dei beijo",
    ],
    correctAns: "*fui, dei beijo e disse que amo",
  },
];

const instrucoes = [
  `Este CADERNO DE QUESTÕES contém ${questions.length} questões numeradas de 1 a ${questions.length}.`,
  "Para cada uma das questões objetivas, são apresentadas 3 opções. Apenas uma responde corretamente à questão.",
  "O tempo disponível para esta prova é com base na saudade do aplicador da sala, porém, caso receba carinho constantemente, o tempo disponível será aumentado.",
  "Reserve tempo suficiente para dar preencher suas respostas e constantemente entregar carinho ao aplicador.",
  "Quando terminar a prova, cutuque o aplicador de sua sala (o qual deverá estar recebendo carinho) e apresente seu resultado final, embora o site faça tudo sozinho, o aplicador quer ver o resultado.",
  "Você poderá deixar o local de prova somente após completar a prova. Se sair da página de prova, a prova será reiniciada.",
  "Nenhum tipo de trapaceio é permitido, ao menos que peça com jeitinho.",
  "Esta prova levará como base tudo que foi apresentado anteriormente na história. Caso tenha prestado a devida atenção, vai passar com uma boa nota.",
  "Caso conquiste uma boa nota no final da prova, prêmios deverão ser entregues, então preste atenção e estude bem antes de iniciar.",
  "Em caso de uma nota não satisfatória ser conquistada, a candidata (unicamente a aniversariante Luluca) terá o direito de refazer quantas vezes necessário.",
  "Eu te amo muito, feliz aniversário.",
];

function Prova() {
  const [inputtedAnswers, setInputtedAnswers] = useState([]);
  const [testState, setTestState] = useState("intro");
  const [media, setMedia] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const startTest = () => {
    setTestState("started");
  };

  const finishTest = () => {
    setTestState("finished");

    const acertos = inputtedAnswers.filter((r) => r.isCorrect).length;
    const total = inputtedAnswers.length;
    setMedia(((acertos / total) * 100).toFixed(1));

    setCorrectAnswers(inputtedAnswers.filter((r) => r.isCorrect));
    setWrongAnswers(inputtedAnswers.filter((r) => !r.isCorrect));
  };

  const handleInputAnswer = (index, title, value, correctAns, isCorrect) => {
    setInputtedAnswers((prev) => {
      const existingAnswer = prev.find((answer) => answer.index === index);

      if (existingAnswer) {
        return prev.map((answer) =>
          answer.index === index
            ? { index, title, enteredValue: value, correctAns, isCorrect }
            : answer
        );
      } else {
        return [
          ...prev,
          {
            index,
            title,
            enteredValue: value,
            correctAns,
            isCorrect,
          },
        ];
      }
    });
  };

  let content;

  switch (testState) {
    case "intro":
      content = (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography textAlign="center" variant="h4" textTransform="uppercase">
            Exame Nacional da Enamorada.
          </Typography>
          <Typography textAlign="center" mb={2}>
            Prova de Memórias Românticas e suas Conexões. Prova de Emoções
            Compartilhadas e seus Aprendizados.
          </Typography>
          <Typography textAlign="center" variant="h3" fontWeight={500}>
            ENEN
            <Typography component="span" fontSize="2.7rem" fontStyle="italic">
              2024
            </Typography>
          </Typography>
          <Box
            sx={{
              bgcolor: "#eff9fc",
              p: 4,
              borderRadius: 10,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              textTransform="uppercase"
              fontWeight="bold"
              textAlign="center"
              mb={2}
            >
              Leia atentamente as instruções seguintes.
            </Typography>
            {instrucoes.map((instrucao, idx) => {
              return (
                <Box key={idx} display="flex" gap={1}>
                  <Typography
                    component="span"
                    fontWeight="bold"
                    width={25}
                    textAlign="center"
                  >
                    {idx + 1}.
                  </Typography>
                  <Typography>{instrucao}</Typography>
                </Box>
              );
            })}
          </Box>
          <Button sx={{ my: 2 }} variant="contained" onClick={startTest}>
            Começar Prova
          </Button>
        </Box>
      );
      break;
    case "started":
      content = (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography mb={1} textAlign="center" variant="h4">
            ENEN - Prova Final
          </Typography>
          <Grid2 container spacing={2} justifyContent="center">
            {questions.map((question, idx) => (
              <Grid2 xs={12} sm={6} key={idx} width={400}>
                <Pergunta
                  index={idx}
                  title={question.title}
                  options={question.options}
                  correctAns={question.correctAns}
                  handleIsCorrect={handleInputAnswer}
                />
              </Grid2>
            ))}
          </Grid2>
          <Button
            variant="contained"
            disabled={inputtedAnswers.length != questions.length}
            sx={{ px: 5, mb: 2 }}
            onClick={finishTest}
          >
            Enviar
          </Button>
        </Box>
      );
      break;
    case "finished":
      content = (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" mt={2}>
            Parabéns, seu resultado é
          </Typography>
          {media > 50 ? (
            <>
              <Typography variant="h3" color="success" mt={4} fontWeight="bold">
                ME AMA MUITO TALVEZ!
              </Typography>
              <Typography textAlign="center" maxWidth={500} my={2}>
                Parabéns, seu resultado satisfaz a média necessária. Você deve
                receber seus presentes agora.
              </Typography>
              <Typography color="success" fontWeight="bold">
                Sua media foi de {media}%.
              </Typography>
              <Video />
            </>
          ) : (
            <>
              <Typography variant="h3" color="error" mt={4} fontWeight="bold">
                NÃO ME AMA!
              </Typography>
              <Typography textAlign="center" maxWidth={500} my={2}>
                Seu suposto &quot;bebezinho&quot; que você supostamente
                &quot;ama muito&quot; neste momento se encontra CHORANDO. Em
                prantos vê o resultado de um teste simples de uma mulher que ele
                tanto amava.
              </Typography>
              <Typography color="error" fontWeight="bold">
                Sua media foi de {media}%.
              </Typography>
            </>
          )}
          <Respostas
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
          />
        </Box>
      );
      break;
  }

  return <Container sx={{ mt: 4 }}>{content}</Container>;
}

export default Prova;
