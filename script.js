const toggle = document.getElementById('dark-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

// Helper: Update theme icons visibility
function updateThemeIcons(isDark) {
  if (sun && moon) {
    sun.style.opacity = isDark ? 0 : 1;
    sun.style.transform = isDark ? 'rotate(-90deg)' : 'rotate(0deg)';
    moon.style.opacity = isDark ? 1 : 0;
    moon.style.transform = isDark ? 'rotate(0deg)' : 'rotate(90deg)';
  }
}

// Initial theme setup
if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
  document.body.classList.add('dark');
  toggle.checked = true;
  updateThemeIcons(true);
} else {
  updateThemeIcons(false);
}

// Toggle dark/light mode
if (toggle) {
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
  });
}

// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Load theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }
});

// Toggle theme
const themeSwitch = document.querySelector("#theme-switch-checkbox");
if (themeSwitch) {
  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    const currentTheme = document.body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", currentTheme);
  });
}

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6vh2QCsxMHU9rQ99GxSEFDkT7cgnrduQ",
  authDomain: "student-sphere-bb396.firebaseapp.com",
  databaseURL: "https://student-sphere-bb396-default-rtdb.firebaseio.com",
  projectId: "student-sphere-bb396",
  storageBucket: "student-sphere-bb396.appspot.com",
  messagingSenderId: "1059223650747",
  appId: "1:1059223650747:web:36d989ca27354a7bc1449e",
  measurementId: "G-5Q5H5ZJF09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

// Handle authentication state
document.addEventListener("DOMContentLoaded", () => {
  const authButtons = document.getElementById("authButtons");
  const profileDropdown = document.getElementById("profileDropdown");

  // Simulate login state (replace this with actual login check)
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    authButtons.style.display = "none";
    profileDropdown.style.display = "block";
  } else {
    authButtons.style.display = "flex";
    profileDropdown.style.display = "none";
  }
});

// Logout function
function logoutUser() {
  // Simulate logout
  localStorage.setItem("isLoggedIn", "false"); // Update login state

  // Show toast notification
  const toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  toast.classList.add("show");

  // Redirect after a short delay
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
    window.location.href = 'login.html'; // Redirect to login page
  }, 20000); // 2-second delay
}

// Expose logoutUser to global scope
window.logoutUser = logoutUser;

// Attach logoutUser to a button
const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
  logoutButton.addEventListener("click", logoutUser);
}

