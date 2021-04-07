import { Component, OnInit } from '@angular/core';
import { superHero } from '../superHeros';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  weapons = ["Sword", "Gun", "Canon", "Shield"];
  specialities = ["Power", "Emotions", "Coolness"];
  model = new superHero(1,"" , "", "", "");
  submitted = false;
   constructor() { }
 
   ngOnInit(): void {
   }
 
   submit() {
     this.submitted = true;
     console.log("Name--", this.model.name);
     console.log("Weapon--", this.model.weapon);
     console.log("speciality--", this.model.speciality);
     console.log("real name--", this.model.realName);
   }
}
