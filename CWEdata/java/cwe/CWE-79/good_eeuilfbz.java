package com.salesmanager.shop.admin.model.permission;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.Map;
@JsonInclude(JsonInclude.Include.NON_NULL)
    "name"
public class ShopGroup implements Serializable

    private List<String> name = null;
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    public List<String> getName() {
    }
    @JsonProperty("name")
        this.name = name;

    public Map<String, Object> getAdditionalProperties() {
    }
    @JsonAnySetter
        this.additionalProperties.put(name, value);
