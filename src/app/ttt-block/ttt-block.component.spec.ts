import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TttBlockComponent } from './ttt-block.component';

describe('TttBlockComponent', () => {
  let component: TttBlockComponent;
  let fixture: ComponentFixture<TttBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TttBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TttBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
