package PAAV.Resume_Builder.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/api/home/carousel")
    public List<String> getCarouselItems() {
        // Return sample data for the carousel (you can replace with real data)
        return List.of("Item 1", "Item 2", "Item 3");
    }

    @GetMapping("/api/home/timeline")
    public List<String> getTimelineItems() {
        // Return sample data for the timeline
        return List.of("Event 1", "Event 2", "Event 3");
    }

    @GetMapping("/api/home/features")
    public List<String> getFeatures() {
        // Return sample data for the features section
        return List.of("Feature 1", "Feature 2", "Feature 3");
    }
}
