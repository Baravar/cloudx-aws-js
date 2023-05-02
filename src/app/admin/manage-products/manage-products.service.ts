import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../../core/api.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class ManageProductsService extends ApiService {
  constructor(injector: Injector) {
    super(injector);
  }

  uploadProductsCSV(file: File): Observable<unknown> {
    if (!this.endpointEnabled('import')) {
      console.warn(
        'Endpoint "import" is disabled. To enable change your environment.ts config'
      );
      return EMPTY;
    }

    return this.getPreSignedUrl(file.name).pipe(
      switchMap((url) =>
        this.http.put(url, file, {
          headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'text/csv',
          },
        })
      )
    );
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = `Backend returned code ${error.status}, body was: ${error.error.message}`;
    alert(errorMessage);

    return throwError(() => new Error(errorMessage));
  }

  private getPreSignedUrl(fileName: string): Observable<string> {
    const url = this.getUrl('import', 'import');
    const authorization_token =
      localStorage.getItem('authorization_token') || '';

    return this.http
      .get<string>(url, {
        params: {
          name: fileName,
        },
        headers: {
          authorization: authorization_token,
        },
      })
      .pipe(catchError(this.handleError));
  }
}
