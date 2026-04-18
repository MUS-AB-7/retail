package com.retail.retail_ordering.service.serviceImpl;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.retail.retail_ordering.dto.OrderItemRequest;
import com.retail.retail_ordering.dto.OrderRequest;
import com.retail.retail_ordering.dto.OrderResponse;
import com.retail.retail_ordering.entity.Order;
import com.retail.retail_ordering.entity.OrderItem;
import com.retail.retail_ordering.entity.Product;
import com.retail.retail_ordering.entity.User;
import com.retail.retail_ordering.repository.OrderRepository;
import com.retail.retail_ordering.repository.ProductRepository;
import com.retail.retail_ordering.repository.UserRepository;
import com.retail.retail_ordering.service.OrderService;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    @Override
    public OrderResponse placeOrder(OrderRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "User not found"));

        List<OrderItem> orderItems = new ArrayList<>();

        double totalAmount = 0;

        Order order = new Order();
        order.setUser(user);
        order.setOrderTime(LocalDateTime.now());

        for (OrderItemRequest itemRequest : request.getItems()) {

            Product product = productRepository.findById(itemRequest.getProductId())
                    .orElseThrow(() -> new RuntimeException("Product not found"));

            if (product.getStock() < itemRequest.getQuantity()) {
                throw new RuntimeException("Not enough stock for product: " + product.getName());
            }

            product.setStock(product.getStock() - itemRequest.getQuantity());
            productRepository.save(product);

            OrderItem orderItem = OrderItem.builder()
                    .product(product)
                    .quantity(itemRequest.getQuantity())
                    .price(product.getPrice())
                    .order(order)
                    .build();

            totalAmount += product.getPrice() * itemRequest.getQuantity();

            orderItems.add(orderItem);
        }

        order.setItems(orderItems);
        order.setTotalAmount(totalAmount);

        Order savedOrder = orderRepository.save(order);

        return OrderResponse.builder()
                .orderId(savedOrder.getId())
                .totalAmount(totalAmount)
                .message("Order placed successfully")
                .build();
    }
}
