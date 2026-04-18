package com.retail.retail_ordering.service;

import java.util.List;

import com.retail.retail_ordering.entity.Product;

public interface ProductService {
    
    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product addProduct(Product product);
}
