package PAAV.Resume_Builder.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TemplateController {

    @GetMapping("/api/templates")
    public List<String> getTemplates(@RequestParam String category) {
        if ("fresher".equalsIgnoreCase(category)) {
            return Arrays.asList(
                    "/images/Carousel1.webp", // URLs or paths for fresher templates
                    "/images/Carousel2.webp",
                    "/images/Carousel3.jpg",
                    "/images/Carousel1.webp",
                    "/images/Carousel2.webp"
            );
        }
        // Add more categories and template lists as required
        return Arrays.asList();
    }
}
