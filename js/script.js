// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: March 2022
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
  
// get user input
	let age = parseInt(document.getElementById('age').value)


  	// if guess is right says correct
	if (age >= MIN_R){
		answer = "You can see an R rated movie. ENOJOY, hoped you picked a good one!"
	} 
  	// if guess is right says correct
	else if (age >= MIN_PG){
		answer = "Yay! Your older enough to watch PG-13 rated movie. Have Fun!"
	} 
	//if not says incorrect	
	else {
		answer = "Congrats! You can go see a G rated movie! 
	}

  // display the results
  document.getElementById('answer').innerHTML = answer
}