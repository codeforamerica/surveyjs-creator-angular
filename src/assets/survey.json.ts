export const surveyJson = {
    "title": "Summer EBT Demo",
    "logoPosition": "right",
    "pages": [
    {
    "name": "contactInfoPage",
    "elements": [
        {
        "type": "html",
        "name": "contactInfoPageHeader",
        "html": "<div><span><svg width='100' height='75' id=\"svg-icon-contactInfo\"><use href=\"#icon-contactInfo\"></span><br><h4>How can we send you updates and reminders about your application in the future?</h4></div>"
        },
        {
         "type": "text",
         "name": "phoneNumber",
         "title": "What's your phone number?",
         "description": " A caseworker may use this number to contact you directly. If you don't have a phone number, you can enter a friend or family member's phone number instead.",
         "inputType": "text",
         inputMask: "phone",
         inputFormat: "999-999-9999",
         clearIncomplete: true,
         isRequired: true,
         requiredErrorText: "Please make sure you are entering a valid 10-digit phone number, area code first." 
        }
    ]
    }
    ],
    "showTitle": false,
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "clearInvisibleValues": "none",
    "startSurveyText": "Get started",
    "pagePrevText": "Back",
    "pageNextText": "Continue",
    "firstPageIsStarted": true
   };
  