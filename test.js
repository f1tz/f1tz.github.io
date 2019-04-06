content = '{"pasgPsnInfo":[{"crdtNo":"110101199004014839","crdtTpCd":"01","operTpCd":"01","pasgPsnChnNm":"张翔","pasgPsnCtcTel":"18889899988","pasgPsnTpCd":"01","pasgTpCd":"A","brthdt":"1990-04-01"}]}';
var xhr = new XMLHttpRequest();
xhr.setRequestHeader('ContentType', 'application/json');
xhr.open('POST','https://www.xiamenair.com/api/members/crm');
xhr.send(content);
