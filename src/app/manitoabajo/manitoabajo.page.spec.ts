import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManitoabajoPage } from './manitoabajo.page';

describe('ManitoabajoPage', () => {
  let component: ManitoabajoPage;
  let fixture: ComponentFixture<ManitoabajoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManitoabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
