package com.retail.retail_ordering.service;

import com.retail.retail_ordering.dto.AddToCartRequest;
import com.retail.retail_ordering.entity.Cart;

public interface CartService {

    Cart addToCart(AddToCartRequest request);

    Cart getCart(Long userId);

    void removeItem(Long cartItemId);

}
