// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

// Initialize AOS
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Initialize particles.js
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#00ffd5' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#00ffd5',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      }
    },
    retina_detect: true
  });

  // Add scroll progress indicator
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: var(--primary);
      z-index: 1001;
      transition: width 0.2s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });

  // Form handling
  const form = document.getElementById('contact-form');
  const formStatus = document.querySelector('.form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.className = "form-status";
    formStatus.textContent = "Sending...";

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formStatus.textContent = "Thanks for your submission!";
        formStatus.className = "form-status success";
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      formStatus.textContent = "Oops! There was a problem submitting your form. Please try again.";
      formStatus.className = "form-status error";
      console.error('Error:', error);
    }
  });

  // Form input animations
  const inputs = document.querySelectorAll('.form-input, .form-textarea');

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentElement.classList.remove('focused');
      }
    });
  });

  // Update year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Animate skill progress bars
  const skillBars = document.querySelectorAll('.skill-progress');
  const animateSkillBars = () => {
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
  };

  // Intersection Observer for skill bars
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        skillObserver.unobserve(entry.target);
      }
    });
  });

  const skillsSection = document.querySelector('#skills');
  if (skillsSection) {
    skillObserver.observe(skillsSection);
  }

  // GitHub API Integration
  const fetchGitHubData = async () => {
    try {
      console.log('Fetching GitHub data for M3rcena...');
      const response = await fetch('https://api.github.com/users/M3rcena');
      const userData = await response.json();
      
      console.log('GitHub User Data:', userData);
      
      // Fetch pinned repositories from pinned.berrysauce.dev API
      const pinnedResponse = await fetch('https://pinned.berrysauce.dev/get/m3rcena');
      const pinnedRepos = await pinnedResponse.json();
      
      console.log('Pinned Repositories from API:', pinnedRepos);
      
      // Fetch ALL repositories to calculate total stars
      const allReposResponse = await fetch('https://api.github.com/users/M3rcena/repos?per_page=100');
      const allRepos = await allReposResponse.json();
      
      console.log('All Repositories for stats:', allRepos.length);
      
      // Use only pinned repositories for display (max 6)
      const reposData = pinnedRepos.slice(0, 6);
      
      console.log('Displaying Pinned Repositories:', reposData.map(repo => ({
        name: repo.name,
        language: repo.language,
        stars: repo.stars,
        forks: repo.forks
      })));
      
      // Update stats with real data (use all repos for stars calculation)
      updateGitHubStats(userData, reposData, allRepos);
      
      // Update repository cards with real data
      updateRepositoryCards(reposData);
      
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      // Fallback to static data if API fails
      animateNumbers();
    }
  };

  const updateGitHubStats = (userData, reposData, allRepos) => {
    const statCards = document.querySelectorAll('.stat-card');
    
    if (statCards.length >= 4) {
      // Update repositories count
      statCards[0].querySelector('.stat-number').setAttribute('data-target', userData.public_repos);
      statCards[0].querySelector('.stat-number').textContent = '0';
      
      // Update contributions (we'll use followers as a proxy)
      statCards[1].querySelector('.stat-number').setAttribute('data-target', userData.followers);
      statCards[1].querySelector('.stat-number').textContent = '0';
      
      // Count unique languages from ALL repositories
      const languages = new Set();
      allRepos.forEach(repo => {
        if (repo.language) {
          languages.add(repo.language);
        }
      });
      statCards[2].querySelector('.stat-number').setAttribute('data-target', languages.size);
      statCards[2].querySelector('.stat-number').textContent = '0';
      
      // Calculate total stars from ALL repositories
      const totalStars = allRepos.reduce((sum, repo) => {
        return sum + (repo.stargazers_count || 0);
      }, 0);
      statCards[3].querySelector('.stat-number').setAttribute('data-target', totalStars);
      statCards[3].querySelector('.stat-number').textContent = '0';
    }
    
    // Animate the updated stats
    animateNumbers();
  };

  const updateRepositoryCards = (reposData) => {
    const githubProjectsGrid = document.querySelector('.github-projects-grid');
    if (!githubProjectsGrid || reposData.length === 0) return;
    
    // Clear existing cards
    githubProjectsGrid.innerHTML = '';
    
    // Create new cards from API data
    reposData.slice(0, 6).forEach((repo, index) => {
      const card = createRepositoryCard(repo, index);
      githubProjectsGrid.appendChild(card);
    });
  };

  const createRepositoryCard = (repo, index) => {
    const card = document.createElement('div');
    card.className = 'github-project-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', `${index * 100}`);
    
    // Handle different data structures (pinned API vs GitHub API)
    const isPinnedRepo = repo.author && repo.languageColor; // Pinned API has these fields
    const updatedDate = isPinnedRepo ? 'Recently updated' : new Date(repo.updated_at).toLocaleDateString();
    const language = repo.language || 'Unknown';
    const stars = isPinnedRepo ? repo.stars : repo.stargazers_count;
    const forks = isPinnedRepo ? repo.forks : repo.forks_count;
    const description = repo.description || 'No description available';
    const githubUrl = isPinnedRepo ? `https://github.com/${repo.author}/${repo.name}` : repo.html_url;
    
    card.innerHTML = `
      <div class="project-header">
        <h3>${repo.name}</h3>
        <div class="project-stats">
          <span class="stars"><i class="fas fa-star"></i> ${stars}</span>
          <span class="forks"><i class="fas fa-code-branch"></i> ${forks}</span>
        </div>
      </div>
      <p class="project-description">${description}</p>
      <div class="project-tech">
        <span class="tech-badge" style="background-color: ${isPinnedRepo ? repo.languageColor + '20' : 'rgba(0, 255, 213, 0.1)'}; color: ${isPinnedRepo ? repo.languageColor : 'var(--primary)'};">${language}</span>
        ${repo.topics ? repo.topics.slice(0, 2).map(topic => `<span class="tech-badge">${topic}</span>`).join('') : ''}
      </div>
      <div class="project-footer">
        <span class="updated">${updatedDate}</span>
        <a href="${githubUrl}" target="_blank" class="view-btn">
          <i class="fab fa-github"></i> View
        </a>
      </div>
    `;
    
    return card;
  };

  // Animate GitHub stats
  const animateNumbers = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = Math.floor(current);
      }, 16);
    });
  };

  // Intersection Observer for GitHub stats
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fetchGitHubData();
        statsObserver.unobserve(entry.target);
      }
    });
  });

  const githubSection = document.querySelector('#github-projects');
  if (githubSection) {
    statsObserver.observe(githubSection);
  }

  // Parallax effect for floating cards
  const floatingCards = document.querySelectorAll('.floating-card');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    floatingCards.forEach(card => {
      const speed = card.getAttribute('data-speed');
      const yPos = -(scrolled * speed * 0.1);
      card.style.transform = `translateY(${yPos}px)`;
    });
  });

  // Typing animation for hero text
  const typingText = document.querySelector('.typing-text');
  if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 1000);
  }

  // Dynamic typing animation for main title
  const phrases = [
    "I build things for the web.",
    "I create digital experiences.",
    "I develop innovative solutions.",
    "I craft beautiful interfaces.",
    "I solve complex problems.",
    "I bring ideas to life."
  ];

  const typingElement = document.getElementById('typing-text');
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  const typeText = () => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
      // Deleting characters
      typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      typingSpeed = 50; // Faster when deleting
    } else {
      // Adding characters
      typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      typingSpeed = 100; // Normal speed when typing
    }

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      // Finished typing, wait before deleting
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
      // Finished deleting, move to next phrase
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before starting next phrase
    }

    setTimeout(typeText, typingSpeed);
  };

  // Start the typing animation after a delay
  setTimeout(typeText, 2000);

  // Smooth reveal animations
  const revealElements = document.querySelectorAll('.project-card, .skill-card, .github-project-card');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
  });

  // Add hover sound effect (optional)
  const addHoverEffect = (element) => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.05)';
    });
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
    });
  };

  // Apply hover effects to interactive elements
  document.querySelectorAll('.project-card, .skill-card, .contact-card, .github-project-card').forEach(addHoverEffect);

  // Scroll indicator click functionality
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });

    // Hide scroll indicator when scrolling past hero section
    window.addEventListener('scroll', () => {
      const heroSection = document.querySelector('.hero');
      const heroHeight = heroSection.offsetHeight;
      const scrollTop = window.pageYOffset;
      
      if (scrollTop > heroHeight * 0.5) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
      } else {
        scrollIndicator.style.opacity = '0.8';
        scrollIndicator.style.pointerEvents = 'auto';
      }
    });
  }

  // Dynamic background particles interaction
  const canvas = document.getElementById('particles-js');
  if (canvas) {
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update particle system with mouse position
      if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
        window.pJSDom[0].pJS.interactivity.mouse.pos_x = x;
        window.pJSDom[0].pJS.interactivity.mouse.pos_y = y;
      }
    });
  }

  // Add loading animation
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      document.body.style.opacity = '1';
      // Hide loading screen
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }
    }, 100);
  });

  // Theme Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply saved theme
  if (currentTheme === 'light') {
    document.documentElement.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.contains('light-theme');
    
    if (isLight) {
      document.documentElement.classList.remove('light-theme');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light-theme');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'light');
    }
  });

  // Mobile Menu Toggle - Removed for cleaner mobile experience
  // Only theme toggle and logo remain on mobile

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinksArray = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinksArray.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Add active class styles
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active {
      color: var(--primary);
      text-shadow: 0 0 8px var(--primary);
    }
  `;
  document.head.appendChild(style);
});
