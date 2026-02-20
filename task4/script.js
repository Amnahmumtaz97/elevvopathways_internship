const blogPosts = [
  // Tech (10 posts)
  {
    title: "The Rise of Quantum Computing",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    description: "How quantum computers are changing the future of technology.",
    date: "Feb 19, 2026",
    category: "Tech"
  },
  {
    title: "AI Tools for Everyday Life",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    description: "Discover the best AI-powered apps to boost your productivity.",
    date: "Feb 17, 2026",
    category: "Tech"
  },
  {
    title: "10 Must-Read Tech Books in 2026",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    description: "Expand your knowledge with these top tech books of the year.",
    date: "Feb 3, 2026",
    category: "Tech"
  },
  {
    title: "The Future of Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "What to expect from AI in the next decade.",
    date: "Jan 20, 2026",
    category: "Tech"
  },
  {
    title: "How Blockchain is Changing Finance",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    description: "A look at blockchain's impact on the financial world.",
    date: "Jan 10, 2026",
    category: "Tech"
  },
  {
    title: "Best Coding Practices for 2026",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    description: "Tips to write clean and efficient code this year.",
    date: "Jan 5, 2026",
    category: "Tech"
  },
  {
    title: "Women in Tech: Breaking Barriers",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    description: "Stories of women making a difference in technology.",
    date: "Jan 2, 2026",
    category: "Tech"
  },
  {
    title: "How to Start a Tech Blog",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "A step-by-step guide to sharing your tech knowledge online.",
    date: "Dec 28, 2025",
    category: "Tech"
  },
  {
    title: "Cloud Computing Trends in 2026",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    description: "What's new and what's next in cloud technology.",
    date: "Dec 20, 2025",
    category: "Tech"
  },
  {
    title: "The Power of Open Source",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    description: "How open source is driving innovation worldwide.",
    date: "Dec 10, 2025",
    category: "Tech"
  },

  // Travel (10 posts)
  {
    title: "Solo Backpacking Across Europe",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "A guide to safe and fun solo travel adventures in Europe.",
    date: "Feb 16, 2026",
    category: "Travel"
  },
  {
    title: "Hidden Gems: South America",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Explore the most underrated destinations in South America.",
    date: "Feb 14, 2026",
    category: "Travel"
  },
  {
    title: "Top Rated Hotels in NYC",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "A curated list of the best hotels to stay at in New York City.",
    date: "Feb 10, 2026",
    category: "Travel"
  },
  {
    title: "Winter Travel Essentials",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "Everything you need to pack for your next winter adventure.",
    date: "Feb 7, 2026",
    category: "Travel"
  },
  {
    title: "How to Stay Productive While Traveling",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    description: "Tips and tricks for getting work done on the road.",
    date: "Jan 29, 2026",
    category: "Travel"
  },
  {
    title: "Street Food Adventures in Asia",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
    description: "A journey through the best street food markets in Asia.",
    date: "Feb 1, 2026",
    category: "Travel"
  },
  {
    title: "Traveling on a Budget: Tips & Tricks",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "How to see the world without breaking the bank.",
    date: "Jan 15, 2026",
    category: "Travel"
  },
  {
    title: "Best Beaches to Visit in 2026",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Our picks for the most beautiful beaches this year.",
    date: "Jan 8, 2026",
    category: "Travel"
  },
  {
    title: "Packing Light: Essentials Only",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "Master the art of minimalist packing for any trip.",
    date: "Jan 3, 2026",
    category: "Travel"
  },
  {
    title: "Cultural Festivals Around the World",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
    description: "Experience the most vibrant festivals globally.",
    date: "Dec 25, 2025",
    category: "Travel"
  },

  // Food (10 posts)
  {
    title: "Top 5 Recipes of This Month",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "Discover the most popular recipes that everyone is talking about this month!",
    date: "Feb 18, 2026",
    category: "Food"
  },
  {
    title: "Easy 15-Minute Dinners",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "Delicious meals you can make in just 15 minutes!",
    date: "Feb 13, 2026",
    category: "Food"
  },
  {
    title: "Coffee Culture Around the World",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "How different countries enjoy their coffee.",
    date: "Feb 12, 2026",
    category: "Food"
  },
  {
    title: "Best Vegan Restaurants",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "Our picks for the best vegan spots in your city.",
    date: "Feb 5, 2026",
    category: "Food"
  },
  {
    title: "Street Food Adventures in Asia",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
    description: "A journey through the best street food markets in Asia.",
    date: "Feb 1, 2026",
    category: "Food"
  },
  {
    title: "Healthy Breakfasts for Busy Mornings",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "Quick and nutritious breakfast ideas for people on the go.",
    date: "Jan 18, 2026",
    category: "Food"
  },
  {
    title: "How to Bake the Perfect Bread",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "Step-by-step guide to baking delicious bread at home.",
    date: "Jan 12, 2026",
    category: "Food"
  },
  {
    title: "Gourmet Desserts Made Easy",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "Impress your guests with these simple gourmet desserts.",
    date: "Jan 7, 2026",
    category: "Food"
  },
  {
    title: "Vegetarian Meals for Meat Lovers",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "Hearty vegetarian dishes that even meat lovers will enjoy.",
    date: "Jan 1, 2026",
    category: "Food"
  },
  {
    title: "World's Best Pizza Toppings",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "A global tour of the most creative pizza toppings.",
    date: "Dec 22, 2025",
    category: "Food"
  },

  // Lifestyle (10 posts)
  {
    title: "How to Build a Garden in Your Apartment",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "No backyard? No problem! Tips for creating a green oasis indoors.",
    date: "Feb 15, 2026",
    category: "Lifestyle"
  },
  {
    title: "Girl Fashion Lifestyle",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    description: "Explore the latest trends in girl fashion and how to style them.",
    date: "Feb 9, 2026",
    category: "Lifestyle"
  },
  {
    title: "Minimalist Home Decor Ideas",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    description: "Simple and stylish ways to refresh your living space.",
    date: "Jan 25, 2026",
    category: "Lifestyle"
  },
  {
    title: "Morning Routines of Successful People",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    description: "What do top performers do every morning?",
    date: "Feb 11, 2026",
    category: "Lifestyle"
  },
  {
    title: "How to Start Journaling",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    description: "A beginner's guide to building a journaling habit.",
    date: "Feb 8, 2026",
    category: "Lifestyle"
  },
  {
    title: "Work-Life Balance in 2026",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    description: "Strategies for maintaining a healthy work-life balance.",
    date: "Jan 22, 2026",
    category: "Lifestyle"
  },
  {
    title: "Sustainable Living: Getting Started",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    description: "Easy ways to make your lifestyle more eco-friendly.",
    date: "Jan 16, 2026",
    category: "Lifestyle"
  },
  {
    title: "The Art of Mindfulness",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    description: "How to practice mindfulness in daily life.",
    date: "Jan 11, 2026",
    category: "Lifestyle"
  },
  {
    title: "Home Office Setup Inspiration",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    description: "Create a productive and beautiful workspace at home.",
    date: "Jan 4, 2026",
    category: "Lifestyle"
  },
  {
    title: "Fitness Trends to Try This Year",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    description: "The latest fitness trends and how to get started.",
    date: "Dec 30, 2025",
    category: "Lifestyle"
  },
  {
    title: "Top 5 Recipes of This Month",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "Discover the most popular recipes that everyone is talking about this month!",
    date: "Feb 18, 2026",
    category: "Food"
  },
  {
    title: "How to Build a Garden in Your Apartment",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "No backyard? No problem! Tips for creating a green oasis indoors.",
    date: "Feb 15, 2026",
    category: "Lifestyle"
  },
  {
    title: "Top Rated Hotels in NYC",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "A curated list of the best hotels to stay at in New York City.",
    date: "Feb 10, 2026",
    category: "Travel"
  },
  {
    title: "Girl Fashion Lifestyle",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    description: "Explore the latest trends in girl fashion and how to style them.",
    date: "Feb 9, 2026",
    category: "Lifestyle"
  },
  {
    title: "Winter Travel Essentials",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "Everything you need to pack for your next winter adventure.",
    date: "Feb 7, 2026",
    category: "Travel"
  },
  {
    title: "Best Vegan Restaurants",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "Our picks for the best vegan spots in your city.",
    date: "Feb 5, 2026",
    category: "Food"
  },
  {
    title: "10 Must-Read Tech Books in 2026",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    description: "Expand your knowledge with these top tech books of the year.",
    date: "Feb 3, 2026",
    category: "Tech"
  },
  {
    title: "Street Food Adventures in Asia",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
    description: "A journey through the best street food markets in Asia.",
    date: "Feb 1, 2026",
    category: "Food"
  },
  {
    title: "How to Stay Productive While Traveling",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    description: "Tips and tricks for getting work done on the road.",
    date: "Jan 29, 2026",
    category: "Travel"
  },
  {
    title: "Minimalist Home Decor Ideas",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    description: "Simple and stylish ways to refresh your living space.",
    date: "Jan 25, 2026",
    category: "Lifestyle"
  },
  {
    title: "The Future of Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "What to expect from AI in the next decade.",
    date: "Jan 20, 2026",
    category: "Tech"
  },
  {
    title: "Healthy Breakfasts for Busy Mornings",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "Quick and nutritious breakfast ideas for people on the go.",
    date: "Jan 18, 2026",
    category: "Food"
  }
];

