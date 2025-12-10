import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideServerRendering } from '@angular/platform-server';

export default function bootstrap() {
  return bootstrapApplication(App, {
    providers: [
      provideServerRendering()
    ]
  });
}
