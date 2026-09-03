// เกณฑ์ตัดเกรดเป็น const ที่ตั้งชื่อสื่อความหมาย
const GRADE_CRITERIA = [
  { minScore: 80, grade: 'A' },
  { minScore: 75, grade: 'B+' },
  { minScore: 70, grade: 'B' },
  { minScore: 65, grade: 'C+' },
  { minScore: 60, grade: 'C' },
  { minScore: 55, grade: 'D+' },
  { minScore: 50, grade: 'D' },
  { minScore: 0,  grade: 'F' }
];

// 1. isValidScore (Arrow Function)
const isValidScore = (score) => typeof score === 'number' && score >= 0 && score <= 100;

// 2. toGrade - ตรวจสอบด้วย isValidScore ก่อนใช้ array + find ตาม Hint
function toGrade(score) {
  if (!isValidScore(score)) {
    return 'Invalid Score';
  }
  const match = GRADE_CRITERIA.find(item => score >= item.minScore);
  return match ? match.grade : 'F';
}

// 3. calculateWorkshopScore (Arrow Function + Default parameters)
const calculateWorkshopScore = (raw, full = 60, weight = 20) => (raw / full) * weight;

// 4. calculateTotal
function calculateTotal(workshop, attendance, project, midterm, final) {
  return workshop + attendance + project + midterm + final;
}

// ==========================================
// ส่วนที่ 2 — ทดสอบข้อมูลนักศึกษา 3 คน และแสดงผลเป็นตาราง
// ==========================================

const students = [
  { name: 'Somchai', rawWorkshop: 48, attendance: 10, project: 18, midterm: 22, final: 25 },
  { name: 'Somsri',   rawWorkshop: 54, attendance: 9,  project: 20, midterm: 24, final: 28 },
  { name: 'Somsak',  rawWorkshop: 30, attendance: 7,  project: 12, midterm: 15, final: 14 }
];

const studentSummary = students.map(student => {
  const workshopScore = calculateWorkshopScore(student.rawWorkshop);
  const totalScore = calculateTotal(
    workshopScore,
    student.attendance,
    student.project,
    student.midterm,
    student.final
  );

  return {
    Name: student.name,
    Workshop: workshopScore,
    Attendance: student.attendance,
    Project: student.project,
    Midterm: student.midterm,
    Final: student.final,
    Total: totalScore,
    Grade: toGrade(totalScore)
  };
});

console.table(studentSummary);

// ==========================================
// ส่วนที่ 3 — พิสูจน์ Default Parameters
// ==========================================

const callDefault = calculateWorkshopScore(48);
const callExplicit = calculateWorkshopScore(48, 60, 20);

console.log('calculateWorkshopScore(48):', callDefault); // 16
console.log('calculateWorkshopScore(48, 60, 20):', callExplicit); // 16
console.log('ผลลัพธ์เท่ากัน:', callDefault === callExplicit); // true

const callWithUndefined = calculateWorkshopScore(48, undefined, 25);
console.log('calculateWorkshopScore(48, undefined, 25):', callWithUndefined); // 20


