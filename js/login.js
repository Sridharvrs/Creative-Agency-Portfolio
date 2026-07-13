const p=document.getElementById('password');
const ids=['r1','r2','r3','r4','r5'];
const checks=[
v=>v.length>=8,
v=>/[A-Z]/.test(v),
v=>/[a-z]/.test(v),
v=>/\d/.test(v),
v=>/[^A-Za-z0-9]/.test(v)
];
function update(){
checks.forEach((fn,i)=>{
const el=document.getElementById(ids[i]);
const ok=fn(p.value);
el.className=ok?'ok':'bad';
el.textContent=(ok?'✔ ':'✖ ')+[
'Minimum 8 characters',
'Uppercase letter',
'Lowercase letter',
'Number',
'Special character'][i];
});
}
p.addEventListener('input',update);
update();

document.getElementById('toggle').onclick=()=>{
const icon=document.querySelector('#toggle i');
if(p.type==='password'){p.type='text';icon.className='fa-solid fa-eye-slash';}
else{p.type='password';icon.className='fa-solid fa-eye';}
};

document.getElementById('loginForm').addEventListener('submit',e=>{
e.preventDefault();
const email=document.getElementById('email').value.trim();
const valid=checks.every(fn=>fn(p.value));
const msg=document.getElementById('msg');
if(!email){msg.style.color='#ff5b5b';msg.textContent='Enter email.';return;}
if(!valid){msg.style.color='#ff5b5b';msg.textContent='Password does not meet requirements.';return;}
const role=document.querySelector('input[name=role]:checked').value;
msg.style.color='#55d26a';
msg.textContent='Login successful...';
setTimeout(()=>{
location.href=role==='admin'?'admin-dashboard.html':'user-dashboard.html';
},700);
});
