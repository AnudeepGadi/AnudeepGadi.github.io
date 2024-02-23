import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills = [
    { skill: 'Programming Languages', skill_name: 'Python3, Javascript, Java17' },
    { skill: 'Backend Frameworks', skill_name: 'Spring Boot, FastAPI, Flask, Express.js, Django REST Framework' },
    { skill: 'Frontend Frameworks', skill_name: 'Angular, HTML, CSS' },
    { skill: 'Database', skill_name: 'PostgreSQL, MySQL, SAP HANA, MongoDB' },
    { skill: 'AWS', skill_name: 'EC2, S3, DynamoDB, Lambda,  API Gateway, Boto3(Python)' },
    { skill: 'Miscellaneous', skill_name: 'Docker, Kubernetes, Kafka, RabbitMQ, Linux Shell Scripting, Github, Machine Learning, Langchain, Flutter Basics' },
  ];

  certifications = [ ]

}
