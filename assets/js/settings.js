// ===== settings.js =====
function changePassword(oldPass, newPass){
    let users = decrypt(localStorage.getItem("users") || encrypt([
        {user:"admin",pass:"admin123",role:"admin"},
        {user:"staff",pass:"staff123",role:"staff"}
    ]));
    const u = currentUser();
    const idx = users.findIndex(x => x.user === u.user && x.pass === oldPass);
    if(idx === -1){ alert("كلمة المرور القديمة خاطئة"); return false; }
    users[idx].pass = newPass;
    localStorage.setItem("users", encrypt(users));
    alert("تم تغيير كلمة المرور بنجاح");
    return true;
}

// تغيير صلاحية مستخدم (فقط للمدير)
function changeUserRole(username, newRole){
    const u = currentUser();
    if(u.role !== "admin"){ alert("غير مصرح"); return; }
    let users = decrypt(localStorage.getItem("users") || encrypt([]));
    const idx = users.findIndex(x => x.user === username);
    if(idx === -1){ alert("المستخدم غير موجود"); return; }
    users[idx].role = newRole;
    localStorage.setItem("users", encrypt(users));
    alert("تم تحديث صلاحية المستخدم");
}
