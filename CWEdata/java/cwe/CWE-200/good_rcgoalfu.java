
import io.swagger.client.ApiClient;
import io.swagger.client.Configuration;


import io.swagger.client.model.ModelApiResponse;

import java.util.HashMap;
import java.util.Map;

  private ApiClient apiClient;
  public PetApi() {
  }
  public PetApi(ApiClient apiClient) {
  }
  public ApiClient getApiClient() {
  }
  public void setApiClient(ApiClient apiClient) {
  }
  /**
   * 
   * @throws ApiException if fails to make API call
  public void addPet(Pet body) throws ApiException {
    addPetWithHttpInfo(body);

   * Add a new pet to the store
   * @param body Pet object that needs to be added to the store (required)
   */
    Object localVarPostBody = body;
    // verify the required parameter 'body' is set
      throw new ApiException(400, "Missing the required parameter 'body' when calling addPet");
    
    String localVarPath = "/pet";
    // query params
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();

    
    final String[] localVarAccepts = {
    };

      "application/json", "application/xml"
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
    String[] localVarAuthNames = new String[] { "petstore_auth" };

  }
   * Deletes a pet
   * @param petId Pet id to delete (required)
   * @throws ApiException if fails to make API call
  public void deletePet(Long petId, String apiKey) throws ApiException {
    deletePetWithHttpInfo(petId, apiKey);

   * Deletes a pet
   * @param petId Pet id to delete (required)
   * @throws ApiException if fails to make API call
  public ApiResponse<Void> deletePetWithHttpInfo(Long petId, String apiKey) throws ApiException {
    
    if (petId == null) {
    }
    // create path and map variables
      .replaceAll("\\{" + "petId" + "\\}", apiClient.escapeString(petId.toString()));
    // query params
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();

    if (apiKey != null)

    final String[] localVarAccepts = {
    };

      
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
    String[] localVarAuthNames = new String[] { "petstore_auth" };

  }
   * Finds Pets by status
   * @param status Status values that need to be considered for filter (required)
   * @throws ApiException if fails to make API call
  public List<Pet> findPetsByStatus(List<String> status) throws ApiException {
      }
  /**
   * Multiple status values can be provided with comma separated strings
   * @return ApiResponse&lt;List&lt;Pet&gt;&gt;
   */
    Object localVarPostBody = null;
    // verify the required parameter 'status' is set
      throw new ApiException(400, "Missing the required parameter 'status' when calling findPetsByStatus");
    
    String localVarPath = "/pet/findByStatus";
    // query params
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();


    
      "application/xml", "application/json"
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
    final String[] localVarContentTypes = {
    };


    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @return List&lt;Pet&gt;
   * @deprecated
  @Deprecated
    return findPetsByTagsWithHttpInfo(tags).getData();

   * Finds Pets by tags
   * @param tags Tags to filter by (required)
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<List<Pet>> findPetsByTagsWithHttpInfo(List<String> tags) throws ApiException {
    
    if (tags == null) {
    }
    // create path and map variables

    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "tags", tags));
    
    final String[] localVarAccepts = {
    };

      
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
    String[] localVarAuthNames = new String[] { "petstore_auth" };
    GenericType<List<Pet>> localVarReturnType = new GenericType<List<Pet>>() {};
      }
   * Find pet by ID
   * @param petId ID of pet to return (required)
   * @throws ApiException if fails to make API call
  public Pet getPetById(Long petId) throws ApiException {
      }
  /**
   * Returns a single pet
   * @return ApiResponse&lt;Pet&gt;
   */
    Object localVarPostBody = null;
    // verify the required parameter 'petId' is set
      throw new ApiException(400, "Missing the required parameter 'petId' when calling getPetById");
    
    String localVarPath = "/pet/{petId}"

    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    
      "application/xml", "application/json"
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
    final String[] localVarContentTypes = {
    };


    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
  /**
   * 
   * @throws ApiException if fails to make API call
  public void updatePet(Pet body) throws ApiException {
    updatePetWithHttpInfo(body);

   * Update an existing pet
   * @param body Pet object that needs to be added to the store (required)
   */
    Object localVarPostBody = body;
    // verify the required parameter 'body' is set
      throw new ApiException(400, "Missing the required parameter 'body' when calling updatePet");
    
    String localVarPath = "/pet";
    // query params
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();

    
    final String[] localVarAccepts = {
    };

      "application/json", "application/xml"
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
    String[] localVarAuthNames = new String[] { "petstore_auth" };

  }
   * Updates a pet in the store with form data
   * @param petId ID of pet that needs to be updated (required)
   * @param status Updated status of the pet (optional)
   */

  }
  /**
   * 
   * @param name Updated name of the pet (optional)
   * @throws ApiException if fails to make API call
  public ApiResponse<Void> updatePetWithFormWithHttpInfo(Long petId, String name, String status) throws ApiException {
    
    if (petId == null) {
    }
    // create path and map variables
      .replaceAll("\\{" + "petId" + "\\}", apiClient.escapeString(petId.toString()));
    // query params
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();

    
      localVarFormParams.put("name", name);
      localVarFormParams.put("status", status);
    final String[] localVarAccepts = {
    };

      "application/x-www-form-urlencoded"
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
    String[] localVarAuthNames = new String[] { "petstore_auth" };

  }
   * uploads an image
   * @param petId ID of pet to update (required)
   * @param file file to upload (optional)
   * @throws ApiException if fails to make API call
  public ModelApiResponse uploadFile(Long petId, String additionalMetadata, File file) throws ApiException {
      }
  /**
   * 
   * @param additionalMetadata Additional data to pass to server (optional)
   * @return ApiResponse&lt;ModelApiResponse&gt;
   */
    Object localVarPostBody = null;
    // verify the required parameter 'petId' is set
      throw new ApiException(400, "Missing the required parameter 'petId' when calling uploadFile");
    
    String localVarPath = "/pet/{petId}/uploadImage"

    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    if (additionalMetadata != null)
if (file != null)

      "application/json"
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
    final String[] localVarContentTypes = {
    };


    return apiClient.invokeAPI(localVarPath, "POST", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
}