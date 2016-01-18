angular
    .module('starter.baseAPI', [])
    .factory('BaseAPI', ['$http', function($http) {

        return {

        	/**
        	 * GET request
        	 * **/
	        getRequest: function(requestUrl, requestData, successCallback, errorCallback, headers, paramsCallback) {
    				// Good to see Call Stack with breakpoint until here

    				// return is useful for synchronous request
    				return this.request("GET", requestUrl, requestData, successCallback, errorCallback, headers, paramsCallback);
    			},

        	/**
        	 * POST request
        	 * **/
	        postRequest: function(requestUrl, requestData, successCallback, errorCallback, headers, paramsCallback) {
              // Good to see Call Stack with breakpoint until here

              // return is useful for synchronous request
              return this.request("POST", requestUrl, requestData, successCallback, errorCallback, headers, paramsCallback);
	        },

        	/**
        	 * DELETE request
        	 * **/
	        deleteRequest: function(requestUrl, successCallback, errorCallback, headers, paramsCallback){
      				// Good to see Call Stack with breakpoint until here

      				// return is useful for synchronous request
      				return this.request("DELETE", requestUrl, undefined, successCallback, errorCallback, headers, paramsCallback);
	        },

        	/**
        	 * http request
        	 * **/
	        request: function(method, url, data, successCallback, errorCallback, headers, paramsCallback){

  			    // Good to see Call Stack with breakpoint until here

  		        return $http({
		                   method: method,
		                   url: url,
		                   data: data,
		                   headers: headers
		               }).
		               success(function(data, status, headers, config){
		                   console.log('success');
		                   if(successCallback){
		                       successCallback(data, status, headers, config, paramsCallback);
		                   }
		               }).
		               error(function(data, status, headers, config){
		            	   console.log('error');

                     if(data.httpCode==401){

                        return;
                     }
	                   if(errorCallback){
	                	   errorCallback(data, status, headers, config, paramsCallback);
	                   } else {
	                	   this.defaultErrorHandler(data, status, headers, config, paramsCallback);
	                   }
	               });

	        },
          uploadRequest: function(url, file, successCallback, errorCallback, paramsCallback){
            var fd = new FormData();
            fd.append(file.name, file);
            return $http.post(url, fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
            }).
            success(function(data, status, headers, config){
              console.log('success');
              if(successCallback){
                successCallback(data, status, headers, config, paramsCallback);
              }
            }).
            error(function(data, status, headers, config){
              console.log('error');
              if(errorCallback){
                errorCallback(data, status, headers, config, paramsCallback);
              }
            });

          },

	        // Error Handler

	        defaultErrorHandler: function(data, status, headers, config, paramsCallback){

			    // Good to see Call Stack with breakpoint until here

    				switch(status){
    				case 401:
    					//alert("What is 401 ?");
    					break;
    				case 403:
    					//alert("What is 403 ?");
    					break;
    				default:
    					//alert(errorThrown);
    				}
	        }

        }
  }]);
