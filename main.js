function

var m_honbun = document.getElementById("novel_honbun").innerHTML;
var honbun_1 = m_honbun.replace("</p>","");
var i = 1;
while(honbun_1.indexOf('<p id="L'+i+'">')!=-1){
	honbun_1=honbun_1.replace('<p id="L'+i+'">','');
	i++;
}