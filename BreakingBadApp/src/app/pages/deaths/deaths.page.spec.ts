import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeathsPage } from './deaths.page';

describe('DeathsPage', () => {
  let component: DeathsPage;
  let fixture: ComponentFixture<DeathsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeathsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
