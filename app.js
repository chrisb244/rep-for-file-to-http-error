/*
(function() {
'use strict';
	
angular
	.module('CounterApp', []);
	.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
	$scope.onceCounter = 0;


	$scope.upCounter = function () {
		setTimeout(function () {
			$scope.$apply(function () {
				$scope.counter++;
				console.log("Counter incrementes");
			});
		}, 2000);
	};

	

	$scope.upCounter = function () {
		setTimeout(function () {
			$scope.counter++;
			console.log("Counter incrementes");
			$scope.$digest();
		}, 2000);
	};
*/

/*	
	$scope.counter = 0;
	$scope.name = "Chris";
	
	$scope.showNumberOfWatchers = function () {
		console.log("# of watchers: ", $scope.$$watchersCount);
	};
	
	$scope.countOnce = function () {
		$scope.onceCounter = 1;
	};
	
	$scope.$watch(function () {
		console.log("Digest Loop Fired");
	});
	
	/* $scope.$watch('onceCounter', function (newValue, oldValue) {
		console.log("onceCounter value: ", oldValue);
		console.log("onceCounter value: ", newValue);
	});
	
	$scope.$watch('counter', function (newValue, oldValue) {
		console.log("counter old value: ", oldValue);
		console.log("counter new value: ", newValue);
	}); 
*/

/*
}
	
})();
*/

// ^^^ previous lectures in no particular order, idk :/ ^^^

/* lecture 16
(function () {
'use strict';

angular
.module('BindingApp', [])
.controller('BindingController', BindingController);

BindingController.$inject = ['$scope'];
function BindingController($scope) {
  $scope.firstName = "Chris";
  $scope.fullName = "";

  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers: ", $scope.$$watchersCount);
  };

  $scope.setFullName = function () {
    $scope.fullName = $scope.firstName + " " + "Brazda";
  };

  $scope.logFirstName = function () {
    console.log("First name is: ", $scope.firstName);
  };

  $scope.logFullName = function () {
    console.log("Full name is: ", $scope.fullName);
  };
  
 
}

})();
lecture 16 end*/

/* lecture 17
(function () {
'use strict';

var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", 
  "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", 
  "Pepto Bismol (Cookie flavor)"
];

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList2.push(newItem);
  };
}

})();
 end of lecture 17 */

/* lecture 18
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5Filter(value) {
	return value > 5;
}

var filteredNumberArray = numberArray.filter(above5Filter);
console.log("Filtered number array: ", filteredNumberArray);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping List: ", shoppingList);

var searchValue = "Bismol";
function containsFilter(value) {
	return value.indexOf(searchValue) !== -1;
}
var searchedShoppingList = shoppingList.filter(containsFilter);
console.log("Searched shopping list: ", searchedShoppingList);
*/

/*lecture 18 #2
  
(function () {
'use strict';

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList = shoppingList;
}

})();
*/

/*
//lecture 19
//Prototypal inheritance
var parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue"
  },
  walk: function () {
    console.log("walking!");
  }
};

var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("*** CHANGED: child.value = 'childValue'");
console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

 console.log("child.obj === parent.obj ? ", child.obj === parent.obj);

var grandChild = Object.create(child);
console.log("Grandchild: ", grandChild);
grandChild.walk();

// Function constructors
See my other course: HTML, CSS, and Javascript for Web Developers*/
/*Lecture #48
function Dog(name) {
  this.name = name;
  console.log("'this' is: ", this);
}

var myDog = new Dog("Max");
console.log("myDog: ", myDog);

// Not being used as a function constructor
Dog("Max2");*/

/*lecture 19 4
(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ParentController1', ParentController1)
.controller('ChildController1', ChildController1)
.controller('ParentController2', ParentController2)
.controller('ChildController2', ChildController2);

ParentController1.$inject = ['$scope'];
function ParentController1($scope) {
  $scope.parentValue = 1;
  $scope.pc = this;
  $scope.pc.parentValue = 1;
}


ChildController1.$inject = ['$scope'];
function ChildController1($scope) {
  console.log("$scope.parentValue: ", $scope.parentValue);
  console.log("CHILD $scope: ", $scope);
  
	
	$scope.parentValue = 5;
	console.log("*** CHANGED: $scope.parentValue = 5 ***");
	console.log("$scope.parentValue: ", $scope.parentValue);
	console.log($scope);
	
	console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
	$scope.pc.parentValue = 5;
	console.log("** CHANGED: $scope.pc.parentValue = 5; ***");
	console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
	console.log("$scope: ", $scope);
	
	console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);
}

// ** Controller As syntax
function ParentController2() {
  var parent = this;
  parent.value = 1;
}
ChildController2.$inject = ['$scope'];
function ChildController2($scope) {
  var child = this;
  child.value = 5;
  console.log("ChildController2 $scope: ", $scope);
}

})();
*/

