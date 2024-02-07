export const surveyJson = {
    "testProperty": "testing123",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "question1",
        "title": "Enter some information about one household member (adding and removing not supported)",
        "valueName": "household",
        "isSingleItemEditMode": true,
        "startItemIndex": "2",
        "templateElements": [
         {
          "type": "text",
          "name": "question3",
          "title": "First Name {panelIndex}",
          "valueName": "firstName"
         }
        ],
        "allowAddPanel": false,
        "allowRemovePanel": false,
        "panelCount": 2
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "question2",
        "title": "Enter more information about the same household member (adding and removing not supported)",
        "valueName": "household",
        "isSingleItemEditMode": true,
        "startItemIndex": "2",
         "templateElements": [
         {
          "type": "text",
          "name": "question5",
          "title": "Last Name {panelIndex}",
          "valueName": "lastName"
         }
        ],
        "allowAddPanel": false,
        "allowRemovePanel": false,
        "panelCount": 2
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "question4",
        "title": "Review all household members and choose to add, delete, or go back to first screen to edit a specific member.",
        "valueName": "household",
        "goToPageOnAddorEdit": "page1",
        "isFirstItemHidden": true,
        "templateElements": [
         {
          "type": "text",
          "name": "question6",
          "title": "First Name {panelIndex}",
          "valueName": "firstName",
          "readOnly": true
         },
         {
          "type": "text",
          "name": "question7",
          "startWithNewLine": false,
          "title": "Last Name {panelIndex}",
          "valueName": "lastName",
          "readOnly": true
         },
         {
          "type": "boolean",
          "renderAs": "checkbox",
          "name": "edit",
          "startWithNewLine": false,
          "title": "Edit"
       }
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "question8",
        "isSingleItemEditMode": true,
        "startItemIndex": "1",
        "title": "Bonus! Add another type of person to the same household.",
        "valueName": "household",
        "templateElements": [
         {
          "type": "text",
          "name": "question9",
          "title": "First Name {panelIndex}",
          "valueName": "firstName"
         },
         {
          "type": "text",
          "name": "question10",
          "startWithNewLine": false,
          "title": "Last Name {panelIndex}",
          "valueName": "lastName"
         }
        ],
        "allowAddPanel": false,
        "allowRemovePanel": false
       }
      ]
     }
    ]
   }