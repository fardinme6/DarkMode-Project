import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="app">
      <video className={`background-video ${dark ? "hide" : "show"}`} src="/light.mp4" autoPlay muted loop></video>
      <video className={`background-video ${dark ? "show" : "hide"}`} src="/dark.mp4" autoPlay muted loop></video>
      <div className={`content ${dark ? "light-text" : "dark-text"}`}>
        <h2>Dark Mode Project</h2>
        <p>Please Click Below Button To Change Background</p>
        <label className="theme-toggle">
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
          />

        <div className="toggle">
          <div className="sun">☀</div>
          <div className="moon">🌙</div>
        </div>
        </label>
      </div>
    </div>
  );
}