//lecture 20 2
/*
(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
	var itemAdder = this;
	
	itemAdder.itemName = "";
	itemAdder.itemQuantity = "";
	
	itemAdder.addItem = function () {
		ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
	};
}

ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
	var showList = this;

	showList.items = ShoppingListService.getItems();
  
	showList.removeItem = function (itemIndex) {
		ShoppingListService.removeItem(itemIndex);
  };
}

function ShoppingListService() {
	var service = this;
	
	//list of shopping items
	var items = [];
	
	service.addItem = function (itemName, quantity) {
		var item = {
			name: itemName,
			quantity: quantity
		};
		items.push(item);
	};
	
	service.removeItem = function (itemIndex) {
		items.splice(itemIndex, 1);
	};
	
	service.getItems = function () {
		return items;
	};
}

})();
*/

//lecture 21 2
/*
(function () {
'use strict';

angular.module('ShoppingListDirectiveApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.factory('ShoppingListFactory', ShoppingListFactory)
.directive('listItemDescription', ListItemDescription)
.directive('listItem', ListItem);

function ListItem() {
	var ddo = {
		restrict: "E",
		templateUrl: 'listItem.html'
	};
	
	return ddo;
}

function ListItemDescription() {
	var ddo = {
		template: '{{ item.quantity}} of {{ item.name }}'
	};
	
	return ddo;
}

// LIST #1 - controller
ShoppingListController1.$inject = ['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory) {
  var list1 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list1.items = shoppingList.getItems();

  list1.itemName = "";
  list1.itemQuantity = "";

  list1.addItem = function () {
    shoppingList.addItem(list1.itemName, list1.itemQuantity);
  };

  list1.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
}


// LIST #2 - controller
ShoppingListController2.$inject = ['ShoppingListFactory'];
function ShoppingListController2(ShoppingListFactory) {
  var list2 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory(3);

  list2.items = shoppingList.getItems();

  list2.itemName = "";
  list2.itemQuantity = "";

  list2.addItem = function () {
    try {
      shoppingList.addItem(list2.itemName, list2.itemQuantity);
    } catch (error) {
      list2.errorMessage = error.message;
    }

  };

  list2.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
*/

//lecture 22 2
/*
(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.provider('ShoppingListService', ShoppingListServiceProvider)
.config(Config);

Config.$inject = ['ShoppingListServiceProvider'];
function Config(ShoppingListServiceProvider) {
	//saves chris from  himself
	ShoppingListServiceProvider.defaults.maxItems = 4;
}

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var list = this;

  list.items = ShoppingListService.getItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    try {
      ShoppingListService.addItem(list.itemName, list.itemQuantity);
    } catch (error) {
      list.errorMessage = error.message;
    }
  };

  list.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}

// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 5);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListServiceProvider() {
  var provider = this;

  provider.defaults = {
    maxItems: 5
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListService(provider.defaults.maxItems);

    return shoppingList;
  };
}

})();
*/

