'use strict';

$('#profile_1').click(function(){
	//alert('Profile 1');
	chrome.storage.sync.get('txtSurname_1', function(data) {
	  //alert(data.txtSurname_1);
	  $('#txtSurname').val(data.txtSurname_1);
	});
	chrome.storage.sync.get('title_1', function(data) {
	  //alert(data.title_1);
	  if(data.title_1 === 'mr'){
	  	$('#title_mr').attr('checked',true);
	  }
	  if(data.title_1 === 'mrs'){
	  	$('#title_mrs').attr('checked',true);
	  	
	  }
	  if(data.title_1 === 'miss'){
	  	$('#title_miss').attr('checked',true);
	  	
	  }
	});
	chrome.storage.sync.get('txtGivenName_1', function(data) {
	  //alert(data.txtGivenName_1);
	  $('#txtGivenName').val(data.txtGivenName_1);
	});
	chrome.storage.sync.get('DOBDay_1', function(data) {
	  //alert(data.DOBDay_1);
	  $('#DOBDay').val(data.DOBDay_1);
	});
	chrome.storage.sync.get('DOBMonth_1', function(data) {
	  //alert(data.DOBMonth_1);
	  $('#DOBMonth').val(data.DOBMonth_1);
	});
	chrome.storage.sync.get('DOBYear_1', function(data) {
	  //alert(data.DOBYear_1);
	  $('#DOBYear').val(data.DOBYear_1);
	});
	chrome.storage.sync.get('txtContactNo_1', function(data) {
	  //alert(data.txtContactNo_1);
	  $('#txtContactNo').val(data.txtContactNo_1);
	});
	chrome.storage.sync.get('txtEmail_1', function(data) {
	  //alert(data.txtEmail_1);
	  $('#txtEmail').val(data.txtEmail_1);
	});
});

$('#profile_2').click(function(){
	//alert('Profile 2');
	chrome.storage.sync.get('txtSurname_2', function(data) {
	  //alert(data.txtSurname_2);
	  $('#txtSurname').val(data.txtSurname_2);
	});
	chrome.storage.sync.get('title_2', function(data) {
	  //alert(data.title_2);
	   if(data.title_2 === 'mr'){
	  	$('#title_mr').attr('checked',true);
	  }
	  if(data.title_2 === 'mrs'){
	  	$('#title_mrs').attr('checked',true);
	  	
	  }
	  if(data.title_2 === 'miss'){
	  	$('#title_miss').attr('checked',true);
	  	
	  }
	});
	chrome.storage.sync.get('txtGivenName_2', function(data) {
	  //alert(data.txtGivenName_2);
	  $('#txtGivenName').val(data.txtGivenName_2);
	});
	chrome.storage.sync.get('DOBDay_2', function(data) {
	  //alert(data.DOBDay_2);
	  $('#DOBDay').val(data.DOBDay_2);
	});
	chrome.storage.sync.get('DOBMonth_2', function(data) {
	  //alert(data.DOBMonth_2);
	  $('#DOBMonth').val(data.DOBMonth_2);
	});
	chrome.storage.sync.get('DOBYear_2', function(data) {
	  //alert(data.DOBYear_2);
	  $('#DOBYear').val(data.DOBYear_2);
	});
	chrome.storage.sync.get('txtContactNo_2', function(data) {
	  //alert(data.txtContactNo_2);
	  $('#txtContactNo').val(data.txtContactNo_2);
	});
	chrome.storage.sync.get('txtEmail_2', function(data) {
	  //alert(data.txtEmail_2);
	  $('#txtEmail').val(data.txtEmail_2);
	});
});

