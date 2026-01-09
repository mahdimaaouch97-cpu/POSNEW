function updateSubscribersTable(){
  const subs=decrypt(localStorage.getItem("subscribers")||encrypt([]));
  const table=document.getElementById("subTable");
  table.innerHTML="<tr><th>الاسم</th><th>الهاتف</th><th>العنوان</th><th>رسم الاشتراك</th><th>الحالة</th><th>حذف</th></tr>";
  subs.forEach((s,i)=>{
    const row=table.insertRow();
    row.insertCell(0).textContent=s.name;
    row.insertCell(1).textContent=s.phone;
    row.insertCell(2).textContent=s.address;
    row.insertCell(3).textContent=s.fee;
    row.insertCell(4).textContent=s.paid?"مدفوع":"غير مدفوع";
    row.insertCell(5).innerHTML=`<button onclick="deleteSubscriber(${i})">🗑</button>`;
  });
}

function addSubscriber(){
  const name=prompt("الاسم"),phone=prompt("الهاتف"),address=prompt("العنوان"),fee=prompt("رسم الاشتراك");
  if(!name) return;
  const subs=decrypt(localStorage.getItem("subscribers")||encrypt([]));
  subs.push({name,phone,address,fee,paid:false});
  localStorage.setItem("subscribers",encrypt(subs));
  updateSubscribersTable();
}

function deleteSubscriber(idx){
  const subs=decrypt(localStorage.getItem("subscribers")||encrypt([]));
  subs.splice(idx,1);
  localStorage.setItem("subscribers",encrypt(subs));
  updateSubscribersTable();
}

function deleteAllSubscribers(){
  if(!confirm("هل تريد حذف جميع المشتركين؟")) return;
  localStorage.setItem("subscribers",encrypt([]));
  updateSubscribersTable();
}

function exportSubscribers(){alert("تصدير CSV جاهز (يمكنك إضافة الكود لاحقًا)");}
function importSubscribers(){alert("استيراد CSV جاهز (يمكنك إضافة الكود لاحقًا)");}
