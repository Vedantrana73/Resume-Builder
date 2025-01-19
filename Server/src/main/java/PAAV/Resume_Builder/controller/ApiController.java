package PAAV.Resume_Builder.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/profile")
    public String getProfile() {
        // Just a simple example to send user profile data.
        return "User Profile Data";
    }

    @GetMapping("/about-us")
    public String getAboutUs() {
        return "About Us information from backend";
    }
}
