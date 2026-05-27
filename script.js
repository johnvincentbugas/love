const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const section = document.getElementById("foodSection");
const finalText = document.getElementById("finalText");

let moveCount = 0;

// NO button runs away 😂
noBtn.addEventListener("mouseover", () => {
  moveCount++;

  const x = Math.random() * 200;
  const y = Math.random() * 80;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if(moveCount > 5){
    noBtn.innerText = "ok fine 😭 YES";
  }
});

// YES button
yesBtn.addEventListener("click", () => {
  section.style.display = "block";
  document.querySelector("h1").innerText = "YAY! It's a date 💘😂";
});

// confirm date
function confirmDate(){
  const food = document.getElementById("food").value;
  const datetime = document.getElementById("datetime").value;

  if(!datetime){
    finalText.innerHTML = "Pick a date & time first 😤";
    return;
  }

  finalText.innerHTML = `
    📍 Place: ${food}<br>
    📅 Schedule: ${datetime}<br><br>
    💘 See you on our chaotic romantic date 😂
  `;
}