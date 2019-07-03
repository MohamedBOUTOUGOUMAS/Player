import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenetreModalComponent } from './fenetre-modal.component';

describe('FenetreModalComponent', () => {
  let component: FenetreModalComponent;
  let fixture: ComponentFixture<FenetreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenetreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenetreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
