import { bootstrapApplication } from '@angular/platform-browser';
import { FinanceDashboardComponent } from './app/finance-dashboard/finance-dashboard.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(FinanceDashboardComponent, {
  providers: [provideHttpClient()]
});
