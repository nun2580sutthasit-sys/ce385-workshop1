// ส่วนที่ 1 — ฟังก์ชันหาราคาเมนูอาหารด้วย switch
function getMenuPrice(menu) {
  switch (menu) {
    case "ข้าวผัด":
    case "ข้าวมันไก่":
    case "ข้าวหมูแดง":
      return 50;
    case "ผัดไทย":
      return 60;
    case "ต้มยำกุ้ง":
      return 120;
    default:
      return 0; // เมนูไม่มีในรายการ
  }
}

// ฟังก์ชันหาตัวคูณขนาดอาหารด้วย switch
function getSizeMultiplier(size) {
  switch (size) {
    case "ธรรมดา":
      return 1;
    case "พิเศษ":
      return 1.5;
    case "จัมโบ้":
      return 2;
    default:
      return 1; 
  }
}

//  อาร์เรย์ออเดอร์อย่างน้อย 5 รายการ 
const orders = [
  { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
  { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
  { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
  { menu: "ข้าวมันไก่", size: "พิเศษ", qty: 3 },
  { menu: "ชาเย็น", size: "ธรรมดา", qty: 2 } 
];

let totalBill = 0;

console.log("========== รายการสั่งอาหาร ==========");
for (const order of orders) {
  const price = getMenuPrice(order.menu);
  const multiplier = getSizeMultiplier(order.size);
  const itemTotal = price * multiplier * order.qty;

  totalBill += itemTotal;

  // แสดงผลในรูปแบบ: ผัดไทย (พิเศษ) x2 = 180 บาท
  console.log(`${order.menu} (${order.size}) x${order.qty} = ${itemTotal} บาท`);
}

console.log("------------------------------------");
console.log(`ราคารวมทั้งบิล = ${totalBill} บาท`);
console.log("====================================");