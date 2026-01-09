// ===== monthly.js =====
// إنشاء تقارير شهرية للإيرادات والمدفوعات
function generateMonthlyReport(month){
    const subs = decrypt(localStorage.getItem("subscribers") || encrypt([]));
    const report = subs
        .filter(s => s.paid && s.month === month)
        .map(s => ({
            name: s.name,
            phone: s.phone,
            fee: s.fee,
            receipt: s.receipt,
            date: s.date,
            user: s.user
        }));
    return report;
}

// عرض تقرير الشهر في report.html
function showMonthlyReport(month){
    const report = generateMonthlyReport(month);
    const table = document.getElementById("reportTable");
    if(!table) return;
    table.innerHTML = `<tr>
<th>الاسم</th><th>الهاتف</th><th>رسم الاشتراك</th><th>رقم إيصال</th><th>تاريخ الدفع</th><th>المستخدم</th>
</tr>`;
    let totalAmount = 0;
    report.forEach(r => {
        const row = table.insertRow();
        row.insertCell(0).textContent = r.name;
        row.insertCell(1).textContent = r.phone;
        row.insertCell(2).textContent = "$" + r.fee;
        row.insertCell(3).textContent = r.receipt;
        row.insertCell(4).textContent = formatDate(r.date);
        row.insertCell(5).textContent = r.user;
        totalAmount += Number(r.fee);
    });
    document.getElementById("totalAmount").textContent = "$" + totalAmount;
}
