// الرابط السحابي الموحد والمربوط بقاعدة بيانات جوجل شيت الجديدة
const googleScriptUrl = "https://script.google.com/macros/s/AKfycbznIz7F-NNNtj6tZ4cblBHyKqVeva1msOMVIuw5L7Nwk1bSV-sob6wn3PUrF32pz6Mf/exec";

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
