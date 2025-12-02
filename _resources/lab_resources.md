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
- [Alignment of Optical Systems Using Lasers – A Guide for the Uninitiated (David M. Benton, 2021)](https://sites.google.com/view/chentingliao/resource) – A tutorial guide (available via ResearchGate) that provides step-by-step advice on aligning laser-based optical setups. It covers laser safety, basic alignment pitfalls, and tricks for new researchers.
- [Basics of Optical Alignment (Florian Ströhl)](https://www.youtube.com/playlist?list=PLh5cDpn282vaCtqzjg6laUaR-CtzghltB) – A series of short YouTube tutorial videos walking through fundamental alignment techniques. These videos (supported by an EU education grant) visually demonstrate how to align optical components and are very beginner-friendly.
- [Liao Lab Resource Page (EPFL)](https://sites.google.com/view/chentingliao/resource) – A comprehensive list of optics notes, vendor links, books, calculators, and more.

### Vendor Tutorials

- [Thorlabs Photonics Lab How-To Videos](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=14062) – Practical topics like aligning a laser beam parallel to the table, aligning optical isolators, fiber coupling, polarizer orientation, using waveplates, etc.
- [Newport Tutorials](https://www.newport.com/resourceListing/tutorials) – Fundamental concepts including fiber optic basics, intro to polarizers/waveplates, vibration isolation, opto-mechanical design, positioning equipment.
- [Edmund Optics Knowledge Center](https://www.edmundoptics.com/knowledge-center/?Query=&CategoryId=&) – Vendor website with tutorials and application notes across topics such as imaging, laser optics, microscopy, optomechanics, testing & detection (including mirror configurations and beam alignment best practices).

### Laser Locking & Control

- [A Practical Guide to Feedback Control for PDH Laser Linewidth Narrowing (Wang et al., 2024)](https://arxiv.org/html/2412.04635v1) – Introduces "just enough" control theory and systematically explains how to design and optimize a PDH lock for the first time, including component choices and loop tuning.
- [MOGLabs Application Note: PDH Locking](https://www.moglabs.com/support/appnotes/AN002-PDH-R2b.pdf) – Setting up a Pound-Drever-Hall lock.
- [PDH Locking Step-by-Step (YouTube - Liquid Instruments)](https://www.youtube.com/watch?v=MjEKF1VKMPM) – Video demonstration of PDH locking setup.

### Reference Books

- **Building Electro-Optical Systems: Making It All Work** by P. Hobbs – A pragmatic guide full of real-world insight.
- **Building Scientific Apparatus** by Moore, Davis, & Coplan – Covers design of optical, mechanical, and electronic aspects of lab instruments.

---

## Open-Source Hardware Projects and DIY Lab Equipment

### Major Initiatives

- [OpenLabTools (University of Cambridge)](https://openlabtools.eng.cam.ac.uk/) – Low-cost, open-access scientific instrumentation. Publishes modular designs and tutorials for data acquisition systems, sensors, actuators, and 3D-printed mechanics. Includes an open-source automated microscope and mechanical tester.
- [Tekla Labs (UC Berkeley)](https://reprap.org/wiki/Open_Source_Lab) – A library of open-source DIY documents for building common lab equipment like microscopes, shakers, centrifuges, incubators, etc.
- [Open-Labware.net (Baden Lab & TReND in Africa)](https://open-labware.net/) – Designs for 3D-printable lab instruments including FlyPi (open fluorescence microscope), OpenSpritzer (microfluidic injector), Spikeling (neuron simulator), and low-cost micromanipulators.
- [NIH 3D Print Exchange](https://reprap.org/wiki/Open_Source_Lab) – Free 3D-printable designs for lab equipment, from simple tube racks to sophisticated microscope parts.
- [RepRap Open-Source Lab Wiki](https://reprap.org/wiki/Open_Source_Lab) – Aggregator for open scientific hardware, linking to Cambridge's OpenLabTools, Berkeley's Tekla Labs, Open-Neuroscience, and many specific device projects.

### Open-Source Electronics and Control Hardware

- [Arduino](https://reprap.org/wiki/Open_Source_Lab) – Microcontroller platform with a huge ecosystem of community-contributed circuits and code for automating equipment.
- [Raspberry Pi](https://reprap.org/wiki/Open_Source_Lab) – Single-board computers used for microscope cameras to experiment controllers.
- [Red Pitaya](https://reprap.org/wiki/Open_Source_Lab) – Open-source FPGA-based multifunction instrument (configurable oscilloscope/DAQ/PID controller).
- [Implementing PDH Locking with Red Pitaya](https://content.redpitaya.com/blog/pound-drever-hall-locking-opo-red-pitaya) – Example of achieving a full digital Pound-Drever-Hall laser lock using Red Pitaya STEMlab 125-14.

### Notable Open Instruments

- [OpenFlexure Microscope](https://reprap.org/wiki/Open_Source_Lab) – Fully 3D-printed high-resolution microscope with motorized focus.
- [OpenSPIM](https://reprap.org/wiki/Open_Source_Lab) – Open Selective Plane Illumination Microscope.
- [Open-source syringe pumps](https://reprap.org/wiki/Open_Source_Lab)
- [Open spectrometers](https://reprap.org/wiki/Open_Source_Lab)
- [Sensorica](https://reprap.org/wiki/Open_Source_Lab) – Canadian open-hardware network for sensing and automation.
- [Labrigger](https://reprap.org/wiki/Open_Source_Lab) – Independent site sharing "open solutions for research" to reduce duplication of effort.

---

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

### Resource Aggregators

- [Liao Lab Resource Page (EPFL)](https://sites.google.com/view/chentingliao/resource) – Comprehensive list of guides and tools.
- [Open-Neuroscience](https://reprap.org/wiki/Open_Source_Lab) – Platforms with open-source lab devices relevant to microscopy-heavy optics labs.
- [Hackteria](https://reprap.org/wiki/Open_Source_Lab) – Open-source biology and art projects.

### Scientific Maker Networks

- [Open Lab Starter Kit (OLSK)](https://github.com/Open-Lab-Starter-Kit) – Open-source designs for lab infrastructure including 3D printers, laser cutters, CNC mills.

### Forums and Q&A

- [Physics Stack Exchange: Laser Beam Alignment Best Practices](https://physics.stackexchange.com/questions/398062/laser-beam-alignment-best-practices) – Community discussion on alignment techniques.
- Reddit communities: /r/LabEquip, /r/Physics – Lab tips and DIY projects.

### Vendor SDKs and APIs

Many equipment vendors offer free software development kits:
- **Thorlabs Kinesis/APT** – .NET and C APIs with Python wrappers for motors and stages
- **Newport** – APIs for motion controllers and power meters
- **PyDAQmx** – Open-source alternative to LabVIEW for National Instruments DAQ devices
- **thorlabs_apt** – Python package for Thorlabs hardware

---

## Summary

A new lab founder or student has unprecedented resources available:

1. **Beginner-friendly tutorials** (textbooks to YouTube) for optical alignment, laser locking, and control theory
2. **Open-source hardware projects** to jump-start building experimental apparatus
3. **Open software frameworks** for professional-grade experiment control and automation

By utilizing these resources—and contributing back improvements—you can significantly lower the barrier to setting up a sophisticated research lab while joining a community that values sharing and collaboration in science.
