package com.retail.retail_ordering.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.retail.retail_ordering.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
