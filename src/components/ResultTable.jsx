import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ input }) {
    const resultTable = calculateInvestmentResults(input);
    const initialInvestment = resultTable[0].valueEndOfYear - resultTable[0].interest - resultTable[0].annualInvestment;
    const totalAmountInvested = resultTable[0].valueEndOfYear - initialInvestment;

    console.log(resultTable);

    return (
        <>
            <div id="result">
                <table className="tableData">
                    <thead>
                        <tr className="center">
                            <th>Year</th>
                            <th>Investment Value</th>
                            <th>Intrest (Year)</th>
                            <th>Total Intrest</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultTable.map((items) => {
                            const totalInterest = items.valueEndOfYear - items.annualInvestment * items.year;
                            return (
                                <tr className="center" key={items.year}>
                                    <td>{items.year}</td>
                                    <td>{formatter.format(items.valueEndOfYear)}</td>
                                    <td>{formatter.format(items.interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}