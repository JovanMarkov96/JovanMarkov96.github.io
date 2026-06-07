---
layout: single
collection: resources
title: "Lab Resources"
permalink: /resources/lab-resources/
author_profile: true
order: 1
side_panel: toc
toc_label: "On this page"
toc_icon: "flask"
excerpt: "Open-source references for AMO / quantum lab work — practical guides and tutorials on optics, lasers, electronics, and lab automation for getting a setup running."
teaser_light: '/images/resource_thumbnails/lab-light.svg'
teaser_dark: '/images/resource_thumbnails/lab-dark.svg'
cta_label: "Open resources"
---

<div class="q-hub" markdown="1">

<p class="q-intro">Open-source resources for building and running an optics / quantum lab. New researchers can lean on a wealth of free guides, tutorials, software, and hardware designs to get a setup aligned, locked, and automated. Everything below is grouped by what you'd actually want to <em>do</em>: pick up lab skills, build open hardware, control your experiment in code, or plug into the wider community.</p>

<nav class="q-jump" aria-label="Jump to section">
  <a href="#guides"><i class="fas fa-compass-drafting"></i> Guides &amp; lab skills</a>
  <a href="#hardware"><i class="fas fa-microchip"></i> Open hardware &amp; DIY</a>
  <a href="#software"><i class="fas fa-code"></i> Control &amp; automation</a>
  <a href="#community"><i class="fas fa-users"></i> Communities &amp; SDKs</a>
</nav>

<h2 id="guides" class="q-h2"><span class="q-h2__ic"><i class="fas fa-compass-drafting"></i></span>Practical guides &amp; lab skills</h2>

<p class="q-lead">Pedagogical starting points for working in an optics lab — how to align and characterize beams, use the standard detectors and electronics, and lock a laser for the first time. Beyersdorf's free e-book is a great place to begin.</p>

