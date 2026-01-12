// assets/js/subscribers.js
const subscribersTable = document.getElementById("subscribersTable");

function loadSubscribers() {
  const data = getData(STORAGE_KEYS.subscribers);
  subscribersTable.innerHTML = "";
  data.forEach((s, i) => {
    subscribersTable.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${s.name}</td>
        <td>${s.phone}</td>
        <td>${s.plan || "-"}</td>
        <td>${s.price || "-"}</td>
        <td><button onclick="deleteSubscriber(${i})">❌</button></td>
      </tr>
    `;
  });
}

function addSubscriber() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const plan = document.getElementById("plan").value;
  const price = document.getElementById("price").value;

  const data = getData(STORAGE_KEYS.subscribers);
  data.push({ name, phone, plan, price });
  saveData(STORAGE_KEYS.subscribers, data);

  document.querySelector("form").reset();
  loadSubscribers();
}

function deleteSubscriber(index) {
  if (!confirm("هل تريد حذف المشترك؟")) return;
  const data = getData(STORAGE_KEYS.subscribers);
  data.splice(index, 1);
  saveData(STORAGE_KEYS.subscribers, data);
  loadSubscribers();
}
