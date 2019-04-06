var xhr = new XMLHttpRequest();
xhr.onreadystatechange=function()
  {
  if (xhr.readyState==4 && xhr.status==200)
    {
    console.log(xhr.responseText);
    }
  }
xhr.open('GET','https://www.xiamenair.com/api/members/crm/member?pasgTpCd=01');
xhr.send();
console.log(xhr.responseText);
