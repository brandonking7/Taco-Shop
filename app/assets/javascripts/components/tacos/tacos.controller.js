angular
  .module('app')
  .controller('TacosController', TacosController);

TacosController.$inject = ['TacoService'];

function TacosController(TacoService) {
  // var vm = this;
  var tc = this;

  tc.tacos = [];
  // tc.tacoDelete = tacoDelete;


  // activate();
  // //
  // function activate() {
  //   TacoService.getTacos().then(function(response) {
  //     tc.tacos = response.data;
  //     console.log(response);
  //   });
  // }

  // Load the list of tacos we already have
  TacoService.getTacos().then(function(tacos) {
    tc.tacos = tacos.data;
    console.log(tacos);
  }).catch(function(err) {
    tc.listError = err.message || err.statusText;
  });
  // // Create a default taco for new tacos
  var defaultTaco = {
    meat: 'chicken',
    rice: false,
    salsa: false,
    notes: ''
  };
  tc.newTaco = _.clone(defaultTaco);
  tc.createTaco = function() {
    tc.createError = null;
    tc.creatingTaco = true;
    TacoService.createTaco(tc.newTaco).then(function(taco) {
      tc.tacos.push(taco);
      tc.newTaco = _.clone(defaultTaco);
    }).catch(function(err) {
      tc.createError = err.message || err.statusText;
    }).finally(function() {
      tc.creatingTaco = false;
    })
  };
  // function tacoDelete(taco_id) {
  //   console.log('TacosController' + taco_id)
  //   TacoService.deleteTaco(taco_id)
  //   .then(function(response) {
  //
  //   });
  // }
  tc.deleteTaco = function(taco) {
    tc.deleteError = null;
    TacoService.deleteTaco(taco.id).then(function() {
      var index = _.indexOf(tc.tacos, taco);
      tc.tacos.splice(index, 1);
    }).catch(function(err) {
      tc.deleteError = err.message || err.statusText;
    });
  };
};
