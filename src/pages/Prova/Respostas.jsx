import { Grid2, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Respostas({ correctAnswers, wrongAnswers }) {
  return (
    <>
      <Typography my={2} variant="h4" color="success">
        Respostas certas ({correctAnswers.length})
      </Typography>
      <Grid2 container spacing={2} justifyContent="center">
        {correctAnswers.map((obj) => {
          return (
            <Grid2 key={`${obj.index}_${obj.title}_correct`} width={400}>
              <Typography>
                {obj.index + 1}. {obj.title}
              </Typography>
              <Typography ml={4} color="success">
                {obj.correctAns}
              </Typography>
            </Grid2>
          );
        })}
      </Grid2>
      <Typography my={2} variant="h4" color="error">
        Respostas erradas ({wrongAnswers.length})
      </Typography>
      <Grid2 container spacing={2} justifyContent="center">
        {wrongAnswers.map((obj) => {
          return (
            <Grid2 key={`${obj.index}_${obj.title}_wrong`} width={400}>
              <Typography>
                {obj.index + 1}. {obj.title}
              </Typography>
              <Typography
                ml={4}
                color="error"
                sx={{ textDecoration: "line-through" }}
              >
                {obj.enteredValue}
              </Typography>
              <Typography ml={4} color="success">
                {obj.correctAns}
              </Typography>
            </Grid2>
          );
        })}
      </Grid2>
    </>
  );
}

export default Respostas;

Respostas.propTypes = {
  correctAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
  wrongAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
