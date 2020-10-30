//
	function updateArtwork1(val) {
		document.getElementById('artwork1').value = val;
		var art1 = parseFloat(document.getElementById("artwork1").value);
		var art2 = parseFloat(document.getElementById("artwork2").value);
		document.getElementById("gtlayout").value = art1 + art2 ;
	}
	function updateArtwork2(val) {
		document.getElementById('artwork2').value = val;
		var art1 = parseFloat(document.getElementById("artwork1").value);
		var art2 = parseFloat(document.getElementById("artwork2").value);
		document.getElementById("gtlayout").value = art1 + art2 ;	
	}
	function updateTypeface1(val) {
		document.getElementById('typeface1').value = val;
		var art1 = parseFloat(document.getElementById("typeface1").value);
		var art2 = parseFloat(document.getElementById("typeface2").value);
		document.getElementById("gtlayout2").value = art1 + art2 ;
	}
	function updateTypeface2(val) {
		document.getElementById('typeface2').value = val;
		var art1 = parseFloat(document.getElementById("typeface1").value);
		var art2 = parseFloat(document.getElementById("typeface2").value);
		document.getElementById("gtlayout2").value = art1 + art2 ;
	}
	//