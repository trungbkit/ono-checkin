const controller = require('./controller');

module.exports = io => {
  controller.onMemberAdded.subscribe(member => io.emit('new-member', member));
  controller.onMemberUpdated.subscribe(() => io.emit('data', controller.members.array));
  io.on('connection', socket => {
    console.log('socket connected');
    socket.emit('data', controller.members.array);
    socket.on('add-member', data => {
      controller.addMember(data)
    });
    socket.on('update-member', data => {
      controller.updateMember(data);
    })
  });
}
