
function ranks(name, discount){
	this.name = name;
	this.discount = discount;
}


function members(name, rank, cart){
	this.name = name;
	this.rank = rank;
	this.cart = cart;
}

function products(name, price){
	this.name = name;
	this.price = price;
	this.final_price;
}

function cart(rank){
	this.products = [];
	this.current_rank = rank;
	this.add_item = function(product){
		// after push recheck the member's rank, and apply discount
		// check special pricing rule, need a switch statement
		this.products.push(product);	
		switch(rank.name) {
		  case "associate":
		    // code block
		    var santa_cruz_len = 0;
		    $.each(this.products, function(i, v){
		    	if (v.name == "SANTA CRUZ") {
		    		santa_cruz_len += 1;
		    	}
		    })
		    $.each(this.products, function(i, v){
		    	if (v.name != "SANTA CRUZ") {
		    		v.final_price = (v.price * (1-(rank.discount/100)));
		    	} else {
		    		v.final_price = (v.price * 1);
		    	}
		    })
		    
		    if (santa_cruz_len >= 3) {
	    		var promo_name = "Get a 3 for 2 deal on SANTA CRUZ"
			    var total = Math.round(santa_cruz_len/3);
				exist = this.products.filter( function(v,i) {
				  return v.name == promo_name;
				});
			    if (!exist.length) {
			    	var discount = new products(promo_name, -185.50);
			    	discount.final_price = -185.50 ;
			    	this.products.push(discount)
			    } else {
			    	// find back the discount
				   $.each(this.products, function(i, v){
				    	if (v.name == promo_name) {
				    		v.final_price = -185.50 * total ;
				    	}
				    })
			    }
		    } 
		
		    break;
		  case "platinum":
		    // code block
    	    var ironhide_catridge_len = 0;
    	    var kone_len = 0;
		    $.each(this.products, function(i, v){
		    	if (v.name == "Ironhide Cartridge") {
		    		ironhide_catridge_len += 1;
		    	}
		    		kone_len += 1;
		    })
		    $.each(this.products, function(i, v){

	    	 	if (["Ironhide Cartridge" , "Ironhide" , "Kone"].indexOf(v.name) > -1) {
		    		
	    	 		if (v.name == "Ironhide") {
	    	 			v.final_price = 3000.00;
	    	 		} else {

		    		v.final_price = (v.price * 1);
	    	 		}

		    	} else {
		    		v.final_price = (v.price * (1-(rank.discount/100)));
		    	}
		    })
		    if (ironhide_catridge_len >= 5) {
		    	var promo_name = "Get a 5 for 4 deal on Ironhide Cartridge"
			    var total = Math.round(ironhide_catridge_len/5);
				exist = this.products.filter( function(v,i) {
				  return v.name == promo_name;
				});
			    if (!exist.length) {
			    	var discount = new products(promo_name, -529.99);
			    	discount.final_price = -529.99 ;
			    	this.products.push(discount)
			    } else {
			    	// find back the discount
				   $.each(this.products, function(i, v){
				    	if (v.name == promo_name) {
				    		v.final_price = -529.99 * total ;
				    	}
				    })
			    }
		    }
		    if (kone_len >= 5) {
				   $.each(this.products, function(i, v){
				    	if (v.name == "Kone") {
				    		v.final_price = 2888.99;
				    	}
				    })
		    }
		    break;
		  case "diamond":
		    // code block
    	    var ironhide_catridge_len = 0;
    	    var kone_len = 0;
		    $.each(this.products, function(i, v){
		    	if (v.name == "Ironhide Cartridge") {
		    		ironhide_catridge_len += 1;
		    	}
		    		kone_len += 1;
		    })
		    $.each(this.products, function(i, v){

	    	 	if (["Ironhide Cartridge" , "Ironhide" , "Kone"].indexOf(v.name) > -1) {
		    		
	    	 		if (v.name == "Ironhide") {
	    	 			v.final_price = 2500.00;
	    	 		} else {

		    		v.final_price = (v.price * 1);
	    	 		}

		    	} else {
		    		v.final_price = (v.price * (1-(rank.discount/100)));
		    	}
		    })
		    if (ironhide_catridge_len >= 3) {
		    	var promo_name = "Get a 3 for 2 deal on Ironhide Cartridge"
			    var total = Math.round(ironhide_catridge_len/3);
				exist = this.products.filter( function(v,i) {
				  return v.name == promo_name;
				});
			    if (!exist.length) {
			    	var discount = new products(promo_name, -529.99);
			    	discount.final_price = -529.99 ;
			    	this.products.push(discount)
			    } else {
			    	// find back the discount
				   $.each(this.products, function(i, v){
				    	if (v.name == promo_name) {
				    		v.final_price = -529.99 * total ;
				    	}
				    })
			    }
		    }
		    if (kone_len >= 3) {
				   $.each(this.products, function(i, v){
				    	if (v.name == "Kone") {
				    		v.final_price = 2588.99;
				    	}
				    })
		    }
		  break;
		  default:
		    // code block
		}
		    var all_final_price = 0;
		    	$.each(this.products, function(i, v){
		    		all_final_price += v.final_price;
		     	})
		    console.log("total product final_price = " + all_final_price );
		    $("h2#total").html(all_final_price.toFixed(2))
		// else apply the normal discount rule
	
	}
}
	var associate = new ranks("associate", 5);
	var platinum = new ranks("platinum", 15);
	var diamond = new ranks("diamond", 20);
	var santa_cruz = new products("SANTA CRUZ", 185.50)
	var ironhide_catridge = new products("Ironhide Cartridge", 529.99)
	var ironhide = new products("Ironhide", 3299.99);
	var kone = new products("Kone", 3488.99);
	var fox_float = new products("Fox + Float", 66.00);
	var shimano = new products("Shimano+ Derailuer", 67.60)
	var zcart = new cart(diamond);
	var damien = new members("damien", diamond, zcart);

	var ranking_list = [associate, platinum, diamond]
	var product_list = [santa_cruz, ironhide, ironhide_catridge, kone, fox_float, shimano]

$(document).ready(function(){

	$(ranking_list).each(function(i,v){
		var option = "<option value='"+v.name+"'>"+v.name+"</option>"
		$("select[name='ranking']").append(option)
	})
	var name = $("input[name='username']").val()
	var rank = $("select[name='ranking']").val() 
	var selected_rank 
	var customer_cart
	var customer
	$("button").click(function(){
	 name = $("input[name='username']").val()
	 rank = $("select[name='ranking']").val() 
		$("h2#username").html(name + " ("+ rank + ")") 
		$("tbody#products").show()

	    selected_rank = $(ranking_list).filter(function(i,v) {
			return v.name == rank;
		})
	    customer_cart = new cart(selected_rank[0])
		customer = new members(name, selected_rank[0] , customer_cart)
	})
	$(product_list).each(function(i,v){
		var product = "<tr><td><h3>" +v.name+ "</h3></td><td> "+v.price+"</td><td><button class='add_item' data-name='"+v.name+"'>Add</button></td><td class='qty' data-name='"+v.name+"'>0</td></tr>"
		$("tbody#products").append(product)
	})
	$("button.add_item").on("click", function(){
		var product_name = $(this).attr("data-name") 
		var selected_product = $(product_list).filter(function(i,v) {
			return v.name === product_name;
		})

		customer.cart.add_item(selected_product[0])
		var html_qty = $("td.qty[data-name='"+product_name+"']").html() 
		var qty = parseInt(html_qty) + 1 
		$("td.qty[data-name='"+product_name+"']").html(qty) 
		console.log(customer.cart.products)
	})

})