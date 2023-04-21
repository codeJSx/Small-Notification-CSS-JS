var lastNotificationDivId = 1;
function createNotification(notification_text) {
    const notificationsDiv = document.getElementById("notifications");
    const notificationDiv = document.createElement("div");
    notificationDiv.setAttribute("class", "notification");
    lastNotificationDivId = lastNotificationDivId + 1;
    notificationDiv.setAttribute("id", `notificationDiv#${lastNotificationDivId}`);
    const pElement = document.createElement("p");
    pElement.setAttribute("id", "");
    pElement.textContent = notification_text;
    notificationDiv.appendChild(pElement);
    const spanElement = document.createElement("span");
    spanElement.setAttribute("class", "notification__progress");
    notificationDiv.appendChild(spanElement);
    notificationsDiv.appendChild(notificationDiv);

    // Delete Notification 
    removeNotification(lastNotificationDivId);
}
function removeNotification(ID) {
    setTimeout(function() {
        document.getElementById(`notificationDiv#${ID}`).remove();
    }, 2500); // Delete Notification after 2,5 Seconds
}