// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Typing effect
const text = "Software Engineer";
let j = 0;

function type() {
  if (j <= text.length) {
    document.getElementById("typing").innerText = text.substring(0, j++);
    setTimeout(type, 100); // typing speed
  }
}


// Modal open
function openModal(project) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-content');

  if (project === 'erp') {
    content.innerHTML = `
      <h2>ERP System</h2>
      <p><strong>Technologies:</strong> Next.js (frontend), Node.js (backend), MySQL, Docker, Jira</p>
      <ul>
        <li>Built dynamic, scalable, and interactive web applications using Next.js, Node.js, and MySQL.</li>
        <li>Implemented secure CRUD operations for managing ERP functionalities, ensuring seamless frontend-backend connectivity.</li>
        <li>Designed normalized MySQL tables for CRM, Inventory, Expenses, Quotation, and Billing, ensuring optimized queries.</li>
        <li>Managed code efficiently using Git and GitHub.</li>
        <li>Configured and deployed ERP using Docker, ensuring consistent environments on development, testing, and production (including Raspberry Pi server).</li>
        <li>Led sprint planning as Scrum Master, managed user stories on Jira, and facilitated team collaboration.</li>
      </ul>
    `;
  }

  if (project === 'property') {
    content.innerHTML = `
      <h2>Property Assessment Tool</h2>
      <p><strong>Technologies:</strong> Java, React, CSS, PostgreSQL, Leaflet (Mapping library)</p>
      <ul>
        <li>Implemented interactive maps using Leaflet for property search by location, radius, or boundary.</li>
        <li>Integrated public records, MLS listings, and other sources for detailed property info (ownership, zoning, sales history).</li>
        <li>Developed algorithms for property valuation considering location, market trends, and property characteristics.</li>
        <li>Built React-based UI with responsive design, and Java backend APIs connecting to PostgreSQL database.</li>
        <li>Streamlined property valuation, improved risk management, and enhanced investment decision-making for financial firms.</li>
      </ul>    
    `;
  }

  if (project === 'guardian') {
    content.innerHTML = `
      <h2>Guardian – A Caring Companion for Dyslexia</h2>
      <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, PHP, MySQL (Database)</p>
      <p></p>
      <ul>
        <li>Many dyslexic children struggle with reading and comprehension, affecting academic performance and self-confidence. They require a tailored learning experience to enhance skills and overcome challenges.</li>
        <li>Guardian is an innovative website that transforms the reading experience for dyslexic children</li>
        <li>Engaging storytelling modules.</li>
        <li>Interactive quizzes that analyze reading levels (low, average, high).</li>
        <li>Personalized learning paths based on performance and comprehension.</li>
        <li>Analytics for parents to monitor progress and improvement.</li>
      </ul>
    `;
  }


  if(project === 'empowher'){
    content.innerHTML = `
      <h2>empowHER – Woman's Companion & Safety App</h2>
      <p><strong>Technologies Used:</strong> Android Studio, Java, XML, Firebase, Google Maps API, Geofencing API, Speech Recognition API</p>
      <ul>
        <li>Provide real-time safety assistance for women detects distress through vocal cues for automated SOS actions.</li>
        <li>Shares live location with emergency contacts and authorities in real-time.</li>
        <li>Maps nearby safe zones using Google Maps and Geofencing API.</li>
        <li>Hands-free operation during emergencies.</li>
        <li>Manage emergency contacts and personal details.</li>
      </ul>
    `;
  }
  

  if(project === 'diet'){
    content.innerHTML = `
      <h2>Diet & Custom Food Recommendation System</h2>

      <p><strong>Technologies Used:</strong> Python, FastAPI, Streamlit, Scikit-learn, Docker</p>
      <p><strong>Implementation:</strong> Used a Nearest Neighbor model for content-based recommendations, integrating backend APIs with a user-friendly frontend.</p>
      <ul>
        <li><strong>Calorie & BMI Calculator:</strong> Calculates daily calorie requirements based on user data.</li>
        <li><strong>Personalized Meal Plans:</strong> Generates diet plans based on goals (weight loss, maintenance, etc.).</li>
        <li><strong>Recipe Recommendations:</strong> Suggests recipes with detailed nutritional values.</li>
        <li><strong>Allergy & Ingredient Filtering:</strong> Recommends food based on allergies and available ingredients.</li>
        <li><strong>Interactive UI:</strong> Built using Streamlit for real-time user interaction.</li>
      </ul>
    `;
  }

  if(project === 'bookstore'){
    content.innerHTML = `
      <h2>Online Book Store</h2>
      <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, PHP, MySQL (XAMPP)</p>

      <ul>
        <li>Build a user-friendly platform where users can easily explore books, authors, genres, and ratings in one centralized system.</li>
        <li>Browse books by genre, author, and categories.</li>
        <li>View book details including author, ratings, publication date, and genre.</li>
        <li>Easily search for specific books and authors.</li>
        <li>Admin can manage and update book records efficiently.</li>
        <li>Simple and intuitive design for smooth navigation.</li>
      </ul>
    `;
  }


  if(project === 'car'){
    content.innerHTML = `
      <h2>Car Showroom Management System</h2>
      <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, PHP, MySQL (XAMPP)</p>

      <ul>
        <li>Built a web-based showroom management system that automates key operations such as vehicle inventory tracking, customer handling, and booking management.</li>
        <li><strong>Car Inventory Management:</strong> Store and manage detailed information about available vehicles.</li>
        <li><strong>Booking System:</strong> Allows customers to book cars بسهولة and efficiently.</li>
        <li><strong>Customer Management:</strong> Maintain customer records and interaction history.</li>
        <li><strong>Admin Dashboard:</strong> Admin can manage bookings, payments, and showroom data.</li>
        <li><strong>Secure Data Handling:</strong> Organized storage of car and customer data for easy access.</li>
      </ul>
    `;
  }


  modal.style.display = 'flex';
}

// ✅ Run everything after page loads
window.onload = function () {

  // Start typing animation
  type();

  // Close modal when clicking outside
  const modal = document.getElementById('modal');
  modal.onclick = function () {
    modal.style.display = 'none';
  };

};


const cards = document.querySelectorAll(".animate-card");

function showCards() {
  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200); // delay for each card 🔥
    }
  });
}

window.addEventListener("scroll", showCards);
window.addEventListener("load", showCards);


function closeModal() {
  document.getElementById('modal').style.display = 'none';
}


const skillSections = document.querySelectorAll(".skill-category");

function showSkills() {
  skillSections.forEach((sec, index) => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      setTimeout(() => {
        sec.classList.add("show");
      }, index * 150);
    }
  });
}

window.addEventListener("scroll", showSkills);
window.addEventListener("load", showSkills);