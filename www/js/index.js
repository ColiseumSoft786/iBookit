/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


//==================================Custom My Scripts============================================
$('#navmenu').click(function() {
     if($('#nav').css("visibility") == "collapse")
         {
$('#nav').css({
    'transform': 'translate(0px, 0px)',
    'visibility': 'visible',
    'transition': '1s'
    });
}else{
     
                    
$('#nav').css({
    'transform': 'translate(-800px, 0px)',
    'visibility': 'collapse',
    'transition': '1s'
    });
}

                    
    
});

$('#nav').click(function() {
   
$('#nav').css({
    'transform': 'translate(-800px, 0px)',
    'visibility': 'collapse',
    'transition': '1s'
    });
});

//Adder And Editor Function
$('.addbtn').click(function() {
    $('#adder').slideToggle('slow');
});

$('.editbtn').click(function() {
    window.location="#";
    $('#editor').slideDown('slow');
});

$('.editcloser').click(function() {
    $('#editor').slideUp('slow');
});

//22222222222222Adder And Editor Function
$('.addbtn2').click(function() {
    $('#adder2').slideToggle('slow');
});

$('.editbtn2').click(function() {
    window.location="#";
    $('#editor2').slideDown('slow');
});

$('.editcloser2').click(function() {
    $('#editor2').slideUp('slow');
});




//Staff details and Staff by event MAILN AJX
$('#stfDtls').click(function() {
    $('#stfDtls').css({'background-color': '#888888'});
    $('#stfByEvent').css({'background-color': '#29aae2'});
    $('.stfimg_dtls').css({'visibility': 'visible', 'transition': '.3s'});
    $('.stfimg_byevent').css({'visibility': 'collapse', 'transition': '0s'});
    $('#stf_dtls').css({
        'display': 'block',
        'transition': '.3s'
    });
    $('#stf_byevent').css({
        'display': 'none',
        'transition': '.3s'
    });    
});
$('#stfByEvent').click(function() {
    $('#stfByEvent').css({'background-color': '#888888'});
    $('#stfDtls').css({'background-color': '#29aae2'});
    $('.stfimg_byevent').css({'visibility': 'visible', 'transition': '.3s'});
    $('.stfimg_dtls').css({'visibility': 'collapse', 'transition': '0s'});
    $('#stf_byevent').css({
        'display': 'block',
        'transition': '.3s'
    });
    $('#stf_dtls').css({
        'display': 'none',
        'transition': '.3s'
    });    
});


//Slide images
var i = 0;
$('.arrleft').click(function() {
    var nu = --i;
    $("#slideimg").attr('src',"img/img"+nu+".jpg");
   return false;
});


$('.arrright').click(function() { 
   var nu = i++;
    $("#slideimg").attr('src',"img/img"+nu+".jpg");
   return false;
});


//Slide images Products
var i = 0;
$('.arrleft').click(function() {
    var nu = --i;
    $("#slideimgPro").attr('src',"img/image"+nu+".jpg");
   return false;
});


$('.arrright').click(function() { 
   var nu = i++;
    $("#slideimgPro").attr('src',"img/image"+nu+".jpg");
   return false;
});



//Back button
$("#main_header .mainbck").click(function() {
    window(location='dashboard.html')
  //window.history.back();
});

$("#main_header .subbck").click(function() {
    window(location='dashboard.html')
});


//Messages
function toggleDataInto(x)
{
    $('#'+x).slideToggle('slow');
}





