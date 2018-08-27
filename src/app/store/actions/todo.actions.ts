import {Todo} from './../models';

export class AddTodo {
  static readonly type = '[TODO] add';

  constructor(public payload: string) {
  }
}

export class PopulateTodos {
  static readonly type = '[TODO] populate';

  constructor(public payload: Todo[]) {
  }
}

export class DeleteTodo {
  static readonly type = '[TODO] delete';

  constructor(public payload: number) {
  }
}

export class ToggleTodo {
  static readonly type = '[TODO] toggle';

  constructor(public payload: number) {
  }
}

export class UpdateTodo {
  static readonly type = '[TODO] update';

  constructor(public payload: { id: number, text: string }) {
  }
}

export class ClearCompleted {
  static readonly type = '[TODO] clear completed';
}

export class CompletedAll {
  static readonly type = '[TODO] complete all';
}
