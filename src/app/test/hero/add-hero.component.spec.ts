import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AddHeroComponent } from 'src/app/components/heroes/add-hero/add-hero.component';
import { HeroModule } from 'src/app/modules/hero.module';

describe('AddHeroComponent', () => {
  let component: AddHeroComponent;
  let fixture: ComponentFixture<AddHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, HeroModule],
      declarations: [AddHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component is created', () => {
    expect(component).toBeTruthy();
  });

  it('Form is invalid', () => {
    let name = component.addForm.controls['name'];
    name.setValue('');

    expect(component.addForm.invalid).toBeTruthy();
  });

  it('Form is valid', () => {
    let name = component.addForm.controls['name'];
    name.setValue('TestHeroName');

    expect(component.addForm.valid).toBeTruthy();
  });
});
