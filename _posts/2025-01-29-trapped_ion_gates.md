---
layout: post
title: "Types of Trapped Ion Gates"
date: 2023-10-10
categories: quantum-computing
---

## Types of Trapped Ion Gates

Trapped ion quantum computing is a leading approach in the field of quantum information processing. It utilizes ions confined in electromagnetic traps and manipulated using laser beams. A good overview of different types of trapped ion gates is given by [1].

In this text we will go over the gates developed in this group. We will start with the basic MS gate, and slowly build up to gates with more robustness and controllability. The theory background for these gates developed in our group can be found in the following references. 

Trapped ion gates can be produced by using lasers. In order to execute the gate, we need to imprint the gate to the laser. We do this via an AOM. We send an rf waveform to the AOM, and the single-frequency that enters teh AOM leaves it with the gate waveform modulating it. Hence, we have imprinted the gate information into the laser.

There are several approaches to engineering this waveform. We can look at it in three ways. We can generate the waveform by modulating the amplitude o frequency of the gate over time, or we can focus on the spectral components of the gate which are static in time. Our group relies on the latter approach.

### 1. Cirac-Zoller Gate
The Cirac-Zoller gate [2] is one of the earliest proposals for implementing quantum gates with trapped ions. It uses a combination of laser pulses to entangle the internal states of two ions via their collective motion.

### 2. Mølmer-Sørensen Gate
The Mølmer-Sørensen gate is a widely used entangling gate in trapped ion systems. It employs bichromatic laser fields to create entanglement between the internal states of ions without requiring precise control over their motion.

### Single motional-mode gates
We can use a single mode of motion to execute a gate, like teh COM mode in the MS gate, but with additional tones to the bi-chromatic drive which would give the MS gate robustness properties. Such gates are Cardioid gates, Antioid gates, CarNu gates, and the Sapiroid gate. All these gates focus on adding robustness to the MS gate, for two ions (Sapiroid), or more (the others)??? The controlability stays the same since we use the COM mode and couple the ions equally all-to-all. We could use some other mode and take its specific ion-ion coupling to our advantage, but this should not be considered as a tunable-coupling gate.

#### Cardioid gate

#### Antioid gate

#### CarNu gate

#### Sapiroid gate

### Multi-mode gates
The motivation behind such gates is multi-fold. They can enable tunable couplings between different pairs of ions. They can be faster than a MS gate since all modes are active, as opposed to the MS gate which suffers from unwanted off-resonance coupling to other modes when the Rabi frequency is too high. Finally, the 


### References
[1] Cai, Z., Luan, C.Y., Ou, L. et al. "Entangling gates for trapped-ion quantum computation and quantum simulation." *Journal of the Korean Physical Society*, vol. 82, pp. 882–900, 2023. [https://doi.org/10.1007/s40042-023-00772-3](https://doi.org/10.1007/s40042-023-00772-3)

[2] Cirac, J.I., Zoller, P. "Quantum Computations with Cold Trapped Ions." *Physical Review Letters*, vol. 74, no. 20, pp. 4091-4094, 1995. [https://doi.org/10.1103/PhysRevLett.74.4091](https://doi.org/10.1103/PhysRevLett.74.4091)