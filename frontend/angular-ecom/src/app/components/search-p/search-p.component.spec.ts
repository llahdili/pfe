import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPComponent } from './search-p.component';

describe('SearchPComponent', () => {
  let component: SearchPComponent;
  let fixture: ComponentFixture<SearchPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
