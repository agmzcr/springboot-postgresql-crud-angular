package dev.agmzcr.usersspingboot.service;

import dev.agmzcr.usersspingboot.domain.User;

import java.util.List;

public interface IUserService {

    List<User> findAll();
    User findById(Long id);
    User create(User user);
    User update(Long id, User user);
    void delete(Long id);
}
