// ==========================================
// الرابط السحابي الموحد والمربوط بقاعدة بيانات جوجل شيت
// ==========================================
const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyO--6-96dtsazzFs1yH5-OApFts2Lv6SyEFgbhbuJcpVr6f3Y-JZyJ5NZbzciCZ5Ft8Q/exec";

// ==========================================
// التحقق من الاتصال السحابي
// ==========================================
console.log("تم تحميل السكربت بنجاح، المنصة متصلة بالسحابة عبر الرابط: " + googleScriptUrl);

function checkCloudConnection() {
    return googleScriptUrl !== "";
}

// ==========================================
// دوال إدارة الطلاب والمصادقة (API Calls)
// ==========================================

// تسجيل دخول الطالب
async function apiLoginStudent(id, pass) {
    try {
        const response = await fetch(`${googleScriptUrl}?action=loginStudent&id=${id}&pass=${pass}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("خطأ في الاتصال بالسحابة أثناء تسجيل الدخول:", error);
        return { success: false };
    }
}

// إنشاء طالب جديد من لوحة الإدارة
async function apiRegisterStudent(studentData) {
    try {
        const response = await fetch(googleScriptUrl, {
            method: 'POST',
            body: JSON.stringify({
                action: "registerStudent",
                id: studentData.id,
                name: studentData.name,
                phone: studentData.phone,
                grade: studentData.grade,
                password: studentData.password
            })
        });
        return await response.json();
    } catch (error) {
        console.error("خطأ في تسجيل الطالب:", error);
        return { success: false };
    }
}

// جلب بيانات الفرقة (كتب، جداول، إعلانات، حالة المحاضرة)
async function apiGetGradeData(grade) {
    try {
        const response = await fetch(`${googleScriptUrl}?action=getGradeData&grade=${encodeURIComponent(grade)}`);
        return await response.json();
    } catch (error) {
        console.error("خطأ في جلب بيانات الفرقة:", error);
        return null;
    }
}

// تسجيل الحضور الجغرافي (GPS)
async function apiRecordAttendance(attendanceData) {
    try {
        const response = await fetch(googleScriptUrl, {
            method: 'POST',
            body: JSON.stringify({
                action: "recordAttendance",
                grade: attendanceData.grade,
                id: attendanceData.id,
                name: attendanceData.name,
                subject: attendanceData.subject
            })
        });
        return await response.json();
    } catch (error) {
        console.error("خطأ في تسجيل الحضور:", error);
        return { success: false };
    }
}
