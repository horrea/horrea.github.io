import { Component, Inject } from '@angular/core';
import { Environment, ENVIRONMENT } from 'src/environments/environment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(ENVIRONMENT) public env: Environment) { }
}
