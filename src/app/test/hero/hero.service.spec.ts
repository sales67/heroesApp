import { fakeAsync, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { Hero } from 'src/app/models/hero';
import { HeroModule } from 'src/app/modules/hero.module';
import { HeroService } from 'src/app/services/hero.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { apiUrl } from 'src/global-variables';

describe('HeroService', () => {
  let service: HeroService;
  let httpController: HttpTestingController;
  let url = apiUrl + '/heroes';
  let hero: Hero = { id: 1, name: 'TestHeroName' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroModule, AppModule, HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(HeroService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('GetHeroById', () => {
    service.getHeroById(hero.id).subscribe((data) => {
      expect(data).toEqual(hero);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: url + '/' + hero.id,
    });
    req.flush(hero);
  });

  it('getHeroes', () => {
    service.getHeroes().subscribe((data) => {
      expect(data).toEqual([hero]);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: url,
    });
    req.flush([hero]);
  });

  it('addHero', () => {
    service.addHero(hero.name).subscribe((data) => {
      expect(data).toEqual(hero);
    });
    const req = httpController.expectOne({
      method: 'POST',
      url: url,
    });
    req.flush(hero);
  });

  it('editHero', () => {
    service.editHero(hero).subscribe((data) => {
      expect(data).toEqual(hero);
    });
    const req = httpController.expectOne({
      method: 'PUT',
      url: url + '/' + hero.id,
    });
    req.flush(hero);
  });

  it('deleteHero', () => {
    service.deleteHero(hero.id).subscribe((data) => {
      expect(data).toEqual(hero);
    });
    const req = httpController.expectOne({
      method: 'DELETE',
      url: url + '/' + hero.id,
    });
    req.flush(hero);
  });
});
