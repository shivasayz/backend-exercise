import express from "express";
const app = express();
import cors from "cors";
app.use(cors());

app.get("/api", (req, res) => {
  res.send("Welcome to the backend");
});

app.get("/greet", (req, res) => {
  res.json({ message: "Click responed from backend server..." });
});

app.get("/suprise", (req, res) => {
  res.json({ message: "happy birthday yet", from: "SR!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
