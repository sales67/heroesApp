import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  addForm!: FormGroup
  hero:string = "";

  constructor(private formBuilder: FormBuilder,
    private service: HeroService,
    private router: Router) {
    this.addForm = this.formBuilder.group({
      name: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addHero(name:string){
    this.service.addHero(name).subscribe(data =>{
      this.hero = data.name;
      this.router.navigate(["/hero"])
    })
  }
}
