import React, { useState } from "react";
import { AppBar, Box, Grid, Toolbar, Typography } from "@material-ui/core";

import EquationBar from "./components/EquationBar";
import Sheet from "./components/Sheet";
import "./App.css";

function App() {
    const handleSubmit = ({ equations }) => {
        setEquations(equations);
    };
    const [equations, setEquations] = useState([]);
    console.log(equations);

    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-12 p-2 flex items-center shadow-md">
                <div className="text-medium font-bold">Musical Math</div>
            </div>

            <div className="w-full h-full flex flex-row">
                <div className="w-1/3 border-r-2 p-2">
                    <EquationBar handleSubmit={(data) => handleSubmit(data)} />
                </div>
                <div className="w-2/3 p-2">
                    <Sheet />
                </div>
            </div>
        </div>
    );
}

export default App;
