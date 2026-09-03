// ส่วนที่ 1 — ฟังก์ชัน login ตรวจสอบตามลำดับเงื่อนไข

function login(inputUser, inputPass, role, isActive, age) {
  //ตรวจสอบ username หรือ password (ใช้ !== และ ||)
  if (inputUser !== "admin" || inputPass !== "ce385pass") {
    return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }

  // ตรวจสอบสถานะบัญชี (ใช้ ===)
  if (isActive === false) {
    return "บัญชีนี้ถูกระงับการใช้งาน";
  }

  // ตรวจสอบอายุ
  if (age < 18) {
    return "อายุไม่ถึงเกณฑ์";
  }

  // ผ่านทุกข้อ และเป็น "อาจารย์" (ใช้ ===)
  if (role === "อาจารย์") {
    return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";
  }

  // ผ่านทุกข้อ แต่เป็น "นักศึกษา"
  if (role === "นักศึกษา") {
    return "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)";
  }

  return "บทบาทไม่ถูกต้อง";
}

// ทดสอบอย่างน้อย 6 กรณี (console.log นอกฟังก์ชัน)

console.log("1. สำเร็จ (อาจารย์)   :", login("admin", "ce385pass", "อาจารย์", true, 30));
console.log("2. สำเร็จ (นักศึกษา)  :", login("admin", "ce385pass", "นักศึกษา", true, 20));
console.log("3. รหัสผ่านผิด        :", login("admin", "wrongpass", "นักศึกษา", true, 20));
console.log("4. ชื่อผู้ใช้ผิด         :", login("wronguser", "ce385pass", "นักศึกษา", true, 20));
console.log("5. บัญชีถูกระงับ       :", login("admin", "ce385pass", "นักศึกษา", false, 20));
console.log("6. อายุไม่ถึง          :", login("admin", "ce385pass", "นักศึกษา", true, 16));

