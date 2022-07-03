'use strict';
const btnOpenForm = document.querySelector('.nav-donate');
const donationForm = document.querySelector('.section-donation-form');
const btncolseForm = document.querySelector('.close-form');
const overlay = document.querySelector('.overlay');

function openForm() {
  donationForm.style.display = 'block';
  overlay.style.display = 'block';
}

function closeForm() {
  donationForm.style.display = 'none';
  overlay.style.display = 'none';
}

///////////////////////////////////////////////////////////
// YEAR

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Mobile Navigation

const btnNavEl = document.querySelector('.menu-btn');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
btnOpenForm.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector('.bg-img');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);
