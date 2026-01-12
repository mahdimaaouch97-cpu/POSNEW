// إدارة المشتركين

let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

function renderSubscribers(){
    const tbody = document.querySelector("#subscribersTable tbody");
    tbody.innerHTML="";
    subscribers.forEach((sub,index)=>{
        const remaining = getRemaining(sub);
        const status = remaining<=0 ? "مدفوع" : "غير مدفوع";
        const statusClass = remaining<=0 ? "status-paid" : "status-unpaid";
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index+1}</td>
            <td>${sub.name}</td>
            <td>${sub.address || ""}</td>
            <td>${sub.package}</td>
            <td>$${sub.price || 0}</td>
            <td>$${sub.paid.toFixed(2)}</td>
            <td>$${remaining}</td>
            <td class="${statusClass}">${status}</td>
            <td>
                <button onclick="editSubscriber(${index})">تعديل</button>
                <button onclick="deleteSubscriber(${index})">حذف</button>
            </td>
        `;
        tbody.appendChild(row);
    });
    localStorage.setItem("subscribers", JSON.stringify(subscribers));
}

function addSubscriber(subscriber){
    subscribers.push(subscriber);
    renderSubscribers();
}

function deleteSubscriber(index){
    if(confirm("هل أنت متأكد من حذف المشترك؟")){
        subscribers.splice(index,1);
        renderSubscribers();
    }
}

function editSubscriber(index){
    const sub = subscribers[index];
    const newName = prompt("الاسم:", sub.name);
    if(newName===null || newName.trim()==="") return;
    const newAddress = prompt("العنوان:", sub.address || "");
    const newPackage = prompt("الباقة:", sub.package);
    if(newPackage===null || newPackage.trim()==="") return;
    const newPrice = parseFloat(prompt("سعر الباقة ($):", sub.price));
    if(isNaN(newPrice)) return alert("السعر غير صحيح!");
    sub.name=newName;
    sub.address=newAddress;
    sub.package=newPackage;
    sub.price=newPrice;
    renderSubscribers();
}

function deleteAllSubscribers(){
    if(confirm("هل أنت متأكد من حذف جميع المشتركين؟")){
        subscribers=[];
        renderSubscribers();
    }
}

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", renderSubscribers);
