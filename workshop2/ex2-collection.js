
// ส่วนที่ 1 — สร้างข้อมูลตั้งต้น (อย่างน้อย 6 คน)

const students = [
  { id: "001", name: "สมชาย", major: "CE", score: 78, contact: { email: "somchai@mail.com", phone: "081-111-1111" } },
  { id: "002", name: "สมศรี", major: "IT", score: 85, contact: { email: "somsri@mail.com", phone: "082-222-2222" } },
  { id: "003", name: "อนันต์", major: "CE", score: 45, contact: { email: "anan@mail.com", phone: "083-333-3333" } },
  { id: "004", name: "กัญญา", major: "IT", score: 92, contact: { email: "kanya@mail.com", phone: "084-444-4444" } },
  { id: "005", name: "วิชัย", major: "CE", score: 64, contact: { email: "wichai@mail.com", phone: "085-555-5555" } },
  { id: "006", name: "ณัฐยา", major: "IT", score: 48, contact: { email: "nattaya@mail.com", phone: "086-666-6666" } },
];


// ส่วนที่ 2 — เขียนฟังก์ชันค้นหา (ห้ามแก้ array ต้นฉบับ)


// คืนนักศึกษาคนนั้น หรือ undefined ถ้าไม่พบ
const findById = (students, id) => {
  return students.find((s) => s.id === id);
};

// คืน array ของนักศึกษาในสาขานั้น
const findByMajor = (students, major) => {
  return students.filter((s) => s.major === major);
};

// คืน true ถ้ามีอย่างน้อย 1 คนที่คะแนนต่ำกว่า 50
const hasFailingStudent = (students) => {
  return students.some((s) => s.score < 50);
};

// คืนอีเมล หรือข้อความ "ไม่พบข้อมูลติดต่อ" โดยใช้ ?. และ ??
const getEmail = (students, id) => {
  const student = findById(students, id);
  return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};


// ส่วนที่ 3 — ทดสอบกรณีต่าง ๆ และเพิ่มข้อมูล


// 1. เพิ่มนักศึกษา 1 คนที่ไม่มี contact โดยใช้ Spread operator (ไม่ใช้ push)
const studentWithoutContact = {
  id: "007",
  name: "ปิติ",
  major: "CE",
  score: 65,
};

const updatedStudents = [...students, studentWithoutContact];

// 2. ทดสอบกรณีหาไม่เจอ ("9999")
console.log("--- ทดสอบกรณีไม่พบข้อมูล ID 9999 ---");
console.log("findById:", findById(updatedStudents, "9999")); // undefined
console.log("getEmail:", getEmail(updatedStudents, "9999")); // "ไม่พบข้อมูลติดต่อ"

// 3. ทดสอบคนที่มีตัวตนแต่ไม่มี contact (ID 007)
console.log("\n--- ทดสอบกรณีไม่มี contact ID 007 ---");
console.log("getEmail:", getEmail(updatedStudents, "007")); // "ไม่พบข้อมูลติดต่อ"

// 4. ทดสอบฟังก์ชันอื่น ๆ เพิ่มเติม
console.log("\n--- ทดสอบฟังก์ชันอื่น ๆ ---");
console.log("findByMajor('CE'):", findByMajor(updatedStudents, "CE").length, "คน");
console.log("hasFailingStudent:", hasFailingStudent(updatedStudents)); // true