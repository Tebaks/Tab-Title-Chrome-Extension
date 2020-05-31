
document.getElementById('form').addEventListener('submit', setTitle);

function setTitle() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        var test = document.getElementById('title').value
        console.log(test)
        chrome.tabs.executeScript(activeTab.id, { code: "document.title = '" + test + "'" });
    });
}