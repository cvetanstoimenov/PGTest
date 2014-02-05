/// <reference path="intellisense.js" />

/*globals $ document window $ ApplicationViewModel ko TwitterSearchViewModel*/

$(document).ready(function () {
  initializeViewModel();
});

var application;

function initializeViewModel() {

  application = new ApplicationViewModel();
  ko.applyBindings(application);

  var viewModel = new TwitterSearchViewModel();
  viewModel.loadState();
  application.navigateTo(viewModel);
}
