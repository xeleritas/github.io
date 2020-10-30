//


	function jkcard() {
//width		
//		document.getElementById("panel1").value = 0.125 ;		
//		document.getElementById("panel2").value = 3.5 ;
//		document.getElementById("panel3").value = 0.125 ;
//		document.getElementById("panel4").value = 0 ;
//		document.getElementById("panel5").value = 0 ;		
//		document.getElementById("panel6").value = 0 ;
//height
//		document.getElementById("row1").value = 0.125 ;		
//		document.getElementById("row2").value = 2 ;
//		document.getElementById("row3").value = 0.125 ;
//		document.getElementById("row4").value = 0 ;
//		document.getElementById("row5").value = 0 ;
		
		document.getElementById("sW").value = 3.5 ;
		document.getElementById("sH").value = 2 ;
		
//inner text
		document.getElementById("panel1txt").innerText = 'bleed' ;
		document.getElementById("panel2txt").innerText = 'Width' ;
		document.getElementById("panel3txt").innerText = 'bleed' ;
		document.getElementById("panel4txt").innerText = '-' ;
		document.getElementById("panel5txt").innerText = '-' ;
		document.getElementById("panel6txt").innerText = '-' ;
//
		document.getElementById("row1txt").innerText = 'bleed' ;
		document.getElementById("row2txt").innerText = 'Height' ;		
		document.getElementById("row3txt").innerText = 'bleed' ;
		document.getElementById("row4txt").innerText = '-' ;
		document.getElementById("row5txt").innerText = '-' ;			
		
			document.getElementById("Chk_card").checked = true;
			document.getElementById("Chk_pad").checked = false; 
			document.getElementById("Chk_letterhead").checked = false;
			document.getElementById("Chk_poster").checked = false; 	
			document.getElementById("Chk_ply").checked = false;			
			document.getElementById("Chk_folder").checked = false; 	
			document.getElementById("Chk_envelope").checked = false;
			document.getElementById("Chk_box").checked = false; 	
			document.getElementById("Chk_pages").checked = false; 	
			
			document.getElementById("chkPieces").checked = true;
			document.getElementById("chkBklt").checked = false; 	
			document.getElementById("chkPad").checked = false; 	
			document.getElementById("chkPages").checked = false;
			document.getElementById("chkReams").checked = false; 	
//2nd
			document.getElementById("Chk_card2").checked = true;
//			
		document.getElementById("qtySets").value = 1;
		document.getElementById("qtyPly").value = 1;	
//			
			document.getElementById('radYes').click() ;	
	}	

	function jkpad() {
		document.getElementById("sW").value = 5.5 ;
		document.getElementById("sH").value = 8.5 ;		
//
			document.getElementById("Chk_card").checked = false;
			document.getElementById("Chk_pad").checked = true; 
			document.getElementById("Chk_letterhead").checked = false;
			document.getElementById("Chk_poster").checked = false; 	
			document.getElementById("Chk_ply").checked = false;			
			document.getElementById("Chk_folder").checked = false; 	
			document.getElementById("Chk_envelope").checked = false;
			document.getElementById("Chk_box").checked = false; 	
			document.getElementById("Chk_pages").checked = false; 	
			
			document.getElementById("chkPieces").checked = false;
			document.getElementById("chkBklt").checked = false; 	
			document.getElementById("chkPad").checked = true; 	
			document.getElementById("chkPages").checked = false;
			document.getElementById("chkReams").checked = false; 
//2nd
			document.getElementById("Chk_pad2").checked = true;
//			
		document.getElementById("qtySets").value = 100;	
		document.getElementById("qtyPly").value = 1;				
//				
			document.getElementById('radYes').click() ;	
			}	
	
	function jkletterhead() {
//	
		document.getElementById("sW").value = 8.5 ;
		document.getElementById("sH").value = 11 ;
		
			document.getElementById("Chk_card").checked = false;
			document.getElementById("Chk_pad").checked = false; 
			document.getElementById("Chk_letterhead").checked = true;
			document.getElementById("Chk_poster").checked = false; 	

			document.getElementById("Chk_ply").checked = false;			
			document.getElementById("Chk_folder").checked = false; 	
			document.getElementById("Chk_envelope").checked = false;
			document.getElementById("Chk_box").checked = false; 	
			document.getElementById("Chk_pages").checked = false; 	
			
			document.getElementById("chkPieces").checked = false;
			document.getElementById("chkBklt").checked = false; 	
			document.getElementById("chkPad").checked = false; 	
			document.getElementById("chkPages").checked = false;
			document.getElementById("chkReams").checked = true; 	
//2nd
			document.getElementById("Chk_letterhead2").checked = true;
//				
		document.getElementById("qtySets").value = 500;	
		document.getElementById("qtyPly").value = 1;				
//				
			document.getElementById('radYes').click() ;	
			}	
			
	function jkposter() {
//		
		document.getElementById("sW").value = 18 ;
		document.getElementById("sH").value = 24 ;
		
			document.getElementById("Chk_card").checked = false;
			document.getElementById("Chk_pad").checked = false; 
			document.getElementById("Chk_letterhead").checked = false;
			document.getElementById("Chk_poster").checked = true; 	
			document.getElementById("Chk_ply").checked = false;			
			document.getElementById("Chk_folder").checked = false; 	
			document.getElementById("Chk_envelope").checked = false;
			document.getElementById("Chk_box").checked = false; 	
			document.getElementById("Chk_pages").checked = false; 	
			
			document.getElementById("chkPieces").checked = true;
			document.getElementById("chkBklt").checked = false; 	
			document.getElementById("chkPad").checked = false; 	
			document.getElementById("chkPages").checked = false;
			document.getElementById("chkReams").checked = false; 
//2nd
			document.getElementById("Chk_poster2").checked = true;
//	
		document.getElementById("qtySets").value = 1;	
		document.getElementById("qtyPly").value = 1;				
//				
			document.getElementById('radYes').click() ;	
			}	
	
	function jkfolder() {
//width		
		document.getElementById("panel1").value = 0.25 ;		
		document.getElementById("panel2").value = 9 ;
		document.getElementById("panel3").value = 9 ;
		document.getElementById("panel4").value = 0.75 ;
//		document.getElementById("panel5").value = 0.125 ;		
//		document.getElementById("panel6").value = 0 ;
//height
//		document.getElementById("row1").value = 0.125 ;		
		document.getElementById("row2").value = 12 ;
		document.getElementById("row3").value = 4 ;
//		document.getElementById("row4").value = 0 ;
//		document.getElementById("row5").value = 0 ;
//
		document.getElementById("sW").value = 9 ;
		document.getElementById("sH").value = 12 ;
		
			document.getElementById("Chk_card").checked = false;
			document.getElementById("Chk_pad").checked = false; 
			document.getElementById("Chk_letterhead").checked = false;
			document.getElementById("Chk_poster").checked = false; 		
			document.getElementById("Chk_folder").checked = true; 	
			document.getElementById("Chk_envelope").checked = false;
			document.getElementById("Chk_box").checked = false; 	
			document.getElementById("Chk_pages").checked = false; 	
			
			document.getElementById("chkPieces").checked = true;
			document.getElementById("chkBklt").checked = false; 	
			document.getElementById("chkPad").checked = false; 	
			document.getElementById("chkPages").checked = false;
			document.getElementById("chkReams").checked = false; 			
//2nd
			document.getElementById("Chk_folder2").checked = true;
//	
		document.getElementById("qtySets").value = 1;	
		document.getElementById("qtyPly").value = 1;				
//					
			document.getElementById('radYes').click() ;	
			}	
	
	function jkenvelope() { 
		document.getElementById("sW").value = 9.75 ;
		document.getElementById("sH").value = 4.25 ;	
//
			document.getElementById("Chk_card").checked = false;
			document.getElementById("Chk_pad").checked = false; 
			document.getElementById("Chk_letterhead").checked = false;
			document.getElementById("Chk_poster").checked = false; 	
			document.getElementById("Chk_ply").checked = false;			
			document.getElementById("Chk_folder").checked = false; 	
			document.getElementById("Chk_envelope").checked = true;
			document.getElementById("Chk_box").checked = false; 	
			document.getElementById("Chk_pages").checked = false; 	
			
			document.getElementById("chkPieces").checked = false;
			document.getElementById("chkBklt").checked = false; 	
			document.getElementById("chkPad").checked = false; 	
			document.getElementById("chkPages").checked = false;
			document.getElementById("chkReams").checked = true; 			
//2nd
			document.getElementById("Chk_envelope2").checked = true;
//	
		document.getElementById("qtySets").value = 500;	
		document.getElementById("qtyPly").value = 1;	
//				
			document.getElementById('radYes').click() ;	
			}
	
	function jkbox() {
		document.getElementById("panel1").value = 0.25 ;
		document.getElementById("panel2").value = 3 ;		
		document.getElementById("panel3").value = 5 ;
		document.getElementById("panel4").value = 3 ;
		document.getElementById("panel5").value = 5 ;		
		document.getElementById("panel6").value = 0.75 ;
		
		document.getElementById("row1").value = 0.75 ;
		document.getElementById("row2").value = 3 ;
		document.getElementById("row3").value = 7 ;
		document.getElementById("row4").value = 3 ;		
		document.getElementById("row5").value = 0.75 ;
		
		document.getElementById("panel1txt").innerText = 'bleed' ;
		document.getElementById("panel2txt").innerText = 'Breadth' ;		
		document.getElementById("panel3txt").innerText = 'Width' ;
		document.getElementById("panel4txt").innerText = 'Breadth' ;
		document.getElementById("panel5txt").innerText = 'Width' ;		
		document.getElementById("panel6txt").innerText = 'glueflap' ;
		
		document.getElementById("row1txt").innerText = 'flap' ;
		document.getElementById("row2txt").innerText = 'TopCover' ;
		document.getElementById("row3txt").innerText = 'Height' ;
		document.getElementById("row4txt").innerText = 'BotCover' ;		
		document.getElementById("row5txt").innerText = 'flap' ;
		
		document.getElementById("sW").value = 0 ;
		document.getElementById("sH").value = 0 ;
		document.getElementById("sizeBreadthA").value = 0 ;
		
			document.getElementById("Chk_card").checked = false;
			document.getElementById("Chk_pad").checked = false; 
			document.getElementById("Chk_letterhead").checked = false;
			document.getElementById("Chk_poster").checked = false; 	
			document.getElementById("Chk_ply").checked = false;			
			document.getElementById("Chk_folder").checked = false; 	
			document.getElementById("Chk_envelope").checked = false;
			document.getElementById("Chk_box").checked = true; 	
			document.getElementById("Chk_pages").checked = false; 	
			
			document.getElementById("chkPieces").checked = true;
			document.getElementById("chkBklt").checked = false; 	
			document.getElementById("chkPad").checked = false; 	
			document.getElementById("chkPages").checked = false;
			document.getElementById("chkReams").checked = false; 
//2nd, page2...
			document.getElementById("Chk_box2").checked = true;
//	
	// ---document.getElementById('radYes').click() ;			
		document.getElementById("qtySets").value = 1;	
		document.getElementById("qtyPly").value = 1;				
//				
			}
			
	function jkply() {
				document.getElementById("sW").value = 5.5 ;
		document.getElementById("sH").value = 8.5 ;	
//
			document.getElementById("Chk_card").checked = false;
			document.getElementById("Chk_pad").checked = false; 
			document.getElementById("Chk_letterhead").checked = false;
			document.getElementById("Chk_poster").checked = false; 	
			document.getElementById("Chk_ply").checked = true;			
			document.getElementById("Chk_folder").checked = false; 	
			document.getElementById("Chk_envelope").checked = false;
			document.getElementById("Chk_box").checked = false; 	
			document.getElementById("Chk_pages").checked = false; 	
			
			document.getElementById("chkPieces").checked = false;
			document.getElementById("chkBklt").checked = true; 	
			document.getElementById("chkPad").checked = false; 	
			document.getElementById("chkPages").checked = false;
			document.getElementById("chkReams").checked = false; 
//2nd
			document.getElementById("Chk_ply2").checked = true;
//		
		document.getElementById("qtySets").value = 50;	
		document.getElementById("qtyPly").value = 3;					
//					
			document.getElementById('radYes').click() ;	
			}
			
	function jkpages() {
				document.getElementById("sW").value = 8.5 ;
		document.getElementById("sH").value = 11 ;	
//
			document.getElementById("Chk_card").checked = false;
			document.getElementById("Chk_pad").checked = false; 
			document.getElementById("Chk_letterhead").checked = false;
			document.getElementById("Chk_poster").checked = false; 	
			document.getElementById("Chk_ply").checked = false;			
			document.getElementById("Chk_folder").checked = false; 	
			document.getElementById("Chk_envelope").checked = false;
			document.getElementById("Chk_box").checked = false; 	
			document.getElementById("Chk_pages").checked = true; 	
			
			document.getElementById("chkPieces").checked = false;
			document.getElementById("chkBklt").checked = false; 	
			document.getElementById("chkPad").checked = false; 	
			document.getElementById("chkPages").checked = true;
			document.getElementById("chkReams").checked = false;  	
//2nd
			document.getElementById("Chk_pages2").checked = true;
//				
		document.getElementById("qtySets").value = 1;	
		document.getElementById("qtyPly").value = 1;				
//				
			document.getElementById('radYes').click() ;	
			}
	

	




