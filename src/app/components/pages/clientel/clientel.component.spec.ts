import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientelComponent } from './clientel.component';

describe('ClientelComponent', () => {
  let component: ClientelComponent;
  let fixture: ComponentFixture<ClientelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
