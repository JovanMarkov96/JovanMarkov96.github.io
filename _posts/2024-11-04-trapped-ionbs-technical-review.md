---
title: 'Building and Benchmarking a Linear Paul Trap Trapped Ion Quantum Computer'
date: 2024-11-04
permalink: /posts/2024/11/trapped-ion-quantum-computers-a-technical-guide/
tags:
  - quantum computing
  - trapped ions
  - Paul traps
  - laser-ion interactions
  - experimental setup
---

## Table of Contents
1. [Introduction](#introduction)
   - [Quantum Computation](#quantum-computation)
   - [Trapped Ions](#trapped-ions)
2. [Paul Traps](#paul-traps)
   - [Principle of Operation](#principle-of-operation)
   - [Single Ion Traps](#single-ion-traps)
3. [Laser-Ion Interactions](#laser-ion-interactions)
   - [Basic Interactions](#basic-interactions)
   - [Laser Cooling](#laser-cooling)
     - [Introduction to Laser Cooling](#introduction-to-laser-cooling)
     - [Doppler Cooling](#doppler-cooling)
     - [Sideband Cooling](#sideband-cooling)
4. [Experimental Setup](#experimental-setup)
   - [Ion Trap Apparatus](#ion-trap-apparatus)
   - [Lasers](#lasers)
5. [Ion Storage](#ion-storage)
   - [Trapping Ions](#trapping-ions)
   - [Micromotion Compensation](#micromotion-compensation)
   - [Spectroscopy](#spectroscopy)
6. [Sideband Cooling and Coherent Dynamics](#sideband-cooling-and-coherent-dynamics)
   - [Spectroscopy on the S1/2 to D5/2 Transition](#spectroscopy-on-the-s12-to-d52-transition)
   - [Coherent Dynamics](#coherent-dynamics)
   - [Sideband Cooling Results](#sideband-cooling-results)


## Introduction

### Quantum Computation
Quantum computation leverages the principles of quantum mechanics to perform calculations that are infeasible for classical computers. Key components include qubits, which can exist in superpositions of states, and quantum gates, which manipulate these states. Quantum computers offer significant advantages over classical computers in solving certain types of problems, such as factoring large numbers and simulating quantum systems.

### Trapped Ions
Trapped ions are a leading candidate for qubits due to their long coherence times and precise control. By confining ions in electromagnetic fields, researchers can manipulate their quantum states with high accuracy, making them ideal for quantum computation.

## Paul Traps

The Coulomb interaction between charged particles and electromagnetic fields opens up the possibility to trap ions in a small region of space over long times. In 1953, Wolfgang Paul realized that ions could be mass-selected by means of radio-frequency (RF) fields. A modification of his original experimental setup has become known as the Paul trap and allows the confinement of charged particles in three dimensions. Since then, Paul traps have found widespread use in mass spectrometry, but have also been used in atomic physics for studying the properties of single or few ions well isolated from their environment under ultrahigh vacuum conditions. The first section of this chapter explains the function of an ideal Paul trap. The following sections focus on issues associated with the special purpose of trapping single ions.

### Principle of Operation

In Paul traps, electric quadrupole potentials $\Phi(\mathbf{r}) = \Phi_0 \sum_i \beta_i \left(\frac{r_i}{r_0}\right)^2$, $i = x, y, z$ are used to confine charged particles at the center of the potential. In a static potential, the point $\mathbf{r} = 0$ is an unstable fixed point because the Laplace equation $\nabla^2 \Phi = 0$ requires at least one of the coefficients $\beta_x, \beta_y, \beta_z$ to be negative. However, the position of equilibrium can be dynamically stabilized by making the potential $\Phi$ time-dependent: $\Phi_0 (t) = U + V \cos(\Omega_{RF} t)$. The equations of motion of a particle carrying a charge $Q$ and having a mass $m$ are then given by

$ \ddot{r}_i + 2 \beta_i \frac{Q}{m r_0^2} (U + V \cos(\Omega_{RF} t)) r_i = 0 $

and they take the canonical form of the Mathieu equation

$ \frac{d^2 u}{d \xi^2} + (a - 2q \cos(2\xi)) u = 0 $

with the substitutions

$ a_i = \frac{8 \beta_i Q U}{m r_0^2 \Omega_{RF}^2} $
$ q_i = \frac{4 \beta_i Q V}{m r_0^2 \Omega_{RF}^2} $
$ \xi = \frac{1}{2} \Omega_{RF} t $

Stable solutions of the Mathieu equation can be expressed as

$ u(\xi) = A \sum_{n \in \mathbb{Z}} C_{2n} \cos((2n + \phi) \xi) + B \sum_{n \in \mathbb{Z}} C_{2n} \sin((2n + \phi) \xi) $

where the coefficients $C_{2n}$ satisfy a certain recursion relation and $\phi$ is a real number that depends on the values of $a$ and $q$. Figure 2.1 shows the stability diagram of the Mathieu equation. Stable trapping of charged particles is possible if the trajectories of the ions are bounded in all directions. The region of stable trapping parameters is obtained by superimposing the stability diagrams for motion in all three directions. If the quadrupole potential is rotationally invariant about the $z$ axis, the stability parameters $a_i, q_i$ are given by

$$ a_x = a_y = \frac{8QU}{m(r_0^2 + 2z_0^2)\Omega_{RF}^2}, a_z = -2a_x $$
$$ q_x = q_y = \frac{4QV}{m(r_0^2 + 2z_0^2)\Omega_{RF}^2}, q_z = -2q_x $$

where $\beta_x = \beta_y = 1, \beta_z = -2$ and $r_0^2 = r_0^2 + 2z_0^2$. This choice ensures that $\Phi(r_0, 0, 0, t) = \Phi(0, 0, z, t) = U + V \cos(\Omega_{RF} t)$. Figure 2.2 shows a part of the stability diagram of a trap with rotational symmetry. In the limit that $a_i \ll q_i \ll 1$, solutions to the equations exist and can be approximated by

$ r_i(t) = r_{0i} \cos(\omega_i t + \phi_i) \left(1 + \frac{q_i}{2} \cos(\Omega_{RF} t)\right) $

where $\omega_i$ is given by

$ \omega_i = \frac{\beta_i \Omega_{RF}}{2} $
$ \beta_i = \sqrt{a_i + \frac{q_i^2}{2}} $

The motion of a confined particle can be decomposed into a harmonic motion with frequency $\omega_i$ called secular motion, and an amplitude-modulated fast driven motion with frequency $\Omega_{RF}$ called micromotion. The amplitude of the micromotion is proportional to the distance of the ion from the center of the trap. The secular approximation entails neglecting the micromotion and interpreting the secular motion as generated by a harmonic potential

$ \Phi = \frac{1}{2} \sum_i m \omega_i^2 r_i^2, \quad i \in \{x, y, z\} $

The potential $\Phi$ is often called pseudo-potential in the literature in order to distinguish it from the generating potential $\Phi$. Note that the oscillation frequency $\omega_i$ depends, via the factor $\beta_i$, on the mass of the particle. The depth of the pseudo-potential well in the radial and axial directions is given by

$ D_i = \frac{m}{2} \omega_i^2 R_i^2 $

where $R_i$ is the distance of the electrode from the center of the trap. Well depths of a few eV are easily achieved. Therefore, it is possible to load the trap from a thermal beam of atoms ionized inside the trap volume. The kinetic energy of trapped ions can be reduced by laser cooling as will be explained in the next chapter. If their kinetic energy becomes comparable to $\hbar \omega$, the motion of the ion in the potential has to be quantized. By defining the usual creation and annihilation operators

$ a_i^\dagger = \sqrt{\frac{m \omega_i}{2\hbar}} r_i + i \sqrt{\frac{1}{2m\hbar \omega_i}} p_i $
$ a_i = \sqrt{\frac{m \omega_i}{2\hbar}} r_i - i \sqrt{\frac{1}{2m\hbar \omega_i}} p_i $

the Hamiltonian

$ H = \sum_i \left( \frac{p_i^2}{2m} + \frac{1}{2} m \omega_i^2 r_i^2 \right) $

can be cast into the standard form

$ H = \sum_i \hbar \omega_i \left(a_i^\dagger a_i + \frac{1}{2}\right) $

The spread of the zero-point wave function is then given by

$ \langle 0 | r_i^2 | 0 \rangle^{1/2} = \sqrt{\frac{\hbar}{2m \omega_i}} $

For example, a $^{40}$Ca$^+$ ion cooled to the ground state of a trap with $\omega = 2\pi \times 1$ MHz is localized within 11 nm.

## Laser-Ion Interactions

### Basic Interactions
Lasers interact with trapped ions through processes such as the Lamb-Dicke regime and sideband transitions. These interactions are fundamental for cooling and manipulating the ions' quantum states.

### Laser Cooling

#### Introduction to Laser Cooling
Laser cooling is a technique used to reduce the motion of atoms or ions, effectively lowering their temperature. This method exploits the interaction between laser light and the atomic particles, using the momentum transfer from photons to atoms to slow them down. Laser cooling is fundamental in fields like atomic physics, quantum optics, and the development of quantum computers.

#### Doppler Cooling
Doppler cooling is one of the primary methods of laser cooling. It relies on the Doppler effect, where the frequency of light appears shifted to an observer moving relative to the light source. When an atom moves towards a laser beam, it sees the light as being blue-shifted (higher frequency), and when it moves away, it sees the light as red-shifted (lower frequency).

**Radiation Pressure Force:**

$$ F = \frac{\hbar k \Gamma}{2} \frac{s_0}{1 + s_0 + (2\Delta/\Gamma)^2} $$

where:
- $ \hbar $ is the reduced Planck constant
- $ k $ is the wave number of the laser
- $ \Gamma $ is the natural linewidth of the transition
- $ s_0 $ is the saturation parameter
- $ \Delta $ is the detuning of the laser from the atomic transition

**Doppler Cooling Limit:**
$ T_D = \frac{\hbar \Gamma}{2 k_B} $
where $ k_B $ is the Boltzmann constant. This limit is set by the balance between the cooling effect of the laser and the heating effect of spontaneous emission.

#### Sideband Cooling
Sideband cooling is used to cool ions to their motional ground state, especially in systems where the Doppler limit is not sufficient. This method is particularly effective in systems with resolved sidebands, where the trap frequency is much larger than the linewidth of the cooling transition.

**Rabi Frequency on the Sideband:**
$ \Omega_{n,n-1} = \eta \sqrt{n} \Omega_0 $
where:
- $ \eta $ is the Lamb-Dicke parameter
- $ n $ is the vibrational quantum number
- $ \Omega_0 $ is the Rabi frequency on the carrier transition

**Lamb-Dicke Parameter:**
$ \eta = k \sqrt{\frac{\hbar}{2m\omega}} $
where:
- $ m $ is the mass of the ion
- $ \omega $ is the trap frequency

**Cooling Rate:**
$ R_n = \Gamma \frac{\Omega_{n,n-1}^2}{1 + (\Delta/\Gamma)^2} $

**Equilibrium Mean Phonon Number:**
The mean phonon number after sideband cooling can be approximated by:
$ \langle n \rangle \approx \frac{4\omega}{\Gamma} $

Practical Considerations:
In practical applications, achieving effective laser cooling requires careful tuning of the laser parameters, such as intensity, frequency, and detuning. Additionally, the geometry of the laser beams and the characteristics of the trapping potential play crucial roles in the cooling efficiency.

Laser cooling has enabled significant advancements in precision measurements, quantum computing, and the study of fundamental quantum phenomena. By cooling atoms and ions to near absolute zero, researchers can observe and manipulate quantum states with unprecedented control and accuracy.

### Quantum State Manipulation
Laser pulses are used to manipulate and analyze the quantum state of ions. This includes operations such as single-qubit rotations and entangling gates, which are essential for quantum computation.

## Experimental Setup

### Ion Trap Apparatus
The ion trap design includes a vacuum system, RF drive, and fluorescence detection setup. These components work together to create a stable environment for trapping and manipulating ions.

### Lasers
The laser systems used for cooling, state manipulation, and detection must be highly stabilized and controlled. This ensures precise interactions with the trapped ions and accurate quantum state manipulation.

## Ion Storage

### Trapping Ions
Loading and trapping single or multiple ions involves using calcium ovens and electron sources. Proper techniques are essential for achieving stable ion confinement.

### Micromotion Compensation
Minimizing micromotion is crucial for improving ion stability and cooling efficiency. Techniques such as adjusting the trap voltages and using feedback systems are employed to achieve this.

### Spectroscopy
Characterizing the trapped ions’ energy levels and optimizing laser parameters are done through spectroscopy. This helps in fine-tuning the experimental setup for optimal performance.

## Sideband Cooling and Coherent Dynamics

### Spectroscopy on the $S_{1/2}$ to $D_{5/2}$ Transition
Investigating the quadrupole transition used for quantum state manipulation provides insights into the system's performance. This involves detailed spectroscopy studies.

### Coherent Dynamics
Rabi oscillations and Ramsey experiments are used to probe the coherence of the quantum states. These experiments help in understanding the dynamics of the trapped ions and improving quantum gate operations.

### Sideband Cooling Results
Achieving near-ground state cooling and measuring heating rates are critical for evaluating the system's performance. These results indicate the effectiveness of the cooling techniques and the overall stability of the trapped ion system.

These concepts and techniques form the foundation for building and benchmarking a linear Paul trap trapped ion quantum computer. By understanding and implementing these principles, researchers can advance the field of quantum computation and develop more powerful quantum systems.