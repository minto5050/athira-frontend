function APIClient(endpoint) {
    this.url = endpoint;
    window._api = this;
}
APIClient.prototype = {
    constructor: APIClient,
	search:function(isbn){
		
	},
	getAll:function(callback){
		$.ajax({method:'GET',url:_api.url+'/bookstore/getAll',success:callback})
	},
	get: function(){
		
	},
	checkout: function(cartJson){
		alert("checkout");
		$.post('/bookstore/checkout/GET_FIVE', cartJson, function(response){ 
			alert("success");
			//$("#mypar").html(response.amount);
		});
	}
	
};