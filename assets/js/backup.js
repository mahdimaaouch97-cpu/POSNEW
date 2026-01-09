// ===== backup.js =====

// إنشاء نسخة احتياطية من البيانات
function createBackup(){
    const backup = {
        subscribers: decrypt(localStorage.getItem("subscribers") || encrypt([])),
        receipts: decrypt(localStorage.getItem("receipts") || encrypt([])),
        users: decrypt(localStorage.getItem("users") || encrypt([]))
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "backup_fast_net.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert("تم إنشاء النسخة الاحتياطية");
}

// استعادة البيانات من ملف النسخة الاحتياطية
function restoreBackup(file){
    const reader = new FileReader();
    reader.onload = function(e){
        try{
            const data = JSON.parse(e.target.result);
            localStorage.setItem("subscribers", encrypt(data.subscribers || []));
            localStorage.setItem("receipts", encrypt(data.receipts || []));
            localStorage.setItem("users", encrypt(data.users || []));
            alert("تم استعادة النسخة الاحتياطية بنجاح");
            location.reload();
        }catch(err){
            alert("خطأ في ملف النسخة الاحتياطية");
            console.error(err);
        }
    };
    reader.readAsText(file);
}
