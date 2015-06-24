/*
This is plugin helps when having a string with money charachters like '2.812,91€' that should be sortable
Find more informations on https://github.com/xremix/Datable-Money-Sort-Plugin
*/
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	    "money-number-pre": function ( a ) {
	    	//Get Number from Money String
	    	//Be sure to use the comma or a point, depending on what your numbers have as a seperator
	        //return Number(String(a).replace(/[^0-9\.]+/g,""));
	        return Number(String(a).replace(/[^0-9\,]+/g,""));
	    },
	    "money-number-asc": function ( a, b ) {
	        return a - b;
	    },
	    "money-number-desc": function ( a, b ) {
	        return b-a;
	    }
	});