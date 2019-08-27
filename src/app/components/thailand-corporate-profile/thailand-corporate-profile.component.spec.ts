import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { ThailandCorporateProfileComponent } from './thailand-corporate-profile.component';

describe('ThailandCorporateProfileComponent', () => {
  let component: ThailandCorporateProfileComponent;
  let fixture: ComponentFixture<ThailandCorporateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ JssModule.forRoot() ],
      declarations: [ ThailandCorporateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThailandCorporateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
