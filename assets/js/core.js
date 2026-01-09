// ===== أدوات أساسية لمشروع FAST NET =====

// حفظ أي بيانات في LocalStorage مع تشفير
function saveData(key, data){
  localStorage.setItem(key, encrypt(data));
}

// قراءة أي بيانات من LocalStorage مع فك التشفير
function loadData(key){
  const item = localStorage.getItem(key);
  if(!item) return [];
  try {
    return decrypt(item);
  } catch(e){
    console.error("خطأ في فك التشفير:", e);
    return [];
  }
}

// توليد رقم إيصال تلقائي
function generateReceiptNumber(){
  const receipts = loadData("receipts");
  return "R" + (1000 + receipts.length + 1);
}

// فلتر البحث بالاسم لأي جدول
function filterByName(data, inputId){
  const keyword = document.getElementById(inputId).value.trim().toLowerCase();
  if(!keyword) return data;
  return data.filter(item => item.name.toLowerCase().includes(keyword));
}

// تحويل التاريخ إلى صيغة عربية
function formatDate(date){
  const d = new Date(date);
  return d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
}

// حساب المجموع للرسوم المدفوعة
function sumPaidFees(subscribers){
  return subscribers.filter(s => s.paid).reduce((sum,s)=>sum + Number(s.fee),0);
}

// التحقق من المستخدم الحالي
functi
