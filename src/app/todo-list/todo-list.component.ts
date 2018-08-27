import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {CompletedAll, SetFilter} from '../store/actions';
import {TodoState} from '../store/state';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  checkField: FormControl;
  @Select(TodoState.getVisibleTodos) todos$;
  @Select(TodoState.getStateCompleted) stateCompleted$;

  constructor(private store: Store,
              private route: ActivatedRoute) {
    this.checkField = new FormControl();
    this.readParams();
  }

  ngOnInit() {
    this.stateCompleted$.subscribe(status => {
      this.checkField.setValue(status);
    });
  }

  toggleAll() {
    this.store.dispatch(new CompletedAll());
  }

  private setFilter(filter: string) {
    switch (filter) {
      case 'active': {
        this.store.dispatch(new SetFilter('SHOW_ACTIVE'));
        break;
      }
      case 'completed': {
        this.store.dispatch(new SetFilter('SHOW_COMPLETED'));
        break;
      }
      default: {
        this.store.dispatch(new SetFilter('SHOW_ALL'));
        break;
      }
    }
  }

  private readParams() {
    this.route.params
      .subscribe(params => {
        this.setFilter(params.filter);
      });
  }
}
