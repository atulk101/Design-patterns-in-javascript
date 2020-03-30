class ConsoleObserver {
  constructor() {}

  update(model) {
    console.log(
      "The Number is " + model.number + " And color is " + model.color
    );
  }
}
