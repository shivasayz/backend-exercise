import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [greetMessage, setGreetMessage] = useState("");
  const [formData, setformData] = useState({
    email: "",
    name: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.name.trim()) {
      alert("Please fill in all fields");
      return;
    }

    console.log(formData);
  };

  return (
    <>
      <h1>Hello, {welcomeMessage}</h1>
      <button onClick={handleClick}>Click to respond</button>
      {greetMessage && <h3>Greet Message: {greetMessage}</h3>}

      <br />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-10">
          <div className="mt-4">
            <input
              type="email"
              name="email"
              className="bg-white pt-2 pb-2 px-4 rounded-xl text-2xl text-blue-600 font-sans"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <input
              type="name"
              name="name"
              className="bg-white pt-2 pb-2 px-4 rounded-xl text-2xl text-blue-600 font-sans"
              placeholder="enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button className="text-shadow-violet-50">Submit</button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-2xl text-green-400">Successfully Submitted!</p>
        </div>
      </form>
    </>
  );
}

export default App;
