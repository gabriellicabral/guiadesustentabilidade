import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColetaSeletivaPage } from './coleta-seletiva.page';

describe('ColetaSeletivaPage', () => {
  let component: ColetaSeletivaPage;
  let fixture: ComponentFixture<ColetaSeletivaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColetaSeletivaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
