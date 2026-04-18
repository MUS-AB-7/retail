package com.retail.retail_ordering.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.retail.retail_ordering.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}