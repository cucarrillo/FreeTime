// about: setting functions for "settings.html"
// author: Cesar Carrillo
// last updated: 12/14/2023

// update the checkbox if the setting is activated
function updateSuggestedCB(check)
{
    if(check.disableSuggested)
    {
        document.getElementById("cbSuggested").click();
    }
}

// update the checkbox if the setting is activated
function updateCommentsCB(check)
{
    if(check.disableComments)
    {
        document.getElementById("cbComments").click();
    }
}

// TODO: make print message more detailed
function onError() { console.log("error in the code"); }

// main function
function main()
{
    // checkbox variables
    var cbSuggested = document.getElementById("cbSuggested");
    var cbComments  = document.getElementById("cbComments");

    // match checkboxs with active settings
    browser.storage.local.get("disableSuggested").then(updateSuggestedCB, onError);
    browser.storage.local.get("disableComments").then(updateCommentsCB, onError);

    // create event listeners for the checkboxes
    cbSuggested.addEventListener("change", function(event)
    {
        browser.storage.local.set({"disableSuggested": cbSuggested.checked });
    }, false);

    cbComments.addEventListener("change", function(event)
    {
        browser.storage.local.set({"disableComments": cbComments.checked });
    }, false);
}

document.onload = main(); // init