// magnitude -5radiobox

	function radVsmall() {
		document.getElementById("chkDigital").checked = true;
		document.getElementById("chkOffset").checked = false;
		document.getElementById("chkRgb").checked = true;
			document.getElementById("chkCmyk").checked = false;
			document.getElementById("chkWTurn").checked = true;
			document.getElementById("chkFrontback").checked = false;
		} 
	function radSmall() {
		document.getElementById("chkDigital").checked = false;
		document.getElementById("chkOffset").checked = true;
		document.getElementById("chkRgb").checked = false;
			document.getElementById("chkCmyk").checked = true;
			document.getElementById("chkWTurn").checked = true;
			document.getElementById("chkFrontback").checked = false;
		}  	
	function radMedium() {
		document.getElementById("chkDigital").checked = false;
		document.getElementById("chkOffset").checked = true;
		document.getElementById("chkRgb").checked = false;
			document.getElementById("chkCmyk").checked = true;
			document.getElementById("chkWTurn").checked = false;
			document.getElementById("chkFrontback").checked = true;
		} 
	function radLarge() {
		document.getElementById("chkDigital").checked = false;
		document.getElementById("chkOffset").checked = true;
		document.getElementById("chkRgb").checked = false;
			document.getElementById("chkCmyk").checked = true;
			document.getElementById("chkWTurn").checked = false;
			document.getElementById("chkFrontback").checked = true;
		} 			
	function radVLarge() {
		document.getElementById("chkDigital").checked = false;
		document.getElementById("chkOffset").checked = true;
		document.getElementById("chkRgb").checked = false;
			document.getElementById("chkCmyk").checked = true;
			document.getElementById("chkWTurn").checked = false;
			document.getElementById("chkFrontback").checked = true;
		} 
