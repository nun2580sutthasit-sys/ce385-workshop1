// ข้อมูลตั้งต้นชุดเดียวกับข้อ 2
const students = [
  { id: "001", name: "สมชาย", major: "CE", score: 78 },
  { id: "002", name: "สมศรี", major: "IT", score: 85 },
  { id: "003", name: "อนันต์", major: "CE", score: 45 },
  { id: "004", name: "กัญญา", major: "IT", score: 92 },
  { id: "005", name: "วิชัย", major: "CE", score: 64 },
  { id: "006", name: "ณัฐยา", major: "IT", score: 48 },
];

// ส่วนที่ 1 — ฟังก์ชันสรุปผล (ห้ามใช้ for / while)

// คืน array ของชื่อทุกคน
const getNames = (students) => students.map((s) => s.name);

// คืน array ของคนที่คะแนน >= 50
const getPassedStudents = (students) => students.filter((s) => s.score >= 50);

// ผลรวมคะแนนทั้งหมด (reduce มีค่าเริ่มต้นเป็น 0)
const getTotalScore = (students) => {
  return students.reduce((sum, s) => sum + s.score, 0);
};

// คะแนนเฉลี่ย ทศนิยม 2 ตำแหน่ง (array ว่างคืน 0)
const getAverageScore = (students) => {
  if (students.length === 0) return 0;
  const total = students.reduce((sum, s) => sum + s.score, 0);
  return Number((total / students.length).toFixed(2));
};

// เกณฑ์ตัดเกรดจำลองเพื่อใช้กับ countByGrade
const calculateGrade = (score) => {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
};

// Object นับจำนวนแยกตามเกรด (reduce ค่าเริ่มต้น {})
const countByGrade = (students) => {
  return students.reduce((acc, s) => {
    const grade = calculateGrade(s.score);
    acc[grade] = (acc[grade] || 0) + 1;
    return acc;
  }, {});
};

// นักศึกษาที่คะแนนสูงสุด (reduce ค่าเริ่มต้น null)
const getTopStudent = (students) => {
  return students.reduce((top, s) => {
    return !top || s.score > top.score ? s : top;
  }, null);
};


// ส่วนที่ 2 — ท่อข้อมูลต่อกัน (บรรทัดเดียว)
// filter -> map -> reduce


const cePassedAvg = students.filter(s => s.major === "CE" && s.score >= 50).map(s => s.score).reduce((acc, score, _, arr) => Number((acc + score / arr.length).toFixed(2)), 0);

console.log("--- ผลลัพธ์ส่วนที่ 2 ---");
console.log("คะแนนเฉลี่ย CE ที่สอบผ่าน:", cePassedAvg);


// ส่วนที่ 3 — ทดสอบกรณีขอบ (Edge Case: [])


console.log("\n--- ทดสอบกรณี Array ว่าง ([]) ---");
console.log("getNames:", getNames([]));                       // []
console.log("getPassedStudents:", getPassedStudents([]));     // []
console.log("getTotalScore:", getTotalScore([]));             // 0
console.log("getAverageScore:", getAverageScore([]));         // 0 (ไม่เป็น NaN)
console.log("countByGrade:", countByGrade([]));               // {}
console.log("getTopStudent:", getTopStudent([]));             // null

// ทดสอบกับข้อมูลจริง
console.log("\n--- ทดสอบกับข้อมูลจริง ---");
console.log("รายชื่อ:", getNames(students));
console.log("คะแนนรวม:", getTotalScore(students));
console.log("คะแนนเฉลี่ย:", getAverageScore(students));
console.log("จำนวนแยกตามเกรด:", countByGrade(students));
console.log("Top Student:", getTopStudent(students));