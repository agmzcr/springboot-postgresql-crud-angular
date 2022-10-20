package dev.agmzcr.usersspingboot.controller;

import dev.agmzcr.usersspingboot.domain.User;
import dev.agmzcr.usersspingboot.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private IUserService service;

    @GetMapping("/users")
    public List<User> findAllUsers() {
        return service.findAll();
    }

    @GetMapping("/users/{id}")
    public User findUser(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        return service.create(user);
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return service.update(id, user);
    }

    @DeleteMapping("/users/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable Long id) {
        service.delete(id);
    }
}
