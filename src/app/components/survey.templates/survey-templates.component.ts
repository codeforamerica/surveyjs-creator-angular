import { Component, OnInit, Input} from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { surveyCfaComponentsJson } from "../../../assets/survey.cfa.components";
import { surveySummerEbtJson } from "../../../assets/survey.summer.ebt";
import { CommonModule } from "@angular/common";
import { basename } from "path";

interface ITemplateItem {
  name: string;
  json: any;
}
function loadSurveyTemplates(): Array<ITemplateItem> {
  return [
      {
          name: "CfA Components Example",
          json: surveyCfaComponentsJson
      },
      {
          name: "Summer EBT Demo",
          json: surveySummerEbtJson
      },
      {
          name: "Empty Survey",
          json: {}
      }
  ];
}
@Component({
  selector: 'app-survey-templates',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './survey-templates.component.html',
  styleUrl: './survey-templates.component.css'
})
export class SurveyTemplatesComponent extends BaseAngular<SurveyCreatorModel> implements OnInit {
  @Input() model!: SurveyCreatorModel;

  public surveys!: Array<ITemplateItem>;

  override ngOnInit() {
      this.surveys = loadSurveyTemplates();
  }
  public loadSurvey(item: ITemplateItem) {
      this.model.JSON = item.json;
      this.model.makeNewViewActive("designer");
  }
  protected getModel(): any {
      return null;
  }
}

AngularComponentFactory.Instance.registerComponent(
  "app-survey-templates",
  SurveyTemplatesComponent
);
