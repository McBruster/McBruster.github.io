// // Load a template and add it to the document
// async function loadTemplate(path) {
//   const res = await fetch(path);
//   if (!res.ok) throw new Error(`Failed to load template: ${path}`);
//   const html = await res.text();
//   const template = document.createElement('template');
//   template.innerHTML = html;
//   document.body.appendChild(template);
// }

// // Load the nav template from /components/nav.html
// await loadTemplate('/components/nav.html');

// // Define the custom element <site-nav>
// class SiteNav extends HTMLElement {
//   connectedCallback() {
//     const template = document.getElementById('site-nav');
//     const clone = template.content.cloneNode(true);
//     this.appendChild(clone);
//   }
// }

// customElements.define('site-nav', SiteNav);

// (async () => {
//   // Load template
//   const res = await fetch('/components/nav.html');
//   if (!res.ok) throw new Error(`Failed to load template: /components/nav.html`);
//   const html = await res.text();
//   const template = document.createElement('template');
//   template.innerHTML = html;
//   document.body.appendChild(template);

//   // Define the custom element
//   class SiteNav extends HTMLElement {
//     connectedCallback() {
//       const template = document.getElementById('site-nav');
//       const clone = template.content.cloneNode(true);
//       this.appendChild(clone);
//     }
//   }

//   customElements.define('site-nav', SiteNav);
// })();

// (async () => {
//   // Load template
//   const res = await fetch('/components/nav.html');
//   if (!res.ok) throw new Error(`Failed to load template: /components/nav.html`);
//   const html = await res.text();
//   const template = document.createElement('template');
//   template.innerHTML = html;
//   document.body.appendChild(template);

//   // Define the custom element
//   class SiteNav extends HTMLElement {
//     connectedCallback() {
//       // Wait for the template to exist in the DOM
//       const template = document.getElementById('site-nav');
//       if (!template) {
//         console.error('site-nav template not found!');
//         return;
//       }
//       const clone = template.content.cloneNode(true);
//       this.appendChild(clone);
//     }
//   }

//   customElements.define('site-nav', SiteNav);
// })();

// (async () => {
//   // Load template
//   const res = await fetch('/components/nav.html');
//   if (!res.ok) throw new Error('Failed to load template: /components/nav.html');
//   const html = await res.text();

//   // Append template to body
//   const template = document.createElement('template');
//   template.innerHTML = html;
//   document.body.appendChild(template);

//   // Define the custom element AFTER template is appended
//   class SiteNav extends HTMLElement {
//     connectedCallback() {
//       const template = document.getElementById('site-nav');
//       if (!template) {
//         console.error('site-nav template not found!');
//         return;
//       }
//       this.appendChild(template.content.cloneNode(true));
//     }
//   }

//   customElements.define('site-nav', SiteNav);
// })();


(async () => {
  // 1️⃣ Load template
  const res = await fetch('/components/nav.html');
  if (!res.ok) throw new Error('Failed to load template: /components/nav.html');
  const html = await res.text();

  // 2️⃣ Append template to body
  const template = document.createElement('template');
  template.innerHTML = html;
  document.body.appendChild(template);

  // 3️⃣ Create <site-nav> elements AFTER template exists
  document.querySelectorAll('site-nav').forEach(el => {
    const navTemplate = document.getElementById('site-nav');
    el.appendChild(navTemplate.content.cloneNode(true));
  });
})();
