import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuoteDetailsPage } from './quote-details.page';

describe('QuoteDetailsPage', () => {
  let component: QuoteDetailsPage;
  let fixture: ComponentFixture<QuoteDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
