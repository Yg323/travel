function d2(e){
	e.preventDefault();
}
function d1(e){
	e.dataTransfer.setData("zzz", e.target.id);
}
function d3(e){
	e.preventDefault();
	var img=e.dataTransfer.getData("zzz");
	e.target.appendChild(document.getElementById(img));
}