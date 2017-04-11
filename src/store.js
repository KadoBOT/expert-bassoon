import { observable, action } from 'mobx';

class CounterStore {
  @observable count = 0

  @action increase = () => {
    this.count = this.count + 1;
  }
  @action decrease = () => {
    this.count = this.count - 1;
  }
}

export default CounterStore;
