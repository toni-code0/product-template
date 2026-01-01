document.querySelectorAll('.card').forEach(card=>{
  card.style.opacity=0;
  setTimeout(()=>{
    card.style.opacity=1;
  },300);
});
