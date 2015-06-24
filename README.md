Datable Money-Sort Plugin
============
A plugin to sort money-strings in Datatable.

This helps when having a string with money charachters like `99.4499,11 €` that should be sortable. 
By default datatable is sorting the numbers as a string.

What datatables is doing:

- 998 €
- 994 €
- 99.4499,11 €

What the plugin is doing:


- 99.4499,11 €
- 998 €
- 994 €

#exmaple

```JS
$('#table').DataTable({
			data: _mydata,
			columns: [
				{
					data: 'make',
					title: 'Make'
				},{
					data: 'model',
					title: 'Model'
				},{
					data: 'year',
					title: 'Year'
				},{
					data: 'price',
					title: 'Price',
					render: function(data, type, row){
						return data +" $";
					},
					"type": "money-number" 
				}
			]
		});
	}
```

#Links

Fore more information please see:

- https://datatables.net/reference/option/columns.type
- https://www.datatables.net/plug-ins/sorting/