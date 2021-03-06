  // Aliases
  var Observable = Rx.Observable,
    observableFromPromise = Observable.fromPromise,
    observableThrow = Observable.throwError,
    AnonymousObservable = Rx.AnonymousObservable,
    ObservableBase = Rx.ObservableBase,
    AsyncSubject = Rx.AsyncSubject,
    disposableCreate = Rx.Disposable.create,
    CompositeDisposable = Rx.CompositeDisposable,
    immediateScheduler = Rx.Scheduler.immediate,
    defaultScheduler = Rx.Scheduler['default'],
    inherits = Rx.internals.inherits,
    isScheduler = Rx.Scheduler.isScheduler,
    isPromise = Rx.helpers.isPromise,
    isFunction = Rx.helpers.isFunction,
    isIterable = Rx.helpers.isIterable,
    isArrayLike = Rx.helpers.isArrayLike;