$('#profile_3').click(function(){
	//alert('Profile 3');
	chrome.storage.sync.get('txtSurname_3', function(data) {
	  //alert(data.txtSurname_3);
	  $('#txtSurname').val(data.txtSurname_3);
	});
	chrome.storage.sync.get('title_3', function(data) {
	  //alert(data.title_3);
	   if(data.title_3 === 'mr'){
	  	$('#title_mr').attr('checked',true);
	  }
	  if(data.title_3 === 'mrs'){
	  	$('#title_mrs').attr('checked',true);
	  	
	  }
	  if(data.title_3 === 'miss'){
	  	$('#title_miss').attr('checked',true);
	  	
	  }
	});
	chrome.storage.sync.get('txtGivenName_3', function(data) {
	  //alert(data.txtGivenName_3);
	  $('#txtGivenName').val(data.txtGivenName_3);
	});
	chrome.storage.sync.get('DOBDay_3', function(data) {
	  //alert(data.DOBDay_3);
	  $('#DOBDay').val(data.DOBDay_3);
	});
	chrome.storage.sync.get('DOBMonth_3', function(data) {
	  //alert(data.DOBMonth_3);
	  $('#DOBMonth').val(data.DOBMonth_3);
	});
	chrome.storage.sync.get('DOBYear_3', function(data) {
	  //alert(data.DOBYear_3);
	  $('#DOBYear').val(data.DOBYear_3);
	});
	chrome.storage.sync.get('txtContactNo_3', function(data) {
	  //alert(data.txtContactNo_3);
	  $('#txtContactNo').val(data.txtContactNo_3);
	});
	chrome.storage.sync.get('txtEmail_3', function(data) {
	  //alert(data.txtEmail_3);
	  $('#txtEmail').val(data.txtEmail_3);
	});
});

$('#profile_4').click(function(){
	//alert('Profile 4');
	chrome.storage.sync.get('txtSurname_4', function(data) {
	  //alert(data.txtSurname_4);
	  $('#txtSurname').val(data.txtSurname_4);
	});
	chrome.storage.sync.get('title_4', function(data) {
	  //alert(data.title_4);
	  if(data.title_4 === 'mr'){
	  	$('#title_mr').attr('checked',true);
	  }
	  if(data.title_4 === 'mrs'){
	  	$('#title_mrs').attr('checked',true);
	  	
	  }
	  if(data.title_4 === 'miss'){
	  	$('#title_miss').attr('checked',true);
	  	
	  }
	});
	chrome.storage.sync.get('txtGivenName_4', function(data) {
	  //alert(data.txtGivenName_4);
	  $('#txtGivenName').val(data.txtGivenName_4);
	});
	chrome.storage.sync.get('DOBDay_4', function(data) {
	  //alert(data.DOBDay_4);
	  $('#DOBDay').val(data.DOBDay_4);
	});
	chrome.storage.sync.get('DOBMonth_4', function(data) {
	  //alert(data.DOBMonth_4);
	  $('#DOBMonth').val(data.DOBMonth_4);
	});
	chrome.storage.sync.get('DOBYear_4', function(data) {
	  //alert(data.DOBYear_4);
	  $('#DOBYear').val(data.DOBYear_4);
	});
	chrome.storage.sync.get('txtContactNo_4', function(data) {
	  //alert(data.txtContactNo_4);
	  $('#txtContactNo').val(data.txtContactNo_4);
	});
	chrome.storage.sync.get('txtEmail_4', function(data) {
	  //alert(data.txtEmail_4);
	  $('#txtEmail').val(data.txtEmail_4);
	});
});

$('#profile_5').click(function(){
	//alert('Profile 5');
	chrome.storage.sync.get('txtSurname_5', function(data) {
	  //alert(data.txtSurname_5);
	  $('#txtSurname').val(data.txtSurname_5);
	});
	chrome.storage.sync.get('title_5', function(data) {
	  //alert(data.title_5);
	  if(data.title_5 === 'mr'){
	  	$('#title_mr').attr('checked',true);
	  }
	  if(data.title_5 === 'mrs'){
	  	$('#title_mrs').attr('checked',true);
	  	
	  }
	  if(data.title_5 === 'miss'){
	  	$('#title_miss').attr('checked',true);
	  	
	  }
	});
	chrome.storage.sync.get('txtGivenName_5', function(data) {
	  //alert(data.txtGivenName_5);
	  $('#txtGivenName').val(data.txtGivenName_5);
	});
	chrome.storage.sync.get('DOBDay_5', function(data) {
	  //alert(data.DOBDay_5);
	  $('#DOBDay').val(data.DOBDay_5);
	});
	chrome.storage.sync.get('DOBMonth_5', function(data) {
	  //alert(data.DOBMonth_5);
	  $('#DOBMonth').val(data.DOBMonth_5);
	});
	chrome.storage.sync.get('DOBYear_5', function(data) {
	  //alert(data.DOBYear_5);
	  $('#DOBYear').val(data.DOBYear_5);
	});
	chrome.storage.sync.get('txtContactNo_5', function(data) {
	  //alert(data.txtContactNo_5);
	  $('#txtContactNo').val(data.txtContactNo_5);
	});
	chrome.storage.sync.get('txtEmail_5', function(data) {
	  //alert(data.txtEmail_5);
	  $('#txtEmail').val(data.txtEmail_5);
	});
});