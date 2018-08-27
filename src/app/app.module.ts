import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {RouterModule, Routes} from '@angular/router';
import {NgxsStoragePluginModule, StorageOption} from '@ngxs/storage-plugin';
import {TodoState} from './store/state';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoComponent} from './todo/todo.component';
import {FooterComponent} from './footer/footer.component';
import {NewTodoComponent} from './new-todo/new-todo.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  // basic routes
  {path: '', component: TodoListComponent, pathMatch: 'full'},
  {path: ':filter', component: TodoListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    FooterComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([TodoState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: false
    })/*,
    NgxsStoragePluginModule.forRoot({
      key: '@@STATE',
      storage: StorageOption.LocalStorage,
      deserialize: JSON.parse,
      serialize: JSON.stringify
    })*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
