const path = require('path');
const fs = require('fs');
const { Subject } = require('rxjs');
const List = require('./list');
const Member = require('./member');

const filePath = path.join(__dirname, 'data/data.json');

class Controller {
  constructor() {
    this.onMemberAdded = new Subject();
    this.onMemberUpdated = new Subject();
    let data = {
      members: [],
    };
    try {
      data = require(filePath);
    } catch (e) {
    }

    this.members = new List(data.members);
    this.sortMember();
  }

  sortMember() {
    this.members.sort((m1, m2) => {
      if (m1.attend && m2.attend) {
        if (!m1.payment && m2.payment) {
          return -1;
        }
        return 0;
      } else if (m1.attend && !m2.attend) {
        return -1;
      }
      return 0;
    });
  }

  getData() {
    return this.members.array;
  }

  addMember(mem) {
    const newMem = new Member(mem);
    this.members.add(newMem);
    this.sortMember();
    this.onMemberAdded.next(newMem);
    this.onMemberUpdated.next(newMem);
    this.save();
  }

  updateMember(mem) {
    const newMem = new Member(mem);
    this.members.add(newMem);
    this.sortMember();
    this.onMemberUpdated.next(newMem);
    this.save();
  }

  removeMember(id) {
    this.members.remove(id);
    this.sortMember();
    this.onMemberUpdated.next(null);
    this.save();
  }

  save() {
    const data = { members: this.members.array };
    fs.writeFileSync(filePath, JSON.stringify(data));
  }
}

module.exports = new Controller();