const POSTS_PER_PAGE = 4;
let currentPage = 1;
let currentCategory = 'all';
let currentSearch = '';

function renderPosts() {
  const postsContainer = document.getElementById('blog-posts');
  let filtered = blogPosts.filter(post =>
    (currentCategory === 'all' || post.category === currentCategory) &&
    post.title.toLowerCase().includes(currentSearch)
  );
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  if (currentPage > totalPages) currentPage = 1;
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const postsToShow = filtered.slice(start, end);
  postsContainer.innerHTML = postsToShow.map(post => `
    <div class="blog-card">
      <img src="${post.image}" alt="${post.title}" />
      <div class="blog-card-content">
        <div class="blog-card-title">${post.title}</div>
        <div class="blog-card-desc">${post.description}</div>
        <div class="blog-card-meta">
          <span>${post.category}</span>
          <span>${post.date}</span>
        </div>
      </div>
    </div>
  `).join('') || '<div style="grid-column:1/-1;text-align:center;color:#b8860b;">No posts found.</div>';
  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pag = document.getElementById('pagination');
  if (totalPages <= 1) { pag.innerHTML = ''; return; }
  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }
  pag.innerHTML = html;
}

window.goToPage = function(page) {
  currentPage = page;
  renderPosts();
};


// Sidebar toggle logic
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

// Responsive: close sidebar on nav click (mobile)
document.querySelectorAll('.sidebar-nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 800) sidebar.classList.add('collapsed');
  });
});

document.getElementById('category-filter').addEventListener('change', e => {
  currentCategory = e.target.value;
  currentPage = 1;
  renderPosts();
});
document.getElementById('search-input').addEventListener('input', e => {
  currentSearch = e.target.value.trim().toLowerCase();
  currentPage = 1;
  renderPosts();
});

renderPosts();
