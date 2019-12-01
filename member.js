class Member {
  constructor({id, name, image, title, attend = false, payment = false}) {
    this.name = name;
    this.title = title;
    this.image = image;
    this.id = id || Date.now().toString();
    this.attend = attend;
    this.payment = payment;
  }
}

module.exports = Member;