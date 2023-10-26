import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordPressPage } from './wordpress.page';

describe('WordpressPage', () => {
  let component: WordPressPage;
  let fixture: ComponentFixture<WordPressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WordPressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
