
////////

//
		var slider = document.getElementById("myRange");
//		var output = document.getElementById("shipping");
			output.innerHTML = slider.value; // Display the default slider value

//			slider.value = 0;
			sliderInputChange();
			// Update the current slider value (each time you drag the slider handle)
			slider.oninput = sliderInputChange;	
			
	function sliderInputChange() {
		 var val = slider.value;
		//  var unit = 1;
		  var optionNum;

			if (val <= 10) {
//				optionNum = 1;
//				document.getElementById("rad0").checked = true;			
					document.getElementById("rad_digitalrgb").checked = true;	
			}
			if (val <= 100) {
				optionNum = 1;
				document.getElementById("rad0").checked = true;			
					document.getElementById("rad_digitalrgb").checked = true;	
			}			
			else if (val <= 300) {
				optionNum = 3;
				document.getElementById("rad1").checked = true;
						document.getElementById("rad1b").checked = true;
						document.getElementById("rad1c").checked = true;
							document.getElementById("rad_wtt").checked = true;	
								document.getElementById("rad_offsetcmyk").checked = true;								
									document.getElementById("FequalB").checked = true;						
			}
			else if (val <= 500) {
				optionNum = 5;
				document.getElementById("rad2").checked = true;				
						document.getElementById("rad2b").checked = true;
						document.getElementById("rad2c").checked = true;
							document.getElementById("rad_wtt").checked = true;	
								document.getElementById("rad_offsetcmyk").checked = true;								
									document.getElementById("FequalB").checked = true;	
						}
			else if (val <= 700) {
				optionNum = 7;
				document.getElementById("rad3").checked = true;
						document.getElementById("rad3b").checked = true;
							document.getElementById("rad_fb_prntng").checked = true;
								document.getElementById("rad_offsetcmyk").checked = true;								
									document.getElementById("FnotequalB").checked = true;	
			}
			else if (val <= 800) {
				optionNum = 8;	
				document.getElementById("rad4").checked = true;
						document.getElementById("rad4b").checked = true;
						document.getElementById("rad4c").checked = true;
						document.getElementById("FnotequalB").checked = true;
			}
			else if (val <= 900) {
				optionNum = 9;	
				document.getElementById("rad5").checked = true;	
						document.getElementById("rad5b").checked = true;
						document.getElementById("rad5c").checked = true;
						document.getElementById("FnotequalB").checked = true;
			}
			else {
				optionNum = 1234;
				document.getElementById("rad6").checked = true;
			}
//			
		output.innerHTML = optionNum ;
//		
		document.getElementById('qtyPieces').value = slider.value;
			var pcs = document.getElementById("qtyPieces").value;
			var sets = document.getElementById("qtySets").value;
			var ply = document.getElementById("qtyPly").value;
			var pages = document.getElementById("qtyPages").value;
		document.getElementById("qtyTotal").value = pcs * sets * ply * pages ;
		
		
	}
		
//document.getElementById("digi").style.color = 'blue';			
	