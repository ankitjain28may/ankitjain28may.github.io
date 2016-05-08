function load () {
	document.getElementById('edit1').style="display:none;";
	
}
	
function edit(name)
	{
		var i=1;
		for (i = 0; i<=10; i++) {
			if(name==i)
			{
				var e="edit"+name;
				document.getElementById(name).style="display:none;";
				document.getElementById(e).style="display:block;";
				console.log("1");
			}
		}
	}

	function cancel(can)
	{
		var i=1;
		for (i = 0; i<=10; i++) {

			if(can==i)
			{

				var f="edit"+can;
				console.log(f);
				document.getElementById(f).style="display:none;";
				document.getElementById(can).style="display:block;";
				
			}
		}
	}

	function submitt(subm)
	{
				var k="edit_"+subm;
				var p="edit"+subm;
				console.log(k);
				var value=document.getElementById(k).value;
				var dis="display"+subm;
				var store='&nbsp;<i id="display0" class="fa fa-pencil fa-fw" aria-hidden="true"></i>'
				value=value+store;
				document.getElementById(dis).innerHTML=value;
				document.getElementById(p).style="display:none;";
				document.getElementById(subm).style="display:block;";
				
	}

	function add(num)
	{
	
				num="summary"+num;
				var ad=document.getElementById(num).innerHTML;
				ad='<div class="edit" id='+num+'>'+ad+'</div>';
				console.log(ad);
				document.getElementById(num).insertAdjacentHTML('beforebegin',ad);
		
	}
	function editt()
	{
		document.createElement
		
	}

	function modal()
	{
		document.getElementById("myModal").style="display:block";
	}

	function closee()
	{
		document.getElementById("myModal").style="display:none";
	}
