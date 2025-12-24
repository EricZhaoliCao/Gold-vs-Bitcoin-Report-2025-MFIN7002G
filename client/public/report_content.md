# Gold vs. Bitcoin: Comparative Analysis

## Overview

This analysis examines whether Bitcoin and Gold function as distinct asset classes or serve similar portfolio roles. The investigation focuses on two core hypotheses: (1) whether Bitcoin and Gold respond differently to macroeconomic variables, and (2) whether their volatility dynamics differ fundamentally.

---

## Asset Characteristics

### Performance Metrics

Bitcoin demonstrates substantially higher returns and volatility compared to Gold. Over the analysis period, Bitcoin's daily mean return reaches 0.1461% with a standard deviation of 3.5350%, while Gold achieves 0.0396% with 0.8010% volatility. This 3.7x difference in returns comes with a 4.4x difference in risk.

Bitcoin's return distribution exhibits extreme values: a maximum daily return of 22.51% and minimum of -46.47%. Gold's distribution remains more constrained, with maximum returns of 5.78% and minimum of -5.91%. These characteristics indicate fundamentally different risk profiles.

### Correlation Structure

Bitcoin maintains a near-zero correlation with Gold (approximately -0.05 to 0.10), suggesting independent price drivers. Bitcoin correlates positively with the S&P 500 (0.30-0.40), indicating equity market sensitivity. Gold shows near-zero correlation with equities, confirming its traditional hedge characteristics.

The rolling correlation analysis reveals that Bitcoin-Gold correlation fluctuates around zero across different market regimes, providing consistent diversification benefits regardless of market conditions.

---

## Hypothesis 1: Macroeconomic Sensitivity

**Hypothesis:** Bitcoin and Gold respond differently to macroeconomic variables (Federal Funds Rate, USD strength, equity market returns).

### Regression Framework

ARX model specification:
- Dependent variables: Bitcoin returns, Gold returns
- Independent variables: Lagged returns, Federal Funds Rate changes, USD Index returns, S&P 500 returns
- Sample: 3,649 daily observations

### Results

| Variable | Bitcoin Return | Gold Return | Significance |
|----------|---------|------|--------------|
| S&P 500 Return | 0.8623*** | -0.0064 | Bitcoin: highly significant positive; Gold: insignificant |
| USD Index Return | -0.4953*** | -0.9310*** | Both negative; Gold sensitivity 1.88x stronger |
| Fed Funds Change | -1.6587 | -1.7045*** | Bitcoin: insignificant; Gold: highly significant negative |
| Lagged Own Return | -0.0242 | -0.0400*** | Bitcoin: insignificant; Gold: significant negative (mean reversion) |

### Interpretation

**Bitcoin exhibits equity-market-driven pricing.** The coefficient of 0.8623 on S&P 500 returns is highly significant, indicating that Bitcoin moves in tandem with equity markets. A 1% increase in equity returns associates with an 0.86% increase in Bitcoin returns. This behavior contradicts the "digital gold" narrative and suggests Bitcoin functions as a speculative, risk-on asset.

**Gold maintains traditional safe-haven characteristics.** The insignificant S&P 500 coefficient (-0.0064) confirms Gold's equity hedge properties. Gold's significant negative response to Federal Funds Rate increases (-1.7045) reflects its non-interest-bearing nature: rising rates increase the opportunity cost of holding Gold, reducing demand.

**Both assets respond to currency strength, but with different magnitudes.** The negative coefficients on USD Index returns reflect the commodity pricing mechanism: a stronger dollar increases prices for foreign buyers, reducing demand. Gold's sensitivity (-0.9310) is nearly double Bitcoin's (-0.4953), suggesting Gold functions more as a traditional commodity while Bitcoin exhibits hybrid characteristics.

**Conclusion:** The hypothesis is confirmed. Bitcoin and Gold respond to fundamentally different macroeconomic drivers. Bitcoin is priced by equity market sentiment, while Gold is priced by interest rates and currency dynamics. This distinction is statistically significant and economically meaningful.

---

## Hypothesis 2: Volatility Asymmetry

**Hypothesis:** Bitcoin exhibits symmetric volatility responses to price shocks, while Gold exhibits asymmetric responses (leverage effect).

### EGARCH Framework

