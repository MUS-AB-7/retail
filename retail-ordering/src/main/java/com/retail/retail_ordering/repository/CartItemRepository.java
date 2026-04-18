package com.retail.retail_ordering.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.retail.retail_ordering.entity.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}