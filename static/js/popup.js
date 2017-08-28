alert('1111111111');
var storage = chrome.storage.local;
$(document).ready(function() {   
    var viewPage = {
        "newTab": true
    };
    storage.set({viewPage});
});