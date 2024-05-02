export const surveyJson = {
    "title": "Summer EBT Demo",
    "logoPosition": "right",
    "pages": [
    {
        "name": "applicationStepsPage",
        "elements": [
            {
            "type": "html",
            "name": "applicationSteps",
            "html": {
            "default": "<div><span><svg width='100' height='75' id=\"svg-icon-prepareToApply\"><use href=\"#icon-prepareToApply\"></span><br><h4>Application steps</h4>This application should take about <b>15 minutes</b> to complete.</div><div class=\"box\"><b>Steps</b><br><ol><li>Student information</li><li>Household information</li><li>Income and employment</li><li>Contact information</li></ol></div>",
            "es": "<div><span><svg width='100' height='75' id=\"svg-icon-prepareToApply\"><use href=\"#icon-prepareToApply\"></span><br><h4>Pasos de la solicitud</h4>Esta aplicación debería tardar aproximadamente <b>15 minutos </b> completar.</div><div class=\"box\"><b>Steps</b><br><ol><li>Student information</li><li>Household information</li><li>Income and employment</li><li>Contact information</li></ol></div>"
            }
            }
        ]
    },      
     {
      "name": "studentInfoStepsPage",
      "elements": [
       {
        "type": "html",
        "name": "studentInfoSteps",
        "html": "<div id=\"test\"><span><svg width='100' height='75' id=\"svg-icon-documentAndEnvelope\"><use href=\"#icon-documentAndEnvelope\"></span><br>Step 1 of 4<br><h4>Student information</h4>Next, let's add the student(s) who you're applying for.</div><div class=\"box\"><b>We'll ask about</b><br><ol><li>Student information</li><li>School enrollment</li></ol></div>"
       }
      ]
     },
     {
      "name": "schoolAttendancePage",
      "elements": [
       {
        "type": "html",
        "name": "schoolAttendanceHtml",
        "html": "<div><span><svg width='100' height='75' id=\"svg-icon-school\"><use href=\"#icon-school\"></span><br><h4>School attendance</h4></div>"
       },
       {
        "type": "dropdown",
        "name": "schoolAttendance",
        "title": "In what state, territory, or tribal nation does the student attend school?",
        "description": "During the 2023-2024 year",
        "hideNumber": true,
        "choices": [
         {
          "value": "AL",
          "text": "Alabama"
         },
         {
          "value": "AK",
          "text": "Alaska"
         },
         {
          "value": "AS",
          "text": "American Samoa"
         },
         {
          "value": "AZ",
          "text": "Arizona"
         },
         {
          "value": "AR",
          "text": "Arkansas"
         },
         {
          "value": "CA",
          "text": "California"
         },
         {
          "value": "Cherokee",
          "text": "Cherokee Nation"
         },
         {
          "value": "Chickaswa",
          "text": "Chickaswa Nation"
         },
         {
          "value": "CO",
          "text": "Colorado"
         },
         {
          "value": "CT",
          "text": "Connecticut"
         }
        ]
       }
      ]
     },
     {
      "name": "addStudentPage",
      "elements": [
       {
        "type": "html",
        "name": "addStudentHtml",
        "html": "<div><span><svg width='100' height='75' id=\"svg-icon-face\"><use href=\"#icon-face\"></span><br><h4>Add a student you're applying for</h4></div>"
       },
       {
        "type": "paneldynamic",
        "name": "addStudentPanel",
        "titleLocation": "hidden",
        "valueName": "household",
        "startItemIndex": 2,
        "isSingleItemEditMode": true,
        "templateElements": [
         {
          "type": "text",
          "name": "studentFirstName",
          "title": "What's their first name?",
          "titleLocation": "top",
          "description": "Legally as it appears on official documents, e.g. birth certificate",
          "valueName": "firstName",
          "isRequired": true
         },
         {
          "type": "text",
          "name": "studentMiddleName",
          "title": "What's their middle name?",
          "titleLocation": "top",
          "description": "If they have one",
          "valueName": "middleName"
         },
         {
          "type": "text",
          "name": "studentLastName",
          "title": "What's their last name?",
          "titleLocation": "top",
          "description": "Legally as it appears on official documents, e.g. birth certificate",
          "valueName": "lastName"
         },
         {
          "type": "expression",
          "name": "childFullName",
          "visible": false,
          "title": "Full Name",
          "valueName": "fullName",
          "expression": "{panel.firstName} + ' ' + {panel.lastName}"
         },
         {
            "type": "html",
            "name": "question1",
            "html": "<b>When were they born?</b><br>Month / Day / Year"
         },
         {
            "type": "memorabledate",
            "name": "birthDatePanel",
         },
         {
          "type": "radiogroup",
          "name": "isTribalMember",
          "title": "Is this student a registered member of an Indian Tribal Organization?",
          "titleLocation": "top",
          "choices": [
           {
            "value": "yes",
            "text": "Yes"
           },
           {
            "value": "no",
            "text": "No"
           }
          ]
         },
         {
          "type": "text",
          "name": "ssn",
          "title": "Social Security Number (SSN) of this student",
          "titleLocation": "top",
          "description": "Optional. An SSN is not required to receive Summer EBT benefits."
         }
        ],
        "noEntriesText": "You haven't added any children yet.\nClick the button below to add a new child.",
        "allowAddPanel": false,
        "allowRemovePanel": false,
        "panelCount": 2,
        "panelAddText": "Add a child",
        "panelRemoveText": "Remove a child"
       }
      ]
     },
     {
      "name": "catElCheckPage",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "catElCheckPanel",
        "titleLocation": "hidden",
        "valueName": "household",
        "startItemIndex": 2,
        "isSingleItemEditMode": true,
        "templateElements": [
         {
          "type": "html",
          "name": "question3",
          "html": "<div><span><svg width='100' height='75' id=\"svg-icon-face\"><use href=\"#icon-face\"></span><br><h4>Do any of the following apply to {panel.firstName}?</h4><br>Check all that apply.<br>They may be more likely to be eligible for Summer EBT.</div>"
         },
         {
          "type": "checkbox",
          "name": "catElCheck",
          "titleLocation": "hidden",
          "choices": [
           {
            "value": "fosterCare",
            "text": "In foster care"
           },
           {
            "value": "unhoused",
            "text": "Unhoused/homeless"
           },
           {
            "value": "migrant",
            "text": "Child of migrant worker"
           },
           {
            "value": "runaway",
            "text": "Runaway from home"
           }
          ],
          "showNoneItem": true,
          "noneText": "None of the above"
         }
        ],
        "allowAddPanel": false,
        "allowRemovePanel": false
       }
      ]
     },
     {
      "name": "raceAndEthnicityPage",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "raceAndEthnicityPanel",
        "titleLocation": "hidden",
        "valueName": "household",
        "startItemIndex": 2,
        "isSingleItemEditMode": true,
        "templateElements": [
         {
          "type": "html",
          "name": "question4",
          "html": "<div><span><svg width='100' height='75' id=\"svg-icon-raceAndEthnicity\"><use href=\"#icon-raceAndEthnicity\"></span><br><h4>What races or ethnicities does {panel.firstName} identify with?</h4><br>Optional. Select all that apply.</div>"
         },
         {
          "type": "checkbox",
          "name": "raceAndEthnicity",
          "titleLocation": "hidden",
          "description": "Optional. Select all that apply.",
          "choices": [
           {
            "value": "01",
            "text": "American Indian or Alaska Native"
           },
           {
            "value": "02",
            "text": "Asian"
           },
           {
            "value": "03",
            "text": "Black or African American"
           },
           {
            "value": "04",
            "text": "Hispanic, Latino or Spanish"
           },
           {
            "value": "05",
            "text": "Middle Eastern or North African"
           },
           {
            "value": "06",
            "text": "Native Hawaiian or Pacific Islander"
           },
           {
            "value": "07",
            "text": "White"
           },
           {
            "value": "08",
            "text": "Some other race or ethnicity"
           }
          ],
          "showNoneItem": true,
          "noneText": "Skip this question",
          "otherText": "Some other race or ethnicity"
         }
        ],
        "allowAddPanel": false,
        "allowRemovePanel": false
       }
      ]
     },
     {
      "name": "schoolInformationPage",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "schoolInformationPanel",
        "titleLocation": "hidden",
        "valueName": "household",
        "startItemIndex": 2,
        "isSingleItemEditMode": true,
        "templateElements": [
         {
          "type": "html",
          "name": "schoolInformationHtml",
          "html": "<div><span><svg width='100' height='75' id=\"svg-icon-school\"><use href=\"#icon-school\"></span><br><h4>School information for {panel.firstName}</h4></div>"
         },
         {
          "type": "dropdown",
          "choices": [ "Ophamer", "Opera", "Saint Poppy", "Penelope" ],
          "name": "schoolDistrict",
          "title": "In what school district does {panel.firstName} attend school?",
          "titleLocation": "top"
         },
         {
          "type": "text",
          "name": "schoolName",
          "title": "School Name",
          "titleLocation": "top"
         },
         {
          "type": "text",
          "name": "studentId",
          "title": "Student ID number for {panel.firstName}",
          "titleLocation": "top",
          "description": "If the school provides one. If not, leave this field blank."
         }
        ],
        "allowAddPanel": false,
        "allowRemovePanel": false
       }
      ]
     },
     {
      "name": "reviewStudentsPage",
      "elements": [
       {
        "type": "html",
        "name": "reviewStudentsPageHeader",
        "html": "<div><span><svg width='100' height='75' id=\"svg-icon-docWithMagnifyingGlass\"><use href=\"#icon-docWithMagnifyingGlass\"></span><br><h4>Are these all the students in the household applying for Summer EBT?</h4><br>Add any K-12 students who are in the same household.</div>"
       },
       {
        "type": "paneldynamic",
        "name": "reviewStudents",
        "title": "Review students",
        "valueName": "household",
        "isFirstItemHidden": true,
        "goToPageOnAddorEdit": "addStudentPage",
        "hasEditAction": true,
        "templateElements": [
         {
          "type": "text",
          "name": "reviewFirstName",
          "width": "50%",
          "title": "First Name",
          "valueName": "firstName"
         },
         {
          "type": "text",
          "name": "reviewLastName",
          "width": "50%",
          "startWithNewLine": false,
          "title": "Last Name",
          "valueName": "lastName"
         },
         {
          "type": "text",
          "name": "reviewSchoolDistrict",
          "width": "33%",
          "title": "District",
          "valueName": "schoolDistrict"
         },
         {
          "type": "text",
          "name": "reviewSchoolName",
          "width": "33%",
          "startWithNewLine": false,
          "title": "School",
          "valueName": "schoolName"
         },
         {
          "type": "text",
          "name": "reviewStudentId",
          "width": "33%",
          "startWithNewLine": false,
          "title": "ID",
          "valueName": "studentId"
         }
        ],
        "panelAddText": "Add a student",
        "panelRemoveText": "delete"
       }
      ]
     },
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
  