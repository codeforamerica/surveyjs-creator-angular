export const surveyJson = {
    "title": "CfA Components Example",
    "logoPosition": "right",
    "pages": [
     {
      "name": "accordionPage",
      "elements": [
       {
        "type": "panel",
        "name": "accordionPanel1",
        "elements": [
         {
          "type": "html",
          "name": "accordionPanel1Content",
          "html": "    <ul>\n      <li>Personal information</li>\n      <li>People who live with you</li>\n      <li>Income</li>\n      <li>Expenses</li>\n      <li>Assets</li>\n    </ul>\n    <p>\n      <a href=\"#\">Learn more about how we protect your personal information</a>.\n    </p>"
         }
        ],
        "title": "We'll ask you about",
        "state": "expanded"
       },
       {
        "type": "panel",
        "name": "accordionPanel2",
        "elements": [
         {
          "type": "html",
          "name": "accordionPanel2Content",
          "html": "<p>If you are applying for food assistance (SNAP), you will have the choice to submit an incomplete application with only your name, address, and signature.</p>\n    <p>By choosing to submit an incomplete application, you may experience longer processing time and more communication with your county.</p>"
         }
        ],
        "title": "Submitting an incomplete application (SNAP only)",
        "state": "collapsed"
       },
       {
        "type": "panel",
        "name": "accordionPanel3",
        "elements": [
         {
          "type": "html",
          "name": "accordionPanel3Content",
          "html": "<p>At the end of this application, you will have the option to add documents, like pay stubs, rent receipts, or medical bills.</p>\n    <p>You can use your phone to take photos of paper documents or select photos from your device.</p>\n    <p>You can always return to our homepage to add documents later, too.</p>"
         }
        ],
        "title": "Adding documents",
        "state": "collapsed"
       },
       {
        "type": "panel",
        "name": "accordionPanel4",
        "elements": [
         {
          "type": "html",
          "name": "accordionPanel4Content",
          "html": "<p>Your application submission date is the earliest date your benefits can begin.</p>\n    <p>Most programs on this application, including food and cash assistance, require an interview after you submit. Look for a letter in the mail or a phone call from your county.</p>"
         }
        ],
        "title": "After you submit",
        "state": "collapsed"
       }
      ],
      "title": "Accordion",
      "description": "Uses SurveyJS Panel question type"
     },
     {
      "name": "alertPage",
      "elements": [
       {
        "type": "panel",
        "name": "informationalAlertPanel",
        "elements": [
         {
          "type": "html",
          "name": "informationalAlert",
          "html": "<div class=\"usa-alert cfa-alert usa-alert--info\" role=\"region\" aria-labelledby=\"aria-lb-5c42fc61f0af5\">\n  <div class=\"usa-alert__body\">\n    <div>\n      <h3 class=\"usa-alert__heading\" id=\"aria-lb-eee04703a7361\">Can we ask about your race and identity?</h3>\n      <p>Providing your race and ethnicity is optional and will not affect your individual application.</p>\n      <p>We will use this information to evaluate the fairness of this application, and we ask you to provide it to ensure that you are accurately represented. <a href=\"#\">Learn more about how we protect your personal information</a>.</p>\n    </div>\n  </div>\n</div>"
         }
        ],
        "title": "Informational Alert",
        "state": "expanded"
       },
       {
        "type": "panel",
        "name": "successAlertPanel",
        "elements": [
         {
          "type": "html",
          "name": "successAlert",
          "html": "<div class=\"usa-alert cfa-alert usa-alert--success\" role=\"status\">\n  <div class=\"usa-alert__body\">\n    <div>\n      <h3 class=\"usa-alert__heading\">Done! Your application has been submitted.</h3>\n      <p class=\"usa-alert__text\">You were recommended for expedited food assistance (SNAP). <a href=\"#\">Click here to learn more about expedited food assistance</a>.</p>\n    </div>\n  </div>\n</div>"
         }
        ],
        "title": "Success Alert",
        "state": "expanded"
       },
       {
        "type": "panel",
        "name": "warningAlertPanel",
        "elements": [
         {
          "type": "html",
          "name": "warningAlert",
          "html": "<div class=\"usa-alert cfa-alert usa-alert--warning\">\n  <div class=\"usa-alert__body\">\n    <h3 class=\"usa-alert__heading\">Make sure your address is correct</h3>\n    <div>\n      <p class=\"usa-alert__text\">We couldn't find your address. To make sure you get mail from the county, you may edit your address or keep going. <a href=\"#\">Alternatively, click here to look up your county information</a>.</p>\n    </div>\n  </div>\n</div>"
         }
        ],
        "title": "Warning Alert",
        "state": "expanded"
       },
       {
        "type": "panel",
        "name": "errorAlertPanel",
        "elements": [
         {
          "type": "html",
          "name": "errorAlert",
          "html": "<div class=\"usa-alert cfa-alert usa-alert--error\" role=\"alert\">\n  <div class=\"usa-alert__body\">\n    <div>\n      <h3 class=\"usa-alert__heading\">Error notice</h3>\n      <p class=\"usa-alert__text\">This is an example error notice. Its a great way to highlight <strong>errors or dangerous issues</strong>. <a href=\"#\">Here is a link to more information</a>.</p>\n    </div>\n  </div>\n</div>"
         }
        ],
        "title": "Error Alert",
        "state": "expanded"
       },
       {
        "type": "panel",
        "name": "emergencyAlertPanel",
        "elements": [
         {
          "type": "html",
          "name": "emergencyAlert",
          "html": "<div class=\"usa-alert cfa-alert usa-alert--emergency\" role=\"status\">\n  <div class=\"usa-alert__body\">\n    <div>\n      <h3 class=\"usa-alert__heading\">Emergency alert message</h3>\n      <p class=\"usa-alert__text\">Additional context and followup information including <a href=\"#\">a link</a>.</p>\n    </div>\n  </div>\n</div>"
         }
        ],
        "title": "Emergency Alert",
        "state": "expanded"
       }
      ],
      "title": "Alert",
      "description": "Uses SurveyJS HTML question type"
     },
     {
      "name": "buttonPage",
      "elements": [
       {
        "type": "html",
        "name": "question1",
        "html": "<div class=\"usa-alert cfa-alert usa-alert--emergency\" role=\"status\">\n  <div class=\"usa-alert__body\">\n    <div>\n      <h3 class=\"usa-alert__heading\">Note</h3>\n      <p class=\"usa-alert__text\">SurveyJS does not provide support for a stand-alone button. It provides buttons for navigating forward and backward between survey pages. A custom component would need to be created, but the requirements for how the Button should be used and how it would behave will need to be defined first.</p>\n    </div>\n  </div>\n</div>"
       }
      ],
      "title": "Button"
     },
     {
      "name": "buttonGroupPage",
      "elements": [
       {
        "type": "html",
        "name": "question2",
        "html": "<div class=\"usa-alert cfa-alert usa-alert--emergency\" role=\"status\">\n  <div class=\"usa-alert__body\">\n    <div>\n      <h3 class=\"usa-alert__heading\">Note</h3>\n      <p class=\"usa-alert__text\">SurveyJS navigation buttons can be used to demonstrate and test this pattern.</p>\n    </div>\n  </div>\n</div>"
       }
      ],
      "title": "Button Group"
     },
     {
      "name": "checkboxPage",
      "elements": [
       {
        "type": "checkbox",
        "name": "checkboxes",
        "title": "Checkboxes",
        "choices": [
         {
          "value": "Item 1",
          "text": "<b>Option A</b>"
         },
         {
          "value": "Item 2",
          "text": "<b>Option B</b>"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "checkboxesWithDescriptions",
        "title": "Checkboxes with descriptions",
        "choices": [
         {
          "value": "Item 1",
          "text": "<b>Option A</b><br>Option description"
         },
         {
          "value": "Item 2",
          "text": "<b>Option B</b><br>Option description"
         }
        ]
       }
      ],
      "title": "Checkbox",
      "description": "Uses SurveyJS Checkboxes question type"
     },
     {
      "name": "detailsPage",
      "elements": [
       {
        "type": "html",
        "name": "details",
        "html": "<div class=\"usa-alert cfa-alert usa-alert--emergency\" role=\"status\">\n  <div class=\"usa-alert__body\">\n    <div>\n      <h3 class=\"usa-alert__heading\">Note</h3>\n      <p class=\"usa-alert__text\">A custom component based on the SurveyJS Panel question type would need to be created to support this pattern.</p>\n    </div>\n  </div>\n</div>"
       }
      ],
      "title": "Details",
      "description": "Uses SurveyJS Panel question type"
     },
     {
      "name": "fileSelectorPage",
      "elements": [
       {
        "type": "file",
        "name": "fileSelector",
        "title": "Add your files or photos",
        "allowMultiple": true,
        "acceptedTypes": ".jpeg, .jpg, .png, .pdf, .bmp, .gif, .doc, .docx, .odt, .ods, .odp",
        "maxSize": 20000000,
        "sourceType": "file-camera",
        "fileOrPhotoPlaceholder": "Select or drop files here or else use your camera to take a photo to upload. Accepted file types include .jpeg, .jpg, .png, .pdf, .bmp, .gif, .doc, .docx, .odt, .ods, or .odp files. Each file is limited to 20 MB, and a maximum of 20 files are allowed.",
        "filePlaceholder": "Select or drop files here. Accepted file types include .jpeg, .jpg, .png, .pdf, .bmp, .gif, .doc, .docx, .odt, .ods, or .odp files. Each file is limited to <b>20 MB</b>, and a maximum of <b>20 files</b> are allowed."
       },
       {
        "type": "html",
        "name": "fileSelectorCaution",
        "html": "<div class=\"usa-alert cfa-alert usa-alert--emergency\" role=\"status\">\n  <div class=\"usa-alert__body\">\n    <div>\n      <h3 class=\"usa-alert__heading\">Note</h3>\n      <p class=\"usa-alert__text\">The SurveyJS File Upload component does not support the ability to set an upper limit on the number of files to upload by default. A custom property would need to be added.</p>\n    </div>\n  </div>\n</div>"
       }
      ],
      "title": "File selector",
      "description": "Uses SurveyJS File Upload question type"
     },
     {
      "name": "followUpQuestionPage",
      "elements": [
       {
        "type": "radiogroup",
        "name": "followUpQuestion",
        "title": "Do you think you will make less from this job this year?",
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
        "name": "followUpQuestionHidden",
        "visibleIf": "{followUpQuestion} = 'no'",
        "title": "What do you think you'll make this year?",
        "description": "We know this can be hard to answer. You can estimate or guess what you'll make before taxes and deductions. We'll use this to calculate and report your monthly pay.",
        "placeholder": "0.00"
       }
      ],
      "title": "Follow-up question",
      "description": "Uses SurveyJS conditional logic and input masking"
     },
     {
      "name": "inputPage",
      "elements": [
       {
        "type": "text",
        "name": "textInput",
        "title": "Text input"
       },
       {
        "type": "text",
        "name": "emailInput",
        "title": "Email input",
        "inputType": "email",
        "placeholder": "my@email.com"
       },
       {
        "type": "text",
        "name": "currencyInput",
        "title": "Currency Input",
        "maskType": "currency",
        "maskSettings": {
         "allowNegativeValues": false,
         "prefix": "$"
        },
        "placeholder": "$0.00"
       },
       {
        "type": "text",
        "name": "percentInput",
        "title": "Percent Input",
        "maskType": "currency",
        "maskSettings": {
         "allowNegativeValues": false,
         "precision": 0,
         "suffix": "%"
        },
        "placeholder": "100%"
       },
       {
        "type": "text",
        "name": "phoneInput",
        "title": "Phone Input",
        "maskType": "pattern",
        "maskSettings": {
         "pattern": "+1 (999) 999-9999"
        },
        "placeholder": "+1 (555) 123-4567"
       }
      ],
      "title": "Input",
      "description": "Uses SurveyJS Single-Line Input and Input masking"
     },
     {
      "name": "memorableDatePage",
      "elements": [
       {
        "type": "memorabledate",
        "name": "memorableDate",
        "titleLocation": "hidden"
       }
      ],
      "title": "Memorable Date",
      "description": "Uses custom Memorable Date component"
     },
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "radios",
        "title": "Radios",
        "choices": [
         {
          "value": "Item 1",
          "text": "<b>Option A</b>"
         },
         {
          "value": "Item 2",
          "text": "<b>Option B</b>"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "radiosWithDescriptions",
        "title": "Radios with descriptions",
        "choices": [
         {
          "value": "Item 1",
          "text": "<b>Option A</b><br>Option description"
         },
         {
          "value": "Item 2",
          "text": "<b>Option B</b><br>Option description"
         }
        ]
       }
      ],
      "title": "Radio button",
      "description": "Uses SurveyJS Radio Button Group "
     },
     {
      "name": "selectPage",
      "elements": [
       {
        "type": "dropdown",
        "name": "select",
        "title": "Select",
        "choices": [
         {
          "value": "wages",
          "text": "wages, salaries, tips"
         },
         {
          "value": "self-employment",
          "text": "self-employment income"
         },
         {
          "value": "unemployment",
          "text": "unemployment benefits"
         },
         {
          "value": "cash-assistance",
          "text": "Cash Assistance grant"
         },
         {
          "value": "child-support",
          "text": "child support (received)"
         },
         {
          "value": "disability-medicaid",
          "text": "disability-related Medicaid"
         },
         {
          "value": "supplemental-security-income",
          "text": "Supplemental Security Income (SSI)"
         },
         {
          "value": "social-security-dependent",
          "text": "Social Security Dependent Benefits"
         },
         {
          "value": "social-security-disability",
          "text": "Social Security Disability Benefits"
         },
         {
          "value": "social-security-survivor",
          "text": "Social Security Survivor’s Benefits"
         },
         {
          "value": "social-security-retirement",
          "text": "Social Security Retirement Benefits"
         },
         {
          "value": "state-disability",
          "text": "State Disability Benefits"
         },
         {
          "value": "veteran",
          "text": "Veteran’s Pension or Benefits"
         },
         {
          "value": "pension",
          "text": "Government or Private Pension"
         },
         {
          "value": "deferred-comp",
          "text": "Withdrawals from Deferred Compensation (IRA, Keogh, etc.)"
         },
         {
          "value": "workers-comp",
          "text": "Worker’s Compensation"
         },
         {
          "value": "alimony",
          "text": "alimony (received)"
         },
         {
          "value": "boarder",
          "text": "boarder or lodger"
         },
         {
          "value": "gifts",
          "text": "gifts/contributions (received)"
         },
         {
          "value": "rental",
          "text": "rental income"
         },
         {
          "value": "investment",
          "text": "investment income (interest, dividends, and profit from selling stocks)"
         }
        ],
        "placeholder": "Click to select an income type"
       }
      ],
      "title": "Select",
      "description": "Uses SurveyJS Dropdown component"
     },
     {
      "name": "textareaPage",
      "elements": [
       {
        "type": "comment",
        "name": "textarea",
        "title": "Textarea"
       }
      ],
      "title": "Textarea",
      "description": "Uses SurveyJS Long Text component"
     }
    ],
    "showTitle": false,
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "showTOC": true,
    "clearInvisibleValues": "none",
    "pagePrevText": "Back",
    "pageNextText": "Continue"
   };