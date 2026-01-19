import { useEffect, useState } from 'react';
import { Streamdown } from 'streamdown';
import { RegressionTable1, RegressionTable2Original, RegressionTable2Recent } from '@/components/RegressionTable';

export default function Home() {
  const [report, setReport] = useState<string>('');

  useEffect(() => {
    fetch('/report_content.md')
      .then(res => res.text())
      .then(text => setReport(text))
      .catch(err => console.error('Error loading report:', err));
  }, []);

    return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Sticky Header Bar */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white py-2 px-6 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-sm font-semibold">MFIN7002G - Group 2</p>
          <a 
            href="https://github.com/EricZhaoliCao" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            @EricZhaoliCao
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-gray-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <h1 className="text-6xl font-serif font-bold text-gray-900 mb-3 leading-tight">
            Gold vs. Bitcoin
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Comparative Analysis of Macroeconomic Sensitivity and Volatility Dynamics
          </p>
          <p className="text-lg text-gray-600 font-light">
            2025-MFIN7002G-Group2
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-20">
          <div className="prose prose-lg max-w-none">
            <style>{`
              .prose h2 {
                font-family: Georgia, serif;
                font-size: 1.875rem;
                font-weight: 700;
                color: rgb(17, 24, 39);
                margin-top: 2rem;
                margin-bottom: 1rem;
                letter-spacing: -0.01em;
                border-bottom: 1px solid rgb(229, 231, 235);
                padding-bottom: 0.75rem;
              }
              .prose h3 {
                font-family: Georgia, serif;
                font-size: 1.375rem;
                font-weight: 700;
                color: rgb(17, 24, 39);
                margin-top: 1.75rem;
                margin-bottom: 0.875rem;
              }
              .prose p {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                font-size: 1rem;
                line-height: 1.75;
                color: rgb(55, 65, 81);
                margin-bottom: 1.25rem;
                font-weight: 400;
              }
              .prose table {
                border-collapse: collapse;
                width: 100%;
                margin: 1.75rem 0;
                border: 1px solid rgb(229, 231, 235);
                background-color: rgb(249, 250, 251);
              }
              .prose table th {
                background-color: rgb(243, 244, 246);
                color: rgb(17, 24, 39);
                font-weight: 600;
                padding: 0.875rem;
                text-align: left;
                border-bottom: 2px solid rgb(209, 213, 219);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                font-size: 0.9375rem;
              }
              .prose table td {
                padding: 0.75rem 0.875rem;
                border-bottom: 1px solid rgb(229, 231, 235);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                font-size: 0.9375rem;
              }
              .prose table tr:last-child td {
                border-bottom: none;
              }
              .prose strong {
                color: rgb(17, 24, 39);
                font-weight: 600;
              }
            `}</style>
            {report ? (
              <Streamdown>{report.split('---')[0] + '---'}</Streamdown>
            ) : (
              <div className="flex items-center justify-center py-12">
                <p className="text-gray-500">Loading analysis...</p>
              </div>
            )}
          </div>
        </section>

        {/* HYPOTHESIS 1 SECTION */}
        <section className="mt-24 pt-20 border-t border-gray-200">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-16">
            Hypothesis 1: Macroeconomic Sensitivity
          </h2>

          {/* H1 Analysis Figures */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-10">Analysis Figures</h3>

            {/* Asset Performance */}
            <div className="mb-16">
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-8">Asset Performance</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <figure>
                  <img src="/images/cumulative_returns.png" alt="Cumulative Returns" className="w-full rounded-sm border border-gray-200" />
                  <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Bitcoin demonstrates substantially higher cumulative returns compared to Gold and traditional assets over the analysis period.</figcaption>
                </figure>
                <figure>
                  <img src="/images/risk_return.png" alt="Risk-Return Profile" className="w-full rounded-sm border border-gray-200" />
                  <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Bitcoin exhibits significantly higher volatility and returns, positioning it as a speculative asset distinct from Gold's conservative profile.</figcaption>
                </figure>
              </div>
            </div>

            {/* Return Characteristics */}
            <div className="mb-16">
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-8">Return Characteristics</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <figure>
                  <img src="/images/returns_distribution.png" alt="Returns Distribution" className="w-full rounded-sm border border-gray-200" />
                  <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Bitcoin's return distribution exhibits heavy tails and extreme values, indicating non-normal risk characteristics fundamentally different from Gold.</figcaption>
                </figure>
              </div>
            </div>

            {/* Correlation Analysis */}
            <div className="mb-16">
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-8">Correlation Structure</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <figure>
                  <img src="/images/correlation_heatmap.png" alt="Correlation Heatmap" className="w-full rounded-sm border border-gray-200" />
                  <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Correlation matrix demonstrates Bitcoin's moderate positive correlation with equities and near-zero correlation with Gold.</figcaption>
                </figure>
                <figure>
                  <img src="/images/rolling_correlation_btc_gold.png" alt="Rolling Correlation" className="w-full rounded-sm border border-gray-200" />
                  <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Rolling correlation between Bitcoin and Gold fluctuates around zero, providing consistent diversification benefits across market regimes.</figcaption>
                </figure>
              </div>
            </div>

            {/* Correlation Comparison */}
            <div className="mb-16">
              <figure className="max-w-3xl">
                <img src="/images/correlation_comparison_bars.png" alt="Correlation Comparison" className="w-full rounded-sm border border-gray-200" />
                <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Bitcoin-Gold correlation ranks among the lowest across all asset pairs, confirming their complementary portfolio roles.</figcaption>
              </figure>
            </div>

            {/* Time Series */}
            <div className="mb-16">
              <figure className="max-w-3xl">
                <img src="/images/rq1_returns_timeseries.png" alt="Returns Time Series" className="w-full rounded-sm border border-gray-200" />
                <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Time series visualization of Bitcoin and Gold returns used in ARX regression analysis for Hypothesis 1.</figcaption>
              </figure>
            </div>
          </div>

          {/* H1 Regression Results */}
          <div className="mt-20 pt-20 border-t border-gray-200">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-10">Regression Results</h3>
            <RegressionTable1 />

            <div className="my-12 prose prose-lg max-w-none">
              <style>{`
                .prose h3 {
                  font-family: Georgia, serif;
                  font-size: 1.375rem;
                  font-weight: 700;
                  color: rgb(17, 24, 39);
                  margin-top: 1.75rem;
                  margin-bottom: 0.875rem;
                }
                .prose p {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                  font-size: 1rem;
                  line-height: 1.75;
                  color: rgb(55, 65, 81);
                  margin-bottom: 1.25rem;
                  font-weight: 400;
                }
                .prose strong {
                  color: rgb(17, 24, 39);
                  font-weight: 600;
                }
              `}</style>
              {report && (
                <Streamdown>{report.split('Hypothesis 2:')[0].split('### Interpretation')[1]}</Streamdown>
              )}
            </div>
          </div>
        </section>

        {/* HYPOTHESIS 2 SECTION */}
        <section className="mt-24 pt-20 border-t border-gray-200">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-16">
            Hypothesis 2: Volatility Asymmetry
          </h2>

          {/* H2 Analysis Figures */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-10">Analysis Figures</h3>

            {/* Volatility Analysis */}
            <div className="mb-16">
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-8">Volatility Dynamics</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <figure>
                  <img src="/images/rolling_volatility.png" alt="Rolling Volatility" className="w-full rounded-sm border border-gray-200" />
                  <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Bitcoin's rolling volatility consistently exceeds Gold's, with extreme spikes during market stress periods.</figcaption>
                </figure>
                <figure>
                  <img src="/images/volatility_comparison.png" alt="Volatility Comparison" className="w-full rounded-sm border border-gray-200" />
                  <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Direct volatility comparison confirms Bitcoin's extreme risk profile relative to Gold's stable volatility structure.</figcaption>
                </figure>
              </div>
            </div>

            {/* Drawdown Analysis */}
            <div className="mb-16">
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-8">Drawdown Risk</h4>
              <figure className="max-w-3xl">
                <img src="/images/drawdowns.png" alt="Drawdowns" className="w-full rounded-sm border border-gray-200" />
                <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Bitcoin experiences significantly deeper and more frequent drawdowns, with maximum declines exceeding 70% compared to Gold's modest drawdowns.</figcaption>
              </figure>
            </div>

            {/* EGARCH Volatility */}
            <div className="mb-16">
              <figure className="max-w-3xl">
                <img src="/images/rq3_egarch_volatility.png" alt="EGARCH Volatility" className="w-full rounded-sm border border-gray-200" />
                <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Conditional volatility estimates from EGARCH model demonstrate distinct volatility persistence patterns between Bitcoin and Gold.</figcaption>
              </figure>
            </div>
          </div>

                    {/* H2 Regression Results */}
                    <div className="mt-20 pt-20 border-t border-gray-200">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-10">Regression Results</h3>
            
            {/* Original Study (2011-2015) */}
            <div className="mb-16">
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-8">Original Study Period (2011–2015)</h4>
              <RegressionTable2Original />
            </div>

            {/* Recent Study (2015-2025) */}
            <div className="mb-16">
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-8">Recent Study Period (2015–2025)</h4>
              <RegressionTable2Recent />
            </div>

            <div className="my-12 prose prose-lg max-w-none">
              <style>{`
                .prose h3 {
                  font-family: Georgia, serif;
                  font-size: 1.375rem;
                  font-weight: 700;
                  color: rgb(17, 24, 39);
                  margin-top: 1.75rem;
                  margin-bottom: 0.875rem;
                }
                .prose p {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                  font-size: 1rem;
                  line-height: 1.75;
                  color: rgb(55, 65, 81);
                  margin-bottom: 1.25rem;
                  font-weight: 400;
                }
                .prose strong {
                  color: rgb(17, 24, 39);
                  font-weight: 600;
                }
              `}</style>
              {report && (
                <Streamdown>{report.split('Hypothesis 2:')[1].split('Portfolio Implications')[0]}</Streamdown>
              )}
            </div>
          </div>
        </section>

        {/* PORTFOLIO ANALYSIS SECTION */}
        <section className="mt-24 pt-20 border-t border-gray-200">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-16">
            Portfolio Analysis
          </h2>

          {/* Multi-Asset Portfolio Analysis */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-10">Multi-Asset Portfolio Analysis</h3>
            
            {/* Portfolio Simulation - 3 Assets */}
            <div className="mb-16">
              <figure className="max-w-3xl">
                <img src="/images/portfolio_simulation_dual.png" alt="Portfolio Simulation" className="w-full rounded-sm border border-gray-200" />
                <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Portfolio simulation results demonstrate the risk-return optimization benefits of combining Bitcoin and Gold.</figcaption>
              </figure>
            </div>

            {/* Nine-Asset Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <figure>
                <img src="/images/cumulative_returns_nineasset.png" alt="Nine-Asset Cumulative Returns" className="w-full rounded-sm border border-gray-200" />
                <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Nine-asset portfolio demonstrates improved stability through diversification compared to individual assets.</figcaption>
              </figure>
              <figure>
                <img src="/images/efficient_frontier_nine_asset.png" alt="Efficient Frontier" className="w-full rounded-sm border border-gray-200" />
                <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Efficient frontier shifts upward when Bitcoin and Gold are included, quantifying the diversification premium.</figcaption>
              </figure>
            </div>

            {/* Nine-Asset Correlation */}
            <div className="mt-16">
              <figure className="max-w-3xl">
                <img src="/images/correlation_heatmap_nineasset.png" alt="Nine-Asset Correlation" className="w-full rounded-sm border border-gray-200" />
                <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Extended correlation matrix reveals complex interdependencies among multiple asset classes, confirming Bitcoin and Gold's distinct roles.</figcaption>
              </figure>
            </div>

            {/* Yearly Returns Heatmap */}
            <div className="mt-16">
              <figure className="max-w-3xl">
                <img src="/images/yearly_returns_heatmap_nineasset.png" alt="Yearly Returns Heatmap" className="w-full rounded-sm border border-gray-200" />
                <figcaption className="text-gray-600 text-sm mt-4 leading-relaxed">Annual returns heatmap across nine assets reveals performance variation and diversification benefits across different time periods.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* FINAL ANALYSIS SECTION */}
        <section className="mt-24 pt-20 border-t border-gray-200">
          <div className="prose prose-lg max-w-none">
            <style>{`
              .prose h2 {
                font-family: Georgia, serif;
                font-size: 1.875rem;
                font-weight: 700;
                color: rgb(17, 24, 39);
                margin-top: 2rem;
                margin-bottom: 1rem;
                letter-spacing: -0.01em;
                border-bottom: 1px solid rgb(229, 231, 235);
                padding-bottom: 0.75rem;
              }
              .prose h3 {
                font-family: Georgia, serif;
                font-size: 1.375rem;
                font-weight: 700;
                color: rgb(17, 24, 39);
                margin-top: 1.75rem;
                margin-bottom: 0.875rem;
              }
              .prose p {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                font-size: 1rem;
                line-height: 1.75;
                color: rgb(55, 65, 81);
                margin-bottom: 1.25rem;
                font-weight: 400;
              }
              .prose strong {
                color: rgb(17, 24, 39);
                font-weight: 600;
              }
            `}</style>
            {report && (
              <Streamdown>{report.split('Portfolio Implications')[1]}</Streamdown>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600 text-sm space-y-2">
            <p>Gold vs. Bitcoin: Comparative Analysis of Macroeconomic Sensitivity and Volatility Dynamics</p>
            <p>Econometric Analysis: ARX and EGARCH(1,1)-X Models</p>
            <p>Data Source: Yahoo Finance | Sample: 3,649 Daily Observations</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
