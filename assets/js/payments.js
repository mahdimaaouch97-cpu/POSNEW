// إدارة الدفعات والإيصالات

let paymentsSubscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
let receipts = JSON.parse(localStorage.getItem("receipts")) || [];

function renderPayments(){
    const tbody = document.querySelector("#paymentsTable tbody");
    tbody.innerHTML="";
    paymentsSubscribers.forEach((sub,index)=>{
        const remaining = getRemaining(sub);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index+1}</td>
            <td>${sub.name}</td>
            <td>${sub.package}</td>
            <td>$${sub.paid.toFixed(2)}</td>
            <td>$${remaining}</td>
            <td><button onclick="printReceipt(${index})">طباعة الإيصال</button></td>
        `;
        tbody.appendChild(row);
    });
}

document.getElementById("paymentForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    const subIndex = parseInt(document.getElementById("subscriberSelect").value);
    const amount = parseFloat(document.getElementById("paymentAmount").value);
    if(isNaN(amount) || amount <= 0) return alert("أدخل مبلغ صالح!");
    paymentsSubscribers[subIndex].paid += amount;

    const receipt = {
        subscriber: paymentsSubscribers[subIndex].name,
        package: paymentsSubscribers[subIndex].package,
        paid: amount,
        date: new Date().toLocaleDateString()
    };
    receipts.push(receipt);

    localStorage.setItem("subscribers", JSON.stringify(paymentsSubscribers));
    localStorage.setItem("receipts", JSON.stringify(receipts));
    renderPayments();
    this.reset();
});

document.addEventListener("DOMContentLoaded", renderPayments);
