package PAAV.Resume_Builder.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {

    @GetMapping("/api/profile")
    public Profile getProfile() {
        // In a real application, this data could be fetched from a database or an authenticated user context.
        return new Profile("Akshat068", "akshatgohil@gmail.com", "XXXXX");
    }

    public static class Profile {
        private final String username;
        private final String email;
        private final String password;

        public Profile(String username, String email, String password) {
            this.username = username;
            this.email = email;
            this.password = password;
        }

        public String getUsername() {
            return username;
        }

        public String getEmail() {
            return email;
        }

        public String getPassword() {
            return password;
        }
    }
}
