import { Component } from '@angular/core';
import { Experience } from './modals';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences: Experience[] = [];
  active = "5";

  constructor() {
    this.experiences = [
      new Experience(
        6,
        'University of Missouri',
        'Aug 2023',
        'Present',
        'Kansas City,MO',
        'Student Teaching Assistant',
        ["Guiding 57 students in CS 281R - Introduction to Computer Architecture and Organization course",	 	   
        "Mentored 91 students and provided guidance for CS 5525 - Cloud Computing assignments (AWS, MS Azure, GCP)"]
      ),
      new Experience(
        5,
        'BrainBox Consulting',
        'Jun 2022',
        'Dec 2022',
        'Hyderabad, India',
        'Software Development Engineer',
        [
          "Developed entire backend for an application that automates the extraction of data from SAP Ariba using Python3",
          "Worked on PostgreSQL - Tables, Views, Functions and Stored Procedures",
          "Developed REST APIs using ExpressJS for a Procurement Chatbot to connect it with SAP Ariba",
          "Built a Serverless Application on AWS to automate the process of receipt creation in SAP S4/HANA",
          "Containerized multiple applications using Docker"
          
        ]
      ),
      new Experience(
        4,
        'Tata Consultancy Services',
        'Jul 2020',
        'Jun 2022',
        'Hyderabad, India',
        'SAP HANA Cloud Developer (Confidential, USA Client)',
        [
          "Extensively worked on SAP Cloud Application Programming Model(CAPM) -Node.js framework on SAP BTP platform",
          "Involved in integrating Destination Services, and Job Scheduler",
          "Increased processing speed by taking advantage of SAP HANA's in-memory architecture and parallel execution capabilities using HANA Stored Procedures, Calculation Views and Table functions",
          "Has knowledge of SAP UI5",
          "Worked with functional, developers and production teams across units to identify business needs and solution options"

        ]
      ),
      new Experience(
        3,
        'Tata Consultancy Services',
        'Jan 2020',
        'Mar 2020',
        'Hyderabad, India',
        'Java FullStack Developer (Internship)',
        [
          "Developed a Patient Registration and Appointment System using microservice architecture",
          "Responsible for design and development of REST APIs using Spring Boot and Spring Data JPA",
          "Created user interfaces using Angular 7"
        ]
      ),
      new Experience(
        2,
        'Deify Infocomm Solutions',
        'May 2019',
        'Sep 2019',
        'Hyderabad, India',
        'Hybrid Mobile Application Developer',
        [
          "Developed a Flutter application facilitating bill payments, gift cards, and complaints management for a housing community.",
          "Integrated backend APIs into the application",
          "Integrated payment gateway using PAYTM SDK"
          
        ]
      ),
      new Experience(
        1,
        'Defence Research & Development Organisation- RCI',
        'Apr 2019',
        'May 2020',
        'Hyderabad, India',
        'Internship',
        [
          "Understood the types of missiles, their control, navigation, computational and telemetry systems, Target Position Tracking",
          "Built a Frame Grabber Tool using Python network programming which grabs the frames from ethernet",
          "The grabbed frames are then transformed, and the real-time data is visualized through graphs"
        ]
      ),

    ];
  }
}
