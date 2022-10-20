package dev.agmzcr.usersspingboot.service;

import dev.agmzcr.usersspingboot.domain.User;
import dev.agmzcr.usersspingboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<User> findAll() {
        return repository.findAllByOrderByIdAsc();
    }

    @Override
    public User findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public User create(User user) {
        return repository.save(user);
    }

    @Override
    public User update(Long id, User user) {
        return repository.findById(id).map(existingUser -> {
            existingUser.setName(user.getName());
            existingUser.setPassword(user.getPassword());
            return repository.save(existingUser);
        }).orElse(null);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
