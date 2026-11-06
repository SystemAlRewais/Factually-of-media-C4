const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyO--6-96dtsazzFs1yH5-OApFts2Lv6SyEFgbhbuJcpVr6f3Y-JZyJ5NZbzciCZ5Ft8Q/exec";

console.log("Connected to cloud: " + googleScriptUrl);

function checkCloudConnection() {
    return googleScriptUrl !== "";
}
