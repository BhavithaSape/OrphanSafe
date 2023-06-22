import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connectnew',
  templateUrl: './connectnew.component.html',
  styleUrls: ['./connectnew.component.css']
})
export class ConnectnewComponent {
  constructor(private routes:Router){}
  onclick(){this.routes.navigateByUrl('home')}

}
