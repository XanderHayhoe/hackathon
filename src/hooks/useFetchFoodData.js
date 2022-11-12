import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

async function retFoodInfo(FDC){
  if (typeof(FDC) != Int) {
    //give back an error
  }
  
  URLpt1 = "https://api.nal.usda.gov/fdc/v1/food/";
  URLpt2 = "?api_key=y59S9SqsxO6ExWSfFkfBbdoDzNXQlD0v7PjEhIg7";
  URL_Full = URLpt1.concat(FDC, URLpt2);

  const fetchReq = await fetch(URL_Full);
  const dataToRead = await fetchReq.json();
  
  //pull the nutritional facts array of data from dataToRead and return to user
}

async function searchFood(Query){
  if (typeof(Query) != String){
    //return an error
  }

  //demo url https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Cheddar%20Cheese
  URLpt1 = "https://api.nal.usda.gov/fdc/v1/food/search?api_key=y59S9SqsxO6ExWSfFkfBbdoDzNXQlD0v7PjEhIg7&query=";
  URLpt2 = encodeURIComponent(Query);
  URL_Full = URLpt1.concat(URLpt2);

  const fetchReq = await fetch(URL_Full);
  const foodResult = await fetchReq.json();

  //returns the list of possible food matches from search, again listed in fetchReq.json file
}