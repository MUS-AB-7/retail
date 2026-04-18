package com.retail.retail_ordering.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OrderResponse {

    private Long orderId;
    private double totalAmount;
    private String message;

}