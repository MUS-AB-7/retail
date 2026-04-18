package com.retail.retail_ordering.service.serviceImpl;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.retail.retail_ordering.dto.AddToCartRequest;
import com.retail.retail_ordering.entity.Cart;
import com.retail.retail_ordering.entity.CartItem;
import com.retail.retail_ordering.entity.Product;
import com.retail.retail_ordering.entity.User;
import com.retail.retail_ordering.repository.CartItemRepository;
import com.retail.retail_ordering.repository.CartRepository;
import com.retail.retail_ordering.repository.ProductRepository;
import com.retail.retail_ordering.repository.UserRepository;
import com.retail.retail_ordering.service.CartService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

        private final CartRepository cartRepository;
        private final ProductRepository productRepository;
        private final UserRepository userRepository;
        private final CartItemRepository cartItemRepository;

        @Override
        public Cart addToCart(AddToCartRequest request) {

                User user = userRepository.findById(request.getUserId())
                                .orElseThrow(() -> new RuntimeException("User not found"));

                Cart cart = cartRepository.findByUser(user)
                                .orElseGet(() -> {
                                        Cart newCart = new Cart();
                                        newCart.setUser(user);
                                        newCart.setItems(new ArrayList<>());
                                        return cartRepository.save(newCart);
                                });

                Product product = productRepository.findById(request.getProductId())
                                .orElseThrow(() -> new RuntimeException("Product not found"));

                CartItem existingItem = cart.getItems().stream()
                                .filter(i -> i.getProduct().getId().equals(product.getId()))
                                .findFirst()
                                .orElse(null);

                if (existingItem != null) {

                        existingItem.setQuantity(existingItem.getQuantity() + request.getQuantity());
                        cartItemRepository.save(existingItem);

                } else {

                        CartItem item = CartItem.builder()
                                        .product(product)
                                        .quantity(request.getQuantity())
                                        .cart(cart)
                                        .build();

                        cartItemRepository.save(item);
                        cart.getItems().add(item);
                }

                return cartRepository.save(cart);
        }

        @Override
        public Cart getCart(Long userId) {

                User user = userRepository.findById(userId)
                                .orElseThrow(() -> new RuntimeException("User not found"));

                return cartRepository.findByUser(user)
                                .orElseThrow(() -> new RuntimeException("Cart not found"));
        }

        @Override
        public void removeItem(Long cartItemId) {

                cartItemRepository.deleteById(cartItemId);
        }
}