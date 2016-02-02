// JavaScript Document

function carro1() {
	
	var acumuladas=0;
	var haa1= parseInt(document.getElementById('haa1').value);//horas a alquilar
	var acumuladas2=parseInt(haa1+acumuladas);//acumular horas
	var dtr=parseInt(acumuladas2*50500); //dinero recaudado para carro 1
	
	

document.getElementById('ha1').value=acumuladas2;
document.getElementById('vt1').value=dtr;

	
	//suma de horas
	<!--b.) inicializa las variables del carro2 y carro3 en las lineas 20 y 21   observando la del carro1 escrita en la linea 19   -->
	
	var carro1=parseInt(document.getElementById("ha1").value);
	var carro2=parseInt(document.getElementById("ha1").value);
	var carro3=parseInt(document.getElementById("ha1").value);
	
	
	
	var sumahoras=parseInt(carro1+carro2+carro3);
	
document.getElementById("sha").value=sumahoras;


	//sumar totales

	var vt1=parseInt(document.getElementById("vt1").value);
	var vt2=parseInt(document.getElementById("vt2").value);
	var vt3=parseInt(document.getElementById("vt3").value);
	
	var sumatotales=parseInt(vt1+vt2+vt3);
	
	document.getElementById("dtr").value=sumatotales;	
	
	var cpph=sumatotales/sumahoras
	document.getElementById('cpph').value=cpph;
	
	}
	
function carro2() {
	
	var acumuladas=0;
	var haa1= parseInt(document.getElementById('haa2').value);//horas a alquilar
	var acumuladas2=parseInt(haa1+acumuladas);//acumular horas
	var dtr=parseInt(acumuladas2*100250); //dinero recaudado para carro 1
	var cpph=parseInt(dtr/acumuladas2);
	

document.getElementById('ha2').value=acumuladas2;
document.getElementById('vt2').value=dtr;
document.getElementById('cpph').value=cpph;
	
	//suma de horas
	
	
	var carro1=parseInt(document.getElementById("ha1").value);
	var carro2=parseInt(document.getElementById("ha2").value);
	var carro3=parseInt(document.getElementById("ha3").value);
	
	<!--c.) Realice la suma del valor total de las horas del carro2  sumando todos los carros que se prestan en la aplicacion denominados carro1 carro2 y carro3 66      -->
	
	
	var sumahoras=parseInt(carro1+carro2+carro3 );
	
document.getElementById("sha").value=sumahoras;
	
	
	//sumar totales
	
	

	var vt1=parseInt(document.getElementById("vt1").value);
	var vt2=parseInt(document.getElementById("vt2").value);
	var vt3=parseInt(document.getElementById("vt3").value);
	
	var sumatotales=parseInt(vt1+vt2+vt3);
	
	document.getElementById("dtr").value=sumatotales;
	
	var cpph=sumatotales/sumahoras
	document.getElementById('cpph').value=cpph;
		
	}
	
function carro3() {
	
	var acumuladas=0;
	var haa1= parseInt(document.getElementById('haa3').value);//horas a alquilar
	var acumuladas2=parseInt(haa1+acumuladas);//acumular horas
	var dtr=parseInt(acumuladas2*150320); //dinero recaudado para carro 1
	var cpph=parseInt(dtr/acumuladas2);
	

document.getElementById('ha3').value=acumuladas2;
document.getElementById('vt3').value=dtr;
document.getElementById('cpph').value=cpph;
	
	//suma de horas
	
	var carro1=parseInt(document.getElementById("ha1").value);
	var carro2=parseInt(document.getElementById("ha2").value);
	var carro3=parseInt(document.getElementById("ha3").value);
	
	var sumahoras=parseInt(carro1+carro2+carro3);
	
document.getElementById("sha").value=sumahoras;
	
	
	//sumar totales

	var vt1=parseInt(document.getElementById("vt1").value);
	var vt2=parseInt(document.getElementById("vt2").value);
	var vt3=parseInt(document.getElementById("vt3").value);
	<!--d) completa la suma del valor total entre los valores  "vt1, vt2, vt3" en la linea  119 del presente codigo-->
	
	var sumatotales=parseInt( vt1+vt2+vt3);
	
	document.getElementById("dtr").value=sumatotales;
	
	var cpph=sumatotales/sumahoras
	document.getElementById('cpph').value=cpph;
	
	}
	<!--d) reinicia los valores de ha1,ha2,ha3, en las lineas 134,135,136 del presente codigo-->

function borrar() {
	dtr.value="0"
	haa1.value="0"
	haa2.value="0"
	haa3.value="0"
	
	ha1.value="0"
	ha2.value="0"
	ha3.value="0"
	
	vt1.value="0"
	vt2.value="0"
	vt3.value="0"
	cdb.value="0"
	sha.value="0"
	cpph.value="0"
	}
	

	
	
	