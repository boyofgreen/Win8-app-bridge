WV.addEventListener('MSWebViewFrameContentLoading', function (e) {

    var eventName = e.uri.split('EVENT=');
    if (eventName.length > 1) {
        var path = eventName[1];
        var secondaryTile, selectionRect, squareLogoUri, wideLogoUri, wideLogoPath,
            options = ((Windows.UI.StartScreen.TileOptions && Windows.UI.StartScreen.TileOptions.none) || 0),
            displayName = 'Fav Place',
            squareLogoPath = path;
        squareLogoUri = new Windows.Foundation.Uri('ms-appx:///images/ms.jpg');
        secondaryTile = new Windows.UI.StartScreen.SecondaryTile(
            "tilePin",
            "fav Place",
            WV.src,
            squareLogoUri,
            Windows.UI.StartScreen.TileSize.square150x150
        );

        selectionRect = document.getElementById("pinButton").getBoundingClientRect();

        secondaryTile.requestCreateForSelectionAsync(
            {
                x: selectionRect.left,
                y: selectionRect.top,
                width: selectionRect.width,
                height: selectionRect.height
            },
            Windows.UI.Popups.Placement.below
        );
    }

});






pinHandler = function (path) {

    //now add code to page to find image

    var collectString = 'var imgCol = document.getElementsByTagName("img"); var myImg = imgCol[0];';
    collectString += 'var EB = document.createElement("iframe");';
    collectString += 'document.getElementById("main").appendChild(EB);';
    collectString += 'EB.width=0;EB.height=0;';
    collectString += 'EB.src = "becon.html?EVENT=" + myImg.src';

    var collectEval = WV.invokeScriptAsync('eval', collectString);
    collectEval.start();
    
};


//make the button in the appBar

//make pin button
btn = document.createElement("button");

new WinJS.UI.AppBarCommand(btn, { label: 'pin it', icon: "pin" });

btn.className = "win-disposable win-command win-global";
btn.setAttribute("role", "menuitem");
btn.setAttribute("id", "pinButton");
btn.addEventListener("click", pinHandler);

document.getElementById('appBar').appendChild(btn);