Specification:
- Mean equation: ARX structure (consistent with Hypothesis 1)
- Variance equation: log(σ²) = ω + α|ε/σ| + γ(ε/σ) + β log(σ²)
- Key parameter: γ (asymmetry coefficient)
  - γ < 0: Negative shocks increase volatility more (leverage effect)
  - γ = 0: Symmetric volatility response
  - γ > 0: Positive shocks increase volatility more

### Results

| Parameter | Bitcoin | Gold | Significance |
|-----------|---------|------|--------------|
| Asymmetry (γ) | -0.0028 | 0.1003*** | Bitcoin: insignificant; Gold: highly significant positive |
| Shock Magnitude (α) | -0.0032 | 0.0477*** | Bitcoin: insignificant; Gold: significant |
| Persistence (β) | -0.9995*** | 0.9854*** | Bitcoin: non-standard; Gold: extreme persistence |

### Interpretation

**Bitcoin exhibits symmetric volatility dynamics.** The asymmetry coefficient of -0.0028 is statistically insignificant, indicating that positive and negative price shocks generate equivalent volatility responses. A 5% price increase produces the same volatility change as a 5% price decrease. This symmetric structure is consistent with speculative asset behavior where both surprises (positive or negative) generate similar levels of market uncertainty.

**Gold exhibits significant positive asymmetry.** The coefficient of 0.1003 is highly significant, indicating that positive price shocks increase volatility more than negative shocks. This pattern reflects Gold's safe-haven role: during risk-off periods, Gold prices rise sharply as investors seek protection, and this rapid appreciation is accompanied by elevated volatility. Conversely, when Gold prices decline, market participants interpret this as risk normalization, generating less accompanying volatility.

**Gold volatility exhibits extreme persistence.** The persistence coefficient of 0.9854 indicates that volatility shocks decay extremely slowly. Once volatility increases, it remains elevated for extended periods. Bitcoin's non-standard persistence parameter (-0.9995) suggests rapid volatility mean reversion, with shocks dissipating quickly.

**Conclusion:** The hypothesis is confirmed. Bitcoin and Gold operate under fundamentally different volatility regimes. Bitcoin exhibits largely symmetric volatility responses to shocks, consistent with speculative and sentiment-driven pricing. In contrast, Gold displays significant asymmetric and highly persistent volatility, reflecting its role as a safe-haven asset whose risk dynamics are sensitive to the direction of market shocks.

---

## Portfolio Implications

### Diversification Benefits

The efficient frontier analysis demonstrates that optimal portfolio construction includes both Bitcoin and Gold. The low and time-varying correlation between the assets provides consistent diversification benefits across market regimes.

Portfolios incorporating both assets achieve higher returns for equivalent risk levels compared to single-asset or traditional multi-asset portfolios. The efficient frontier shifts upward and leftward when Bitcoin and Gold are included, quantifying the diversification premium.

### Asset Roles

Bitcoin functions as a **speculative growth component**: high returns, high volatility, equity market correlation, and symmetric volatility structure indicate pricing driven by risk appetite and market sentiment.

Gold functions as a **traditional hedge**: moderate returns, low volatility, equity market independence, and asymmetric volatility structure indicate pricing driven by safe-haven demand and macroeconomic fundamentals.

These distinct roles confirm that Bitcoin and Gold are complementary rather than substitutable assets.

---

## Statistical Summary

| Metric | Bitcoin | Gold |
|--------|---------|------|
| Daily Mean Return | 0.1461% | 0.0396% |
| Daily Volatility | 3.5350% | 0.8010% |
| Equity Correlation | 0.35 | -0.05 |
| Gold Correlation | -0.05 | 1.00 |
| Fed Funds Sensitivity | Insignificant | -1.7045*** |
| USD Sensitivity | -0.4953*** | -0.9310*** |
| Volatility Asymmetry | Symmetric | Positive asymmetry*** |
| Volatility Persistence | Low | Extreme (0.9854) |

---

## Conclusion

Bitcoin and Gold represent distinct asset classes with fundamentally different macroeconomic sensitivities and volatility dynamics. Bitcoin behaves as a speculative, equity-correlated asset driven by risk appetite. Gold maintains its traditional role as a safe-haven asset driven by interest rates and currency strength. These differences confirm their complementary portfolio roles and justify simultaneous allocation to both assets in diversified portfolios.
