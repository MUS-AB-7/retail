package com.retail.retail_ordering.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.retail.retail_ordering.entity.User;
import com.retail.retail_ordering.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {

        User savedUser = userRepository.save(user);

        return ResponseEntity.ok(savedUser);
    }
}