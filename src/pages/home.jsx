import "../App.css";
import User from "../assets/user.jpg";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const HomePage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        background: "#F3F2F2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Box
        sx={{
          background: "#F3F2F2",
          display: "flex",
          justifyContent: "center",
          borderRadius: "25px",
        }}
      >
        <img src={`${User}`} alt="User Image" className="user" />
      </Box>
      <Box>
        <Typography
          color="#212428"
          variant="subtitle1"
          gutterBottom
          align="center"
        >
          Contact list where you can customize and keep track of all your
          contacts. Want to get started?
        </Typography>
      </Box>

      <Box>
        <Button
          variant="contained"
          sx={{
            background: "#D0E4FF",
            color: "#212428",
            textTransform: "capitalize",
            fontWeight: "600",
          }}
        >
          Add Contact
        </Button>
      </Box>
    </Container>
  );
};
