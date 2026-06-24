import { useState } from "react";

function App() {
  const [handle, setHandle] = useState("");

  return (
    <div style={{ padding: "40px" }}>
      <h1>CodeLens</h1>

      <input
        type="text"
        placeholder="Enter Codeforces Handle"
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
      />

      <button>
        Search
      </button>
    </div>
  );
}
export default App;