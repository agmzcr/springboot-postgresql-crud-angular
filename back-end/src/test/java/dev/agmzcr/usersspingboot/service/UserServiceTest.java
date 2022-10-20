package dev.agmzcr.usersspingboot.service;

import dev.agmzcr.usersspingboot.domain.User;
import dev.agmzcr.usersspingboot.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {


    @Mock
    private UserRepository repository;

    @InjectMocks
    private UserService service;

    private User user1;
    private User user2;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);

        user1 = new User("user1", "user1");
        user2 = new User("user2", "user2");
    }

    @Test
    void findAll() {
        when(repository.findAllByOrderByIdAsc()).thenReturn(Arrays.asList(user1, user2));

        assertNotNull(service.findAll());

    }

    @Test
    void findById() {
        when(repository.findById(1L)).thenReturn(Optional.of(user1));

        assertNotNull(service.findById(1L));
    }

    @Test
    void create() {
        when(repository.save(any(User.class))).thenReturn(user1);

        assertNotNull(service.create(new User()));
    }

    @Test
    void update() {
        when(repository.findById(1L)).thenReturn(Optional.of(user1));

        service.update(1L, user2);

        assert(service.findById(1L).getName().matches("user2"));
    }

    @Test
    void delete() {
        service.delete(1L);

        verify(repository).deleteById(1L);
    }
}