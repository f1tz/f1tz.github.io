var xhr = new XMLHttpRequest();
xhr.open('GET','https://www.xiamenair.com/api/members/crm/member?pasgTpCd=01');
xhr.send();
console.log(xhr.responseText);
