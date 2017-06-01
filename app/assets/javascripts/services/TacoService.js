angular
  .module('app')
  .service('TacoService', TacoService)

  TacoService.$inject = ['$http'];

  function TacoService($http) {

    var service = {};
    service.getTacos = getTacos;
    service.createTaco = createTaco;
    service.deleteTaco = deleteTaco;

    return service;

    function getTacos() {
      console.log('Hey From Tacos!');
      return $http.get('/api/tacos');
    }

    function createTaco(taco) {
      console.log('Taco created!')
      return $http.post('/api/tacos/', taco);
    }

    function deleteTaco(id) {
      return $http.delete('/api/tacos/' + id);
      console.log('deleted a taco!')
    }

  }
