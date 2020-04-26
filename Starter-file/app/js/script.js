var currentTab = 0;

showTab(currentTab);

function showTab(n) {
	
	
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").style.display = "none";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
  } 
	else {
    document.getElementById("nextBtn").style.display = "Démarrer le test";
  }
  fixStepIndicator(n)
  fixStepInd(n)
}

function next(n) {
  var x = document.getElementsByClassName("tab");
  
  x[currentTab].style.display = "none";
     
  currentTab = currentTab + n;
  
  if (currentTab >= x.length) {
    
    return false;
  }
  
  showTab(currentTab);
}

function fixStepIndicator(n) {
  
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  
  x[n].className += " active";
}

function fixStepInd(n) {
  
  var i, x = document.getElementsByClassName("text");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" ac", "");
  }
  
  x[n].className += " ac";
}