allowDrop = function() {
    event.preventDefault();
  };
  
  dropItem = function() {
    var _targetEle = event.target;
    var _id = event.dataTransfer.getData('text');
    var _moveEle = document.getElementById(_id );
    _targetEle.before(_moveEle);
  };
  
  dragStart = function() {
    var _thisEle = event.target;
    var _thisId = _thisEle.id;
    _thisEle.classList.add('is-dragging');
    event.dataTransfer.setData('text/plain', _thisId);
  };
  
  dragEnd = function() {
    var _thisEle = event.target;
    _thisEle.classList.remove('is-dragging');
  };