// linear search function
function linearSearch(arr, value) {
  let counter = 0;
  const timer = setInterval(() => {
    let box = `box-wrapper-${counter}`;

    if (counter != 0) {
      // hiding arrow
      arrowIcons[counter - 1].style.display = "none";
    }

    if (counter == 10) {
      alert("Element Not Found");
      location.reload();
      clearInterval(timer);
    } else {
      // displaying arrow
      arrowIcons[counter].style.display = "block";
      var innerTimer = setTimeout(() => {
        document.getElementById(box).style.backgroundColor = failureColor;
      }, 500);
    }

    if (arr[counter] === value) {
      clearInterval(innerTimer);
      // displaying arrow
      arrowIcons[counter].style.display = "block";
      document.getElementById(box).style.backgroundColor = successColor;
      alert("Element Found At Index " + counter);
      location.reload();
      clearInterval(timer);
    }
    counter++;
  }, 1000);
}

// binary search function
function binarySearch(arr, x, start, end) {
  if (start > end) {
    alert("Element not Found");
    location.reload();
    return false;
  }

  // Find the middle index
  let mid = Math.floor((start + end) / 2);
  let previousMid = mid;
  let box = `box-wrapper-${mid}`;

  // displaying arrow and color
  arrowIcons[mid].style.display = "block";
  const timer = setTimeout(() => {
    document.getElementById(box).style.backgroundColor = failureColor;
  }, 500);

  // Compare mid with given key x
  if (arr[mid] === x) {
    document.getElementById(box).style.backgroundColor = successColor;
    clearInterval(timer);
    alert("Element Found At Index " + mid);
    location.reload();
    return true;
  }

  // If element at mid is greater than x,
  if (arr[mid] > x) {
    // search in the left half of mid
    setTimeout(() => {
      // hiding arrow
      arrowIcons[previousMid].style.display = "none";
      return binarySearch(arr, x, start, mid - 1);
    }, 1000);
  } else {
    // If element at mid is smaller than x,
    // search in the right half of mid
    setTimeout(() => {
      // hiding arrow
      arrowIcons[previousMid].style.display = "none";
      return binarySearch(arr, x, mid + 1, end);
    }, 1000);
  }
}








// Retrieve existing search history from localStorage
let searchedElements = JSON.parse(localStorage.getItem('searchedElements')) || [];

// Function to update the search history display
function updateSearchHistory() {
  const searchHistory = document.getElementById("searchHistory");
  searchHistory.innerHTML = ""; // Clear previous history

  // Loop through searchedElements array and create list items
  searchedElements.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.textContent = element;
    searchHistory.appendChild(listItem);
  });
}

// Function to handle the search operation (for linear or binary search)
function searchElement() {
  const searchValue = document.getElementById("valueForSearch").value;

  if (searchValue !== "") {
    // Add the search value to the array
    searchedElements.push(searchValue);

    // Update localStorage with the new array
    localStorage.setItem('searchedElements', JSON.stringify(searchedElements));

    // Update the displayed search history
    updateSearchHistory();
  } else {
    alert("Please enter a value to search.");
  }
}

// Event listener for the search button
document.getElementById("search").addEventListener("click", searchElement);

// Initial call to update the search history when the page loads
updateSearchHistory();



// Function to clear search history
function clearSearchHistory() {
  localStorage.removeItem('searchedElements'); // Remove the data from localStorage
  searchedElements = []; // Reset the array
  updateSearchHistory(); // Update the UI
}

// Event listener for the clear history button
document.getElementById("clear-history").addEventListener("click", clearSearchHistory);


// Function to clear search history
function clearSearchHistory() {
  localStorage.removeItem('searchedElements'); // Remove the data from localStorage
  searchedElements = []; // Reset the array
  updateSearchHistory(); // Update the UI
}

// Event listener for the clear history button
document.getElementById("clear-history").addEventListener("click", clearSearchHistory);
