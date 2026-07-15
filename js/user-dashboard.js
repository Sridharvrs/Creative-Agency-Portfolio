// Tab switching
const navItems = document.querySelectorAll('.nav-item');
const tabs = document.querySelectorAll('.tab');
const title = document.getElementById('tab-title');

navItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const target = item.dataset.tab;
    navItems.forEach(n => n.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));
    item.classList.add('active');
    document.getElementById('tab-' + target).classList.add('active');
    title.textContent = item.textContent.trim().replace(/\d+$/,'').trim();
    window.scrollTo({top:0,behavior:'smooth'});
  });
});

// Chat item switching
document.querySelectorAll('.chat-item').forEach(c => {
  c.addEventListener('click', () => {
    document.querySelectorAll('.chat-item').forEach(x => x.classList.remove('active'));
    c.classList.add('active');
  });
});

// Composer
const composer = document.querySelector('.composer');
if (composer) {
  const input = composer.querySelector('input');
  const btn = composer.querySelector('button');
  const send = () => {
    const v = input.value.trim();
    if (!v) return;
    const msgs = document.querySelector('.messages');
    const m = document.createElement('div');
    m.className = 'msg me';
    m.textContent = v;
    msgs.appendChild(m);
    input.value = '';
    msgs.scrollTop = msgs.scrollHeight;
  };
  btn.addEventListener('click', send);
  input.addEventListener('keydown', e => e.key === 'Enter' && send());
}


/*=================================
            LOGOUT
==================================*/

document
.getElementById("logoutBtn")
.addEventListener("click",()=>{

    const confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if(!confirmLogout) return;

    // Clear current session
    sessionStorage.removeItem("currentUser");

    // Optional: clear remembered email
    // localStorage.removeItem("rememberEmail");

    // Redirect to login page
    window.location.href = "login.html";

});


// ==========================================================

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("sidebarOverlay");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("active");

    overlay.classList.toggle("show");

    document.body.classList.toggle("menu-open");

});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-item").forEach(item => {

    item.addEventListener("click", closeMenu);

});

function closeMenu(){

    sidebar.classList.remove("active");

    overlay.classList.remove("show");

    document.body.classList.remove("menu-open");

}