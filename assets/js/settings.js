function changePassword(oldP,newP){
  let users=decrypt(localStorage.getItem("users")||encrypt([
    {user:"admin",pass:"admin123",role:"admin"},
    {user:"staff",pass:"staff123",role:"staff"}
  ]));
  const u=currentUser();
  const idx=users.findIndex(x=>x.user===u.user && x.pass===oldP);
  if(idx===-1){alert("كلمة المرور القديمة خاطئة"); return;}
  users[idx].pass=newP;
  localStorage.setItem("users",encrypt(users));
  alert("تم تغيير كلمة المرور");
}
