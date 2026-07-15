const navItems = document.querySelectorAll('.nav-item');
const tabs = document.querySelectorAll('.tab');
const crumb = document.getElementById('crumb');

navItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const t = item.dataset.tab;
    navItems.forEach(n => n.classList.remove('active'));
    tabs.forEach(x => x.classList.remove('active'));
    item.classList.add('active');
    document.getElementById('tab-' + t).classList.add('active');
    crumb.textContent = item.textContent.trim().replace(/\d+$/,'').trim();
    window.scrollTo({top:0,behavior:'smooth'});
  });
});

// range chips
document.querySelectorAll('.range-picker').forEach(rp => {
  rp.querySelectorAll('.chip').forEach(c => {
    c.addEventListener('click', () => {
      rp.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
    });
  });
});

// drag kanban (simple)
let dragged = null;
document.querySelectorAll('.task').forEach(t => {
  t.setAttribute('draggable', 'true');
  t.addEventListener('dragstart', () => { dragged = t; t.style.opacity = '.4'; });
  t.addEventListener('dragend', () => { t.style.opacity = '1'; dragged = null; });
});
document.querySelectorAll('.col').forEach(col => {
  col.addEventListener('dragover', e => e.preventDefault());
  col.addEventListener('drop', e => {
    e.preventDefault();
    if (dragged) col.appendChild(dragged);
  });
});


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

// ============================================================================

/*=================================
        MOBILE SIDEBAR
==================================*/

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("sidebarOverlay");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

    sidebar.classList.toggle("active");

    overlay.classList.toggle("show");

    document.body.classList.toggle("menu-open");

});

overlay.addEventListener("click",closeMenu);

document.querySelectorAll(".nav-item").forEach(item=>{

    item.addEventListener("click",closeMenu);

});

}

function closeMenu(){

    sidebar.classList.remove("active");

    overlay.classList.remove("show");

    document.body.classList.remove("menu-open");

}