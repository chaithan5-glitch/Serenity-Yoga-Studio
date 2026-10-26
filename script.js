/* =====================================================
   Serenity Yoga Studio - script.js
   1  Program data
   2  Mobile menu
   3  Header shadow + active nav link
   4  FAQ accordion
   5  Program details dialog
   6  "Enroll Now" preselects the form dropdown
   7  Contact form validation (frontend demo only)
   8  Image fallbacks
   9  Footer year
   ===================================================== */

(function () {
  "use strict";

  /* ---------- 1. PROGRAM DATA (illustrative content and prices) ---------- */
  var PROGRAMS = {
    asana: {
      name: "Asana",
      duration: "6 weeks",
      price: "₹499",
      desc: "Learn yoga postures, improve flexibility, develop balance, and build body awareness.",
      learn: [
        "Foundational standing, seated and balancing postures",
        "How to align your body and move safely",
        "Using props such as blocks, straps and blankets",
        "Building a short daily sequence you can repeat"
      ],
      note: "Listen to your body and skip any movement that causes pain."
    },
    pranayama: {
      name: "Pranayama",
      duration: "4 weeks",
      price: "₹399",
      desc: "Explore yogic breathing techniques that support relaxation and mindful breathing.",
      learn: [
        "Natural breath awareness and diaphragmatic breathing",
        "Gentle, beginner-level breathing techniques",
        "Pairing breath with simple movement",
        "Using breathing practice to unwind after a busy day"
      ],
      note: "Practise gently and stop if you feel dizzy. Speak to a doctor first if you have a breathing or heart condition."
    },
    kriya: {
      name: "Kriya",
      duration: "4 weeks",
      price: "₹599",
      desc: "Learn about traditional yogic cleansing practices with appropriate guidance and safety considerations.",
      learn: [
        "The purpose and background of traditional cleansing practices",
        "Which practices suit beginners and which need a teacher",
        "Preparation, hygiene and safety basics",
        "When to avoid a practice and when to ask for guidance"
      ],
      note: "Some cleansing practices should only be learned with a qualified teacher. This program is educational and is not medical advice."
    },
    meditation: {
      name: "Meditation",
      duration: "3 weeks",
      price: "₹299",
      desc: "Practice mindfulness, relaxation, and techniques for improving concentration.",
      learn: [
        "Simple seated meditation for beginners",
        "Mindfulness of breath, body and sounds",
        "Relaxation techniques for stress and sleep",
        "Ways to build a short, steady daily habit"
      ],
      note: "Short sessions of 5 to 10 minutes are a good place to start."
    },
    karma: {
      name: "Karma Yoga Philosophy",
      duration: "4 weeks",
      price: "₹349",
      desc: "Explore the principles of selfless action, service, and personal growth through yoga philosophy.",
      learn: [
        "The idea of selfless action in yoga philosophy",
        "How to bring care and attention into daily work",
        "Service, responsibility and letting go of outcomes",
        "Reflection prompts for personal growth"
      ],
      note: "A reading and reflection program with no physical postures required."
    },
    package: {
      name: "Complete Yoga Package",
      duration: "All five programs",
      price: "₹1,499",
      desc: "Every program together: Asana, Pranayama, Kriya, Meditation and Karma Yoga Philosophy.",
      learn: [
        "All content from the five programs",
        "A suggested learning order",
        "A saving of ₹646 compared with buying each separately"
      ],
      note: "Illustrative package price for this demo."
    }
  };

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- 2. MOBILE MENU ---------- */
  var menuToggle = $("#menuToggle");
  var navMenu = $("#navMenu");

  function setMenu(open) {
    navMenu.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  menuToggle.addEventListener("click", function () {
    setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  // Close when a link is chosen
  $$("a", navMenu).forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
  });

  // Close with Escape, and return focus to the button
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      setMenu(false);
    }
  });

  // Reset when the screen grows to desktop size
  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) setMenu(false);
  });

  /* ---------- 3. HEADER SHADOW + ACTIVE LINK ---------- */
  var header = $(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 10); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var navLinks = $$(".nav-link");
  var sections = ["home", "about", "programs", "pricing", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  }
  setActive("home");

  /* ---------- 4. FAQ ACCORDION ---------- */
  var accButtons = $$(".acc-button");

  function toggleFaq(button, open) {
    var panel = document.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
  }

  accButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var willOpen = button.getAttribute("aria-expanded") !== "true";
      // Keep one answer open at a time
      accButtons.forEach(function (other) { if (other !== button) toggleFaq(other, false); });
      toggleFaq(button, willOpen);
    });
  });

  // Arrow keys / Home / End move between questions
  $("#accordion").addEventListener("keydown", function (e) {
    var index = accButtons.indexOf(document.activeElement);
    if (index === -1) return;
    var next = null;
    if (e.key === "ArrowDown") next = accButtons[(index + 1) % accButtons.length];
    if (e.key === "ArrowUp") next = accButtons[(index - 1 + accButtons.length) % accButtons.length];
    if (e.key === "Home") next = accButtons[0];
    if (e.key === "End") next = accButtons[accButtons.length - 1];
    if (next) { e.preventDefault(); next.focus(); }
  });

  /* ---------- 5. PROGRAM DETAILS DIALOG ---------- */
  var dialog = $("#detailsDialog");
  var dialogEnroll = $("#dialogEnroll");
  var lastTrigger = null;

  function openDetails(key, trigger) {
    var p = PROGRAMS[key];
    if (!p) return;
    lastTrigger = trigger || null;

    $("#dialogTitle").textContent = p.name;
    $("#dialogMeta").textContent = p.duration + " | " + p.price + " (illustrative price)";
    $("#dialogDesc").textContent = p.desc;
    $("#dialogNote").textContent = p.note;

    var list = $("#dialogList");
    list.innerHTML = "";
    p.learn.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    dialogEnroll.setAttribute("data-preselect", key);

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", ""); // very old browsers
  }

  function closeDetails() {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    if (lastTrigger) lastTrigger.focus();
  }

  $$("[data-details]").forEach(function (btn) {
    btn.addEventListener("click", function () { openDetails(btn.getAttribute("data-details"), btn); });
  });
  $("#dialogClose").addEventListener("click", closeDetails);

  // Click on the dark backdrop closes the dialog
  dialog.addEventListener("click", function (e) {
    var box = dialog.getBoundingClientRect();
    var outside = e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom;
    if (outside) closeDetails();
  });

  /* ---------- 6. "ENROLL NOW" PRESELECTS THE FORM DROPDOWN ---------- */
  var programSelect = $("#program");

  $$("[data-preselect]").forEach(function (el) {
    el.addEventListener("click", function () {
      var value = el.getAttribute("data-preselect");
      if (value) {
        programSelect.value = value;
        clearError(programSelect);
      }
      // If the click came from inside the dialog, close it first
      if (dialog.hasAttribute("open")) {
        if (typeof dialog.close === "function") dialog.close(); else dialog.removeAttribute("open");
      }
    });
  });

  /* ---------- 7. FORM VALIDATION (frontend demonstration only) ---------- */
  var form = $("#inquiryForm");
  var statusBox = $("#formStatus");
  var fields = {
    name: $("#name"),
    email: $("#email"),
    phone: $("#phone"),
    program: $("#program"),
    message: $("#message")
  };

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var PHONE_RE = /^\+?[0-9]{10,13}$/;

  // Each validator returns an error message, or "" when the value is fine
  var validators = {
    name: function (v) {
      v = v.trim();
      if (!v) return "Enter your full name.";
      if (v.length < 2) return "Your name must be at least 2 characters.";
      return "";
    },
    email: function (v) {
      v = v.trim();
      if (!v) return "Enter your email address.";
      if (!EMAIL_RE.test(v)) return "Enter a valid email address, for example name@example.com.";
      return "";
    },
    phone: function (v) {
      v = v.trim();
      if (!v) return ""; // optional
      var digits = v.replace(/[\s-]/g, "");
      if (!PHONE_RE.test(digits)) return "Enter 10 to 13 digits, for example +91 98765 43210, or leave this blank.";
      return "";
    },
    program: function (v) {
      if (!v) return "Choose a yoga program or the complete package.";
      return "";
    },
    message: function (v) {
      v = v.trim();
      if (!v) return "Write a short message.";
      if (v.length < 10) return "Write at least 10 characters so we can understand your inquiry.";
      return "";
    }
  };

  function showError(input, message) {
    var wrap = input.closest(".field");
    var err = document.getElementById(input.id + "-error");
    err.textContent = message;
    wrap.classList.toggle("invalid", !!message);
    wrap.classList.toggle("valid", !message && input.value.trim() !== "");
    if (message) input.setAttribute("aria-invalid", "true");
    else input.removeAttribute("aria-invalid");
  }

  function clearError(input) { showError(input, ""); }

  function validateField(key) {
    var message = validators[key](fields[key].value);
    showError(fields[key], message);
    return !message;
  }

  // Validate as the user leaves a field, and re-check while fixing an error
  Object.keys(fields).forEach(function (key) {
    var input = fields[key];
    input.addEventListener("blur", function () { if (input.value !== "" || input.required) validateField(key); });
    input.addEventListener(key === "program" ? "change" : "input", function () {
      if (input.closest(".field").classList.contains("invalid")) validateField(key);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // never reload the page
    statusBox.className = "form-status";
    statusBox.textContent = "";

    var firstInvalid = null;
    Object.keys(fields).forEach(function (key) {
      if (!validateField(key) && !firstInvalid) firstInvalid = fields[key];
    });

    if (firstInvalid) {
      statusBox.className = "form-status fail";
      statusBox.textContent = "Your inquiry was not sent. Fix the highlighted fields and try again.";
      firstInvalid.focus();
      return;
    }

    // Frontend demonstration: no data is sent or stored anywhere.
    var chosen = PROGRAMS[fields.program.value];
    var firstName = fields.name.value.trim().split(/\s+/)[0];
    statusBox.className = "form-status success";
    statusBox.textContent =
      "Thank you, " + firstName + ". Your inquiry about " + chosen.name +
      " passed all checks. This is a demonstration form, so your details were not sent or stored.";
    statusBox.focus();

    form.reset();
    Object.keys(fields).forEach(function (key) {
      var wrap = fields[key].closest(".field");
      wrap.classList.remove("valid", "invalid");
      fields[key].removeAttribute("aria-invalid");
      document.getElementById(fields[key].id + "-error").textContent = "";
    });
  });

  /* ---------- 8. IMAGE FALLBACKS ---------- */
  var FALLBACK_SVG =
    '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">' +
    '<path d="M32 50c-8 0-15-5-17-12 7 0 12 2 17 7 5-5 10-7 17-7-2 7-9 12-17 12zm0-9c-5-5-7-13 0-29 7 16 5 24 0 29z" fill="currentColor"/></svg>';

  function swapForFallback(img) {
    if (img.dataset.failed) return;
    img.dataset.failed = "true";
    var box = document.createElement("div");
    box.className = "img-fallback";
    box.setAttribute("role", "img");
    box.setAttribute("aria-label", img.alt || "Yoga illustration");
    box.innerHTML = FALLBACK_SVG;
    img.replaceWith(box);
  }

  $$("img").forEach(function (img) {
    // If the photo cannot load, show a green lotus block instead of a broken icon
    img.addEventListener("error", function () { swapForFallback(img); });
  });

  /* ---------- 9. FOOTER YEAR ---------- */
  var year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
