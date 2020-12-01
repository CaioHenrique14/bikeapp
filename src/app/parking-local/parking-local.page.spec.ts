import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkingLocalPage } from './parking-local.page';

describe('ParkingLocalPage', () => {
  let component: ParkingLocalPage;
  let fixture: ComponentFixture<ParkingLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
