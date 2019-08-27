import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { MalaysiaCorporateProfileComponent } from './malaysia-corporate-profile.component';

describe('MalaysiaCorporateProfileComponent', () => {
  let component: MalaysiaCorporateProfileComponent;
  let fixture: ComponentFixture<MalaysiaCorporateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ JssModule.forRoot() ],
      declarations: [ MalaysiaCorporateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalaysiaCorporateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
