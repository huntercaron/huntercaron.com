// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
  dropdown: {
    // specify the class used for active dropdowns
    active_class: 'open'
  }
});
$.stellar();

//Animations

$('.first-icon').click(function () {
    $(".first-icon").velocity("callout.swing");
});

$('.second-icon').click(function () {
    $(".second-icon").velocity("callout.swing");
});

$('.bar-logo-move').click(function () {
    $("#bar-logo").velocity("callout.swing");
});

$('.no-icon').click(function () {
    //$(".no-icon").velocity("transition.expandOut").delay(800).velocity("transition.expandIn");
    $(".second-icon").velocity("transition.bounceRightOut", 800).velocity("transition.expandIn", 400);
    $(".first-icon").velocity("transition.bounceLeftOut", 800).velocity("transition.expandIn", 400);
});

setInterval(function() {
  $(".cloud").velocity({ translateY: [ 3]}, 2000).velocity({ translateY: [ -3]}, 2000);
}, 200);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var app = angular.module('vegStore', ['ui.utils']);

app.directive("steps", function () {
    return {
        restrict: 'E',
        templateUrl: "../templates/steps.html"
    };
});

app.controller('ToggleController', function () {
    this.signUp = false;
    this.logIn = false; 
    
    this.toggleSignUp = function () {
       this.signUp = !this.signUp;
        this.logIn = false;
        OverviewCtrl();
    };
    
    this.toggleLogIn = function () {
       this.logIn = !this.logIn;
        this.signUp = false;
    };
});

app.controller('SignupController', ['$http', function ($http) {
    this.user = {};
    this.user.weekday = 'Thursday';
    
    this.updateWeekday = function () {
        if (this.user.town == 'Guelph')
            this.user.weekday = 'Wednesday';
        else
            this.user.weekday = "Thursday";
        return this.user.weekday;
    };
    
    this.addUser = function () {
        $http.put('users', this.user).success (function(data){
            this.user = {};
        });
        this.user = {};
    };
               
}]);

app.controller('LoginController', ['$http', function ($http) {
    this.cUser = {};
    this.attempts = 0;

    this.increment = function () {
        this.attempts++;
    };
    
    this.check = function () {
        this.cUser = {};
    };
    
               
}]);

