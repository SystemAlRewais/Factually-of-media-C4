// ضع هنا رابط Web App الخاص بـ Google Apps Script
const googleScriptUrl = "YOUR_GOOGLE_APPS_SCRIPT_URL";

async function fetchAppSettings() {
    try {
        const res = await fetch(`${googleScriptUrl}?action=getSettings`);
        return await res.json();
    } catch (e) {
        return { isAttendanceOpen: 'true', currentSubject: 'المحاضرة الأولى', selectedSubject: 'نشأة وسائل الاتصال' };
    }
}
