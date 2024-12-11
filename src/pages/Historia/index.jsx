import {
  Box,
  Button,
  keyframes,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";

const calcDate = (givenDate) => {
  const hoje = new Date();
  const data = new Date(givenDate);
  let anos = hoje.getFullYear() - data.getFullYear();
  let meses = hoje.getMonth() - data.getMonth();
  let dias = hoje.getDate() - data.getDate() - 1;

  if (meses < 0) {
    meses += 12;
    anos--;
  }

  if (dias < 0) {
    const ultimoDiaDoMesAnterior = new Date(
      data.getFullYear(),
      data.getMonth(),
      0
    ).getDate();
    dias += ultimoDiaDoMesAnterior;
    meses--;
  }

  let tempo = "";

  if (anos > 0) {
    tempo += `${anos} ano${anos > 1 ? "s" : ""}`;
    if (meses > 0 || dias > 0) tempo += ", ";
  }

  if (meses > 0) {
    tempo += `${meses} ${meses > 1 ? "meses" : "mês"}`;
    if (dias > 0) tempo += " e ";
  }

  if (dias > 0) {
    tempo += `${dias} dia${dias > 1 ? "s" : ""}`;
  }

  if (
    hoje.getDate() === data.getDate() + 1 &&
    hoje.getMonth() === data.getMonth() &&
    hoje.getFullYear() === data.getFullYear()
  ) {
    return "Hoje";
  } else if (data > hoje) {
    let faltam_anos = Math.abs(hoje.getFullYear() - data.getFullYear());
    let faltam_meses = Math.abs(hoje.getMonth() - data.getMonth());
    let faltam_dias = Math.abs(hoje.getDate() - data.getDate() - 1);
    tempo = "";
    if (faltam_anos > 0) {
      tempo += `${faltam_anos} ano${faltam_anos > 1 ? "s" : ""}`;
      if (meses > 0 || dias > 0) tempo += ", ";
    }

    if (faltam_meses > 0) {
      tempo += `${faltam_meses} ${faltam_meses > 1 ? "meses" : "mês"}`;
      if (dias > 0) tempo += " e ";
    }

    if (faltam_dias > 0) {
      tempo += `${faltam_dias} dia${faltam_dias > 1 ? "s" : ""}`;
    }

    const singular =
      tempo.includes("1 ano") ||
      tempo.includes("1 mês") ||
      tempo.includes("1 dia");
    return `${singular ? "Falta" : "Faltam"} ${tempo}...`;
  } else {
    return `Há ${tempo}...`;
  }
};

const steps = [
  {
    label: "Começo de tudo... (02/09/2024)",
    description: [
      `Tudo começou com uma simples mensagem. Sem pretenções alguma de algo realmente acontecer... hahaha, ririamos ao imaginar um dia estarmos aqui,
    se é que teríamos tamanha imaginação. Nesse dia ainda fomos call pela primeira vez.`,
    ],
    images: ["0209.jpg"],
    compText:
      "Uma das primeiras vezes que nos ligamos (se não foi a primeira).",
    compDate: "2024-09-02",
  },
  {
    label: "Percebi que te amava... (05/09/2024)",
    description: [
      `Me senti péssimo quando tentou se afastar de mim pela primeira vez, por mais que falasse "não vou ficar chateado".`,
      `Mas graças a Deus, o indiano voltou a ser assunto pois decidistes que sentiu muita saudade minha, e me mandou mensagem de novo.`,
    ],
    images: ["0509_1.jpg", "0509_2.jpg"],
    compText:
      "Não tenho fotos desse dia, aí vai uma representação. Me senti péssimo por achar q ia te perder.",
    compDate: "2024-09-05",
  },
  {
    label: '"Já pode chamar de amor?"... (07/09/2024)',
    description: [
      `Acordo com mensagens suas e algo me chama atenção... Você me chama de amor.
      Algo que me deixou muito eufórico, muito feliz na hora que li, e à partir dali...`,
      null,
      null,
    ],
    images: ["0709_1.jpg", "0709_2.jpg", "0709_3.jpg"],
    compText:
      "Também não tenho fotos desse dia, mas me senti extremamente feliz em ver que tudo estava dando certo.",
    compDate: "2024-09-07",
  },
  {
    label: 'Primeiro "eu te amo"... (09/09/2024)',
    description: [
      `Ficamos em call quando estava em BH, deu todo aquele problema e fez questão de tentar seu máximo para me ajudar a resolver. 
      O qual meus pais usaram do link que achastes para conseguir me tirar dali.
      
A vontade de dizer "eu te amo", momentaneamente parou no "Tudo que a gente sentir, a gente fala", às 0h. Não íamos aguentar muito mais que isso...`,
      "Sentimento gigantesco apenas começando. Eu te amo e não é de hoje, de ontem, e nem desse dia.",
      "E à partir daí...",
      "Dizer que ama se tornou algo recorrente.",
    ],
    images: ["0909_1.jpg", "0909_2.jpg", "0909_3.jpg", "0909_4.jpg"],
    compText:
      "Representação de novo, uma alegria enorme, te amava e te amava muito!",
    compDate: "2024-09-09",
  },
  {
    label: "Panamá... (10/09/2024)",
    description: [
      `O dia que mais ficamos juntos, mesmo sem estarmos juntos. Quando chego no Panamá você me liga, ficando quase o dia inteiro comigo, 
        ajudando a passar o tempo da melhor forma. Ali o que já tinha certeza que sentia, só se intensificou mais e mais.
        (Menção honrosa à um momento que fiquei todo bobo)`,
    ],
    images: ["1009.jpg"],
    compText:
      "Somos lindos, mesmo só em representação. 📍 No Panamá com a gata.",
    compDate: "2024-09-10",
  },
  {
    label: "Chego no Canadá... (11/09/2024)",
    description: [
      `Chego no Canadá e não me aguento: vou ver minha gatinha pela primeira vez. A vontade de te ver, de te beijar, de sentir o amor se intensificando era grande DEMAIS. Precisava ir te ver.`,
      "Mesmo que não acreditasse, sim, eu fui. Sabia que não estava bem, e sabia que eu poderia melhorar tudo.",
    ],
    images: ["1109_1.jpg", "1109_2.jpg"],
    compText: "Com a gatinha pela primeira vez.",
    compDate: "2024-09-11",
  },
  {
    label: "Mais um dia juntos... (12/09/2024)",
    description: [
      `Você já acorda falando que sua mãe me amou muito (conheci ambos no primeiro dia que te vi), o que me desperta um sentimento de alegria e alívio em saber que fui aceito na família Amaral, mal sabia eu que logo logo seria amado pela família inteira.`,
      `Sua sandália derrete e eu vou te ver (após muito drama de 'vou pensar se vou mesmo'). Estudamos juntos e eu tiro foto com a camisa do GIGANTESCO PAPÃO DA CURUZU AUUUUUUUUUU e posto.`,
    ],
    images: ["1209_1.jpg", "1209_2.jpg"],
    compText: "Eu y momor juntos de novo eba.",
    compDate: "2024-09-12",
  },
  {
    label: "Conhecendo meus pais... 14/09/2024",
    description: [
      `Não tenho muitas mensagens sobre esse dia. No dia anterior fiquei na sua casa até quase 3 da manhã, provavelmente conversamos pessoalmente sobre ir me ver no jogo. Falei com meu pai, e fomos te buscar (você e a Milla).`,
      `Esse dia foi incrível. Já começa com meu pai te conhecendo, e comigo ganhando a taça na tua presença. Logo depois, vais conhecer minha mãe, almoçamos, e vou pra sua casa.`,
      `No fim do dia, ainda te assumo nos stories. 'Campeones'.`,
    ],
    images: [null, null, null],
    compText:
      "Um dos melhores dias da minha vida, vencendo o campeonato sendo o melhor jogador jovem da temporada, e contigo me assistindo.",
    compDate: "2024-09-14",
  },
  {
    label: "Coincidência?... 19/09/2024",
    description: [
      `Nesse dia, por uma coincidência ou obra de Deus, nos vimos, saímos e foi um dia maravilhoso.`,
      `Tiramos uma das nossas fotos favoritas, e achei pertinente adicionar este momento aqui. (O dia um mês antes de perdir meu momor em namoro)`,
    ],
    images: ["1909_1.jpg", "1909_2.jpg"],
    compText: "Foto incrívelmente linda, valeria repetir ela na neve?",
    compDate: "2024-09-19",
  },
  {
    label: "Pais e Igreja... 29/09/2024",
    description: [
      `Nossos pais finalmente se encontram pela primeira vez, e ali vai se formando uma família incrível(mente grande), vamos à igreja e nos apresentamos ao Pai.`,
      `Dia muito especial pois além de vermos o quão bem nossa família se deu, foi a primeira vez que fomos à igreja juntos. Tiramos uma de nossas fotos favoritas, tinhamo.`,
    ],
    images: ["2909.jpg", null],
    compText:
      "Eu, a gata e JC gravados em uma foto digna de enquadramento. Antes dessa foto ainda rezamos juntinhos.",
    compDate: "2024-09-29",
  },
  {
    label: "Meu aniversário... 04/10/2024",
    description: [
      `O que dizer desse dia? Simplesmente incrível, me fez sentir a pessoa mais especial do mundo, fez questão de ser a primeira a me desejar feliz aniversário.`,
      `Veio pra casa, me entregou uma caixinha, me mostrou o quanto que me amava, por se dedicar tanto só pra me ver sorrir. Fui e sempre serei muito grato por tudo que fazes por mim, e sempre agradecerei aos céus por te ter ao meu lado.`,
      `Hoje, tento fazer o mesmo que fizestes por mim, me dedicar ao máximo, passar dias sem fazer nada além das surpresas pra ti para que te sinta a pessoa mais feliz do mundo, por que me fazes a pessoa mais completa do universo. Eu te amo.`,
    ],
    images: [null, null, "0410.jpg"],
    compText: "Linda foto em família, um dia perfeito. Simplesmente perfeito.",
    compDate: "2024-10-04",
  },
  {
    label: "Círio... 12/10/2024",
    description: [
      `Data extremamente importante para ti, que se tornou muito importante para mim. Muito mais que uma confraternização na sua casa, onde meus pais foram convidados e que só mostrava o quanto essa amizade ia crescendo.`,
      `Dia marcado por sentimento. Sentimentos tão fortes vindo de você que chegava a me assustar um pouco, mas me confortava por saber o motivo, e que no fim foi marcado por felicidade da mais pura. Também por nesse dia já ter nossas alianças em mãos e preparando pro dia ser 100% perfeito.`,
    ],
    images: ["1210_1.jpg", "1210_2.jpg"],
    compText:
      "Foto com sua família, me sentindo extremamente feliz por ter sido acolhido nela.",
    compDate: "2024-10-12",
  },
  {
    label: "Nosso dia 19... 19/10/2024",
    description: [
      `Preciso realmente dizer? Nosso dia, dia que toda minha ansiedade finalmente chegava ao fim, uma nova etapa na nossa vida apenas começava, te assumia, oficializava o que pra mim já era mais que oficial.`,
      `Fiz tudo da forma que sonhou, consegui te fazer chorar, realizar um dia perfeito, um sonho nas nossas vidas, te fazer feliz. Um sentimentos tão grandes, que precisaria ser um poeta pra descrevê-los. Eu te amo, muito, muito mesmo.`,
      null,
      null,
      "Palavras bonitas, sentimentos incríveis. Estamos finalmente namorando, minha namorada.",
      "E agora eu só termino com você na hora da próxima etapa, Basílica Santuário de Nossa Senhora de Nazaré.",
      null,
    ],
    images: [
      "1910_1.jpg",
      "1910_2.jpg",
      "1910_3.jpg",
      "1910_4.jpg",
      "1910_5.jpg",
      "1910_6.jpg",
    ],
    compText:
      "Nossa melhor foto sem a menor dúvida. Tudo perfeito, de um dia perfeito, com a mulher perfeita. Eu te amo muito.",
    compDate: "2024-10-19",
  },
  {
    label: "Nossa primeira festa juntos... 09/11/2024",
    description: [
      `Marcado por nossas coreografias juntos, nos divertimos bastante, enaltecendo ainda mais o quão perfeito somos (e um pouquinho doidos também pq quem pensa em "coringa do Vitória"?).`,
      `Uma diversão com meus pais (a convite deles), mostrando que não só fui aceito na sua família, mas que é muito amada na minha também.`,
    ],
    images: ["0911.jpg", null],
    compText: "Foto em família, lindas fantasias... peraí...",
    compDate: "2024-11-09",
  },
  {
    label: "Natal em família... 16/11/2024",
    description: [
      `Mais um dia em família, provando mais uma vez o tamanho que nossa família vinha se tornando. A relação incrível que nossos pais criaram.`,
      `Sei que no futuro isso será algo muito simples e recorrente, mas hoje em dia ainda me surpreende como tudo na nossa vida e no nosso relacionamento se encaixa, principalmente falando no quesito familiar.`,
    ],
    images: ["1611_1.jpg", "1611_2.jpg"],
    compText:
      "Não tivemos foto em família, ou ao menos não as tenho. Mas enaltecendo aqui o quão lindos somos juntos. Te amo momor.",
    compDate: "2024-11-16",
  },
  {
    label: "Nosso primeiro mês... 19/11/2024",
    description: [
      `Nosso primeiro mês juntos, mesmo que tivesse doente, o dia foi muito especial. Marcado por presentinhos, postagens e muito amorzinho (brega mas é fofo).`,
      null,
      `Primeiro de muitos meses juntos, daqui até o fim dos tempos estarei ao seu lado, e se caso queira fugir eu te sequestro rs.`,
      null,
    ],
    images: ["1911_1.jpg", "1911_2.jpg", "1911_3.jpg", "1911_4.jpg"],
    compText:
      "Não tiramos foto nesse dia, mas teve a bela postagem que só não é mais bela que o amor que sinto por você.",
    compDate: "2024-11-19",
  },
  {
    label: "LULUCA FAZ 17... 12/12/2024",
    description: [
      `Como isso daqui tá sendo feito antes do seu aniversário, não vou ter conversas desse dia, porém posso mostrar algumas coisas aqui.`,
      null,
      null,
      "Alguns dias de snow day passados trabalhando nisso aqui, tentando deixar tudo da forma mais especial e perfeita possível, fazendo da forma mais minusciosa possível.",
      null,
      "Organizei tudo em um grupo no WhatsApp que sequer escondi, ficou tão camuflado que você nem percebeu, se é que chegou a olhar meu WhatsApp em algum momento nesse meio tempo.",
      "Mas tudo isso exclusivamente para meu amor.",
      `Vida, sei que não sou um cara perfeito, sei que erro muitas vezes e faço besteira, mas desde que entrou na minha vida eu sou uma pessoa indiscutívelmente melhor.
      Você é um ser iluminado, que alegra todos a sua volta, que transborda amor e carinho para todas as pessoas que te são próximas, e nesses meses que passeii ao teu lado isso só vem se provando ainda mais.
      Tô aqui hoje escrevendo esse texto para te parabenizar por seus 17 anos, mas que o presente sou eu quem ganho. Essa mulher incrível que posso chamar de minha namorada, companheira, melhor amiga.
      A mulher que tá sempre do meu lado não importa o que aconteça, a única pessoa que me faz me sentir confortável pra chorar quando sinto sentimentos fortes, a mulher que tenho orgulho, que amo tanto, a minha namorada e futura esposa e mãe dos meus filhos: Luana Fiuza de Melo Finotelo do Amaral (Peniche).
      Meu amor hoje, amanhã e para todo sempre. Te amo e nunca deixe de ser essa pessoa incrível que todos amam tanto. Feliz aniversário meu amor. Que Deus te abençoe, e agora pode fazer a prova.`,
      "Hoje faltam 5 dias pra data tão esperada, mas eu já não aguento mais de tanta ansiedade.",
    ],
    images: [
      "1212_1.jpg",
      "1212_2.jpg",
      "1212_3.jpg",
      "1212_4.jpg",
      "1212_5.jpg",
      "1212_6.jpg",
      null,
      "1212_7.jpg",
    ],
    compText:
      "Meu amorzinho a mais linda do mundo desde pequenininha. Feliz aniversário meu amor, eu te amo muito! #lulucafaz17.",
    compDate: "2024-12-12",
  },
];

function Historia() {
  const fadeInOut = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 50%; }
`;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    var currentStep;
    setActiveStep((prevActiveStep) => {
      currentStep = prevActiveStep + 1;
      if (currentStep == steps.length) {
        return 0;
      } else {
        return prevActiveStep + 1;
      }
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        pt: 4,
        background:
          activeStep == 12
            ? "linear-gradient(-45deg, #89CFF0, #1497E1, #89CFF0, #7EC0EE, #1E90FF, #87CEEB)"
            : "none",
        backgroundSize: "400% 400%",
        animation: `${fadeInOut} 12s ease infinite`,
      }}
    >
      <Typography
        fontFamily="'Homemade Apple', serif"
        textAlign="center"
        fontSize={30}
        my={4}
        color="primary"
      >
        Um pouco da nossa história... (Dica, vai cair na prova)
      </Typography>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="flex-start"
        flexDirection="row-reverse"
        gap={2}
      >
        <Box
          sx={{
            position: "sticky",
            alignSelf: "flex-start",
            top: "50px",
          }}
          width={400}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            component="img"
            src={`/assets/comp_${activeStep}.jpg`}
            width={300}
            height={500}
            borderRadius={5}
            sx={{ objectFit: "cover" }}
          />
          <Box sx={{ display: "flex", width: 280, mt: 1 }}>
            <Typography
              sx={{
                maxWidth: 250,
                color: activeStep == 12 ? "#EFBF04" : "primary.main",
                fontWeight: activeStep == 12 ? "500" : "400",
              }}
            >
              {steps[activeStep].compText}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: 280,
              justifyContent: "flex-end",
              mt: 1,
            }}
          >
            <Typography
              fontStyle="italic"
              color="primary"
              sx={{
                color: activeStep == 12 ? "#EFBF04" : "primary.main",
                fontWeight: activeStep == 12 ? "500" : "400",
              }}
            >
              {calcDate(steps[activeStep].compDate)}
            </Typography>
          </Box>
        </Box>
        <Box width={400}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step
                key={step.label}
                sx={{
                  "& .MuiStepIcon-text": { fill: "#fff" },
                  "& .MuiStepIcon-root.Mui-active": {
                    fontSize: activeStep == 12 ? 40 : 30,
                    color: activeStep == 12 ? "#EFBF04" : "primary.main",
                  },
                }}
              >
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-label.Mui-completed": {
                      color: "primary.main",
                      fontWeight: "500",
                    },
                    "& .MuiStepLabel-label": {
                      color: "primary.main",
                      fontWeight: "500",
                    },
                    "& .MuiStepLabel-label.Mui-active": {
                      color: activeStep == 12 ? "#EFBF04" : "primary.main",
                      fontWeight: activeStep == 12 ? 1000 : 600,
                      fontSize: activeStep == 12 ? "1.5rem" : "1rem",
                    },
                  }}
                  optional={
                    index === steps.length - 1 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  {step.description.map((description, idx) => {
                    return (
                      <Box key={idx}>
                        {description && (
                          <Typography style={{ whiteSpace: "pre-line" }}>
                            {description}
                          </Typography>
                        )}
                        {step?.images[idx] && (
                          <Box
                            my={1}
                            component="img"
                            src={`/assets/${step?.images[idx]}`}
                            width={300}
                            borderRadius={5}
                          />
                        )}
                      </Box>
                    );
                  })}
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        mt: 1,
                        mr: 1,
                        color: "#fff",
                        fontWeight: activeStep == 12 ? "bold" : "500",
                        bgcolor: activeStep == 12 ? "#EFBF04" : "primary.main",
                      }}
                    >
                      {index === steps.length - 1 ? "Finalizar" : "Continuar"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Voltar
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
    </Box>
  );
}

export default Historia;
