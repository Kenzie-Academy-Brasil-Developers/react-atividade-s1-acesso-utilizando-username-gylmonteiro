import { useState } from "react";
import "./App.css";
import WecolmePage from "./components/WelcomePage";
import GetUserComponent from "./components/GetUserComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  console.log(isLoggedIn);
  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <WecolmePage user={user} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        )}
      </header>
    </div>
  );
}

export default App;
