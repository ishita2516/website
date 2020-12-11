var pageCounter = 1;
var musicContainer = document.getElementById("art-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'art-' + pageCounter + '.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " --work by-- " + data[i].artist + " ";
   

    for (ii = 0; ii < data[i].detail.rate.length; ii++) {
      if (ii == 0) {
        htmlString += "---Rate---" + data[i].detail.rate[ii];
      } else {
        htmlString += "---Rate---" + data[i].detail.rate[ii];
      }
    }

   
     htmlString += '.</p>';
  }

  musicContainer.insertAdjacentHTML('beforeend', htmlString);
}
