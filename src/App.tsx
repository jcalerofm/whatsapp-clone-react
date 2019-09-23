import React from "react";
import ChatsList from './components/ChatsList';
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>

       <div>
        WhatsApp Clone
      </div>
      <ChatsList />
    </div>
  );
};

export default App;
