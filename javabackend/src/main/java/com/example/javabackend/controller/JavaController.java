package com.example.javabackend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*") // Allow CORS from all origins (for development)
public class JavaController {

    @GetMapping("/java-api")
    public Map<String, String> getMessage() {
        return Collections.singletonMap("message", "Hello from Java backend!");
    }
}
