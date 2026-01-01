// ===== Gallery Product 1 =====
const mainImg1 = document.getElementById("mainImg1");
if(mainImg1){
  document.querySelectorAll(".thumb1").forEach(thumb=>{
    thumb.addEventListener("click",()=>mainImg1.src=thumb.src);
  });
}
// ===== Gallery Product 2 =====
const mainImg2 = document.getElementById("mainImg2");
if(mainImg2){
  document.querySelectorAll(".thumb2").forEach(thumb=>{
    thumb.addEventListener("click",()=>mainImg2.src=thumb.src);
  });
}
// ===== Gallery Product 3 =====
const mainImg3 = document.getElementById("mainImg3");
if(mainImg3){
  document.querySelectorAll(".thumb3").forEach(thumb=>{
    thumb.addEventListener("click",()=>mainImg3.src=thumb.src);
  });
}

// Products fade-in animation
document.querySelectorAll(".card").forEach((card,i)=>{
  setTimeout(()=>{card.style.opacity=1;card.style.transform='translateY(0)';},i*200);
});
