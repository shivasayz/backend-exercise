import express from "express";
const app = express();
import cors from "cors";
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send("Welcome to the backend");
});

app.get("/greet", (req, res) => {
  res.json({ message: "Click responed from backend server..." });
});

app.get("/suprise", (req, res) => {
  res.json({ message: "happy birthday yet", from: "SR!" });
});

// POST API
app.post("/formDetails", (req, res) => {
  console.log(req.body);
  const { email, name } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "invalid email" });
  }

  if (!name || typeof name !== "string") {
    return res
      .status(400)
      .json({ status: "failed", error: "name must be string" });
  }

  res.status(200).json({
    status: "success",
    message: "details submitted successfully",
    data: req.body,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
