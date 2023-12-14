// about: base file of the Free Time extension
// author: Cesar Carrillo
// last updated: 12/14/2023

// TODO: make print message more detailed
function onError() { console.log("error in the code"); }

function clearVideoEndSuggested() { /* TODO: add this */ }

// removes suggested videos on the side bar ("desktop view")
function clearSecondaryDiv()
{
    var secondary = document.getElementById("secondary");

    // TODO: improve this
    // loop this function until the content loads
    if(secondary == null)   { requestAnimationFrame(clearSecondaryDiv); }
    else                    { secondary.style.display = "none";         }
}

// removes suggested videos under the player ("mobile view")
function clearSuggestedVideos()
{
    // there are multiple elements with the "related" ID
    // so we have to filter with by the class name first 
    var elements    = document.getElementsByClassName("style-scope ytd-watch-flexy");
    var found       = false;
    
    for(var i = 0; i < elements.length; i++)
    {
        if(elements[i].id == "related")
        {
            elements[i].remove(); found = true;
        }
    }

    // TODO: improve this
    // loop this function until the content loads
    if(found == false)
    {
        requestAnimationFrame(clearSuggestedVideos);
    }
}

// initiate removing suggested videos
function applyDisableSuggested(value)
{
    if(value.disableSuggested == true)
    {
        clearSecondaryDiv();
        clearSuggestedVideos();
        clearVideoEndSuggested();
    }
}

// removes comments
function clearComments()
{
    var comments = document.getElementById("comments");
    
    // TODO: improve this
    // loop this function until the content loads
    if(comments == null)    { requestAnimationFrame(clearComments); }
    else                    { comments.remove();                    }
}

// initiate removing comments
function applyDisableComments(value)
{
    if(value.disableComments == true)
    {
        clearComments();
    }
}

// clear content based on user settings
function cleanPage()
{
    browser.storage.local.get("disableSuggested").then(applyDisableSuggested, onError);
    browser.storage.local.get("disableComments").then(applyDisableComments, onError);
}

document.onload = cleanPage(); // init