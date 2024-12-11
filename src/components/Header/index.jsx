import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router";

const pages = ["Início", "Historia", "Prova"];

function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {pages.map((page) => (
              <Button
                component={RouterLink}
                to={page == "Início" ? "/" : page.toLowerCase()}
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "1rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
