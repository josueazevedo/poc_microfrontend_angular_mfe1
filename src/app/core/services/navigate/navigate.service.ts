import { Injectable } from '@angular/core';
import { NavigationError, Router } from '@angular/router';
import { MFE_CONFIG } from '../../../config/mfe.config';
import { ROUTES_LIST } from '../../../config/router.config';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(private router: Router) {
    this.registrePopStateEvent();
    this.registreNavigateExternalRouter();
  }

  public navigate(path: string): void {
    this.router.navigate([
      {
        outlets: {
          [MFE_CONFIG.name]: [path],
        },
      },
    ]);
  }

  public navigateReplace(path: string): void {
    this.router.navigate(
      [
        {
          outlets: {
            [MFE_CONFIG.name]: [path],
          },
        },
      ],
      {
        replaceUrl: true,
      }
    );
  }

  private registrePopStateEvent(): void {
    document.addEventListener(`${MFE_CONFIG.name}:onpopstate`, (e) => {
      const path = (e as CustomEvent)?.detail?.path;
      const newRoute = this.getCurrentPath(path);
      this.navigateReplace(newRoute);
    });
  }

  private registreNavigateExternalRouter(): void {
    this.router.errorHandler = () => {};
    this.router.events
      .pipe(filter((e) => e instanceof NavigationError))
      .subscribe((e) => {
        if (e instanceof NavigationError) {
          const match = e.url.match(/\(([^:]+):([^)\s]+)\)/);
          const path = match && match[2] ? match[2] : '';
          document.dispatchEvent(
            new CustomEvent(`external_router`, {
              detail: { path },
            })
          );
        }
      });
  }

  private getCurrentPath(current_path: string): string {
    const path =
      current_path.replace(`/${MFE_CONFIG.name}`, '').replace('/', '') ||
      ROUTES_LIST.HOME;
    return path;
  }
}
