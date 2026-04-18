package com.retail.retail_ordering.service;

import com.retail.retail_ordering.dto.OrderRequest;
import com.retail.retail_ordering.dto.OrderResponse;

public interface OrderService {

    OrderResponse placeOrder(OrderRequest request);

}