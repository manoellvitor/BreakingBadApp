import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuotesPage } from './quotes.page';

describe('QuotesPage', () => {
  let component: QuotesPage;
  let fixture: ComponentFixture<QuotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
