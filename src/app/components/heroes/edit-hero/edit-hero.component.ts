import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  editForm!: FormGroup
  id:any
  hero!: Hero;

  constructor(private formBuilder: FormBuilder,
    private service: HeroService,
    private router: Router,
    private route: ActivatedRoute) {   
      this.editForm = this.formBuilder.group({
        id: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
        name: ['',Validators.required]
    })
    this.editForm.valueChanges.subscribe(data => {
      this.hero = data;
    })
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {    
    this.getHero();       
  }

  getHero(){
    this.service.getHeroById(this.id).subscribe(
      data => {
        this.editForm.setValue(data)
      }
    )
  }

  editHero(hero:Hero){
    this.service.editHero(hero).subscribe(data =>{
      this.router.navigate(["/hero"])
    })
  }
}