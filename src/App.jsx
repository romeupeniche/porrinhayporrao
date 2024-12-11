import { Box, Typography } from "@mui/material";
function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(assets/lulucabg.jpg)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <Typography
        mt={10}
        fontFamily='"Homemade Apple", serif'
        color="primary"
        fontSize={80}
      >
        Porrinha y Porrão
      </Typography>
      <Typography
        mt={6}
        color="primary"
        maxWidth={700}
        textAlign="center"
        fontWeight={500}
      >
        Feliz aniversário para minha gatinha, mulher que eu amo tanto, e que me
        faz tão feliz. Agradeço por te ter ao meu lado, uma pessoa tão pura, tão
        especial e tão perfeita. Eu te amo hoje, amanhã e para todo sempre. E
        para que isso no futuro, sirva como recordação para todos os momentos
        incríveis que passamos juntos, gostaria de juntá-los (com intuito também
        de te fazer chorar rsrs).
      </Typography>
      <Typography color="primary" fontWeight={500}>
        Espero que goste.
      </Typography>
    </Box>
  );
}

export default App;
