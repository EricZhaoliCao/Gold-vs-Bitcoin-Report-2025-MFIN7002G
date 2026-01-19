export function RegressionTable1() {
  return (
    <div className="w-full overflow-x-auto my-8">
      <table className="w-full border-collapse text-sm">
        <caption className="text-left text-gray-900 font-serif font-bold text-base mb-4 caption-top">
          Table 1: ARX Model Results – Macroeconomic Sensitivity (Hypothesis 1)
        </caption>
        <thead>
          <tr>
            <th className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-left font-semibold text-gray-900">Variables</th>
            <th className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-center font-semibold text-gray-900">Bitcoin Returns</th>
            <th className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-center font-semibold text-gray-900">Gold Returns</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">S&P 500 Return</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.8623***</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.0064</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0603)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0128)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">USD Index Return</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.4953***</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.9310***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.1643)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0349)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Federal Funds Rate Change</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-1.6587</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-1.7045***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(2.3179)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.4923)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Lagged Own Return</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.0242</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.0400***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0161)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0151)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Constant</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.0012**</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.0004***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0006)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0001)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Observations</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">3,649</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">3,649</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">R-squared</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.0598</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.1742</td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-600 mt-2">Standard errors in parentheses. *** p&lt;0.01, ** p&lt;0.05, * p&lt;0.1</p>
    </div>
  );
}

export function RegressionTable2Original() {
  return (
    <div className="w-full overflow-x-auto my-8">
      <table className="w-full border-collapse text-sm">
        <caption className="text-left text-gray-900 font-serif font-bold text-base mb-4 caption-top">
          Table 2A: EGARCH(1,1)-X Model Results – Bitcoin (2011–2015, N=1,768)
        </caption>
        <thead>
          <tr>
            <th className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-left font-semibold text-gray-900">Variables</th>
            <th className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-center font-semibold text-gray-900">Mean Equation</th>
            <th className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-center font-semibold text-gray-900">Variance Equation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Fed Funds Rate (t−1)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.0988***</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.978***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0338)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.230)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">USD–EUR FX (t−1)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.0505***</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">1.813***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0181)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.191)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">USD–GBP FX (t−1)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.0844***</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-1.914***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0300)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.287)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">FTSE Index (t−1)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">9.21e-06**</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.000120***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(3.66e-06)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(2.88e-05)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Gold Futures (t−1)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.000160</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.00727***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.000162)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.00209)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Gold Spot (t−1)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.000143</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.00685***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.000163)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.00211)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">AR(1)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.100***</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">—</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0297)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono"></td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Shock Magnitude (α)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">—</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.00776</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0154)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Asymmetry (γ)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">—</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.545***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0252)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Persistence (β)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">—</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.834***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.00982)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Constant</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.0233</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">1.203***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0442)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.310)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Observations</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">1,768</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">1,768</td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-600 mt-2">Standard errors in parentheses. *** p&lt;0.01, ** p&lt;0.05, * p&lt;0.1</p>
    </div>
  );
}

export function RegressionTable2Recent() {
  return (
    <div className="w-full overflow-x-auto my-8">
      <table className="w-full border-collapse text-sm">
        <caption className="text-left text-gray-900 font-serif font-bold text-base mb-4 caption-top">
          Table 2B: EGARCH(1,1)-X Model Results – Bitcoin & Gold (2015–2025, N=3,649)
        </caption>
        <thead>
          <tr>
            <th className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-left font-semibold text-gray-900">Variables</th>
            <th className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-center font-semibold text-gray-900">Bitcoin</th>
            <th className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-center font-semibold text-gray-900">Gold</th>
          </tr>
        </thead>
        <tbody>
          <tr className="font-semibold bg-gray-50">
            <td colSpan={3} className="border-b border-gray-300 px-4 py-2 text-gray-900">Mean Equation</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">S&P 500 Return</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.8534***</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.0481**</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.1189)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0221)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">USD Index Return</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.4817**</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.9741***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.2022)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0488)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Federal Funds Rate Change</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-1.8310</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-1.3486**</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(3.1992)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.6165)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Lagged Own Return</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.0257</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.0505***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0238)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0169)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Constant</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.0012*</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.0004***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0006)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0001)</td>
          </tr>
          <tr className="font-semibold bg-gray-50">
            <td colSpan={3} className="border-b border-gray-300 px-4 py-2 text-gray-900">Variance Equation</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Shock Magnitude (α)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.0032</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.0477***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0057)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0127)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Asymmetry (γ)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.0028</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.1003***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0036)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0259)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Persistence (β)</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.9995***</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">0.9854***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0011)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0051)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Constant</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-13.5370***</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">-0.1292***</td>
          </tr>
          <tr>
            <td className="px-4 py-1 text-gray-600 text-xs"></td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.1218)</td>
            <td className="px-4 py-1 text-center text-gray-600 text-xs font-mono">(0.0485)</td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 text-gray-900">Observations</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">3,649</td>
            <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-900 font-mono">3,649</td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-600 mt-2">Standard errors in parentheses. *** p&lt;0.01, ** p&lt;0.05, * p&lt;0.1</p>
    </div>
  );
}

// Keep the original RegressionTable2 for backward compatibility, but it now shows the recent data
export function RegressionTable2() {
  return <RegressionTable2Recent />;
}
