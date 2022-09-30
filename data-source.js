function DataSource(onSuccess, onFailed) {
  this.onSuccess = onSuccess;
  this.onFailed = onFailed;
}

DataSource.prototype.searchPeople = function (keyword) {
  var filteredPeoples = Peoples.filter(function (People) {
    return People.name.toUpperCase().includes(keyword.toUpperCase());
  });

  if (filteredPeoples.length) {
    this.onSuccess(filteredPeoples);
  } else {
    this.onFailed(keyword + ' is not found');
  }
};