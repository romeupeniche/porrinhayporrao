import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

function Pergunta({ index, title, options, correctAns, handleIsCorrect }) {
  const handleChange = (e) => {
    const value = e.target.value;
    handleIsCorrect(index, title, value, correctAns, value == correctAns);
  };

  return (
    <Box mt={2}>
      <FormControl>
        <FormLabel>{`${index + 1}. ${title}`}</FormLabel>
        <RadioGroup>
          {options.map((name, idx) => (
            <FormControlLabel
              key={name}
              value={name}
              control={<Radio onChange={handleChange} />}
              label={
                <Typography display="flex" gap={1}>
                  <Typography component="span" fontWeight="500">
                    {String.fromCharCode(97 + idx)})
                  </Typography>
                  <Typography component="span">{name}</Typography>
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default Pergunta;

Pergunta.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAns: PropTypes.string.isRequired,
  handleIsCorrect: PropTypes.func.isRequired,
};
