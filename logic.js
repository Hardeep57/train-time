var tlist=''

function addTrainlist() {
	var tname= document.getElementById('train-name-input').value;
	var tdesc=document.getElementById('Destination-input').value;
	var ttime=document.getElementById('first-train-time-input').value;
	var tfreq=document.getElementById('Frequency-input').value;
	console.log(tname+tdesc+ttime+tfreq);
 filetrainvalues(tname, tdesc, ttime, tfreq);
  document.getElementById("trainform").reset();
}
function filetrainvalues(tname, tdesc, ttime, tfreq) {
	var r='<div>';
	 r += '</div>';
       var d= '<div class="row">';
       d +='<div class="col-md-2">'+tname;
        d +='</div>';
         d += '<div class="col-md-2">'+tdesc;
           d +='</div>';
            d +='<div class="col-md-2">'+ttime;
            d +='</div>';
            d +='<div class="col-md-2">'+tfreq;
            d +='</div>';
            d +='<div class="col-md-2">';
            d +='</div>';
            d +='</div>';
            console.log(d);
           // var nod= document.createTextNode(d);
           tlist +=d;
           document.getElementById('tablelist').innerHTML=tlist;
        }