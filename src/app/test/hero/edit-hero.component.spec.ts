import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { HeroModule } from 'src/app/modules/hero.module';
import { EditHeroComponent } from '../../components/heroes/edit-hero/edit-hero.component';

describe('EditHeroComponent', () => {
  let component: EditHeroComponent;
  let fixture: ComponentFixture<EditHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroModule, AppModule],
      declarations: [EditHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component is created', () => {
    expect(component).toBeTruthy();
  });

  it('Form is invalid (invalid name)', () => {
    let name = component.editForm.controls['name'];
    let id = component.editForm.controls['id'];
    name.setValue('');
    id.setValue(1);

    expect(component.editForm.invalid).toBeTruthy();
  });

  it('Form is invalid (invalid id)', () => {
    let name = component.editForm.controls['name'];
    let id = component.editForm.controls['id'];
    name.setValue('TestHeroeName');
    id.setValue('string');

    expect(component.editForm.invalid).toBeTruthy();
  });

  it('Form is valid', () => {
    let name = component.editForm.controls['name'];
    let id = component.editForm.controls['id'];
    name.setValue('TestHeroeName');
    id.setValue(1);

    expect(component.editForm.valid).toBeTruthy();
  });
});
