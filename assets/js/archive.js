function saveReceipt(sub){
  let receipts=decrypt(localStorage.getItem("receipts")||encrypt([]));
  receipts.push({
    receipt:sub.receipt,
    name:sub.name,
    phone:sub.phone,
    fee:sub.fee,
    month:sub.date.split("T")[0].split("-")[1],
    date:sub.date,
    user:currentUser().user
  });
  localStorage.setItem("receipts",encrypt(receipts));
}

function getReceipts(){
  return decrypt(localStorage.getItem("receipts")||encrypt([]));
}
