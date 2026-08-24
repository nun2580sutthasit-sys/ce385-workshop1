// 1. ประกาศตัวแปรเก็บข้อมูลทั้ง 6 ชนิดสำหรับนำมาทดสอบ
const string = "สวัสดี";
const number = 100; 
const boolean = true;
let undefined;
const nullVa = null;
const array = [1, 2, 3];

// ส่วนที่ 1: แสดงค่าและใช้ typeof ดึงชื่อชนิดข้อมูลโดยตรง (ห้ามพิมพ์ชื่อชนิดตายตัว)
console.log(`ค่า: ${String} | ชนิด: ${typeof myString}`);
console.log(`ค่า: ${Number} | ชนิด: ${typeof myNumber}`);
console.log(`ค่า: ${Boolean} | ชนิด: ${typeof myBoolean}`);
console.log(`ค่า: ${undefined} | ชนิด: ${typeof myUndefined}`);
console.log(`ค่า: ${nullVa} | ชนิด: ${typeof myNull}`);
console.log(`ค่า: ${Array} | ชนิด: ${typeof myArray}`);

// 2. ส่วนที่ 2: ตอบคำถามด้วยการใช้ typeof เช็กชนิดข้อมูล
console.log(`typeof null ได้ผลว่า: ${typeof null}`);

let unassignedVar;
console.log(`${typeof unassignedVar}`);

const nanVal = Number("abc");
console.log(`typeof NaN ได้ผลว่า: ${typeof NaN }${Number.isNaN(nanVal)})`);

// ส่วนที่ 3 — การแปลงชนิดข้อมูล (Type Conversion)
const inputAge = "20";
const inputScore = "85.5";

// 1. แปลง inputAge เป็นตัวเลขแล้วบวก 5
const ageNumber = Number(inputAge);
console.log(`Age + 5: ${ageNumber + 5}`);

// 2. แปลง inputScore แล้วแสดงผลทศนิยม 1 ตำแหน่ง
console.log(`inputAge === 20 ได้ผลเป็น: ${inputAge === 20}`);
console.log(`Number(inputAge) === 20 ได้ผลเป็น: ${Number(inputAge) === 20}`);

// 3. เปรียบเทียบความแตกต่างของ strict equality (===)
console.log(`inputAge === 20 ได้ผลเป็น: ${inputAge === 20}`);
console.log(`Number(inputAge) === 20 ได้ผลเป็น: ${Number(inputAge) === 20}`);