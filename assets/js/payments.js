function updatePaymentsTable(){
  const subs=decrypt(localStorage.getItem("subscribers")||encrypt([]));
  const table=document.getElementById("paymentTable");
  table.innerHTML="<tr><th>الاسم</th><th>الهاتف</th><th>رسم الاشتراك</th><th>الحالة</th><th>رقم إيصال</th><th>دفع / طباعة</th></tr>";
  subs.forEach((s,i)=>{
    const receipt=s.receipt || ("R"+(1000+i));
    s.receipt=receipt;
    const row=table.insertRow();
    row.insertCell(0).textContent=s.name;
    row.insertCell(1).textContent=s.phone;
    row.insertCell(2).textContent=s.fee;
    row.insertCell(3).textContent=s.paid?"مدفوع":"غير مدفوع";
    row.insertCell(4).textContent=receipt;
    row.insertCell(5).innerHTML=`<button onclick="paySubscriber(${i})">دفع</button> <button onclick="printReceipt(${i})">🖨️ طباعة</button>`;
  });
  localStorage.setItem("subscribers",encrypt(subs));
}

function paySubscriber(idx){
  const subs=decrypt(localStorage.getItem("subscribers")||encrypt([]));
  const sub=subs[idx];
  if(sub.paid){alert("تم الدفع مسبقاً"); return;}
  sub.paid=true;
  sub.date=new Date().toISOString();
  subs[idx]=sub;
  localStorage.setItem("subscribers",encrypt(subs));
  saveReceipt(sub);
  updatePaymentsTable();
  autoWhatsApp(sub);
}

function printReceipt(idx){
  const subs=decrypt(localStorage.getItem("subscribers")||encrypt([]));
  const sub=subs[idx];
  const w=window.open("receipt.html","_blank");
  w.onload=function(){
    w.document.body.innerHTML=`<pre>
FAST NET
71346411 - 71338640

رقم إيصال: ${sub.receipt}
الاسم: ${sub.name}
الهاتف: ${sub.phone}
المبلغ: $${sub.fee}
تاريخ: ${sub.date.split("T")[0]}
</pre>`;
    w.print();
  };
}

// إرسال واتساب شبه تلقائي
function autoWhatsApp(sub){
  const msg=`FAST NET
📞 71346411 - 71338640

إيصال دفع
------------------
الاسم: ${sub.name}
الشهر: ${sub.date.split("T")[0].split("-")[1]}
المبلغ: $${sub.fee}
رقم الإيصال: ${sub.receipt}
------------------
شكراً لتعاملكم معنا`;
  const phone=sub.phone.replace(/\D/g,'');
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,"_blank");
}

function goHome(){location.href="index.html";}
