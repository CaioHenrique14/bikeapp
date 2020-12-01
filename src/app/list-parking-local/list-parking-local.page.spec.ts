import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListParkingLocalPage } from './list-parking-local.page';

describe('ListParkingLocalPage', () => {
  let component: ListParkingLocalPage;
  let fixture: ComponentFixture<ListParkingLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParkingLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListParkingLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
