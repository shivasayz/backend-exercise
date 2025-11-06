import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [greetMessage, setGreetMessage] = useState("");

  const handleClick = async () => {
    const res = await axios.get("http://localhost:3000/greet");
    const res2 = await axios.get("http://localhost:3000/suprise");
    console.log("SUPRISE MESSAGE ", res2);
    console.log("res", res);
    setGreetMessage(res.data.message);
  };

  useEffect(() => {
    axios
      .get("/api")
      .then((response) => setWelcomeMessage(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <h1>Hello, {welcomeMessage}</h1>
      <button onClick={handleClick}>Click to respond</button>
      {greetMessage && <h3>Greet Message: {greetMessage}</h3>}
    </>
  );
}

export default App;
