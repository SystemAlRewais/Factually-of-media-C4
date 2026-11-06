const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyO--6-96dtsazzFs1yH5-OApFts2Lv6SyEFgbhbuJcpVr6f3Y-JZyJ5NZbzciCZ5Ft8Q/exec";

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
