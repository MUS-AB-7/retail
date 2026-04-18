package com.retail.retail_ordering.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.retail.retail_ordering.dto.AddToCartRequest;
import com.retail.retail_ordering.entity.Cart;
import com.retail.retail_ordering.service.CartService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(@RequestBody AddToCartRequest request) {

        Cart cart = cartService.addToCart(request);

        return ResponseEntity.ok(cart);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Cart> getCart(@PathVariable Long userId) {

        return ResponseEntity.ok(cartService.getCart(userId));
    }

    @DeleteMapping("/item/{id}")
    public ResponseEntity<String> removeItem(@PathVariable Long id) {

        cartService.removeItem(id);

        return ResponseEntity.ok("Item removed");
    }
}