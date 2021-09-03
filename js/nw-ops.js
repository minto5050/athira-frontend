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
	post: function(){
		
	}
	
};