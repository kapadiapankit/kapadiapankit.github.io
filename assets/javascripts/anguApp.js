(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	var gems = [{
		name: "Ruby",
		price : 2.95,
		description: "Short description to the product. Ruby gem is the best gem you can buy.",
		active: true,
		images: [
			{
				small: "assets/images/gem.png"
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "Pankit"
			},
			{
				stars: 3,
				body: "Not a good finish.",
				author: "Ashwin"
			}
		]
	},{
		name: "Ruby 1",
		price : 2.90,
		description: "Short description to the product 1. Ruby 1 gem is the best gem you can buy.",
		active: false,
		images: [
			{
				small: "assets/images/gem.png"
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "Pankit"
			},
			{
				stars: 3,
				body: "Not a good finish.",
				author: "Ashwin"
			}
		]
	}]

})();

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('assets/javascripts/sw.js')
  .then(function(swReg) {
    console.log('Service Worker is registered', swReg);

    swRegistration = swReg;
  })
  .catch(function(error) {
    console.error('Service Worker Error', error);
  });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}

document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});