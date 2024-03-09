// import InputForm from "./InputForm";

export default function UserInput({ onUserInput, userValue }) {

    return(
        <>
            <div id="user-input">
                <div className="input-group">
                    <p>
                        <label htmlFor="initial-investment">Initial Investment</label>
                        <input id="initial-investment" type="number" value={userValue.initial_investment} onChange={(e) => {onUserInput('initial_investment', e.target.value)}} required />
                    </p>

                    <p>
                        <label htmlFor="annual-investment">Annual Investment</label>
                        <input id="annual-investment" type="number" value={userValue.annual_investment} onChange={(e) => {onUserInput('annual_investment', e.target.value)}} required />
                    </p>
                </div>

                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">Expected Return</label>
                        <input id="expected-return" type="number" value={userValue.expected_return} onChange={(e) => {onUserInput('expected_return', e.target.value)}} required />
                    </p>

                    <p>
                        <label htmlFor="duration">Duration</label>
                        <input id="duration" type="number" value={userValue.duration} onChange={(e) => {onUserInput('duration', e.target.value)}} required />
                    </p>
                </div>
            </div>
        </>
    );
}