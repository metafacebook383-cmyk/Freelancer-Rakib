// The timer is a visual 59-second countdown and automatically restarts.
const countdown = document.getElementById('countdown');
let secondsLeft = 59;
function updateCountdown() {
  countdown.textContent = String(secondsLeft);
  secondsLeft -= 1;
  if (secondsLeft < 1) secondsLeft = 59;
}
updateCountdown();
setInterval(updateCountdown, 1000);

const orderForm = document.getElementById('orderForm');
const formMessage = document.getElementById('formMessage');
orderForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const transactionId = document.getElementById('transactionId').value.trim();
  if (!fullName || !email || !phone || !transactionId) {
    formMessage.textContent = 'অনুগ্রহ করে সব ঘর পূরণ করুন।';
    return;
  }
  const message = [
    'Paycard Solution BD - অর্ডার', '',
    'নাম: ' + fullName,
    'জিমেইল: ' + email,
    'ফোন নম্বর: ' + phone,
    'অর্ডার মূল্য: ৯৯ টাকা',
    'পেমেন্ট মাধ্যম: বিকাশ / নগদ',
    'Transaction ID: ' + transactionId
  ].join('\n');
  formMessage.textContent = 'WhatsApp খোলা হচ্ছে…';
  window.open('https://wa.me/8801824318448?text=' + encodeURIComponent(message), '_blank', 'noopener');
});
