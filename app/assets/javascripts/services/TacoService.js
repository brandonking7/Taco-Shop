angular
  .module('app')
  .service('TacoService', TacoService)

  TacoService.$inject = ['$http'];

  function TacoService($http) {

    var service = {};
    service.getTacos = getTacos;

    return service;

    console.log('hey do you shwuhw2hd2hd2');
    function getTacos() {
      console.log('Hey From Tacos!');
      return $http.get('/api/tacos');
    }
  }
