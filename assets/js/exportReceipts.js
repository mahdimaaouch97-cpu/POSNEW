function exportReceiptsCSV(){
  const receipts=getReceipts();
  let csv="\uFEFFرقم الإيصال,الاسم,الهاتف,المبلغ,الشهر,التاريخ,المستخدم\n";
  receipts.forEach(r=>{
    csv+=`${r.receipt},${r.name},${r.phone},${r.fee},${r.month},${r.date},${r.user}\n`;
  });
  const blob=new Blob([csv],{type:"text/csv;charset=utf-8;"});
  const link=document.createElement("a");
  link.href=URL.createObjectURL(blob);
  link.download="ارشيف_ايصالات_fastnet.csv";
  link.click();
}
