var recipes = new Object({BlocParty: 'Helicopter'});

function updateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, { [key]: val });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete obj;
  return newObj;
}


