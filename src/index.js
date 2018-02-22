/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  	var count = 0;
  	preferences.forEach(function(value, i, preferences) {
  		if ( i+1 === value) {
  			return;
  		}
  		var second = preferences[value-1];
  		var third = preferences[second-1];
  		if (i+1 === third) {
  			count+=1;
  		}
  	});
  	return count/3;
};
