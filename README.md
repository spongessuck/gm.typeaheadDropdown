# gm.typeaheadDropdown

Use this module when you want to combine the features of UI Bootstrap Typeaheads and Dropdowns.

You can use the following markup for a simple component:

    <typeahead-dropdown ng-model='selectedOption' options='options'></typeahead-dropdown>

The 'options' attribute must reference either an array of objects or a $q-like or $http promise that will return an array of objects when resolved.

By default, the directive will use a property 'name' in the object to use as the label for the model and the options. When an option is selected, the option's properties are extended onto the model.

An example of a valid 'options' property to use above could be the following:

    $scope.options = [
  		{ name:"Mary" },
  		{ name:"Jane" },
  		{ name:"John" },
  		{ name:"Fred" }
  	];

You can also use the 'config' attribute to set a custom property you want to use as the label for both the model and the options. It should reference an object with one or both of the following properties: modelLabel and optionLabel.

An example of a config object that tells the directive to show the 'label' property of the model, and the 'title' property of the options would look like:

		$scope.config = {
			modelLabel: "label",
			optionLabel: "title"
		}

The model will inherit a selected option's label property value onto its own label property, as well as any other properties the option has.

#Demo
[View on Plunker](http://plnkr.co/edit/fQYSBO?p=preview)