//lecture 24 2
/*
(function () {
'use strict';

angular.module('ShoppingListPromiseApp', [])
.controller('ShoppingListController', ShoppingListController)
.service('ShoppingListService', ShoppingListService)
.service('WeightLossFilterService', WeightLossFilterService);

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var list = this;

  list.items = ShoppingListService.getItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    ShoppingListService.addItem(list.itemName, list.itemQuantity);
  };

  list.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}

ShoppingListService.$inject = ['$q', 'WeightLossFilterService'];
function ShoppingListService($q, WeightLossFilterService) {
  var service = this;

  // List of shopping items
  var items = [];

  //service.addItem = function (name, quantity) {
  //  var promise = WeightLossFilterService.checkName(name);
  //
  //  promise.then(function (response) {
  //    var nextPromise = WeightLossFilterService.checkQuantity(quantity);
  //
  //    nextPromise.then(function (result) {
  //      var item = {
  //        name: name,
  //        quantity: quantity
  //      };
  //      items.push(item);
  //    }, function (errorResponse) {
  //      console.log(errorResponse.message);
  //    });
  //  }, function (errorResponse) {
  //    console.log(errorResponse.message);
  //  });
  //};


  /* service.addItem = function (name, quantity) {
    var promise = WeightLossFilterService.checkName(name);
  
    promise
    .then(function (response) {
      return WeightLossFilterService.checkQuantity(quantity);
    })
    .then(function (response) {
      var item = {
        name: name,
        quantity: quantity
      };
      items.push(item);
    })
    .catch(function (errorResponse) {
      console.log(errorResponse.message);
    });
  }; 


  service.addItem = function (name, quantity) {
    var namePromise = WeightLossFilterService.checkName(name);
    var quantityPromise = WeightLossFilterService.checkQuantity(quantity);

    $q.all([namePromise, quantityPromise]).
    then(function (response) {
      var item = {
        name: name,
        quantity: quantity
      };
      items.push(item);
    })
    .catch(function (errorResponse) {
      console.log(errorResponse.message);
    });
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
} 


WeightLossFilterService.$inject = ['$q', '$timeout'];
function WeightLossFilterService($q, $timeout) {
  var service = this;

  service.checkName = function (name) {
    var deferred = $q.defer();

    var result = {
      message: "go for it!"
    };

    $timeout(function () {
      // Check for cookies
      if (name.toLowerCase().indexOf('cookie') === -1) {
        deferred.resolve(result)
      }
      else {
        result.message = "Stay away from cookies, chris!";
        deferred.reject(result);
      }
    }, 3000);

    return deferred.promise;
  };


  service.checkQuantity = function (quantity) {
    var deferred = $q.defer();
    var result = {
      message: ""
    };

    $timeout(function () {
      // Check for too many boxes
      if (quantity < 6) {
        deferred.resolve(result);
      }
      else {
        result.message = "That's too much, Yaakov!";
        deferred.reject(result);
      }
    }, 1000);

    return deferred.promise;
  };
}

})();
*/

// lec 25 2
/*
(function () {
'use strict';

angular.module('MenuCategoriesApp', [])
.controller('MenuCategoriesController', MenuCategoriesController)
.service('MenuCategoriesService', MenuCategoriesService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com"); 


MenuCategoriesController.$inject = ['MenuCategoriesService'];
function MenuCategoriesController(MenuCategoriesService) {
  var menu = this;

  var promise = MenuCategoriesService.getMenuCategories();

  promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  menu.logMenuItems = function (shortName) {
    var promise = MenuCategoriesService.getMenuForCategory(shortName);

    promise.then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }; 

}


MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
function MenuCategoriesService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json"),
    });

    return response;
  };


  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };

}

})();
*/

//lec 28 2
/*
(function () {
'use strict';

angular.module('ShoppingListDirectiveApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.factory('ShoppingListFactory', ShoppingListFactory)
.directive('shoppingList', ShoppingList);

function ShoppingList() {
	var ddo = {
		templateUrl: 'shoppingList.html',
		scope: {
			list: '=myList',
			title: '@title'
		}
	};
	
	return ddo;
}
		

// LIST #1 - controller
ShoppingListController1.$inject = ['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  var origTitle = "Shopping List #1";
  list.title = origTitle + " (" + list.items.length + " items )";

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + " (" + list.items.length + " items )";
  };

  list.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
    list.title = origTitle + " (" + list.items.length + " items )";
  };
}


// LIST #2 - controller
ShoppingListController2.$inject = ['ShoppingListFactory'];
function ShoppingListController2(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory(3);

  list.items = shoppingList.getItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    try {
      shoppingList.addItem(list.itemName, list.itemQuantity);
    } catch (error) {
      list.errorMessage = error.message;
    }

  };

  list.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
*/

//lec 29 2
(function () {
'use strict';

angular.module('ShoppingListDirectiveApp', [])
.controller('ShoppingListController', ShoppingListController)
.factory('ShoppingListFactory', ShoppingListFactory)
// .controller('ShoppingListDirectiveController', ShoppingListDirectiveController)
.directive('shoppingList', ShoppingListDirective);


function ShoppingListDirective() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      items: '<',
      title: '@'
    },
    // controller: 'ShoppingListDirectiveController as list',
    controller: ShoppingListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function ShoppingListDirectiveController() {
  var list = this;

  list.cookiesInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };
}


ShoppingListController.$inject = ['ShoppingListFactory'];
function ShoppingListController(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  var origTitle = "Shopping List #1";
  list.title = origTitle + " (" + list.items.length + " items )";

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + " (" + list.items.length + " items )";
  };

  list.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
    list.title = origTitle + " (" + list.items.length + " items )";
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();