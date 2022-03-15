function setApiVersion(constructor: any) {
    return class extends constructor {
      version = '0.0.1';
    }
}

@setApiVersion
class Wizard {}

console.log(new Wizard); // class_1 { version: '0.0.1' }