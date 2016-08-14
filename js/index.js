function all()
{
	$("#Education").hide();
	$("#Experience").hide();
	$("#Profile").hide();
	$("#Project").hide();
	$("#Contact").hide();

}
function start()
{
	all();
	$("#Profile").show();

}
function education() {
	all();
	$("#Education").show();
}
function experience() 
{
	all();
	$("#Experience").show();
	move();
}
function project() 
{
	all();
	$("#Project").show();
}
function contact() 
{
	all();
	$("#Contact").show();
}



function move()
{
	var elem = document.getElementsByClassName("myBar");
	var lb=document.getElementsByClassName("label");
	var value=0;
	var i=0;
	for(i=0;i<elem.length;i++)
	{
		value=lb[i].innerHTML;
		value=value.substring(0,2)
		progress(elem[i],value);
		lb[i].innerHTML=value*1+'%';
	}
}


function progress(el,value) {
  
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == value) {
      clearInterval(id);
    } else {
      width++; 
      el.style.width = width + '%'; 

    }
  }
}