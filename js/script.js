// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a greeting based on the hour of the day
 */
function displayNumber () {
// initialize variables
  let answer = ""
  const MIN_R = 18
  const MIN_PG = 13
  const MIN_G = 10
  
// get user input
	let age = parseInt(document.getElementById('age').value)


  	// if age is greater or equal to 18
  if (age >= 0) {
    if (age == 0) {
    answer= "Please enter an age in the box"
      }
    
      else if (age >= MIN_R){
      		answer = "You can see an R rated movie. ENJOY!"
      	} else if (age >= MIN_PG){
      		answer = "Yay! You're older enough to watch a PG-13 rated movie. Have Fun!"
      	} else if (age >= MIN_G) {
      		answer = "Congrats! You can go see a G - PG rated movie, with a parent is recommended :)!" 
      	}
      // if all conditions are false
        else {
          answer = "You aren't old enough to go to watch a movie alone. Soon though :)."
        } 
  }
  // display the results
  document.getElementById('answer').innerHTML = answer
}