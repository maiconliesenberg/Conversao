var a;
window.onload=function(){
	document.getElementById("numero").addEventListener("keyup", calcular);
	document.getElementById("tfbinario").addEventListener("keyup", calcularBinario);
	document.getElementById("tfhexa").addEventListener("keyup", calcularHexadecimal);
	document.getElementById("tfoctal").addEventListener("keyup", calcularOctal);
}



var calcularV = {
	
	decimalPBinario : function(){
		var valor = document.getElementById('numero').value;
		var list = [];
		do{
			if(valor % 2 == 1){
				list.push('1')
				valor = Math.trunc(valor / 2);
			}else if(valor % 2 == 0){
				list.push('0');
				valor = Math.trunc(valor / 2);
			}
		}while(valor > 0);
		list.reverse();
		var resp= '';
		for (var i = 0; i <= list.length - 1; i++) {
			resp += list[i]+'';
		};
		
		document.getElementById("tfbinario").value = resp;
	},
	
	decimalPoctal : function (){
		var valor = document.getElementById('numero').value;
		var list = [];
		do{
			list.push(Math.trunc(valor % 8));
			valor = Math.trunc(valor / 8);
		}while(valor > 0);
		list.reverse();
		var resp= '';
		for (var i = 0; i <= list.length - 1; i++) {
			resp += list[i]+'';
		};
		document.getElementById("tfoctal").value = resp;
	},
	
	decimalPHexadecimal : function(){
		var valor = document.getElementById('numero').value;
		var list = [];
		do{
			list.push(Math.trunc(valor % 16));
			valor = Math.trunc(valor / 16);
		}while(valor > 0);
		list.reverse();
		var resp= '';
		for (var i = 0; i <= list.length - 1; i++) {
			if(list[i] > 9){
				if(list[i] == 10){
					resp += 'A';
				}else if(list[i] == 11){
					resp += 'B';
				}else if(list[i] == 12){
					resp += 'C';
				}else if(list[i] == 13){
					resp += 'D';
				}else if(list[i] == 14){
					resp += 'E';
				}else if(list[i] == 15){
					resp += 'F';
				}
			}else{
				resp += list[i]+'';
			}
		};
		document.getElementById("tfhexa").value = resp;
	}
}

function calcular(){
	calcularV.decimalPHexadecimal();
	calcularV.decimalPBinario();
	calcularV.decimalPoctal();
}

var calcularBinarioV = {
	binarioPdecimal : function(){
		var valor = document.getElementById('tfbinario').value;
		var list = [];
		valor = valor.split("");
		
		for(var i = valor.length - 1; i >= 0; i--){
			list.push(valor[i]);
		}
		var respFinal = 0;

		for (var i = 0; i < list.length; i++) {
			if(i == 0){
				respFinal += (1 * list[i]); 
			}else{
				respFinal += (Math.pow(2,i) * list[i]); 
			}
		}
		document.getElementById("numero").value = respFinal;
	},

	binarioPhexa : function(){
		var valor = document.getElementById('tfbinario').value;
		var valorSplit = valor.split('').reverse().join('');
	
		valorSplit = valorSplit.match(/.{1,4}/g);
	
		if(valorSplit[valorSplit.length - 1].length < 4){
			do{
				valorSplit[valorSplit.length -1] += "0";
			}while(valorSplit[valorSplit.length - 1].length < 4);
		}
		var resul = "";
		for(var i = 0; i < valorSplit.length; i++){
			valorSplit[i] = valorSplit[i].split('').reverse().join('');
			if(valorSplit[i] == '0000'){
				resul += "0";
			}else if(valorSplit[i] == '0001'){
				resul += "1";
			}else if(valorSplit[i] == '0010'){
				resul += "2";
			}else if(valorSplit[i] == '0011'){
				resul += "3";
			}else if(valorSplit[i] == '0100'){
				resul += "4";
			}else if(valorSplit[i] == '0101'){
				resul += "5";
			}else if(valorSplit[i] == '0110'){
				resul += "6";
			}else if(valorSplit[i] == '0111'){
				resul += "7";
			}else if(valorSplit[i] == '1000'){
				resul += "8";
			}else if(valorSplit[i] == '1001'){
				resul += "9";
			}else if(valorSplit[i] == '1010'){
				resul += "A";
			}else if(valorSplit[i] == '1011'){
				resul += "B";
			}else if(valorSplit[i] == '1100'){
				resul += "C";
			}else if(valorSplit[i] == '1101'){
				resul += "D";
			}else if(valorSplit[i] == '1110'){
				resul += "E";
			}else if(valorSplit[i] == '1111'){
				resul += "F";
			}
		}

		document.getElementById("tfhexa").value = resul.split('').reverse().join('');
	},

	binarioPoctal : function(){
		var valor = document.getElementById('tfbinario').value;
		var valorSplit = valor.split('').reverse().join('');
	
		valorSplit = valorSplit.match(/.{1,3}/g);
		
		if(valorSplit[valorSplit.length - 1].length < 3){
			do{
				valorSplit[valorSplit.length -1] += "0";
			}while(valorSplit[valorSplit.length - 1].length < 3);
		}
		var list = [];
		var soma = 0;
		for(var i = 0; i < valorSplit.length; i++){
			valorSplit[i] = valorSplit[i].split('').reverse().join('');
			if(valorSplit[i] != '000'){
				soma = 0;
				if(valorSplit[i].charAt(0) == '1'){
					soma += 4;
				}
				if(valorSplit[i].charAt(1) == '1'){
					soma += 2;
				}
				if(valorSplit[i].charAt(2) == '1'){
					soma += 1;
				}
			}
			
			list.push(soma);
		}
		list.reverse();
		document.getElementById("tfoctal").value = list.join("");
		
	}
}

