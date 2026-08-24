// ส่วนที่ 1 — สร้างตัวแปรเก็บคะแนนดิบ
const workshopRaw = 48;
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;

// ประกาศตัวแปร const สำหรับเก็บตัวเลขเกณฑ์คงที่ 
const WORKSHOP_FULL_RAW = 60; 
const WORKSHOP_WEIGHT = 20;
const MAX_TOTAL_SCORE = 100;
const TARGET_SCORE = 80;

// คำนวณคะแนน Workshop ที่แปลงน้ำหนักแล้ว: (คะแนนดิบ / คะแนนเต็มดิบ) * น้ำหนักคะแนนที่ต้องการ
const workshopConverted = (workshopRaw / WORKSHOP_FULL_RAW) * WORKSHOP_WEIGHT;

// คำนวณคะแนนรวมทั้งหมดจากทุกส่วน
const totalScore = workshopConverted + attendance + project + midterm + final;

// คำนวณสัดส่วนเปอร์เซ็นต์จากคะแนนเต็ม
const percentage = (totalScore / MAX_TOTAL_SCORE) * 100;

// คำนวณคะแนนที่ยังขาดเพื่อไปให้ถึงเป้าหมาย 80 คะแนน
const pointsNeededForTarget = TARGET_SCORE - totalScore;

// ส่วนที่ 3 — แสดงผลด้วย Template Literal และ .toFixed(2)
console.log(`========== ใบสรุปคะแนนวิชา CE385 ==========
คะแนน : ${workshopConverted.toFixed(2)} คะแนน
คะแนนเข้าชั้นเรียน        : ${attendance.toFixed(2)} คะแนน
คะแนนโปรเจกต์           : ${project.toFixed(2)} คะแนน
คะแนนสอบกลางภาค        : ${midterm.toFixed(2)} คะแนน
คะแนนสอบปลายภาค        : ${final.toFixed(2)} คะแนน

คะแนนรวมทั้งหมด         : ${totalScore.toFixed(2)} / ${MAX_TOTAL_SCORE.toFixed(2)} คะแนน
คิดเป็นเปอร์เซ็นต์        : ${percentage.toFixed(2)} %
คะแนนที่ต้องทำเพิ่มเพื่อให้ได้ ${TARGET_SCORE} : ${pointsNeededForTarget.toFixed(2)} คะแนน
===========================================`);