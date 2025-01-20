package PAAV.Resume_Builder.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        // Fetch users from the database or in-memory list for demo purposes
        List<User> users = getUsers();  // Replace with real user fetching logic

        // Check if the user exists
        User user = users.stream()
                .filter(u -> u.getEmail().equals(loginRequest.getEmail()))
                .findFirst()
                .orElse(null);

        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        // Check if the password matches
        if (!user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid password");
        }

        return ResponseEntity.ok("Login successful");
    }

    // Sample method to represent fetching users (replace with actual database logic)
    private List<User> getUsers() {
        return List.of(
                new User("test@example.com", "password123"),
                new User("user@example.com", "mypassword")
        );
    }

    // Inner classes for request and user representation
    public static class LoginRequest {
        private String email;
        private String password;

        // Getters and setters
        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    public static class User {
        private String email;
        private String password;

        public User(String email, String password) {
            this.email = email;
            this.password = password;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