app.controller('StoreController', ['$http', function ($http) {
    var store = this;
    store.products = [];
    store.inView = [];
    store.origins = [];
    store.temp = [];
    store.shipping = 5;
    store.subTotal = 0;
    store.total = store.subTotal + store.shipping;
    store.sorts = [];
    store.filterType = null;
    store.sortType = '';
    store.reverse = true;

    /*
    $http.get('products.json').success(function (data) {
        store.products = data;
    });
    */
    
    
    function fixSizes () {
        for (var i = 0; i < store.products.length; i++) {
            store.products[i].size = store.products[i].sizes[0];
            store.products[i].allSizes = [].concat(store.products[i].sizes);
            store.products[i].selectedSize = store.products[i].allSizes[0];
            store.products[i].sizes.shift();
            store.products[i].quantity = 1;
            
        }
    }
    
    store.toggleReverse = function () {
        store.reverse = !store.reverse;
    }
    
    store.unselect = function (product) {
        product.isSelected = false;
    };

    store.updateCart = function () {
        store.subTotal = 0;
        //product.price[store.calculateIndex(product.allSizes.indexOf(product.selectedSize))] * store.calcQuan(product.quantity) | currency
        for (var i = 0; i < store.products.length; i++) {
            if (store.products[i].isSelected == true)
                store.subTotal+= (store.products[i].price[store.calculateIndex(store.products[i].allSizes.indexOf(store.products[i].selectedSize))] * store.calcQuan(store.products[i].quantity));
        }
        store.total = store.subTotal + store.shipping;
        return store.subTotal;
        
    };
    
    store.calculateIndex = function (num) {
        if (num == -1)
            return 0;
        else
            return num;
    };
    
    store.calcQuan = function (num) {
        if (num === null)
            return 1;
        else
            return num;
    };
    
    store.products=[{"name":"Paula Red","price":[5.50,2.50],"category":"Fruits","subCategory":"Apples","isOrganic":true,"isLocal":true,"isOnSale":true,"isSoldOut":false,"isPrepared":false,"beforeSalePrice":null,"sizes":["3lb","4"],"origin":"Bousfields (Milton, Ontario)","isSelected":false},{"name":"Avocado","price":[2.25],"category":"Fruits","subCategory":"Avocados","isOrganic":false,"isLocal":false,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["1"],"origin":"Mexico","isSelected":false},{"name":"Blueberries","price":[4.50],"category":"Fruits","subCategory":"Berries","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"isPrepared":false,"beforeSalePrice":null,"sizes":["6 oz"],"origin":"U.S.","isSelected":false},{"name":"Strawberries","price":[5.50],"category":"Fruits","subCategory":"Berries","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"isPrepared":false,"beforeSalePrice":null,"sizes":["1 lb"],"origin":"U.S.","isSelected":false},{"name":"Cherries","price":[6.75],"category":"Fruits","subCategory":"Berries","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"isPrepared":false,"beforeSalePrice":null,"sizes":["1 lb"],"origin":"U.S.","isSelected":false},{"name":"Grapefruit-ruby","price":[1.45],"category":"Fruits","subCategory":"Citrus","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"isPrepared":false,"beforeSalePrice":null,"sizes":["1"],"origin":"U.S.","isSelected":false},{"name":"Lemons","price":[6.95,2.50],"category":"Fruits","subCategory":"Citrus","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"isPrepared":false,"beforeSalePrice":null,"sizes":["2 lb","3"],"origin":"U.S.","isSelected":false},{"name":"Limes","price":[2.25],"category":"Fruits","subCategory":"Citrus","isOrganic":false,"isLocal":false,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["4"],"origin":"U.S.","isSelected":false},{"name":"Apple Sauce","price":[5.50],"category":"Fruits","subCategory":"Jar","isOrganic":false,"isLocal":true,"isOnSale":false,"isSoldOut":false,"isPrepared":true,"beforeSalePrice":null,"sizes":["500 ml"],"origin":"Country Flavour (Ariss, Ontario)","isSelected":false},{"name":"Peaces","price":[9.75],"category":"Fruits","subCategory":"Jar","isOrganic":false,"isLocal":true,"isOnSale":false,"isSoldOut":false,"isPrepared":true,"beforeSalePrice":null,"sizes":["1 Litre"],"origin":"Country Flavour (Ariss, Ontario)","isSelected":false},{"name":"Pears","price":[9.75],"category":"Fruits","subCategory":"Jar","isOrganic":false,"isLocal":true,"isOnSale":false,"isSoldOut":false,"isPrepared":true,"beforeSalePrice":null,"sizes":["1 Litre"],"origin":"Country Flavour (Ariss, Ontario)","isSelected":false},{"name":"Red Seedless","price":[4.50],"category":"Fruits","subCategory":"Grapes","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["1 lb"],"origin":"U.S.","isSelected":false},{"name":"Green","price":[3.50],"category":"Fruits","subCategory":"Kiwi","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["1 lb"],"origin":"China","isSelected":false},{"name":"Rhubarb","price":[3.95],"category":"Fruits","subCategory":"Pink","isOrganic":false,"isLocal":true,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["1.5 lb"],"origin":"Mennonite Co-Op (Elmira, Ont)","isSelected":false},{"name":"Asparagus (chemical free)","price":[4.50],"category":"Vegetables","subCategory":"Greens","isOrganic":false,"isLocal":true,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["1 lb"],"origin":"Mennonite Co-Op (Elmira, Ont)","isSelected":false},{"name":"Field","price":[3.25],"category":"Vegetables","subCategory":"Carrots","isOrganic":true,"isLocal":true,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["2 lb"],"origin":"U.S.","isSelected":false},{"name":"Cauliflower","price":[4.95],"category":"Vegetables","subCategory":"Brussels","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["1"],"origin":"U.S.","isSelected":false},{"name":"Celery","price":[2.95],"category":"Vegetables","subCategory":"Greens","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["bunch"],"origin":"U.S.","isSelected":false},{"name":"Medium","price":[1.50],"category":"Vegetables","subCategory":"Garlic","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["2"],"origin":"U.S.","isSelected":false},{"name":"Black Kale","price":[2.95],"category":"Vegetables","subCategory":"Greens","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["bunch"],"origin":"U.S.","isSelected":false},{"name":"Green Kale","price":[2.95],"category":"Vegetables","subCategory":"Greens","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["bunch"],"origin":"U.S.","isSelected":false},{"name":"Baby Spinach (chemical free)","price":[4.95],"category":"Vegetables","subCategory":"Greens","isOrganic":true,"isLocal":false,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["5 oz"],"origin":"Mennonite Co-Op (Elmira, Ontario)","isSelected":false},{"name":"Brown Button","price":[2.95],"category":"Vegetables","subCategory":"Mushrooms","isOrganic":true,"isLocal":true,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["8 oz"],"origin":"Windmill Farms (Ashburn, Ontario)","isSelected":false},{"name":"Baby Shitake","price":[3.95],"category":"Vegetables","subCategory":"Mushrooms","isOrganic":true,"isLocal":true,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["8 oz"],"origin":"Weths (Ontario)","isSelected":false},{"name":"Portabello Caps - Large","price":[3.75],"category":"Vegetables","subCategory":"Mushrooms","isOrganic":true,"isLocal":true,"isOnSale":false,"isSoldOut":false,"beforeSalePrice":null,"sizes":["3"],"origin":"Windmill Farms (Ashburn, Ontario)","isSelected":false}];
    
    fixSizes();
    
    store.search = function (term) {
        for (item in store.products) {};
    };
    
    store.isSelect = function(product) {
            return product.isSelected === true;
    };
    
    store.inView = store.products;


}]);