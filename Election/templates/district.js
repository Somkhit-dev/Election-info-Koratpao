//Dropdown อำเภอ
function showDropdown() {
  const dropdownContainer = document.getElementById("dropdownContainer");
  dropdownContainer.style.display = "block";
}

function selectDistrict() {
  const selectedDistrict = document.getElementById("districts").value;
  const selectedDistrictDisplay = document.getElementById("selectedDistrict");
  const zoneDropdownContainer = document.getElementById(
    "zoneDropdownContainer"
  );
  const zonesDropdown = document.getElementById("zones");
  const imageContainer = document.getElementById("districtImage");

  selectedDistrictDisplay.innerText = `อำเภอ: ${selectedDistrict}`;
  zoneDropdownContainer.style.display = "none"; // ซ่อน dropdown เขตก่อน
  imageContainer.innerHTML = ""; // ล้างภาพเดิม

  // แสดงภาพตามอำเภอ
  const images = {
    แก้งสนามนาง: [{ zone: "เขต 1" }],
    ขามทะเลสอ: [{ zone: "เขต 1" }],
    ขามสะแกแสง: [{ zone: "เขต 1" }],
    คง: [{ zone: "เขต 1" }],
    ครบุรี: [{ zone: "เขต 1" },
    { zone: "เขต 2" }],
    จักราช: [{ zone: "เขต 1" }],
    เฉลิมพระเกียรติ: [{ zone: "เขต 1" }],
    ชุมพวง: [{ zone: "เขต 1" }],
    โชคชัย: [{ zone: "เขต 1" }],
    ด่านขุนทด: [{ zone: "เขต 1" },
    { zone: "เขต 2" }],
    โนนแดง: [{ zone: "เขต 1" }],
    โนนไทย: [{ zone: "เขต 1" }],
    โนนสูง: [{ zone: "เขต 1" },
    { zone: "เขต 2" }],
    บัวใหญ่: [{ zone: "เขต 1" }],
    บ้านเหลื่อม: [{ zone: "เขต 1" }],
    ประทาย: [{ zone: "เขต 1" }],
    ปักธงชัย: [{ zone: "เขต 1" },
    { zone: "เขต 2" }],
    ปากช่อง: [
      { zone: "เขต 1" },
      { zone: "เขต 2" },
      { zone: "เขต 3" },
      { zone: "เขต 4" },
    ],
    พิมาย: [{ zone: "เขต 1" },
    { zone: "เขต 2" }],
    เมืองนครราชสีมา: [
      { zone: "เขต 1" },
      { zone: "เขต 2" },
      { zone: "เขต 3" },
      { zone: "เขต 4" },
      { zone: "เขต 5" },
      { zone: "เขต 6" },
      { zone: "เขต 7" },
      { zone: "เขต 8" },
    ],
    วังน้ำเขียว: [{ zone: "เขต 1" }],
    สีคิ้ว: [{ zone: "เขต 1" },
    { zone: "เขต 2" }],
    สูงเนิน: [{ zone: "เขต 1" }],
    เสิงสาง: [{ zone: "เขต 1" }],
    หนองบุนนาก: [{ zone: "เขต 1" }],
    ห้วยแถลง: [{ zone: "เขต 1" }],
    เทพารักษ์: [{ zone: "เขต 1" }],
    บัวลาย: [{ zone: "เขต 1" }],
    พระทองคำ: [{ zone: "เขต 1" }],
    เมืองยาง: [{ zone: "เขต 1" }],
    ลำทะเมนชัย: [{ zone: "เขต 1" }],
    สีดา: [{ zone: "เขต 1" }],
  };

  if (images[selectedDistrict]) {
    zonesDropdown.innerHTML = `<option value="" disabled selected>-- กรุณาเลือกเขต --</option>`;
    images[selectedDistrict].forEach((zone) => {
      zonesDropdown.innerHTML += `<option value="${zone.zone}">${zone.zone}</option>`;
    });

    zoneDropdownContainer.style.display = "block"; // แสดง dropdown เขต
  } else {
    selectedDistrictDisplay.innerText += " (ไม่มีเขตที่เกี่ยวข้อง)";
  }
}