- [Laboratory Optics (Peter Beyersdorf)](http://www.laboratoryoptics.com/About.html) — A free e-book covering the basics of working in an optics lab: how to align beams, characterize beams, use photodiodes and oscilloscopes, balanced detectors, lock-in amplifiers, etc. A great pedagogical starting point for newcomers.
- [Alignment of Optical Systems Using Lasers — A Guide for the Uninitiated (David M. Benton, 2021)](https://spie.org/samples/SL61.pdf) — Step-by-step advice on aligning laser-based optical setups, covering laser safety, basic alignment pitfalls, and tricks for new researchers.
- [Basics of Optical Alignment (Florian Ströhl)](https://www.youtube.com/playlist?list=PLh5cDpn282vaCtqzjg6laUaR-CtzghltB) — Short YouTube tutorials that visually demonstrate how to align optical components. Supported by an EU education grant and very beginner-friendly.
- [Liao Lab Resource Page](https://sites.google.com/view/chentingliao/resource) — A comprehensive list of optics notes, vendor links, books, calculators, and more.

<h3 id="vendor-tutorials" class="q-h3"><i class="fas fa-building"></i> Vendor tutorials</h3>

- [Thorlabs Photonics Lab How-To Videos](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=14062) — Practical topics like aligning a laser beam parallel to the table, aligning optical isolators, fiber coupling, polarizer orientation, and using waveplates.
- [Newport Tutorials](https://www.newport.com/resourceListing/tutorials) — Fundamentals including fiber-optic basics, polarizers & waveplates, vibration isolation, opto-mechanical design, and positioning equipment.
- [Edmund Optics Knowledge Center](https://www.edmundoptics.com/knowledge-center/?Query=&CategoryId=&) — Tutorials and application notes across imaging, laser optics, microscopy, optomechanics, and testing & detection (including mirror configurations and beam-alignment best practices).

<h3 id="laser-locking" class="q-h3"><i class="fas fa-bullseye"></i> Laser locking &amp; control</h3>

- [A Practical Guide to Feedback Control for PDH Laser Linewidth Narrowing (Wang et al., 2024)](https://arxiv.org/html/2412.04635v1) — Introduces "just enough" control theory and systematically explains how to design and optimize a PDH lock for the first time, including component choices and loop tuning.
- [MOGLabs Application Note: PDH Locking](https://www.moglabs.com/support/appnotes/AN002-PDH-R2b.pdf) — Setting up a Pound–Drever–Hall lock.
- [PDH Locking Step-by-Step (Liquid Instruments)](https://www.youtube.com/watch?v=MjEKF1VKMPM) — Video demonstration of a PDH locking setup.
- [PDH servo v2](https://github.com/vuthalab/pdh_servo_v2) — A servo controller for locking lasers to high-finesse optical cavities using the Pound–Drever–Hall technique.

<div class="q-books" markdown="1">

<h3 id="books" class="q-h3"><i class="fas fa-book"></i> Reference books</h3>

- **Building Electro-Optical Systems: Making It All Work** — P. Hobbs. A pragmatic guide full of real-world insight.
- **Building Scientific Apparatus** — Moore, Davis & Coplan. Covers the optical, mechanical, and electronic design of lab instruments.
- **Optical Measurements for Scientists and Engineers: A Practical Guide** — Arthur McClelland & Max Mankin. A compact crash-course for newcomers to optics labs: common measurement techniques (spectroscopy, microscopy), typical components, and how to build and collect data from simple setups — filled with hands-on tips for aligning, characterizing, and troubleshooting optical experiments.

</div>

<h2 id="hardware" class="q-h2"><span class="q-h2__ic"><i class="fas fa-microchip"></i></span>Open hardware &amp; DIY equipment</h2>

<p class="q-lead">Open-source instrumentation and control electronics you can build yourself — from 3D-printable mechanics to FPGA-based digital laser locks, often at a fraction of commercial cost.</p>

<h3 id="major-initiatives" class="q-h3"><i class="fas fa-cubes"></i> Major initiatives</h3>

- [OpenLabTools (University of Cambridge)](https://openlabtools.eng.cam.ac.uk/) — Low-cost, open-access scientific instrumentation: modular designs and tutorials for data-acquisition systems, sensors, actuators, and 3D-printed mechanics, including an open-source automated microscope and mechanical tester.
- [Open-Labware.net (Baden Lab & TReND in Africa)](https://open-labware.net/) — Designs for 3D-printable lab instruments including FlyPi (open fluorescence microscope), OpenSpritzer (microfluidic injector), Spikeling (neuron simulator), and low-cost micromanipulators.
- [RepRap Open-Source Lab Wiki](https://reprap.org/wiki/Open_Source_Lab) — An aggregator for open scientific hardware, linking Cambridge's OpenLabTools, Berkeley's Tekla Labs, Open-Neuroscience, and many specific device projects.

<h3 id="electronics" class="q-h3"><i class="fas fa-bolt"></i> Open electronics &amp; control hardware</h3>

- [Implementing PDH Locking with Red Pitaya](https://content.redpitaya.com/blog/pound-drever-hall-locking-opo-red-pitaya) — A full digital Pound–Drever–Hall laser lock using a Red Pitaya STEMlab 125-14.
- [Linien](https://github.com/linien-org/linien) — User-friendly laser locking on the RedPitaya (STEMlab 125-14) that just works. Built with Python and Migen and based on `red_pid`; developed for spectroscopy signals but also supports PDH, other lock-in techniques, and simple PID.
- [RedPitaya Lockbox (TU Darmstadt APQ)](https://github.com/TU-Darmstadt-APQ/RedPitaya-Lockbox) — A digital controller for laser frequency stabilization on the RedPitaya STEMlab 125-14, with schematics and PCB layouts for an analog interface suitable for 19-inch rack units. Pairs with the `lockbox` feature of PyRPL.
- [PDH photodiode (TU Darmstadt APQ)](https://github.com/TU-Darmstadt-APQ/PDH_photodiode) — A wideband photodetector (Hamamatsu S9055-01 Si-PIN photodiode + transimpedance amplifier) with an AC-coupled non-inverting stage designed for Pound–Drever–Hall laser locking.

<h2 id="software" class="q-h2"><span class="q-h2__ic"><i class="fas fa-code"></i></span>Experiment control &amp; automation</h2>

<p class="q-lead">The software stack for running an experiment in code: high-level control frameworks, the libraries that talk to your instruments, distributed lab-management tools, and machine-learning optimizers that tune the setup for you.</p>

<h3 id="frameworks" class="q-h3"><i class="fas fa-sliders"></i> Experiment control frameworks</h3>

- [labscript suite](https://labscriptsuite.org/en/latest/) — A powerful experiment-automation framework widely used in AMO and quantum labs. Flexible composition, control, execution, and analysis with an emphasis on precise hardware timing; heterogeneous hardware support, a Python scripting interface, remote/distributed control, and ML-based optimization.
- [ARTIQ (Advanced Real-Time Infrastructure for Quantum Physics)](https://github.com/m-labs/artiq) — M-Labs' control and data-acquisition system (with the NIST Ion Storage Group). FPGA-based Sinara hardware delivers sub-microsecond latency and nanosecond timing; experiments are written in Python and compiled for deterministic timing.
- [QCoDeS](https://microsoft.github.io/Qcodes/examples/basic_examples/15_minutes_to_QCoDeS.html) — A Python data-acquisition framework from the Copenhagen/Microsoft quantum labs: unified instrument communication, measurement automation, and data storage with a broad driver library.
- [PyMeasure](https://github.com/pymeasure/pymeasure) — A lighter-weight Python framework for scientific measurements — instrument classes plus a simple system for running experiment procedures, an open-source replacement for many LabVIEW-style tasks.

<h3 id="comm-libraries" class="q-h3"><i class="fas fa-plug"></i> Instrument communication libraries</h3>

- [PyVISA](https://pyvisa.readthedocs.io/en/latest/) — The go-to library for controlling instruments over GPIB, USB, and serial (a Python wrapper for the VISA protocol).
- [PySerial](https://github.com/pyserial/pyserial) — A simple library for serial / USB communication.
- [Awesome Photonics](https://github.com/joamatab/awesome_photonics) — A curated list of open-source photonics projects, including communication libraries.

<h3 id="distributed" class="q-h3"><i class="fas fa-network-wired"></i> Distributed control &amp; lab management</h3>

- [LabRAD](https://github.com/labrad) — Laboratory Remote Automation and Distribution (NIST/JQI): a networked server-client architecture for scalable, multi-PC control systems.
- [Entropy (Quantum Machines)](https://archive.aps.org/damop/2022/z03/5/) — Free, open-source web-based lab-management software for complex experimental workflows, calibrations, data logging, and electronic lab notebooks (see the [Entropy GitHub README](https://github.com/entropy-lab/entropy?tab=readme-ov-file)).

<h3 id="automation" class="q-h3"><i class="fas fa-robot"></i> Automation &amp; optimization</h3>

- [M-LOOP (Machine-Learning Online Optimization Package)](https://m-loop.readthedocs.io/) — Automated experiment tuning that uses machine-learning algorithms to adjust parameters in real time.
- [analysislib-mloop](https://github.com/rpanderson/analysislib-mloop) — Integration of M-LOOP with the labscript suite for self-optimizing sequences.

<h2 id="community" class="q-h2"><span class="q-h2__ic"><i class="fas fa-users"></i></span>Communities &amp; vendor SDKs</h2>

<p class="q-lead">Where to find working control systems from other groups, ask for help when alignment goes sideways, and grab the official SDKs that ship with commercial hardware.</p>

<h3 id="trapped-ion" class="q-h3"><i class="fas fa-atom"></i> Trapped-ion control systems</h3>

- [Oxford Ion Trap Group](https://github.com/OxfordIonTrapGroupOxford) — Open-source projects from the Ion Trap Quantum Computing group at the University of Oxford.
- [Haeffner Lab (Berkeley Ions)](https://github.com/HaeffnerLab) — The Haeffner Lab at UC Berkeley, trapping ions to study quantum physics and quantum information.
- [Quantum Information with Trapped Ions (QITI)](https://github.com/QITI) — Resources and projects for quantum information with trapped ions.
- [IonTrap-WIPM (MangFeng Ion Trap Group, WIPM, CAS)](https://github.com/Hanros94/IonTrap-WIPM) — A control system for ion-trap quantum information processing: spin-echo operations (CPMG, UDD), a GUI for single-qubit operations, Rabi/Zeeman scans, and pulse-shaping for DDS/AWG.

<h3 id="forums" class="q-h3"><i class="fas fa-comments"></i> Forums &amp; Q&amp;A</h3>

- [Physics Stack Exchange: Laser Beam Alignment Best Practices](https://physics.stackexchange.com/questions/398062/laser-beam-alignment-best-practices) — A community discussion of alignment techniques.
- [Reddit: r/Physics](https://www.reddit.com/r/Physics/) — Lab tips, DIY projects, and general physics discussion.

<h3 id="sdks" class="q-h3"><i class="fas fa-screwdriver-wrench"></i> Vendor SDKs &amp; APIs</h3>

- [Thorlabs Kinesis](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=10285) — Comprehensive motion-control software with .NET controls for building custom apps in C#, Visual Basic, LabVIEW, or any .NET language. USB plug-and-play for multi-unit / multi-axis setups, reusable .NET controls with full graphical instrument panels (e.g., KDC101) plus programmatic access, and C# / LabVIEW example projects.
- [Thorlabs APT Suite](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=9019) — The APT family of controllers (stepper/DC motor, open- and closed-loop piezo, strain-gauge readers, solenoid drivers, NanoTrak feedback) with unified PC-based user and programming APIs. LabVIEW talks to APT controllers via ActiveX, with example VIs and a usage guide.
- [thorlabs_apt](https://github.com/qpit/thorlabs_apt) — A Python package for Thorlabs APT hardware.
- [PyDAQmx](https://github.com/clade/PyDAQmx) — An open-source alternative to LabVIEW for National Instruments DAQ devices.

</div>
