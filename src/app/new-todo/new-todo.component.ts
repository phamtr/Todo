import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {AddTodo} from '../store/actions';


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html'
})
export class NewTodoComponent implements OnInit {

  textField: FormControl;

  constructor(private store: Store) {
    this.textField = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
  }

  saveTodo() {
    if (this.textField.valid) {
      const text: string = this.textField.value;
      this.store.dispatch(new AddTodo(text.trim()));
      this.textField.setValue('', {emitEvent: false});
    }
  }

}
