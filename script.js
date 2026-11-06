// ضع هنا رابط Web App الخاص بـ Google Apps Script الذي حصلت عليه بعد النشر (Deploy)
const googleScriptUrl = "YOUR_GOOGLE_APPS_SCRIPT_URL";

// دالة جلب إعدادات المحاضرة والحضور سحابياً
async function fetchAppSettings() {
    try {
        const res = await fetch(`${googleScriptUrl}?action=getSettings`);
        return await res.json();
    } catch (e) {
        return { isAttendanceOpen: 'true', currentSubject: 'المحاضرة الأولى', selectedSubject: 'نشأة وسائل الاتصال' };
    }
}

// دالة جلب قائمة الطلاب (تستخدم في لوحة الإدارة القديمة أو عند الحاجة)
async function fetchAllStudentsFromSheet() {
    try {
        const res = await fetch(`${googleScriptUrl}?action=getStudents`);
        return await res.json();
    } catch (e) {
        return [];
    }
}

// دالة لتوليد كود جامعي عشوائي فريد عند الحاجة
function generateStudentID() {
    return 'AZ' + Math.floor(100000 + Math.random() * 900000);
}

// دالة للتحقق من وجود جلسة طالب نشطة
function checkStudentAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
    }
}

// دالة تسجيل الخروج العامة
function logoutSystem() {
    localStorage.clear();
    window.location.href = 'index.html';
}
