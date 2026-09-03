function toGrade(score) {
  // ตรวจสอบข้อมูลนำเข้าก่อนตัดเกรด 
  if (score < 0 || score > 100) {
    return "คะแนนไม่ถูกต้อง ต้องอยู่ระหว่าง 0-100";
  }

  // สตัดเกรดด้วย if / else if (ใส่ {} ให้ครบทุกบล็อก)
  if (score >= 80) {
    return "เกรด A";
  } else if (score >= 75) {
    return "เกรด B+";
  } else if (score >= 70) {
    return "เกรด B";
  } else if (score >= 65) {
    return "เกรด C+";
  } else if (score >= 60) {
    return "เกรด C";
  } else if (score >= 55) {
    return "เกรด D+";
  } else if (score >= 50) {
    return "เกรด D";
  } else {
    return "เกรด F";
  }
}

// สร้าง Array เก็บชุดข้อมูลทดสอบทั้ง 13 ค่า
const testScores = [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120];

// ใช้ for...of วนลูปทดสอบการทำงาน
for (const score of testScores) {
  console.log(`คะแนน ${score} -> ${toGrade(score)}`);
}