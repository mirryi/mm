import React, { useState } from "react";

import MathFunction from "./internal/MathFunction";
import EquationBar from "./components/EquationBar";
import Rhs from "./components/Rhs";
import "./App.css";

function App() {
    const [notes, setNotes] = useState([]);
    const handleSubmit = async ({ equations }) => {
        const mfs = equations.map((eq) => ({
            mf: new MathFunction(eq.str, eq.start, eq.end, eq.step),
            startBeat: eq.startBeat,
            duration: eq.duration,
            whiteonly: eq.whiteonly || eq.whiteonly === "false",
        }));
        const notes = mfs.flatMap(({ mf, startBeat, duration, whiteonly }) => {
            const notes = mf.notes(startBeat, duration, whiteonly);
            return notes;
        });
        setNotes(notes);
    };

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
                    <Rhs notes={notes} />
                </div>
            </div>
        </div>
    );
}

export default App;
