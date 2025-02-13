package com.easyticket.easyticket.Repository;

import com.easyticket.easyticket.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User,String> {
    User save(User user);

    User findByEmail(String email);

    User findUserById(String id);
}
