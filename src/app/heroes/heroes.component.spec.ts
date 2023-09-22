import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService: jasmine.SpyObj<HeroService>;

  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj(HeroService.name, ['getHeroes']);
    mockHeroService.getHeroes.and.returnValue(of([{ id: 1, name: 'Hero' }]));

    TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroDetailComponent],
      providers: [{provide: HeroService, useValue: mockHeroService}]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(mockHeroService.getHeroes).toHaveBeenCalled();
  });
});
