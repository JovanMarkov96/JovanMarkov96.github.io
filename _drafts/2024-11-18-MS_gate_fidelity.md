---
title: "Measuring the Fidelity of a MS Gate"
date: 2024-11-18
permalink: /posts/2024/11/MG-gate-fidelity/
tags:
  - quantum computing
  - trapped ions
  - MS gate
---

We want to measure the fidelity of a 2 qubit Molmer Sorensen gate.

- MS gate
---

We want to measure the fidelity of a 2 qubit Molmer Sorensen gate.

To calculate the error of the states $|00\rangle$ and $|11\rangle$ from the measurements, you can use the standard error formula for binomial distributions. Given that you have 625 repetitions of the experiment, the standard error for each state can be calculated as follows:

1. **Calculate the probability of each state**:
   - Let $p_{00}$ be the probability of measuring the state $|00\rangle$.
   - Let $p_{11}$ be the probability of measuring the state $|11\rangle$.

2. **Calculate the standard error**:
   - The standard error for a binomial distribution is given by $\sqrt{\frac{p(1-p)}{n}}$, where $p$ is the probability of the state and $n$ is the number of repetitions.

### Example Calculation

Assume you measured the following counts for each state:
- $n_{00}$ = number of times $|00\rangle$ was measured
- $n_{11}$ = number of times $|11\rangle$ was measured

The probabilities are:
$p_{00} = \frac{n_{00}}{625}$
$p_{11} = \frac{n_{11}}{625}$

The standard errors are:
$\text{SE}_{00} = \sqrt{\frac{p_{00}(1 - p_{00})}{625}}$
$\text{SE}_{11} = \sqrt{\frac{p_{11}(1 - p_{11})}{625}}$

### Example with Hypothetical Data

Let's say you measured $n_{00} = 156$ and $n_{11} = 200$:

$p_{00} = \frac{156}{625} = 0.2496$
$p_{11} = \frac{200}{625} = 0.32$

The standard errors would be:
$\text{SE}_{00} = \sqrt{\frac{0.2496 \times (1 - 0.2496)}{625}} \approx 0.0175$
$\text{SE}_{11} = \sqrt{\frac{0.32 \times (1 - 0.32)}{625}} \approx 0.0188$

These standard errors give you an estimate of the uncertainty in your measurements of the states $|00\rangle$ and $|11\rangle$.\).


You're correct. When the populations of the states $|00\rangle$, $|01\rangle$, $|10\rangle$, and $|11\rangle$ add up to 1, the errors are not independent. In this case, we need to account for the covariance between the measurements.

Given that the populations sum to 1, the covariance between $p_{00}$ and $p_{11}$ can be calculated as:

$ \text{Cov}(p_{00}, p_{11}) = -\frac{p_{00} p_{11}}{n} $

where $n$ is the total number of measurements (625 in this case).

The error of the combined population $p_{00} + p_{11}$ is then given by:

$ \text{SE}_{\text{combined}} = \sqrt{\text{SE}_{00}^2 + \text{SE}_{11}^2 + 2 \cdot \text{Cov}(p_{00}, p_{11})} $

### Example Calculation

Using the hypothetical data from the previous example:

- $n_{00} = 156$
- $n_{11} = 200$
- $p_{00} = \frac{156}{625} = 0.2496$
- $p_{11} = \frac{200}{625} = 0.32$
- $\text{SE}_{00} = \sqrt{\frac{0.2496 \times (1 - 0.2496)}{625}} \approx 0.0175$
- $\text{SE}_{11} = \sqrt{\frac{0.32 \times (1 - 0.32)}{625}} \approx 0.0188$
- $\text{Cov}(p_{00}, p_{11}) = -\frac{0.2496 \times 0.32}{625} \approx -0.0001278$

The error of the combined population $p_{00} + p_{11}$ is:

$ \text{SE}_{\text{combined}} = \sqrt{(0.0175)^2 + (0.0188)^2 + 2 \cdot (-0.0001278)} \approx \sqrt{0.00030625 + 0.00035344 - 0.0002556} \approx \sqrt{0.00040409} \approx 0.0201 $

So, the error of the combined population of the states $|00\rangle$ and $|11\rangle$ is approximately 0.0201.