package com.example.back.util;

import lombok.experimental.UtilityClass;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;

import java.util.function.Supplier;

@UtilityClass
public class RestUtil {

    public static Supplier<ResourceNotFoundException> notFound(String message, long resourceId) {
        return () -> new ResourceNotFoundException(message + resourceId);
    }
}