function selectZone() {
  const selectedDistrict = document.getElementById("districts").value;
  const selectedZone = document.getElementById("zones").value;
  const imageContainer = document.getElementById("districtImage");
  const selectedDistrictDisplay = document.getElementById("selectedDistrict");

  // อัปเดตข้อความเพื่อแสดงเขตที่เลือก
  selectedDistrictDisplay.innerText = `${selectedDistrict} | ${selectedZone}`;

  // ข้อมูลภาพ
  const images = {
    แก้งสนามนาง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    ขามทะเลสอ: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    ขามสะแกแสง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    คง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    ครบุรี: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 2",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    จักราช: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    เฉลิมพระเกียรติ: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    ชุมพวง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    โชคชัย: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    ด่านขุนทด: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 2",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    โนนแดง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    โนนไทย: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    โนนสูง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 2",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    บัวใหญ่: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    บ้านเหลื่อม: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    ประทาย: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    ปักธงชัย: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 2",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    ปากช่อง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 2",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 3",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 4",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    พิมาย: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 2",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    เมืองนครราชสีมา: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 2",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 3",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 4",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 5",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 6",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 7",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 8",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    วังน้ำเขียว: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    สีคิ้ว: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
      {
        zone: "เขต 2",
        images: [
         { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    สูงเนิน: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    เสิงสาง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    หนองบุนนาก: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    ห้วยแถลง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    เทพารักษ์: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    บัวลาย: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    พระทองคำ: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    เมืองยาง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    ลำทะเมนชัย: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
    สีดา: [
      {
        zone: "เขต 1",
        images: [
          { src: "/assets/img/eden.jpg", name: "นายเอเดน อาซาร์", number: "1", details: "ผู้สมัครคนที่ 1 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/enzo.jpg", name: "นายเอนโซ่ เฟนานเดซ", number: "2", details: "ผู้สมัครคนที่ 2 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
          { src: "/assets/img/felix.jpg", name: "นายเชา เฟลิก", number: "3", details: "ผู้สมัครคนที่ 3 เกิดเมื่อปี 1990 และเป็นนักการเมืองที่มีชื่อเสียงในจังหวัด..." },
        ],
      },
    ],
  };

  imageContainer.innerHTML = ""; // ล้างภาพเดิม

  // ตรวจหาภาพที่ตรงกับเขตและอำเภอที่เลือก
  const selectedImages = images[selectedDistrict]?.find((item) => item.zone === selectedZone)?.images;

  if (selectedImages) {
    selectedImages.forEach((image) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.style.display = "flex";
      imgWrapper.style.flexDirection = "column";
      imgWrapper.style.alignItems = "center";
      imgWrapper.style.margin = "10px";
  
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      imgElement.alt = image.name;
      imgElement.style.width = "150px";
      imgElement.style.height = "200px";
      imgElement.style.objectFit = "cover";
      imgElement.style.borderRadius = "10px";
      imgElement.style.cursor = "pointer";
  
      // เพิ่มชื่อใต้รูป
      const imgName = document.createElement("p");
      imgName.textContent = image.name;
      imgName.style.marginTop = "5px";
      imgName.style.fontSize = "18px";
      imgName.style.textAlign = "center";
  
      // เพิ่ม event คลิกเพื่อแสดงข้อมูลผ่าน SweetAlert2
      imgElement.addEventListener("click", () => {
        Swal.fire({
          title: `${image.name}`, // ชื่อ
          html: `
            <p><strong>ผู้สมัครหมายเลข</strong> ${image.number}</p>
            <img src="${image.src}" alt="${image.name}" style="width: 200px; height: 240px; margin: 10px 0;border-radius: 20px; object-fit: cover;">
            <p> ${image.name} ${image.details}</p>
          `,
          confirmButtonText: "X",
        });
      });
  
      // ใส่รูปและชื่อเข้าไปใน wrapper
      imgWrapper.appendChild(imgElement);
      imgWrapper.appendChild(imgName);
  
      // เพิ่ม wrapper เข้าไปใน container หลัก
      imageContainer.appendChild(imgWrapper);
    });
  
    imageContainer.style.display = "flex";
    imageContainer.style.flexWrap = "wrap"; // ให้สามารถแสดงหลายแถวได้หากจำเป็น
    imageContainer.style.justifyContent = "center"; // จัดเรียงรูปภาพจากซ้ายไปขวา
    imageContainer.style.alignItems = "flex-start"; // จัดแนวตั้ง
  } else {
    imageContainer.innerHTML = "<p>ไม่มีข้อมูลรูปภาพสำหรับเขตนี้</p>";
  }
  
}

