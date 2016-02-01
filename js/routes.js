angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('menu', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('startUp', {
      url: '/start-up',
      templateUrl: 'templates/startUp.html',
      controller: 'startUpCtrl'
    })
        
      
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('passwordRecovery', {
      url: '/password-recovery',
      templateUrl: 'templates/passwordRecovery.html',
      controller: 'passwordRecoveryCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('signupConfirmation', {
      url: '/signup-confirmation',
      templateUrl: 'templates/signupConfirmation.html',
      controller: 'signupConfirmationCtrl'
    })
        
      
    
      
        
    .state('menu.companyList', {
      url: '/company-list',
      views: {
        'side-menu21': {
          templateUrl: 'templates/companyList.html',
          controller: 'companyListCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.productList', {
      url: '/product-list',
      views: {
        'side-menu21': {
          templateUrl: 'templates/productList.html',
          controller: 'productListCtrl'
        }
      }
    })
        
      
    
      
        
    .state('search', {
      url: '/search',
      templateUrl: 'templates/search.html',
      controller: 'searchCtrl'
    })
        
      
    
      
        
    .state('searchResults', {
      url: '/search-results',
      templateUrl: 'templates/searchResults.html',
      controller: 'searchResultsCtrl'
    })
        
      
    
      
        
    .state('stockistDetails', {
      url: '/stockist-details',
      templateUrl: 'templates/stockistDetails.html',
      controller: 'stockistDetailsCtrl'
    })
        
      
    
      
        
    .state('alternativesList', {
      url: '/alternatives-list',
      templateUrl: 'templates/alternativesList.html',
      controller: 'alternativesListCtrl'
    })
        
      
    
      
        
    .state('alternativesDetails', {
      url: '/alternatives-details',
      templateUrl: 'templates/alternativesDetails.html',
      controller: 'alternativesDetailsCtrl'
    })
        
      
    
      
        
    .state('menu.myProfile', {
      url: '/my-profile',
      views: {
        'side-menu21': {
          templateUrl: 'templates/myProfile.html',
          controller: 'myProfileCtrl'
        }
      }
    })
        
      
    
      
        
    .state('changePassword', {
      url: '/change-password',
      templateUrl: 'templates/changePassword.html',
      controller: 'changePasswordCtrl'
    })
        
      
    
      
        
    .state('passwordChange', {
      url: '/password-change',
      templateUrl: 'templates/passwordChange.html',
      controller: 'passwordChangeCtrl'
    })
        
      
    
      
        
    .state('orderConfirmation', {
      url: '/order-confirmation',
      templateUrl: 'templates/orderConfirmation.html',
      controller: 'orderConfirmationCtrl'
    })
        
      
    
      
        
    .state('menu.myOrders', {
      url: '/my-orders',
      views: {
        'side-menu21': {
          templateUrl: 'templates/myOrders.html',
          controller: 'myOrdersCtrl'
        }
      }
    })
        
      
    
      
        
    .state('orderDetails', {
      url: '/order-details',
      templateUrl: 'templates/orderDetails.html',
      controller: 'orderDetailsCtrl'
    })
        
      
    
      
        
    .state('emailLink', {
      url: '/email-link',
      templateUrl: 'templates/emailLink.html',
      controller: 'emailLinkCtrl'
    })
        
      
    
      
        
    .state('companyDetails', {
      url: '/company-details',
      templateUrl: 'templates/companyDetails.html',
      controller: 'companyDetailsCtrl'
    })
        
      
    
      
        
    .state('productDetails', {
      url: '/product-details',
      templateUrl: 'templates/productDetails.html',
      controller: 'productDetailsCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start-up');

});