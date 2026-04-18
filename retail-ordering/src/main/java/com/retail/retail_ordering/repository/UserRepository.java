package com.retail.retail_ordering.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.retail.retail_ordering.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
