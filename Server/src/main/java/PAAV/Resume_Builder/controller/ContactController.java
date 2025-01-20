package PAAV.Resume_Builder.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    // Endpoint to handle contact form submission
    @PostMapping("/submit")
    public String submitContactForm(@RequestBody ContactForm contactForm) {
        // In a real application, you would save this data to a database or send an email.
        System.out.println("Contact Form Submitted: " + contactForm);
        return "Thank you for contacting us! We will get back to you shortly.";
    }

    // Endpoint to get FAQs (this could also be static or stored in a database)
    @GetMapping("/faqs")
    public List<Faq> getFaqs() {
        return List.of(
            new Faq("How do I create a resume?", "To create a resume, simply choose a template from our selection, then fill in the required fields such as your personal details, education, work experience, and skills. Once you’re done, you can download your resume in PDF format."),
            new Faq("Is there a limit to how many resumes I can create?", "There’s no limit! You can create and download as many resumes as you need."),
            new Faq("How do I contact support if I have a problem?", "You can contact support by filling out the contact form on this page. Simply provide your name, email, and message, and our team will get back to you as soon as possible. If your issue is urgent, you can directly tap on email at the above addresses, and we'll make sure to reply within a couple of hours.")
        );
    }

    // ContactForm class to bind the data from the front-end form
    public static class ContactForm {
        private String name;
        private String email;
        private String message;

        // Getters and setters
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        @Override
        public String toString() {
            return "ContactForm{name='" + name + "', email='" + email + "', message='" + message + "'}";
        }
    }

    // Faq class to represent FAQ data
    public static class Faq {
        private String question;
        private String answer;

        public Faq(String question, String answer) {
            this.question = question;
            this.answer = answer;
        }

        public String getQuestion() {
            return question;
        }

        public void setQuestion(String question) {
            this.question = question;
        }

        public String getAnswer() {
            return answer;
        }

        public void setAnswer(String answer) {
            this.answer = answer;
        }
    }
}
