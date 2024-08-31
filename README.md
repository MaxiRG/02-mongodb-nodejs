# Vending Machine Project

This project is a smart vending machine system built using an ESP32 microcontroller and an AWS Virtual Machine (VM) for remote monitoring and management. The ESP32 controls the vending machine hardware, while the AWS VM hosts the backend services and data storage.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Hardware Requirements](#hardware-requirements)
- [Software Requirements](#software-requirements)
- [Setup Instructions](#setup-instructions)
  - [1. ESP32 Setup](#1-esp32-setup)
  - [2. AWS VM Setup](#2-aws-vm-setup)
- [Usage](#usage)

## Features

- **Remote Monitoring**: Real-time tracking of vending machine inventory and sales.
- **Secure Communication**: Encrypted data transfer between ESP32 and AWS VM.
- **User Authentication**: Secure access for management and monitoring.
- **Automated Restocking Alerts**: Notifications when inventory is low.
- **Data Analytics**: Sales data analytics for insights and optimization.

## Architecture

![Architecture Diagram](link-to-architecture-diagram)

- **ESP32**: Controls the hardware components (motors, sensors) and communicates with the AWS VM.
- **AWS VM**: Hosts the backend services, including the database and API, for managing the vending machine.

## Hardware Requirements

- ESP32 microcontroller
- Motors and actuators for dispensing items
- Sensors (e.g., IR sensors for detecting item dispensing)
- Power supply for ESP32
- Vending machine enclosure and compartments

## Software Requirements

- Arduino IDE or PlatformIO for ESP32 development
- Python (for backend services)
- AWS account with access to EC2 for the VM
- Docker (optional, for containerizing backend services)

## Setup Instructions

### 1. ESP32 Setup

1. **Install Dependencies**:
   - Install Arduino IDE or PlatformIO.
   - Install ESP32 board libraries.

2. **Flash Firmware**:
   - Open the firmware code in your IDE.
   - Configure the Wi-Fi credentials and AWS endpoint in the code.
   - Flash the code to the ESP32.

3. **Connect Hardware**:
   - Connect the motors, sensors, and other components to the ESP32.
   - Power up the ESP32 and verify the connections.

### 2. AWS VM Setup

1. **Create AWS VM**:
   - Log in to your AWS account.
   - Create an EC2 instance with your preferred Linux distribution.
   - Configure security groups to allow necessary ports (e.g., HTTP, HTTPS).

2. **Install Backend Services**:
   - SSH into the VM.
   - Install Python and necessary dependencies.
   - Clone the backend repository and configure the environment variables.

3. **Run Services**:
   - Start the backend services.
   - Ensure the API endpoints are accessible and secure.

## Usage

- **Monitoring**: Access the web interface hosted on the AWS VM to monitor inventory and sales data.
- **Restocking**: Receive alerts for low stock and plan restocking accordingly.
- **Data Analysis**: Use the built-in analytics tools to optimize item placement and pricing.
