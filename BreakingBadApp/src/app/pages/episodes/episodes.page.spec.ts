import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EpisodesPage } from './episodes.page';

describe('EpisodesPage', () => {
  let component: EpisodesPage;
  let fixture: ComponentFixture<EpisodesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
