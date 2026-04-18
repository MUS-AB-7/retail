package com.retail.retail_ordering.dto;

import lombok.Data;

@Data
public class AddToCartRequest {

    private Long userId;
    private Long productId;
    private int quantity;

}