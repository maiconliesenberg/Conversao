var a;
window.onload=function(){
	document.getElementById("numero").addEventListener("keyup", calcular);
	document.getElementById("tfbinario").addEventListener("keyup", calcularBinario);
}



function calcular () {
	
	function decimalPBinario(){
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
			resp += list[i]+' ';
		};
		
		document.getElementById("tfbinario").value = resp;
	}
	
	function decimalPoctal (){
		var valor = document.getElementById('numero').value;
		var list = [];
		do{
			list.push(Math.trunc(valor % 8));
			valor = Math.trunc(valor / 8);
		}while(valor > 0);
		list.reverse();
		var resp= '';
		for (var i = 0; i <= list.length - 1; i++) {
			resp += list[i]+' ';
		};
		document.getElementById("tfoctal").value = resp;
	}
	
	function decimalPHexadecimal(){
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
					resp += ' A';
				}else if(list[i] == 11){
					resp += ' B';
				}else if(list[i] == 12){
					resp += ' C';
				}else if(list[i] == 13){
					resp += ' D';
				}else if(list[i] == 14){
					resp += ' E';
				}else if(list[i] == 15){
					resp += ' F';
				}
			}else{
				resp += list[i]+' ';
			}
		};
		document.getElementById("tfhexa").value = resp;
	}
	
	decimalPHexadecimal();
	decimalPBinario();
	decimalPoctal();
}

function calcularBinario () {
	function binarioPdecimal (){
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
	}

	function binarioPhexa (){
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
				resul += " 0";
			}else if(valorSplit[i] == '0001'){
				resul += " 1";
			}else if(valorSplit[i] == '0010'){
				resul += " 2";
			}else if(valorSplit[i] == '0011'){
				resul += " 3";
			}else if(valorSplit[i] == '0100'){
				resul += " 4";
			}else if(valorSplit[i] == '0101'){
				resul += " 5";
			}else if(valorSplit[i] == '0110'){
				resul += " 6";
			}else if(valorSplit[i] == '0111'){
				resul += " 7";
			}else if(valorSplit[i] == '1000'){
				resul += " 8";
			}else if(valorSplit[i] == '1001'){
				resul += " 9";
			}else if(valorSplit[i] == '1010'){
				resul += " A";
			}else if(valorSplit[i] == '1011'){
				resul += " B";
			}else if(valorSplit[i] == '1100'){
				resul += " C";
			}else if(valorSplit[i] == '1101'){
				resul += " D";
			}else if(valorSplit[i] == '1110'){
				resul += " E";
			}else if(valorSplit[i] == '1111'){
				resul += " F";
			}
		}

		document.getElementById("tfhexa").value = resul.split('').reverse().join('');
	}
	binarioPdecimal();
	binarioPhexa();
}

