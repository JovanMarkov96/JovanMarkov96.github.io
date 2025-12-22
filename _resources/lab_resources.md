---
layout: single
collection: resources
title: "Lab Resources"
permalink: /resources/lab-resources/
author_profile: true
toc: true
toc_label: "Contents"
toc_icon: "flask"
---

Open-source resources for laboratory setup and automation. New researchers can leverage a wealth of open-source guides, tutorials, software, and hardware designs to build and run an optics/quantum lab.

## Practical Guides and Tutorials (Optics & Lab Skills)

- [Laboratory Optics (Peter Beyersdorf)](http://www.laboratoryoptics.com/About.html) – A free e-book covering the basics of working in an optics lab: how to align beams, characterize beams, use photodiodes and oscilloscopes, balanced detectors, lock-in amplifiers, etc. This is a great pedagogical starting point for newcomers.
- [Alignment of Optical Systems Using Lasers – A Guide for the Uninitiated (David M. Benton, 2021)](https://spie.org/samples/SL61.pdf) – A tutorial guide (available via ResearchGate) that provides step-by-step advice on aligning laser-based optical setups. It covers laser safety, basic alignment pitfalls, and tricks for new researchers.
- [Basics of Optical Alignment (Florian Ströhl)](https://www.youtube.com/playlist?list=PLh5cDpn282vaCtqzjg6laUaR-CtzghltB) – A series of short YouTube tutorial videos walking through fundamental alignment techniques. These videos (supported by an EU education grant) visually demonstrate how to align optical components and are very beginner-friendly.
- [Liao Lab Resource Page](https://sites.google.com/view/chentingliao/resource) – A comprehensive list of optics notes, vendor links, books, calculators, and more.

### Vendor Tutorials

- [Thorlabs Photonics Lab How-To Videos](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=14062) – Practical topics like aligning a laser beam parallel to the table, aligning optical isolators, fiber coupling, polarizer orientation, using waveplates, etc.
- [Newport Tutorials](https://www.newport.com/resourceListing/tutorials) – Fundamental concepts including fiber optic basics, intro to polarizers/waveplates, vibration isolation, opto-mechanical design, positioning equipment.
- [Edmund Optics Knowledge Center](https://www.edmundoptics.com/knowledge-center/?Query=&CategoryId=&) – Vendor website with tutorials and application notes across topics such as imaging, laser optics, microscopy, optomechanics, testing & detection (including mirror configurations and beam alignment best practices).

### Laser Locking & Control

- [A Practical Guide to Feedback Control for PDH Laser Linewidth Narrowing (Wang et al., 2024)](https://arxiv.org/html/2412.04635v1) – Introduces "just enough" control theory and systematically explains how to design and optimize a PDH lock for the first time, including component choices and loop tuning.
- [MOGLabs Application Note: PDH Locking](https://www.moglabs.com/support/appnotes/AN002-PDH-R2b.pdf) – Setting up a Pound-Drever-Hall lock.
- [PDH Locking Step-by-Step (YouTube - Liquid Instruments)](https://www.youtube.com/watch?v=MjEKF1VKMPM) – Video demonstration of PDH locking setup.

- [PDH servo v2](https://github.com/vuthalab/pdh_servo_v2) – `pdh_servo_v2` is a servo controller for locking lasers to high-finesse optical cavities using the Pound–Drever–Hall technique.

### Reference Books

- **Building Electro-Optical Systems: Making It All Work** by P. Hobbs – A pragmatic guide full of real-world insight.
- **Building Scientific Apparatus** by Moore, Davis, & Coplan – Covers design of optical, mechanical, and electronic aspects of lab instruments.

- **Optical Measurements for Scientists and Engineers: A Practical Guide** — Arthur McClelland & Max Mankin. A compact, practical crash-course for newcomers to optics labs that introduces common optical measurement techniques (e.g., spectroscopy and microscopy), explains typical components, and shows how to build and collect data from simple setups. Filled with hands-on tips and tricks drawn from lab experience to help researchers get comfortable aligning, characterizing, and troubleshooting optical experiments.

---

## Open-Source Hardware Projects and DIY Lab Equipment

### Major Initiatives

- [OpenLabTools (University of Cambridge)](https://openlabtools.eng.cam.ac.uk/) – Low-cost, open-access scientific instrumentation. Publishes modular designs and tutorials for data acquisition systems, sensors, actuators, and 3D-printed mechanics. Includes an open-source automated microscope and mechanical tester.
- [Open-Labware.net (Baden Lab & TReND in Africa)](https://open-labware.net/) – Designs for 3D-printable lab instruments including FlyPi (open fluorescence microscope), OpenSpritzer (microfluidic injector), Spikeling (neuron simulator), and low-cost micromanipulators.
- [RepRap Open-Source Lab Wiki](https://reprap.org/wiki/Open_Source_Lab) – Aggregator for open scientific hardware, linking to Cambridge's OpenLabTools, Berkeley's Tekla Labs, Open-Neuroscience, and many specific device projects.

### Open-Source Electronics and Control Hardware

- [Implementing PDH Locking with Red Pitaya](https://content.redpitaya.com/blog/pound-drever-hall-locking-opo-red-pitaya) – Example of achieving a full digital Pound-Drever-Hall laser lock using Red Pitaya STEMlab 125-14.
- [Linien](https://github.com/linien-org/linien) – User-friendly locking of lasers using RedPitaya (STEMlab 125-14) that just works. Linien follows the UNIX philosophy of doing one thing (locking) very well; it was developed for locking spectroscopy signals but also supports PDH or other lock-in techniques and simple PID operation. Built with Python and Migen and based on `red_pid`.
 - [RedPitaya Lockbox (TU Darmstadt APQ)](https://github.com/TU-Darmstadt-APQ/RedPitaya-Lockbox) – Digital controller for laser frequency stabilization based on the RedPitaya STEMlab 125-14 board. The repository contains schematics and PCB layouts for an analog interface suitable for 19-inch rack units. Recommended to use with the 'lockbox' feature of the PyRPL software package.
 - [PDH photodiode (TU Darmstadt APQ)](https://github.com/TU-Darmstadt-APQ/PDH_photodiode) – Wideband photodetector based on a Si-PIN photodiode (Hamamatsu S9055-01) and a transimpedance amplifier (TIA). The detector features an additional non-inverting (voltage) amplifier stage AC-coupled to the TIA designed for Pound–Drever–Hall (PDH) laser locking.

## Software for Experiment Control, Automation, and Data Acquisition

### Experiment Control Frameworks

- [labscript suite](https://labscriptsuite.org/en/latest/) – Powerful open-source experiment automation framework used widely in AMO and quantum labs. Provides flexible and extensible framework for experiment composition, control, execution, and analysis with emphasis on precise hardware timing. Features include heterogeneous hardware support, Python scripting interface, remote/distributed control, and ML-based optimization integration.
- [ARTIQ (Advanced Real-Time Infrastructure for Quantum Physics)](https://github.com/m-labs/artiq) – Open-source control and data acquisition system developed by M-Labs with NIST Ion Storage Group. Designed for ultra-high timing precision using FPGA-based hardware (Sinara platform) achieving sub-microsecond latency and nanosecond-level timing resolution. Users write experiments in Python compiled for deterministic timing on FPGA.
- [QCoDeS](https://microsoft.github.io/Qcodes/examples/basic_examples/15_minutes_to_QCoDeS.html) – Python-based data acquisition framework from Copenhagen/Microsoft quantum labs. Provides unified instrument communication, measurement automation, and data storage with a driver library for many commercial instruments.
- [PyMeasure](https://github.com/pymeasure/pymeasure) – Lighter-weight Python framework for scientific measurements. Library of instrument classes and simple system for running experiment procedures—essentially an open-source replacement for many LabVIEW-style tasks.

### Instrument Communication Libraries

- [PyVISA](https://pyvisa.readthedocs.io/en/latest/) – Go-to library for controlling instruments via GPIB, USB, serial (Python wrapper for VISA protocol).
- [PySerial](https://github.com/pyserial/pyserial) – Simple library for serial/USB communication.
- [Awesome Photonics (GitHub)](https://github.com/joamatab/awesome_photonics) – Curated list of open source photonics projects including communication libraries.

### Distributed Control and Lab Management

 - [LabRAD](https://github.com/labrad) (Laboratory Remote Automation and Distribution, from NIST/JQI) – Networked server-client architecture for scalable, multi-PC control systems.
- [Entropy (Quantum Machines)](https://archive.aps.org/damop/2022/z03/5/) – Free, open-source web-based lab management software for managing complex experimental workflows, calibrations, data logging, and electronic lab notebooks (see the [Entropy GitHub README](https://github.com/entropy-lab/entropy?tab=readme-ov-file)).

### Automation and Optimization Tools

- [M-LOOP (Machine Learning Online Optimization Package)](https://m-loop.readthedocs.io/) – Open-source tool for automated experiment tuning using machine-learning algorithms to adjust parameters in real-time.
- [analysislib-mloop](https://github.com/rpanderson/analysislib-mloop) – Integration of M-LOOP with labscript suite for self-optimizing sequences.

---

## Additional Resources and Communities

### Trapped Ion lab controll systems software

- [Oxford Ion Trap Group (University of Oxford)](https://github.com/OxfordIonTrapGroupOxford) – Open-source projects from the Ion Trap Quantum Computing group in the Department of Physics, University of Oxford.
 - [Haeffner Lab (Berkeley Ions)](https://github.com/HaeffnerLab) – We are the Haeffner Lab at UC Berkeley; we trap ions to investigate various aspects of quantum physics and quantum information.
 - [Quantum Information with Trapped Ions (QITI)](https://github.com/QITI) – Resources and projects related to quantum information with trapped ions.
 - [IonTrap-WIPM (MangFeng Ion Trap Group, WIPM, CAS)](https://github.com/Hanros94/IonTrap-WIPM) – Control system for quantum information processing in ion traps. Updated Sep 03, 2020. Features spin-echo operations (CPMG, UDD), GUI for single-qubit operations, Rabi/Zeeman scans and pulse-shaping for DDS/AWG. Research group: MangFeng Ion Trap Group, WIPM, CAS. Homepage: http://english.wipm.cas.cn/rh/rd/yzfzsys/bsqip/bsqipr/ — contributors include Guanqun Mu (contact: guanqun_mu@whu.edu.cn).

### Forums and Q&A

- [Physics Stack Exchange: Laser Beam Alignment Best Practices](https://physics.stackexchange.com/questions/398062/laser-beam-alignment-best-practices) – Community discussion on alignment techniques.
- Reddit communities: /r/LabEquip, /r/Physics – Lab tips and DIY projects.

### Vendor SDKs and APIs

Many equipment vendors offer free software development kits:

- **[Thorlabs Kinesis](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=10285)** – Comprehensive motion-control software with .NET Controls for creating custom applications in C#, Visual Basic, LabVIEW™, or any .NET-compatible language. Supports Kinesis® and legacy controllers via a unified GUI and programming API, provides USB plug-and-play connectivity for multi-unit/multi-axis setups, and ships reusable .NET Controls that offer complete graphical instrument panels (e.g., KDC101) along with full programmatic access. Includes C# and LabVIEW example projects and Quick Start guides (requires an IDE such as Microsoft Visual Studio).
 - **[Thorlabs APT™ Suite](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=9019)** – APT Suite of controllers (stepper and DC motor controllers, closed- and open-loop piezo controllers, strain gauge readers, solenoid drivers, and NanoTrak® feedback) with unified PC-based user and programming APIs. USB connectivity makes multi-unit, multi-axis motion control easy. LabVIEW can communicate with APT controllers via ActiveX; Thorlabs provides LabVIEW VI examples and a comprehensive guide to using LabVIEW with APT (downloadable from the APT page).
- **[thorlabs_apt](https://github.com/qpit/thorlabs_apt)** – Python package for Thorlabs hardware
 - **[PyDAQmx](https://github.com/clade/PyDAQmx)** – Open-source alternative to LabVIEW for National Instruments DAQ devices

