function get(url) {
    // Step 1:fetch the data
  return fetch(url).then(function(response) { // Step 2: run the json() method from the response
        return response.json()
    })
  .then(function (data) { // Step 3: return the data fron the response.json() method
        return data;
    })
}