var main = function () {
  var searchElement = document.querySelector('#searchElement');
  var buttonSearchElement = document.querySelector('#searchButtonElement');
  var PeopleListElement = document.querySelector('#PeopleList');

  var onButtonSearchClicked = function () {
    var dataSource = new DataSource(renderResult, fallbackResult);
    dataSource.searchPeople(searchElement.value);
  };

  var renderResult = function (results) {
    PeopleListElement.innerHTML = '';
    results.forEach(function (People) {
      var name = People.name;
      var gambar = People.gambar;
      var gender = People.gender;
      var description = People.description;
      var tanggal_lahir = People.tanggal_lahir;

      var PeopleElement = document.createElement('div');
      PeopleElement.setAttribute('class', 'People');

      PeopleElement.innerHTML = '<img class="fan-art-People" src="' + gambar + '" alt="Fan Art">\n' +
          '<div class="People-info">\n' +
          '<h2>' + name + '</h2>\n' + 
          '<p>' +'<b>Jenis Kelamin : </b>' + gender + '</p>' + 
          '<p>' +'<b>Tanggal Lahir : </b>' + tanggal_lahir + '</p>' + 
          '<p>' + '<b> Biografi : </b>' + description + '</p>' + 
          '</div>';
      PeopleListElement.appendChild(PeopleElement);
    });
  };

  var fallbackResult = function (message) {
    PeopleListElement.innerHTML = '';
    PeopleListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>';
  };

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
