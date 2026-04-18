package com.retail.retail_ordering.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.retail.retail_ordering.entity.Cart;
import com.retail.retail_ordering.entity.User;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {

    Optional<Cart> findByUser(User user);

}