//
//



	






	
function myfunc() {
	  var x = document.getElementById("xdiv");
	  if (x.style.display === "none") {
		x.style.display = "block";
	  } else {
		x.style.display = "none";
	  }
	}








//loadFileAsText
function loadFileAsText() {
	document.getElementById("openOldSession").click(); 
		var fileToLoad = document.getElementById("fileToLoad").files[0];
		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) 
		{
			var textFromFileLoaded = fileLoadedEvent.target.result;
			document.getElementById("detotextbox").value = textFromFileLoaded;
		};
		fileReader.readAsText(fileToLoad, "UTF-8");			
	}
	
function destroyClickedElement(event) {
		document.body.removeChild(event.target);
	}


function openOldSession() {
	  var str = document.getElementById("detotextbox").value
	  var arr = str.split(",");
  
		document.getElementById("jobName").value = arr[0];
		document.getElementById("sessionDate").value = arr[1];
		document.getElementById("client").value = arr[2];
		document.getElementById("sW").value = arr[3];
		document.getElementById("sH").value = arr[4];
		document.getElementById("qtyPieces").value = arr[5];			  
		document.getElementById("shit2").value = arr[6];		
		}
	
// -Save
function totextArea() {
	  /* input box */
	  var inputs = document.getElementsByName("enput");
	  var text = "";
	  for (var i = 0; i < 4; i++) {
		text += inputs[i].getAttribute('aria-label') + inputs[i].value + "," + "\n";
	  }
	  /* text area */
	  document.getElementById("myTextarea").value = text;	  
}	
	
