import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BlogComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rex-blog'`, () => {
    const fixture = TestBed.createComponent(BlogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeDefined();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('rex-blog app is running!');
  });
});
