import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ClearCompleted, CompletedAll} from './../store/actions';
import {TodoState} from '../store/state';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit, OnDestroy {

  countTodos: number;
  showFooter: boolean;
  @Select(TodoState.getTodos) todos$;
  @Select(TodoState.getFilter) currentFilter$;
  // @Select(TodoState.getTest('yo')) curren$;
  subs: Subscription;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.subs = this.todos$.subscribe(todos => {
      this.countTodos = todos.filter(t => !t.completed).length;
      this.showFooter = todos.length > 0;
    });
  }

  clearCompleted() {
    this.store.dispatch(new ClearCompleted());
  }

  completedAll() {
    this.store.dispatch(new CompletedAll());
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
