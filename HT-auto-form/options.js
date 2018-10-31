// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    page.appendChild(button);
  }
}
//constructOptions(kButtonColors);

$('#submit_button').click(function(e){
  e.preventDefault();
  get_input();
});

function get_input(){
  $('input').each(function(){
    //console.log($(this).attr('id'));
    var input_id = $(this).attr('id');
    var input_value = $(this).val();
    var input_class = $(this).attr('class');
    if (input_class == 'profile_1'){
      if($(this).attr('name') === 'title_1'){

        if($(this).is(":checked")){
          chrome.storage.sync.set({title_1: input_value}, function() {
            console.log(input_id+': '+input_value);
          });
        }else{

        }
      }else{
        if(input_id === 'txtSurname'){
          chrome.storage.sync.set({txtSurname_1: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtGivenName'){
          chrome.storage.sync.set({txtGivenName_1: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        
        if(input_id === 'DOBMonth'){
          chrome.storage.sync.set({DOBMonth_1: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'DOBDay'){
          chrome.storage.sync.set({DOBDay_1: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'DOBYear'){
          chrome.storage.sync.set({DOBYear_1: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtContactNo'){
          chrome.storage.sync.set({txtContactNo_1: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtEmail'){
          chrome.storage.sync.set({txtEmail_1: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        
      }  
    }


    if (input_class == 'profile_2'){
      if($(this).attr('name') === 'title_2'){

        if($(this).is(":checked")){
          chrome.storage.sync.set({title_2: input_value}, function() {
            console.log(input_id+': '+input_value);
          });
        }else{

        }
      }else{
        if(input_id === 'txtSurname'){
          chrome.storage.sync.set({txtSurname_2: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtGivenName'){
          chrome.storage.sync.set({txtGivenName_2: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        
        if(input_id === 'DOBMonth'){
          chrome.storage.sync.set({DOBMonth_2: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'DOBDay'){
          chrome.storage.sync.set({DOBDay_2: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'DOBYear'){
          chrome.storage.sync.set({DOBYear_2: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtContactNo'){
          chrome.storage.sync.set({txtContactNo_2: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtEmail'){
          chrome.storage.sync.set({txtEmail_2: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        
      }  
    }

    if (input_class == 'profile_3'){
      if($(this).attr('name') === 'title_3'){

        if($(this).is(":checked")){
          chrome.storage.sync.set({title_3: input_value}, function() {
            console.log(input_id+': '+input_value);
          });
        }else{

        }
      }else{
        if(input_id === 'txtSurname'){
          chrome.storage.sync.set({txtSurname_3: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtGivenName'){
          chrome.storage.sync.set({txtGivenName_3: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        
        if(input_id === 'DOBMonth'){
          chrome.storage.sync.set({DOBMonth_3: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'DOBDay'){
          chrome.storage.sync.set({DOBDay_3: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'DOBYear'){
          chrome.storage.sync.set({DOBYear_3: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtContactNo'){
          chrome.storage.sync.set({txtContactNo_3: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtEmail'){
          chrome.storage.sync.set({txtEmail_3: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        
      }  
    }

    if (input_class == 'profile_4'){
      if($(this).attr('name') === 'title_4'){

        if($(this).is(":checked")){
          chrome.storage.sync.set({title_4: input_value}, function() {
            console.log(input_id+': '+input_value);
          });
        }else{

        }
      }else{
        if(input_id === 'txtSurname'){
          chrome.storage.sync.set({txtSurname_4: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtGivenName'){
          chrome.storage.sync.set({txtGivenName_4: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        
        if(input_id === 'DOBMonth'){
          chrome.storage.sync.set({DOBMonth_4: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'DOBDay'){
          chrome.storage.sync.set({DOBDay_4: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'DOBYear'){
          chrome.storage.sync.set({DOBYear_4: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtContactNo'){
          chrome.storage.sync.set({txtContactNo_4: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtEmail'){
          chrome.storage.sync.set({txtEmail_4: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        
      }  
    }

    if (input_class == 'profile_5'){
      if($(this).attr('name') === 'title_5'){

        if($(this).is(":checked")){
          chrome.storage.sync.set({title_5: input_value}, function() {
            console.log(input_id+': '+input_value);
          });
        }else{

        }
      }else{
        if(input_id === 'txtSurname'){
          chrome.storage.sync.set({txtSurname_5: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtGivenName'){
          chrome.storage.sync.set({txtGivenName_5: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        
        if(input_id === 'DOBMonth'){
          chrome.storage.sync.set({DOBMonth_5: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'DOBDay'){
          chrome.storage.sync.set({DOBDay_5: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'DOBYear'){
          chrome.storage.sync.set({DOBYear_5: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtContactNo'){
          chrome.storage.sync.set({txtContactNo_5: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        if(input_id === 'txtEmail'){
          chrome.storage.sync.set({txtEmail_5: input_value}, function() {
            console.log(input_id+': '+input_value);
          });    
        }
        
      }  
    }



    
    
  });
}