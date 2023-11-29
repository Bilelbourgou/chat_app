import { useState } from "react";
import "./App.css";

import AuthPage from "./components/AuthPage.jsx";
import ChatsPage from "./components/ChatsPage.jsx";

function App() {
  const [user, setUser] = useState(undefined);
  console.log(user);
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;