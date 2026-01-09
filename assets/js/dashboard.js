function updateDashboard(){
  const subs=decrypt(localStorage.getItem("subscribers")||encrypt([]));
  const paid=subs.filter(s=>s.paid).length;
  const unpaid=subs.filter(s=>!s.paid).length;
  let total=0; subs.forEach(s=>{if(s.paid) total+=Number(s.fee);});
  document.getElementById("statSubscribers").textContent=subs.length;
  document.getElementById("statPaid").textContent=paid;
  document.getElementById("statUnpaid").textContent=unpaid;
  document.getElementById("statAmount").textContent="$"+total;
}
