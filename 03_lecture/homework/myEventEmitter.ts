interface IEvents {
  [name: string]: Function[];
}

class MyEventEmitter {
  private readonly events: IEvents = {};
  public registerHandler(eventName: string, handler: Function): void {
    const event: Function[] = this.events[eventName];
    if (event) event.push(handler);
    else this.events[eventName] = [handler];
  }
  public emitEvent(eventName: string, ...data): void {
    const event: Function[] = this.events[eventName];
    if (!event) return;
    event.forEach(handler => handler(...data));
  }
}

// tests

const emitter = new MyEventEmitter();

emitter.registerHandler('usedUpdated', () => console.log('User was updated'));
emitter.registerHandler('resultObtained', (...res: number[]) =>
  console.log(res)
);

emitter.emitEvent('usedUpdated'); // User was updated
emitter.emitEvent('resultObtained', 23, 32, 42, 15); // [ 23, 32, 42, 15 ]
