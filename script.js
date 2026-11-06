// الرابط السحابي الجديد المعتمد للمنصة الأكاديمية
const googleScriptUrl = "https://script.google.com/macros/s/AKfycbywc-EEG39QEV4w3sH7dEa7fAj5nSvZ5IW5nrgw3Un2Ngk-vvs55_3pXmvyJZU44Z9iIQ/exec";

console.log("تم تحميل السكربت بنجاح، المنصة متصلة بالسحابة عبر الرابط: " + googleScriptUrl);

function checkCloudConnection() {
    return googleScriptUrl !== "";
}

async function apiLoginStudent(id, pass) {
    try {
        const response = await fetch(`${googleScriptUrl}?action=loginStudent&id=${encodeURIComponent(id)}&pass=${encodeURIComponent(pass)}`);
        return await response.json();
    } catch (error) {
        return { success: false };
    }
}

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
        return { success: false };
    }
}
