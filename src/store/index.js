import { observable, action, decorate } from "mobx";

class Store {
  data = {};
  isData = false;
  constructor() {
    makeObservable(this, {
      data: observable,
      isData: observable,
      // totalOwners: computed,
      // totalPets: computed,
      // storeDetails: computed,
      setData: action,
      setData: action,
      initApp: action,
    });
    // autorun(logStoreDetails);
  }
  getUser() {
  }
  setData(value) {
    this.data = { ...value };
  }
  initApp = async () => {
   
  };
}

export const store = new Store();

// call  <Observer>{() => <div>{this.props.person.name}</div>}</Observer>