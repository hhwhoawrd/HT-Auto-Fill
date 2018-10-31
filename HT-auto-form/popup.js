// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

/*let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};*/

$('#submit_button').click(function(e){
	e.preventDefault();
	//alert('start');
	/*alert('start');
	chrome.storage.sync.get(['txtSurname'], function(data) {
	  alert(data.txtSurname);
	});
	chrome.storage.sync.get('txtGivenName', function(data) {
	  alert(data.txtGivenName);
	});
	chrome.storage.sync.get('txtEmail', function(data) {
	  alert(data.txtEmail);
	});
	chrome.storage.sync.get('title_mr', function(data) {
	  alert(data.title_mr);
	});
	chrome.storage.sync.get('title_miss', function(data) {
	  alert(data.title_miss);
	});
	chrome.storage.sync.get('title_mrs', function(data) {
	  alert(data.title_mrs);
	});
	chrome.storage.sync.get('txtContactNo', function(data) {
	  alert(data.txtContactNo);
	});*/

	$('input').each(function(){

		//alert($(this).attr('id')+': '+$(this).val());
		var element_id = $(this).attr('id');
		var element_value = $(this).val();

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		    chrome.tabs.executeScript(
		        tabs[0].id,
		        {code: 'var inputs = document.getElementsByTagName("input");for(var i = 0; i < inputs.length; i++) {if(inputs[i].type == "checkbox") {inputs[i].checked = true; inputs[i].disabled = false; }  }'});
		});	

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		    chrome.tabs.executeScript(
		        tabs[0].id,
		        {code: 'var rsvp_date = document.getElementById("'+'rsvp_date'+'"); var date_choice = 1; while(true){if(rsvp_date.options[date_choice].disabled){date_choice++;}else{rsvp_date.selectedIndex = date_choice; break;}}'});
		});	

		if($(this).attr('type') === 'radio' ){
			if($(this).is(':checked')){
				if($(this).val() === 'mr'){
					chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					    chrome.tabs.executeScript(
					        tabs[0].id,
					        {code: 'document.getElementById("'+'chkGenderMr'+'").checked = "' + true + '";'});
					});	
				}
				if($(this).val() === 'mrs'){
					chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					    chrome.tabs.executeScript(
					        tabs[0].id,
					        {code: 'document.getElementById("'+'chkGenderMrs'+'").checked = "' + true + '";'});
					});	
				}
				if($(this).val() === 'miss'){
					chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					    chrome.tabs.executeScript(
					        tabs[0].id,
					        {code: 'document.getElementById("'+'chkGenderMiss'+'").checked = "' + true + '";'});
					});	
				}
			}
		}
		if(element_id === 'DOBYear'){
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			    chrome.tabs.executeScript(
			        tabs[0].id,
			        {code: 'document.getElementById("'+'DOBYear'+'").value = "' + element_value + '";document.getElementById("'+'confirmDOBYear'+'").value = "' + element_value + '";'});
			});	
		}
		if(element_id === 'DOBMonth'){
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			    chrome.tabs.executeScript(
			        tabs[0].id,
			        {code: 'document.getElementById("'+'DOBMonth'+'").value = "' + element_value + '";document.getElementById("'+'confirmDOBMonth'+'").value = "' + element_value + '";'});
			});	
		}
		if(element_id === 'DOBDay'){
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			    chrome.tabs.executeScript(
			        tabs[0].id,
			        {code: 'document.getElementById("'+'DOBDay'+'").value = "' + element_value + '";document.getElementById("'+'confirmDOBDay'+'").value = "' + element_value + '";'});
			});	
		}
		if(element_id === 'txtEmail'){
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			    chrome.tabs.executeScript(
			        tabs[0].id,
			        {code: 'document.getElementById("'+'txtConfirmEmail'+'").value = "' + element_value + '";'});
			});	
		}
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		    chrome.tabs.executeScript(
		        tabs[0].id,
		        {code: 'document.getElementById("'+element_id+'").value = "' + element_value + '";'});
		});

		
	});
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    chrome.tabs.executeScript(
	        tabs[0].id,
	        {code: 'var win = window.open(window.location.href, "_blank");'});
	});

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    chrome.tabs.executeScript(
	        tabs[0].id,
	        {code: 'document.getElementById("'+'submitBtn'+'").click();'});
	});
});