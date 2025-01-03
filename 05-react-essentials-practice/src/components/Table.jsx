import { calculateInvestmentResults, formatter } from "../util/investment";

function convertToNumbers(object) {
    let updatedObject = Object.keys(object).reduce((acc, key) => {
        acc[key] = Number(object[key]);
        return acc;
    }, {});

    return updatedObject
}

function checkIfNumbersHave4Values(numbers) {
    for (const key in numbers) {
        if (numbers[key] === '') {
            return false
        }
    }
    return true
}

export default function Table({ numbers }) {
    const formattedNumbers = convertToNumbers(numbers);
    const calculatedResults = calculateInvestmentResults(formattedNumbers);
    console.log(calculatedResults)


    let totalInterest = 0;

    let calculatedTable = null;

    if (checkIfNumbersHave4Values(numbers)) {
        calculatedTable = (<tbody >
            {
                calculatedResults.map((data, index) => (
                    <tr key={index}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalInterest += data.interest)}</td>
                        <td>{formatter.format(formattedNumbers.initialInvestment += data.annualInvestment)}</td>
                    </tr>
                ))
            }
        </tbody>);
    }

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (YEAR)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            {calculatedTable}
        </table>
    );
}