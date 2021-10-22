import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionSearchComponent } from './edition-search.component';

describe('EditionSearchComponent', () => {
  let component: EditionSearchComponent;
  let fixture: ComponentFixture<EditionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
