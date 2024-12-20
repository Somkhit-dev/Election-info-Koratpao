//สไลด์
let slideIndex = 0;
let slideInterval = setInterval(autoSlide, 1);
function autoSlide() {
  changeSlide(1);
}
function changeSlide(n) {
  let slides = document.querySelectorAll(".slide img");
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");

  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 10000);
}

//ปุ่มเพิ่มเติม
function toggleMoreInfo() {
  var moreInfo = document.getElementById("more-info");
  var moreInfoBtn = document.getElementById("moreInfoBtn");
  var announcementSection = document.getElementById("announcement-section");
  if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
    moreInfo.style.display = "block";
    var learnButtonContainer = moreInfoBtn.parentElement;
    learnButtonContainer.parentElement.appendChild(learnButtonContainer);
    moreInfoBtn.textContent = "แสดงน้อยลง";
  } else {
    moreInfo.style.display = "none";
    moreInfoBtn.textContent = "แสดงมากขึ้น";
    announcementSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

//ขึ้นไปด้านบน
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//alert info
function showAlert(name, number, details, imageUrl) {
  Swal.fire({
    title: name,
    html: `
      <strong>${number}</strong><br>
      <img src="${imageUrl}" alt="Image" style="width: 200px; height: 240px; margin: 10px 0;border-radius: 20px; object-fit: cover;"><br>
      ${details} 
    `,
    confirmButtonText: 'X'
  });
}

