import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { FormsModule } from '@angular/forms';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { YellowBackgroundDirective } from './shared/yellow-background.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { CursesComponent } from './curses/curses.component';
import { CursesService } from './shared/curses.service';
import { BooksComponent } from './books/books.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    YellowBackgroundDirective,
    CustomDirectivesComponent,
    HighlightMouseDirective,
    HighlightDirective,
    CursesComponent,
    BooksComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    CamelCasePipe
  ],
  providers: [
    CursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
