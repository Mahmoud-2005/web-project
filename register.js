// دالة التحقق من صحة البيانات المدخلة
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إرسال النموذج مباشرة
  
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // التحقق من تطابق كلمة المرور
    if (password !== confirmPassword) {
      alert("كلمة المرور غير متطابقة.");
      return;
    }
  
    // التحقق من أن جميع الحقول تم ملؤها
    if (username && email && password) {
      alert("تم إنشاء الحساب بنجاح!");
      // هنا يمكن إرسال البيانات إلى الخادم
      console.log({ username, email, password });
    } else {
      alert("يرجى ملء جميع الحقول.");
    }
  });
  