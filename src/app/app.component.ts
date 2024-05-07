import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SurveyCreatorComponent } from './components/survey.creator/survey.creator.component';
import { SurveyTemplatesComponent } from './components/survey.templates/survey-templates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SurveyCreatorComponent, SurveyTemplatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'surveyjs-creator-angular';
}
