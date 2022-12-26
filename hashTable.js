// hash table

var hash = (String, max) => {
  // string is key // max number of buckets
  var hash = 0;
  for (var i = 0; i < String.length; i++) {
    hash += String.charCodeAt(i);
  }
  return hash % max;
};

let HashTable = function () {
  let storage = [];
  const storageLimit = 4;

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    // create hash table  will return index where should i put my value
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]]; // array of arrays
    } else {
      var inserted = false;
      // start making linked list cuse we have collision
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      // more than 2 arrays
      if ((inserted = false)) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };


  this.lookup = function(key){
    var index = hash(key, storageLimit);

    if(storage[index] === undefined){
        return undefined // not exist  // empty 
    }else{
        for (var i = 0; i < storage[index].length; i++) {
            if (storage[index][i][0] === key) { 
                return storage[index][i][1]
            }
        }
    }
  }
};
  console.log(hash('bob' , 10 ))

  let ht = new HashTable()
  ht.add("beau" , "person")
  ht.add("fido" , "dog")
  ht.add("rex" , "dinosour")
  ht.add("tux" , "tog")
  console.log(ht.lookup('tux'))
  ht.print()