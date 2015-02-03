angular.module('gm.typeaheadDropdown', ['gm.typeaheadDropdown.tpl', 'ui.bootstrap'])
.directive('typeaheadDropdown', function() {
	return {
		templateUrl:'templates/typeaheadDropdown.tpl.html',
		scope: {
			model:'=ngModel',
			getOptions:'&options',
			config:'=?'
		},
		replace:true,
		controller: ['$scope', function($scope) {
			$scope.config = angular.extend({
				modelLabel:"name",
				optionLabel:"name"
			}, $scope.config);
			
			var arrayOrPromise = $scope.getOptions();

			if(arrayOrPromise.then)
				arrayOrPromise.then(setOptions);
			else if(arrayOrPromise.result)
				arrayOrPromise.result.then(setOptions);
			else
				setOptions(arrayOrPromise);
			
			function setOptions(options) {
				$scope.options = options;
			}

			$scope.onSelect = function($item, $model, $label) {
				angular.extend($scope.model, $item);
				$scope.model[$scope.config.modelLabel] = $item[$scope.config.optionLabel];
			}
		}]
	}
})