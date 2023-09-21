/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const axios = require("axios");
const fs = require("fs");

const accessKey = "m8DXpEVW8AbfJgC0XPt1eJH3lRqkFoQMTkRtpXGPIqU";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=20`;

axios
  .get(apiUrl)
  .then(async (response) => {
    const imagesData = [];

    // Iterate through each photo in the response
    for (const photo of response.data) {
      try {
        // Make a separate Axios request to get additional information
        const imageInfoResponse = await axios.get(
          `https://api.unsplash.com/photos/${photo.id}/?client_id=CvXmpt8HJ0ANk3SGLFVnGDOeoNu_vxoHPOIKhMOOhcA`
        );

        // Extract the information you need from the response
        const tags = imageInfoResponse.data.tags.map((tag) => tag.title);

        // Create an object with the desired data
        const imageData = {
          id: photo.id,
          url: photo.urls.regular,
          tags: tags,
          alt: photo.alt_description,
        };

        // Add the image data to the array
        imagesData.push(imageData);
      } catch (error) {
        console.error("Error fetching image info:", error);
      }
    }

    // Convert the image data to a JavaScript string
    const dataString = `const imageData = ${JSON.stringify(
      imagesData,
      null,
      2
    )};\n\nexport default imageData;`;

    // Write the data to a new file called data.js
    fs.writeFile("data.js", dataString, (err) => {
      if (err) {
        console.error("Error writing to data.js:", err);
      } else {
        console.log("Data saved to data.js");
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching images:", error);
  });
