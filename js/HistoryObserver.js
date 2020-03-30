class HistoryObserver {
  constructor() {
    this.colorHistory = [];
  }

  update(model) {
    this.colorHistory.unshift(model.color[0].toUpperCase());
    let msg = "The 5 recent colors where : ";
    msg += this.colorHistory.slice(0, 5).toString();
    console.log(msg);
  }
}
