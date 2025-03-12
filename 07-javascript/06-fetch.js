const url = "https://anapioficeandfire.com/api/books/";
const app = document.querySelector("#books");

const fetchData = async (url) => {
  try {
    // Fetch the data from the API
    const response = await fetch(url);
    const books = await response.json();

    // Iterate through each book and create an element
    books.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("book");

      // Populate book
      bookElement.innerHTML = `
        <h3>${book.name}</h3>
        <p><strong>Author:</strong> ${book.authors.join(", ")}</p>
        <p><strong>Published:</strong> ${book.released.split("T")[0]}</p>
        <p><strong>Pages:</strong> ${book.numberOfPages}</p>
      `;

      // Append the book element to DOM
      app.appendChild(bookElement);
    });

    // Styling for the books container
    app.style.display = "flex";
    app.style.flexDirection = "column";
    app.style.alignItems = "center";
    app.style.gap = "1em";
  } catch (error) {
    console.error("Error fetching data:", error);
    app.innerHTML = "<p>Failed to load books. Please try again later.</p>";
  }
};

// function to fetch and display data
fetchData(url);