function mov01() {
//	  document.getElementById("inputFileNameToSaveAs").value = document.getElementById("jobName").value;	
		  document.getElementById("01").value = document.getElementById("jobName").value;	
		  document.getElementById("02").value = document.getElementById("sessionDate").value;
		  document.getElementById("03").value = document.getElementById("client").value;
		  document.getElementById("04").value = document.getElementById("sizeWidth").value;
		  document.getElementById("05").value = document.getElementById("sizeHeight").value;
		  document.getElementById("06").value = document.getElementById("shit").value;
		  document.getElementById("07").value = document.getElementById("shit2").value;
		  //				document.getElementById("mov02").click();	  
}

function mov02() {
			var value = [];
			var e = document.getElementsByName("errorId");
			for (a of e)
			  value.push(a.value);
			value = value.toString();
		//	console.log(value); 
			  document.getElementById("detotextbox").value = value;	
				document.getElementById("save").click();	  
}

function saveTextAsFile(){
//	var textToSave = document.getElementById("inputTextToSave").value;
		var textToSave = document.getElementById("detotextbox").value;
			var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
			var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
			var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
				var downloadLink = document.createElement("a");
					downloadLink.download = fileNameToSaveAs;
					downloadLink.innerHTML = "Download File";
					downloadLink.href = textToSaveAsURL;
					downloadLink.onclick = destroyClickedElement;
					downloadLink.style.display = "none";
					document.body.appendChild(downloadLink);
					downloadLink.click();
}
function destroyClickedElement(event){
	document.body.removeChild(event.target);
}









function openPage(evt, pageName) {
	var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
  
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
		tablinks = document.getElementsByClassName("tablinks"); 
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(pageName).style.display = "block"; 
	evt.currentTarget.className += " active";
}
	


	
	


	
			
			