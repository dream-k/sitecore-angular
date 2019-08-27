import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { OverseasListedSubsidiariesNewComponent } from './overseas-listed-subsidiaries-new.component';

describe('OverseasListedSubsidiariesNewComponent', () => {
  let component: OverseasListedSubsidiariesNewComponent;
  let fixture: ComponentFixture<OverseasListedSubsidiariesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ JssModule.forRoot() ],
      declarations: [ OverseasListedSubsidiariesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverseasListedSubsidiariesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
