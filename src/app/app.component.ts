import { Component, Inject } from '@angular/core';
import { Environment, ENVIRONMENT } from '@rex/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(ENVIRONMENT) public env: Environment) { }
}
