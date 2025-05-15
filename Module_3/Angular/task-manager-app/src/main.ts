import { bootstrapApplication } from '@angular/platform-browser';
import { TaskManagerComponent } from './app/task-manager/task-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(TaskManagerComponent, {
  providers: [
    BrowserAnimationsModule
  ]
}).catch(err => console.error(err));
