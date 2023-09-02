import fetch from "node-fetch"; // For Node.js

const websiteUrl = "https://socketstorebackend.onrender.com"; // Replace with the URL you want to request
const delayMinutes = 10;

function sendGetRequest() {
  fetch(websiteUrl)
    .then((response) => {
      if (response.status === 200) {
        console.log(
          `GET request to ${websiteUrl} successful (HTTP Status Code: 200)`
        );
      } else {
        console.error(
          `GET request to ${websiteUrl} failed (HTTP Status Code: ${response.status})`
        );
      }
    })
    .catch((error) => {
      console.error(`Failed to connect to ${websiteUrl}: ${error.message}`);
    })
    .finally(() => {
      // Schedule the next request after the delay
      setTimeout(sendGetRequest, delayMinutes * 60 * 1000); // Convert minutes to milliseconds
    });
}

// Start the first request
sendGetRequest();
