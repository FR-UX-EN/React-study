import { useState } from "react";

export default function UserInput({ numbers, onChange }) {
    const [figures, setFigures] = useState(numbers);

    function handlechange(event) {
        setFigures(prevFigures => {
            return {
                ...prevFigures,
                [event.target.name]: event.target.value,
            }
        });

        onChange({
            ...figures,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <form id="user-input">
            <div className="input-group">
                <div>
                    <label>initial investment</label>
                    <input name="initialInvestment" type="number" value={figures.initialInvestment} onChange={handlechange} />
                </div>
                <div>
                    <label>annual investment</label>
                    <input name="annualInvestment" type="number" value={figures.annualInvestment} onChange={handlechange} />
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label>expected return</label>
                    <input name="expectedReturn" type="number" value={figures.expectedReturn} onChange={handlechange} />
                </div>
                <div>
                    <label>duration</label>
                    <input name="duration" type="number" value={figures.duration} onChange={handlechange} />
                </div>
            </div>
        </form>
    );
}
