function AReplace(before,x){
	var result=before;
	while(before.indexOf(x)!=-1){
		result = result.replace(x,'');
	}
	return result;
}

var m_honbun = document.getElementById("novel_honbun").innerHTML;
var honbun_1 = AReplace(AReplace(m_honbun,'</p>'),'<br>');

var i = 1;
while(honbun_1.indexOf('<p id="L'+i+'">')!=-1){
	honbun_1=honbun_1.replace('<p id="L'+i+'">','');
	i++;
}