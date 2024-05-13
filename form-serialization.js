function serializeForm(form) {
  const obj = {};
  const formData = new FormData(form);
  for([key, value] of formData.entries()) {
    if(obj.hasOwnProperty(key)) {
      if(Array.isArray(obj[key])) {
        obj[key].push(value)
      } else {
        obj[key] = [obj[key], value]
      }
    } else {
      obj[key] = value
    }
  }

  return obj;
}

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = serializeForm(this);
  console.log('Serialized Data:', formData);
});
