document.querySelectorAll(".service").forEach(button=>{
  button.addEventListener("click",()=>{
    const name=button.dataset.service;
    const box=document.getElementById("serviceMessage");
    box.textContent=`आपने "${name}" चुना है। अगला चरण नज़दीकी Verified Seva Partner खोजना होगा।`;
    box.classList.remove("hidden");
  });
});

document.getElementById("partnerBtn").addEventListener("click",()=>{
  alert("Partner registration module जल्द जोड़ा जाएगा।");
});
