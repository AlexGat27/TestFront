import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsSubstratePageComponent } from './cats-substrate-page.component';

describe('CatsSubstratePageComponent', () => {
  let component: CatsSubstratePageComponent;
  let fixture: ComponentFixture<CatsSubstratePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatsSubstratePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatsSubstratePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
