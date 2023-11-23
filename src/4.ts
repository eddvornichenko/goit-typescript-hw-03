class Key {
    private signature: number;
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  abstract class House {
    door: boolean;
    key: Key;
    tenants: Person[] = [];
    constructor(key: Key) {
      this.door = false;
    }
    comeIn(person: Person) {
      if (this.door) {
        this.tenants.push(person);
        console.log("Open door!");
      } else {
        console.log("Closed door!");
      }
    }
    abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("Open door!");
      } else {
        console.log("Closed door!");
      }
    }
  }
  
  const key = new Key();
  
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  
  house.comeIn(person);
  
  export {};