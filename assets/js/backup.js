function backupData(){
  const data={
    subscribers:localStorage.getItem("subscribers"),
    receipts:localStorage.getItem("receipts"),
    users:localStorage.getItem("users")
  };
  const blob=new Blob([data.subscribers+","+data.receipts+","+data.users],{type:"text/plain"});
  const link=document.createElement("a");
  link.href=URL.createObjectURL(blob);
  link.download="fastnet_backup.txt";
  link.click();
  alert("تم عمل النسخ الاحتياطي");
}
