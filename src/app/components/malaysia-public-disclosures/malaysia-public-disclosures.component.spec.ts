import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { MalaysiaPublicDisclosuresComponent } from './malaysia-public-disclosures.component';

describe('MalaysiaPublicDisclosuresComponent', () => {
  let component: MalaysiaPublicDisclosuresComponent;
  let fixture: ComponentFixture<MalaysiaPublicDisclosuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ JssModule.forRoot() ],
      declarations: [ MalaysiaPublicDisclosuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalaysiaPublicDisclosuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
