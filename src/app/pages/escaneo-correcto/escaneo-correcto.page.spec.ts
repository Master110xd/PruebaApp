import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscaneoCorrectoPage } from './escaneo-correcto.page';

describe('EscaneoCorrectoPage', () => {
  let component: EscaneoCorrectoPage;
  let fixture: ComponentFixture<EscaneoCorrectoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscaneoCorrectoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
