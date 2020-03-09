import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component

  name: 'Oskar', // App name
  theme: 'auto', // Automatic theme detection


  // App routes
  routes: routes,
});





// Dummy items array
var items = [];
for (var i = 1; i <= 10000; i++) {
  items.push({
    title: 'Osoba ' + i,
    subtitle: 'Subtitle ' + i
  });
}
$$(document).on("page:init",'.page[data-name="about"]',function(e){
  console.log("tekst");
    axios
        .get('http://localhost/baza.php') //api url
        .then(response => {
            console.log(items, response.data);
            var virtualList = app.virtualList.create({
                // List Element
                el: '.virtual-list',
                // Pass array with items
                items: response.data, //JSON z api
                // Custom search function for searchbar
                searchAll: function(query, items) {
                    var found = [];
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
                    }
                    return found; //return array with mathced indexes
                },
                // List item Template7 template
                itemTemplate: '<li data-id="{{marka}} {{rok}}">' +
                    '<a href="#" class="item-link item-content">' +
                    '<div class="item-inner">' +
                    '<div class="item-title-row">' +
                    '<div class="item-title">{{marka}}</div>' +
                    '<div class="item-title">{{rok}}</div>' +
                    '<div class="item-title">{{kolor}}</div>' +
                    '<div class="item-title">{{silnik}}</div>' +
                '</div>' +
                    '</div>' +
                    '</a>' +
                    '</li>',
                // Item height
                height: app.theme === 'ios' ? 63 : (app.theme === 'md' ? 73 : 46),
            });
			
			
			$$('.virtual-list').on('click', 'li', function () {
   var idSelected = $$(this).attr('data-id');
//w itemTemplate pierwsza linijka z polem data-id
//UWAGA!
//<li data-id="{{title}}..........

//check:

//   alert(idSelected);
//MODAL - wyskakująca strona
var dynamicSheet = app.sheet.create({
  content: '<div class="sheet-modal">'+
              '<div class="toolbar">'+
                '<div class="toolbar-inner">'+
                  '<div class="left"></div>'+
                  '<div class="right">'+
                    '<a class="link sheet-close">Done</a>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class="sheet-modal-inner">'+
                '<div class="block">'+
                  '<p>'+ idSelected +'</p>'+
                  '<p><a href="#" class="link sheet-close">Close me</a></p>'+
                '</div>'+
              '</div>'+
            '</div>',
  // Events
  on: {
    open: function (sheet) {
      console.log('Sheet open');
    },
    opened: function (sheet) {
      console.log('Sheet opened');
    },
  }
});
  // Open dynamic sheet
  dynamicSheet.open();
});
			
        });
});