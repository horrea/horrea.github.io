import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppPipeModule } from '@rex/core';
import { RexToolsFacade } from '@rex/store';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rex-editors',
  standalone: true,
  templateUrl: 'editors.component.html',
  styleUrls: ['./editors.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    AppPipeModule
  ]
})
export class RexEditorsComponent implements OnInit, OnDestroy {

  private onDestory$ = new Subject<void>();
  private onSmallMediaBreackPoint$: Observable<BreakpointState>;
  public drawerMode$: Observable<'side' | 'over'>;
  public drawerOpen$: Observable<boolean>;
  public drawerToggler$: Observable<boolean>;
  public editorTitle$: Observable<string>;

  constructor(public route: ActivatedRoute,
    private toolsFacade: RexToolsFacade,
    private translate: TranslateService,
    breakpointObserver: BreakpointObserver) {
    this.onSmallMediaBreackPoint$ = breakpointObserver.observe(
      [Breakpoints.XSmall, Breakpoints.Small]
    ).pipe(
      takeUntil(this.onDestory$),
    );
  }

  ngOnInit() {
    this.editorTitle$ = this.toolsFacade.tool$.pipe(
      map(tool => tool.title ?? 'tools.editors.title'),
      switchMap(key => this.translate.get(key))
    );
    this.drawerMode$ = this.onSmallMediaBreackPoint$.pipe(
      map(bp => bp.matches ? 'over' : 'side')
    );
    this.drawerOpen$ = this.onSmallMediaBreackPoint$.pipe(
      map(bp => !bp.matches)
    );
    this.drawerToggler$ = this.onSmallMediaBreackPoint$.pipe(
      map(bp => bp.matches)
    );
  }

  ngOnDestroy(): void {
    this.onDestory$.next()
    this.onDestory$.complete()
  }
}