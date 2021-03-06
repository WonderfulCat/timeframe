function clone ( obj ) {

  var newObj = (obj instanceof Array) ? [] : {};

  for ( var i in obj ) {

    if (obj[ i ] && typeof obj[ i ] == "object") {

      newObj[ i ] = clone( obj[ i ] );

    } else {

      newObj[ i ] = obj[ i ];
    }

  }

  return newObj

}

module.exports = clone
