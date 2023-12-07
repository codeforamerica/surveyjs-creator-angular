import { Component, OnInit } from '@angular/core';
import { SurveyCreatorModel } from "survey-creator-core";
import { SurveyCreatorModule } from "survey-creator-angular";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import { ComponentCollection } from "survey-core";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import { Converter } from "showdown";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

const converter = new Converter();

@Component({
  selector: 'app-survey-creator',
  standalone: true,
  imports: [ SurveyCreatorModule ],
  templateUrl: './survey.creator.component.html',
  styleUrl: './survey.creator.component.css'
})
export class SurveyCreatorComponent implements OnInit {

  surveyCreatorModel!: SurveyCreatorModel;

  doMarkdown(survey: any, options: any) {
    var str = converter.makeHtml(options.text);
    // remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    // set html
    options.html = str;
  };

  ngOnInit() {

    const creator = new SurveyCreatorModel(creatorOptions);

    creator.onSurveyInstanceCreated.add((sender,options) => {
      if (
        options.reason === "designer" ||
        options.reason === "test" ||
        options.reason === "condition-builder"
      ) {
        options.survey.onTextMarkdown.add(this.doMarkdown);
      }
    });
    
    this.surveyCreatorModel = creator;
  }

}
