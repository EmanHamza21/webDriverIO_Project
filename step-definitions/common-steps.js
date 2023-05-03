
When(/^user clicks on (.W)$/, (pageName) => {
	
});



Then(/^Click on close Icon on the help prompt to close it$/, function () {
    dashBoard.closeHelpPromptByCloseIcon();
});

Then(/^Click on cancel button on the help prompt to close it$/, function () {
    dashBoard.closeHelpPromptByCancelButton();
});


Then(/^Click on (.W) on the help prompt to close it$/, function () {
    dashBoard.closeHelpPromptByCancelButton();
});