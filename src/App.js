// Packages
import React from "react";

// Styles
import "./App.css";

import CreateWorkflow from "./components/CreateWorkflow";

// The main React App component
const App = () => {
    return (
        <div className="app-container">
            <div className="navbar-container">
                <h1 id="logo">Adash</h1>
            </div>
            <CreateWorkflow />
        </div>
    );
};

export default App;