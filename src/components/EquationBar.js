import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

import Expr from "../internal/Expr";
import EquationBox from "./EquationBox";
import newIcon from "../assets/add.png";
import updateIcon from "../assets/update.png";

function EquationBar({ handleSubmit }) {
    const {
        control,
        register,
        handleSubmit: wrapSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {},
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "equations",
    });

    const demos = [
        {
            name: "I",
            equations: [
                {
                    str: "0",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 8,
                    whiteonly: true,
                },
                {
                    str: "2 + t%2",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 8,
                    whiteonly: true,
                },
                {
                    str: "-3",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 8,
                    whiteonly: true,
                },
                {
                    str: "(2*t)%8",
                    start: "0",
                    end: "16",
                    step: "1",
                    duration: 2,
                    startBeat: 32,
                    whiteonly: true,
                },
                {
                    str: "t^2 %8",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 64,
                    whiteonly: true,
                },
                {
                    str: "t^3 %8",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 96,
                    whiteonly: true,
                },
                {
                    str: "(t^2 + 1) %8",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 128,
                    whiteonly: true,
                },
                {
                    str: "(t^3 + 1) %8",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 160,
                    whiteonly: true,
                },
                {
                    str: "(t^5) %8",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 192,
                    whiteonly: true,
                },
                {
                    str: "(t^5 + 1) %8",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 224,
                    whiteonly: true,
                },
                {
                    str: "t^2 %8",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 256,
                    whiteonly: true,
                },
                {
                    str: "t^3 %8",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 256,
                    whiteonly: true,
                },
            ],
        },
        {
            name: "II",
            equations: [
                {
                    str: "6 + sin(t * pi/2)",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 8,
                    startBeat: 0,
                    whiteonly: true,
                },
                {
                    str: "2",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 8,
                    startBeat: 0,
                    whiteonly: true,
                },
                {
                    str: "-3 + sin(t * pi/2)",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 8,
                    startBeat: 0,
                    whiteonly: true,
                },
                {
                    str: "(t^2 + t)%8",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 32,
                    whiteonly: true,
                },
                {
                    str: "(t^3 + 2*t) % 16",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 64,
                    whiteonly: true,
                },
                {
                    str: "(t^2) % 8",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 96,
                    whiteonly: true,
                },
                {
                    str: "(t^5 + 4*t^3) % 10",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 128,
                    whiteonly: true,
                },
                {
                    str: "(4*sin(t * pi/2) + t^2) % 11",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 160,
                    whiteonly: true,
                },
                {
                    str: "(7*t^2) % 13",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 192,
                    whiteonly: true,
                },
                {
                    str: "(3*t^3) % 14",
                    start: "0",
                    end: "32",
                    step: "1",
                    duration: 1,
                    startBeat: 224,
                    whiteonly: true,
                },
            ],
        },
    ];

    const items = fields.map((eq, idx) => {
        const num = idx + 1;
        const name = `equations.${idx}`;

        return (
            <EquationBox
                key={num}
                label={num}
                registerEqu={() =>
                    register(`${name}.str`, {
                        required: "A valid equation is required!",
                    })
                }
                registerStart={() =>
                    register(`${name}.start`, {
                        required: "Start is required!",
                    })
                }
                registerEnd={() =>
                    register(`${name}.end`, {
                        required: "End is required!",
                        validate: (val) => {
                            const { equations } = getValues();
                            const start = equations[idx].start;
                            return (
                                new Expr(val).eval() > new Expr(start).eval() ||
                                "End must be greater than start!"
                            );
                        },
                    })
                }
                registerStep={() =>
                    register(`${name}.step`, {
                        required: "Step is required!",
                        validate: (val) =>
                            new Expr(val).eval() > 0 ||
                            "Step must be greater than 0",
                    })
                }
                registerStartBeat={() =>
                    register(`${name}.startBeat`, {
                        required: true,
                        setValueAs: (val) => parseInt(val),
                    })
                }
                registerDuration={() =>
                    register(`${name}.duration`, {
                        required: true,
                        setValueAs: (val) => parseInt(val),
                    })
                }
                registerWhiteOnly={() => register(`${name}.whiteonly`)}
                remove={() => remove(idx)}
            />
        );
    });

    return (
        <div className="w-full">
            <form onSubmit={wrapSubmit(handleSubmit)}>
                <div className="w-full flex flex-row">
                    <div className="w-1/2 text-lg font-bold flex flex-start">
                        Equations
                    </div>
                    <div className="w-1/2 flex flex-row justify-end gap-2">
                        <DemoButtons demos={demos} setValue={setValue} />
                        <button
                            type="button"
                            onClick={() => append({ str: "" })}
                            className="bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md"
                        >
                            <img src={newIcon} alt="+" className="w-4 h-4" />
                        </button>
                        <button
                            type="submit"
                            className="bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md"
                        >
                            <img
                                src={updateIcon}
                                alt="Update"
                                className="w-4 h-4"
                            />
                        </button>
                    </div>
                </div>

                <div className="py-2" />
                {items}
            </form>
        </div>
    );
}

function DemoButtons({ demos, setValue }) {
    const buttons = demos.map(({ name, equations }, i) => {
        const useDemo = () => {
            setValue("equations", equations);
        };

        return (
            <button
                key={i}
                type="button"
                className="text-xs bg-gray-200 text-black-500 opacity-60 hover:opacity-100 px-2 py-2 rounded-md"
                onClick={() => useDemo()}
            >
                D-{name}
            </button>
        );
    });
    return <>{buttons}</>;
}

export default EquationBar;
