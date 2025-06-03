import React from "react";
import { useState, useEffect } from "react";

const Calculator = () => {

    const [data, setData] = useState("");

    const getValue = (e) => {
        setData((prev) => prev + e.target.value)
    }

    const calculation = () => {
        try {
            setData(eval(data).toString())
        } catch {
            setData("Error")
        }
    }

    const clear = () => {
        setData("")
    }

    const back = () => {
        setData(data.slice(0, -1))
    }

    const handleKeyDown = (e) => {
        const allowedKeys = "0123456789+-*/()%"

        if (allowedKeys.includes(e.key)) {
            setData((prev) => prev + e.key);
        } else if (e.key === "Enter") {
            calculation();
        } else if (e.key === "Backspace") {
            back();
        } else if (e.key === "Escape") {
            clear();
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [data]);

    const btnClass =
        "w-14 h-14 m-1.5 bg-gray-200 text-xl font-semibold rounded-lg hover:bg-gray-300 transition duration-150 ease-in-out cursor-pointer";

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                {/* Calculator Container */}
                <div className="w-80 bg-blue-600 p-6 border-none text-lg rounded-2xl">
                    {/* Input Display */}
                    <div className="mb-4">
                        <input onClick={handleKeyDown} value={data}
                            placeholder="0"
                            className="w-full p-2 text-right text-2xl rounded bg-white m-1.5"
                            readOnly
                        />
                    </div>

                    {/* Buttons Grid */}
                    <div className="grid grid-cols-4 gap-2 justify-items-center">
                        <button onClick={getValue} value="(" className={btnClass}>(</button>
                        <button onClick={getValue} value=")" className={btnClass}>)</button>
                        <button onClick={getValue} value="%" className={btnClass}>%</button>
                        <button onClick={clear} value="AC" className={btnClass}>AC</button>

                        <button onClick={getValue} value="7" className={btnClass}>7</button>
                        <button onClick={getValue} value="8" className={btnClass}>8</button>
                        <button onClick={getValue} value="9" className={btnClass}>9</button>
                        <button onClick={getValue} value="*" className={btnClass}>*</button>

                        <button onClick={getValue} value="4" className={btnClass}>4</button>
                        <button onClick={getValue} value="5" className={btnClass}>5</button>
                        <button onClick={getValue} value="6" className={btnClass}>6</button>
                        <button onClick={getValue} value="-" className={btnClass}>-</button>

                        <button onClick={getValue} value="1" className={btnClass}>1</button>
                        <button onClick={getValue} value="2" className={btnClass}>2</button>
                        <button onClick={getValue} value="3" className={btnClass}>3</button>
                        <button onClick={getValue} value="+" className={btnClass}>+</button>

                        <button onClick={getValue} value="0" className={btnClass}>0</button>
                        <button onClick={back} value="Back" className={btnClass}>Back</button>
                        <button onClick={calculation} value="=" className={btnClass}>=</button>
                        <button onClick={getValue} value="/" className={btnClass}>/</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calculator;
