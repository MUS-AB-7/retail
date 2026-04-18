package com.retail.retail_ordering.service.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.retail.retail_ordering.entity.Product;
import com.retail.retail_ordering.repository.ProductRepository;
import com.retail.retail_ordering.service.ProductService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow();
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

}
