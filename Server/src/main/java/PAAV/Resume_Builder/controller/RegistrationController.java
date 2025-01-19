package PAAV.Resume_Builder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import PAAV.Resume_Builder.model.User;
import PAAV.Resume_Builder.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class RegistrationController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if(userService.isEmailAlreadyRegistered(user.getEmail())) {
            return new ResponseEntity<>("Email already exists", HttpStatus.BAD_REQUEST);
        }

        if (!user.getPassword().equals(user.getConfirmPassword())) {
            return new ResponseEntity<>("Passwords do not match", HttpStatus.BAD_REQUEST);
        }

        userService.registerUser(user);
        return new ResponseEntity<>("Registration Successful", HttpStatus.OK);
    }
}
