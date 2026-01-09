function resetMonthly(){
  if(!confirm("هل تريد إعادة ضبط الجباية للشهر الجديد؟")) return;
  const subs=decrypt(localStorage.getItem("subscribers")||encrypt([]));
  subs.forEach(s=>s.paid=false);
  localStorage.setItem("subscribers",encrypt(subs));
  alert("تم إعادة ضبط الجباية");
}
