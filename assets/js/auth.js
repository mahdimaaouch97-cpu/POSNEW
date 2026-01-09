const USERS=[
{user:"admin",pass:"admin123",role:"admin"},
{user:"staff",pass:"staff123",role:"staff"}
];

function login(){
  const u=document.getElementById("username").value;
  const p=document.getElementById("password").value;
  const found=USERS.find(x=>x.user===u && x.pass===p);
  if(!found){alert("بيانات خاطئة"); return;}
  localStorage.setItem("currentUser",JSON.stringify(found));
  location.href="index.html";
}

function currentUser(){return JSON.parse(localStorage.getItem("currentUser"));}

function requireRole(role){
  const u=currentUser();
  if(!u || u.role!==role){alert("غير مصرح"); location.href="index.html";}
}
