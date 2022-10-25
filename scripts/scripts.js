"use strict";
var portfolio=angular.module("portfolioApp",["ngCookies","ngResource","ngSanitize","ngRoute","ngAnimate","ngTouch"]);
portfolio.run(["$rootScope","$location","$window","$timeout",
               function(a,b,c,d){a.path=b.path(),a.go=function(e,f){d(function(){a.path=b.path()},100),a.pageAnimationClass="undefined"==typeof f?"crossFade":f,"back"===e?c.history.back():b.path(e)}}]),portfolio.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/examples",{templateUrl:"views/examples.html",controller:"ExamplesCtrl"}).otherwise({templateUrl:"views/main.html"})}]),portfolio.controller("MainCtrl",["$scope",function(a){a.content="home"}]),portfolio.controller("AboutCtrl",["$scope",function(a){a.content="about"}]),portfolio.controller("ExamplesCtrl",["$scope",
               function(a){
                 a.org=[
                   {id:1,img:"images/ignore/MS_HMILabs.png",header:"HMI Delivery",description:"During the 'year I'm not doing powerpoint' I presented a Microsoft Paint presentation on the internal process and expected outcomes of the Human-Machine Interface Labs group.",html:'<a href="documents/MS_HMILabs.png" class="btn btn-block"><i class="fa fa-external-link-square"></i> PNG</a>'},
                   {id:2,img:"images/ignore/Org_Design_Ops.png",header:"Mult-team Operations",description:"Establishing enterprise initiative focused on how we deliver a unified experience with multiple teams focused on journeys and outcomes. ",html:'<a href="documents/Org_Design_Ops.pdf" class="btn btn-block"><i class="fa fa-external-link-square"></i> PDF</a>'}
                 ],
                 a.ux=[
                   {id:1,img:"images/ignore/LSC_LO.png",header:"Prototype",description:"Building out a new internal tool for our Allstate agents, this project followed the contextual inqury process. Collecting data, building wireframes, iterating on prototypes. ",html:'<a href="documents/Lo-Res_Wireframes.pdf" class="btn btn-block"><i class="fa fa-external-link-square"></i> PDF</a>'},
                   {id:2,img:"images/ignore/Full_Research.png",header:"End-to-End",description:"A project documenting large scale user research, data synthesis, scenarios & final mock-ups. Also. designing a multi-modality system, working between mobile and desktop.",html:'<a href="documents/OhSnap_WebApp.pdf" class="btn btn-block"><i class="fa fa-external-link-square"></i> PDF</a>'},
                   {id:3,img:"images/ignore/Flow.png",header:"Interaction Flow",description:"To help with data discussion on the dev team, a complicated interaction was turned into a data flow to help visualize how the users will swap user data on a case-by-case level.",html:'<a href="documents/Flow_Examples_BenHooper.pdf" class="btn btn-block"><i class="fa fa-external-link-square"></i> PDF</a>'}
                 ],
                 a.id=[
                   {id:1,img:"images/ignore/Design_LSC.png",header:"Prototype to Design",description:"My Hi-Resolution design which followed the prototype from my UX examples. This documents the branding standards created for the future of a first ever responsive designed site at Allstate.",html:'<a href="documents/Design_LSC.pdf" class="btn btn-block"><i class="fa fa-external-link-square"></i> PDF</a>'},
                   {id:2,img:"images/ignore/Design_retrofit.png",header:"Design Challenge",description:"After discovering a new list of Heuristic review design guidelines, I wanted to run a quick 48 hour design challenge. Finding weaknesses in a companies landing page then a hi-resolution redesign.",html:'<a href="documents/Design_retrofit.pdf" class="btn btn-block"><i class="fa fa-external-link-square"></i> PDF</a>'}
                 ]
                          }]),portfolio.directive("gallary",[function(){return{restrict:"AE",scope:{examples:"="},templateUrl:"views/gallary.html",controller:["$scope","$element",function(a){a.name=a.name+"Second "}],link:function(a){a.currentIndex=0,a.show=function(b){a.currentIndex=b--,console.log(b),a.currentIndex=a.currentIndex<a.examples.length-1?b--:b},a.$watch("currentIndex",function(){a.examples.forEach(function(a){a.visible=!1}),a.examples[a.currentIndex].visible=!0})}
}
}
]);
