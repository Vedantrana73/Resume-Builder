package PAAV.Resume_Builder.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import PAAV.Resume_Builder.model.User;

@Service
public class UserService {

    private static final List<User> users = new ArrayList<>();

    public boolean isEmailAlreadyRegistered(String email) {
        return users.stream().anyMatch(user -> user.getEmail().equals(email));
    }

    public void registerUser(User user) {
        users.add(user);
    }
}
