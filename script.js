/* Small enhancements for the static pages. No external scripts or trackers. */
'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

function setMenu(open) {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
}

menuButton?.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
navigation?.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

const teamPause = document.querySelector('#team-pause');
teamPause?.addEventListener('click', () => {
  const paused = teamPause.getAttribute('aria-pressed') !== 'true';
  teamPause.setAttribute('aria-pressed', String(paused));
  teamPause.textContent = paused ? 'Resume animation' : 'Pause animation';
  document.querySelector('.team').classList.toggle('is-paused', paused);
});

// GitHub Pages is static. Prepare a mailto draft; never claim an email was sent.
const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const name = `${data.get('firstName').trim()} ${data.get('lastName').trim()}`;
  const subject = 'ARALLITH website inquiry';
  const body = `Name: ${name}\nEmail: ${data.get('email').trim()}\n\n${data.get('message').trim()}`;
  const mailto = `mailto:enatmyrz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = 'Your email draft is ready. Send it from your email app. If no app opens, email enatmyrz@gmail.com directly. Your message has not been sent by this website.';
  window.location.href = mailto;
});
