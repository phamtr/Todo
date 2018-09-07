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
  textField2: FormControl;
  constructor(private store: Store) {
    this.textField = new FormControl('', [Validators.required]);
    this.textField2 = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
  }

  saveTodo() {
    if (this.textField.valid && this.textField2.valid) {
      const text: string = this.textField.value;
      const subject: string = this.textField2.value;
      this.store.dispatch(new AddTodo(text.trim(), subject.trim()));
      this.textField.setValue('', {emitEvent: false});
      this.textField2.setValue('', {emitEvent: false});
    }
  }

}