function calcularBinario(){
	calcularBinarioV.binarioPdecimal();
	calcularBinarioV.binarioPhexa();
	calcularBinarioV.binarioPoctal();
}

var calcularHexadecimalV = {
	hexaPdeci : function(){
		var valor = document.getElementById('tfhexa').value;
		valor = valor.split("");
		var soma = 0;
		var aux = valor.length-1;
		for(var i = 0; i < valor.length; i++){
			if(valor[i].toUpperCase() == 'A'){
				soma += Math.pow(16,aux) * 10;
			}else if(valor[i].toUpperCase() == 'B'){
				soma += Math.pow(16,aux) * 11;
			}else if(valor[i].toUpperCase() == 'C'){
				soma += Math.pow(16,aux) * 12;
			}else if(valor[i].toUpperCase() == 'D'){
				soma += Math.pow(16,aux) * 13;
			}else if(valor[i].toUpperCase() == 'E'){
				soma += Math.pow(16,aux) * 14;
			}else if(valor[i].toUpperCase() == 'F'){
				soma += Math.pow(16,aux) * 15;
			}else{
				soma += Math.pow(16,aux) * valor[i];
			}
			aux--;
		}
		document.getElementById("numero").value = soma;
	},
	
	hexaPbinario : function(){
		var list = [];
		var valor = document.getElementById('tfhexa').value;
		valor = valor.split("");
		
		for(var i = 0; i < valor.length; i++){
			if(valor[i].toUpperCase() == 'A'){
				resto(10);
			}else if(valor[i].toUpperCase() == 'B'){
				resto(11);
			}else if(valor[i].toUpperCase() == 'C'){
				resto(12);
			}else if(valor[i].toUpperCase() == 'D'){
				resto(13);
			}else if(valor[i].toUpperCase() == 'E'){
				resto(14);
			}else if(valor[i].toUpperCase() == 'F'){
				resto(15);
			}else{
				resto(valor[i]);
			}
		}

		document.getElementById("tfbinario").value = list.join("");
		
		function resto(valor){
			var te = '';
			do{
				if(valor % 2 == 1){
					te += '1';
					valor = Math.trunc(valor / 2);
				}else if(valor % 2 == 0){
					te += '0';
					valor = Math.trunc(valor / 2);
				}
			}while(valor > 0);
			te = te.split('').reverse().join('');
			list.push(te);
		}
	},

	hexaPoctal : function(){
		calcularBinarioV.binarioPoctal();
	}
}

function calcularHexadecimal(){
	calcularHexadecimalV.hexaPdeci();
	calcularHexadecimalV.hexaPbinario();
	calcularHexadecimalV.hexaPoctal();
}
var calcularOctalV = {
	octalPdecimal : function(){
		var valor = document.getElementById('tfoctal').value;
		valor = valor.split("");
		var soma = 0;
		var aux = valor.length-1;
		for(var i = 0; i < valor.length; i++){
			soma += Math.pow(8,aux) * valor[i];
			aux--;
		}
		document.getElementById("numero").value = soma;
	},
	

	octalPbinario : function(){
	var valor = document.getElementById('tfoctal').value;
	var list = [];
	var soma = '';
	valor = valor.split('');
	var aux = '';
	for(var i = 0; i < valor.length; i++){
		
		do{
			if(valor[i] % 2 == 1){
				aux += '1';
				valor[i] = Math.trunc(valor[i] / 2);
			}else if(valor[i] % 2 == 0){
				aux += '0';
				valor[i] = Math.trunc(valor[i] / 2);
			}
			
		}while(valor[i] > 0);
		
		while(aux.length < 3){
			aux += '0';
		}
		
		aux = aux.split('').reverse().join('');
		
		list.push(aux);
		soma += aux;
		aux = '';
	}
	console.log(soma);
	
	soma = soma.split('');
	var j = 0;
	while(soma[j] == '0'){
		soma[j] = '';
		j++;
	}
	soma = soma.join('');
	console.log(soma);
	document.getElementById("tfbinario").value = soma;
	}
}

function calcularOctal(){
	calcularOctalV.octalPdecimal();
	calcularOctalV.octalPbinario();
	
}

