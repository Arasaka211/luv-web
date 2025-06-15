// 恋爱时间计算
const startDate = new Date("2025-05-16T00:00:00");
const today = new Date();

let years = today.getFullYear() - startDate.getFullYear();
let months = today.getMonth() - startDate.getMonth();
let days = today.getDate() - startDate.getDate();

if (days < 0) {
  months -= 1;
  const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  days += prevMonth.getDate();
}

if (months < 0) {
  years -= 1;
  months += 12;
}

document.getElementById("days").textContent =
  `${years} 年${months} 个月${days} 天`;

// 点击爱心坠落动画
document.querySelectorAll('.hearts span').forEach(heart => {
  heart.addEventListener('click', () => {
    const fallingHeart = document.createElement('div');
    fallingHeart.className = 'falling-heart';
    fallingHeart.textContent = heart.textContent;
    fallingHeart.style.left = `${Math.random() * 90}vw`;
    document.body.appendChild(fallingHeart);
    setTimeout(() => fallingHeart.remove(), 2000);
  });
});
