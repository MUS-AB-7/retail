package com.retail.retail_ordering.dto;

import lombok.Data;

@Data
public class LoginRequest {

    private String email;
    private String password;

}