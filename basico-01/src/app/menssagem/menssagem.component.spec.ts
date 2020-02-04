import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenssagemComponent } from './menssagem.component';

describe('MenssagemComponent', () => {
  let component: MenssagemComponent;
  let fixture: ComponentFixture<MenssagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenssagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenssagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
