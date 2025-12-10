import { useEffect, useState } from "react";
function App() {
  const [msg, setMsg] = useState("Loading...");
  useEffect(() => {
    fetch("http://localhost:5001/")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Error connecting to server"));
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "24px" }}>
      <h1>SSL + Self-Signed + mkcert + HTTPS</h1>
      <p>{msg}</p>
    </div>
  );
}
export default App;