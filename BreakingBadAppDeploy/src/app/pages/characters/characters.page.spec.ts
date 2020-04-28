import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharactersPage } from './characters.page';

describe('CharactersPage', () => {
  let component: CharactersPage;
  let fixture: ComponentFixture<CharactersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
