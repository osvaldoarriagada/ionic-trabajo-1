import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManitoarribaPage } from './manitoarriba.page';

describe('ManitoarribaPage', () => {
  let component: ManitoarribaPage;
  let fixture: ComponentFixture<ManitoarribaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManitoarribaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
