import { useState } from 'react';

function InvestmentCalculator() {

    // A = P * (1 + r/n)^(n*t)
    // A = the future value of the investment/loan, including interest
    // P = the principal investment amount (the initial deposit or loan amount)
    // r = the annual interest rate (decimal)
    // n = the number of times that interest is compounded per year
    // t = the time the money is invested/borrowed for, in years
    // M = P * ((1 + r/n)^(n*t) - 1) / (r/n)

    // let t = 0, r = 0, n = 0, P = 0, M = 0;
    // let A = P * Math.pow(1 + r/n, n*t) + M * ((Math.pow(1 + r/n, n*t) - 1) / (r/n));

    const [t, sett] = useState(0);
    const [r, setr] = useState(0);
    const [n, setn] = useState(1);
    const [P, setP] = useState(0);
    const [M, setM] = useState(0);
    // const [A, setA] = useState(P * Math.pow(1 + r/n, n*t) + M * ((Math.pow(1 + r/n, n*t) - 1) / (r/n)));
    const [A, setA] = useState(0);

    console.log(A);

    return <div id="bodyWrapper">
        <div id="calculator">
            <div className="title">
                <h3>Step 1: Intial Investments</h3>
            </div>
            <div className="inputs">
                <label>Initial Investment:</label>
                <input type="number" id="initialInvestment" placeholder={P} onChange={e => setP(e.target.value)} />
                <p> This is the amount of money you are starting with.</p>
            </div>
            <div className="title">
                <h3>Step 2: Contribute</h3>
            </div>
            <div className="inputs">
                <label>Monthly Investment:</label>
                <input type="number" id="monthlyInvestment" placeholder={M} onChange={e => setM(e.target.value)} />
                <p> This is the amount of money you will invest each month.</p>
            </div>
            <div className="inputs">
                <label>Years:</label>
                <input type="number" id="years" placeholder={t} onChange={e => sett(e.target.value)} />
                <p> This is the number of years you will invest.</p>
            </div>
            <div className="title">
                <h3>Step 3: Interest Rate</h3>
            </div>
            <div className="inputs">
                <label>Interest Rate:</label>
                <input type="number" id="interestRate" placeholder={r} onChange={e => setr(e.target.value/100)} />
                <p> This is the annual interest rate you expect to earn on your investments.</p>
            </div>
            <div className="inputs">
                <label> Interest rate variance range </label>
                <p> This is the annual interest rate you expect to earn on your investments.</p>
            </div>
            <div className="title">
                <h3>Step 4: Compound It</h3>
            </div>
            <div className="inputs">
                <label>Compound Frequency:</label>
                <input type="number" id="compoundFrequency" placeholder={n} onChange={e => setn(e.target.value)} />
                <p> This is the number of times that interest is compounded per year.</p>
            </div>
            <div className="inputs">
                <button onClick={() => setA(P * Math.pow(1 + r/n, n*t) + M * ((Math.pow(1 + r/n, n*t) - 1) / (r/n)))}>Calculate</button>
            </div>
            <div className="title">
                <h3>Results</h3>
            </div>
            <div>
                <label>Future Value: ${A.toFixed(2)}</label>
                <p> This is the amount of money you will have after {t} years.</p>
            </div>
        </div>
    </div>
}

export default InvestmentCalculator;
