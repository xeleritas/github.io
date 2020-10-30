
////////

//
		var slider = document.getElementById("complexity");
			var output = document.getElementById("shipping");
			output.innerHTML = slider.value; // Display the default slider value

			slider.value = 0;
			sliderInputChange();
				// Update the current slider value (each time you drag the slider handle)
			slider.oninput = sliderInputChange;	
			
	function sliderInputChange() {
		 var val = slider.value;
	  		var unit = 1;
		  	var optionNum;

				if (val <= 1) {
				document.getElementById("complex1").checked = true;	
			}		
			else if (val <= 2) {
				document.getElementById("complex2").checked = true;					
			}
			else if (val <= 3) {
				document.getElementById("complex3").checked = true;
			}
			else if (val <= 4) {
				document.getElementById("complex4").checked = true;
			}
			else if (val <= 5) {
				document.getElementById("complex5").checked = true;	
			}			
			else if (val <= 6) {
				document.getElementById("complex6").checked = true;					
			}
			else if (val <= 7) {
				document.getElementById("complex7").checked = true;
			}
			else if (val <= 8) {
				document.getElementById("complex8").checked = true;
			}
			else if (val <= 9) {
				document.getElementById("complex9").checked = true;	
			}
			else {
				document.getElementById("complex10").checked = true;
			}
//			

	}