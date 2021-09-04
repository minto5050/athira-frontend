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
	checkout:function(cartItems,coupon,callback){
	var cart = JSON.parse(cartItems);
		$.ajax({
			url: endpoint+'/bookstore/checkout/'+coupon,
			method:'POST',
			data: cart,
			success:callback
		})
	},
	saveBook:function(callback){
		$.ajax({url:_api.url+'/bookstore/saveBook',method:'POST',data:book,success:callback});
	}
};