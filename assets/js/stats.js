function monthlyStats(){
  const subs=decrypt(localStorage.getItem("subscribers")||encrypt([]));
  const m=new Date().getMonth()+1;
  let paid=0, unpaid=0, total=0;
  subs.forEach(s=>{
    const month=parseInt(s.date?.split("T")[0].split("-")[1]||0);
    if(month===m){
      if(s.paid){paid++; total+=Number(s.fee);}
      else unpaid++;
    }
  });
  return {paid, unpaid, total};
}
