import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-accordion',
  imports: [CommonModule],
  templateUrl: './faq-accordion.html',
  styleUrl: './faq-accordion.css'
})
export class FaqAccordion {
faqs = [
    {
      question: "What is the mission of the Syog Foundation?",
      answer: "Our mission is to invest in education and well-being so that children can grow into strong, capable, and compassionate individuals.",
      open: false
    },
    {
      question: "What does the foundation commit to every child?",
      answer: "We walk alongside each child and their family to ensure they receive the right environment, support, and resources to learn and grow.",
      open: false
    },
    {
      question: "How does the foundation support students?",
      answer: "We provide end-to-end support including fees, books, uniforms, mentoring, extra coaching, teacher check-ins, and attendance monitoring.",
      open: false
    },
    {
      question: "Who is eligible for support?",
      answer: "Families with a total monthly income of less than ₹20,000 are eligible.",
      open: false
    },
    {
      question: "What academic performance is required?",
      answer: "Students must maintain at least 70% in all exams to continue receiving support.",
      open: false
    },
    {
      question: "From which class does support start?",
      answer: "Support begins from 7th standard onward.",
      open: false
    },
    {
      question: "Is the program open to all religions and castes?",
      answer: "Yes, we support all children irrespective of religion or caste.",
      open: false
    },
    {
      question: "How does the foundation ensure transparency?",
      answer: "All fees are paid directly to schools, ensuring full clarity on fund usage.",
      open: false
    },
    {
      question: "What impact has the foundation created so far?",
      answer: "We have sponsored the education of three bright and deserving students in our first year.",
      open: false
    },
    {
      question: "What is the expected payout for the coming year?",
      answer: "The expected payout is ₹4,16,070.",
      open: false
    },
    {
      question: "How can donors contribute?",
      answer: "Donors can support more children by contributing financially and sharing their donation screenshot for receipt issuance.",
      open: false
    }
  ];

  toggle(i: number) {
    this.faqs[i].open = !this.faqs[i].open;
  }
}
