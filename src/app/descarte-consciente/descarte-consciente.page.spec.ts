import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescarteConscientePage } from './descarte-consciente.page';

describe('DescarteConscientePage', () => {
  let component: DescarteConscientePage;
  let fixture: ComponentFixture<DescarteConscientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DescarteConscientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
