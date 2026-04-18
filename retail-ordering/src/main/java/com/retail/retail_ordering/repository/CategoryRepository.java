package com.retail.retail_ordering.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.retail.retail_ordering.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
