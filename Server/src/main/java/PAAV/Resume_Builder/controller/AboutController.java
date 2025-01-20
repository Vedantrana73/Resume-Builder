package PAAV.Resume_Builder.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AboutController {

    @GetMapping("/api/about")
    public AboutInfo getAboutInfo() {
        List<String> owners = Arrays.asList("Akshat Gohil", "Parth Patel", "Anuj Yadav", "Vedant Rana");
        return new AboutInfo(
                "Our mission is to empower job seekers by providing an easy-to-use, efficient, and free resume-building platform.",
                "We envision a world where job seekers have access to the tools they need to showcase their skills and experience confidently.",
                owners
        );
    }

    // Inner class to represent About information
    public static class AboutInfo {
        private final String mission;
        private final String vision;
        private final List<String> owners;

        public AboutInfo(String mission, String vision, List<String> owners) {
            this.mission = mission;
            this.vision = vision;
            this.owners = owners;
        }

        public String getMission() {
            return mission;
        }

        public String getVision() {
            return vision;
        }

        public List<String> getOwners() {
            return owners;
        }
    }
}
