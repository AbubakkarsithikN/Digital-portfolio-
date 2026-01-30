// Menu toggle
function toggleMenu() { document.getElementById('menu').classList.toggle('open'); }

// Theme switcher
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', ()=>document.body.classList.toggle('light'));

// EmailJS send
function sendEmail(){
  emailjs.sendForm('service_4gmgfdk','template_xnq9zgd','#contact-form').then(
    res=>alert("Message sent successfully!"),
    err=>alert("Failed to send. Try again.")
  );
}

// Reveal animations
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', ()=>{
  const windowHeight = window.innerHeight;
  revealElements.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < windowHeight - 80) el.classList.add('in');
  });
});

// Code Snippets
const codeSnippets = {
sticky:`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>sticky notes</title>
  <style> *{ box-sizing:border-box } body{ background: linear-gradient(135deg,#a8edea 0%,#fed6e3 100%) } .container{ display:flex; flex-wrap:wrap; gap:10px; justify-content:center; align-items:center } .head{ font-size:28px; color:#333; background:rgba(255,255,255,.5); padding:10px 20px; border-radius:10px; box-shadow:4px 4px 10px rgba(0,0,0,.3); text-align:center; margin:10px } .card{ background:yellow; width:160px; height:160px; padding:10px; font-size:14px; border-radius:12px; box-shadow:4px 4px 10px rgba(0,0,0,.2); backdrop-filter:blur(10px); transition:transform .2s } .card:hover{ transform:scale(1.05) } textarea{ max-width:140px; max-height:140px; min-width:140px; min-height:140px; width:100%; height:100%; border:none; background:transparent } </style>
</head>
<body>
  <h2 class="head">STICKY NOTES</h2>
  <div class="container">
    <div class="card"><textarea></textarea></div>
    <div class="card"><textarea></textarea></div>
    <div class="card"><textarea></textarea></div>
    <div class="card"><textarea></textarea></div>
  </div>
</body>
</html>`,
idcard:`<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <title>Abubakkar Sithik - College ID Card</title>
  <style>
    body {
      background: #f0f0f0;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 40px;
    }

    .id-card {
      width: 350px;
      height: 500px;
      background: #fff;
      border: 2px solid #003366;
      border-radius: 15px;
      margin: 20px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      position: relative;
      text-align: center;
    }

    .college-logo {
      width: 80px;
      margin-bottom: 10px;
    }

    .college-name {
      font-size: 18px;
      color: white;
      background-color: blue;
    }

    .tagline {
        color: red;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .photo {
      width: 100px;
      height: 120px;
      border: 2px solid #003366;
      margin: 10px auto;
      object-fit: cover;
    }

    .student-name {
      font-size: 20px;
      font-weight: bold;
      color: red;
      margin-top: 10px;
    }

    .info {
      margin-top: 10px;
      font-size: 14px;
      color: #333;
      text-align: left;
      padding-left: 20px;
      font-weight: bold;
    }

    .info span {
      font-weight: bold;
      color: #000;
    }

    .qr-code {
      width: 60px;
      margin: 15px auto;
    }

    .footer {
      position: absolute;
      bottom: 20px;
      width: 100%;
      font-size: 12px;
      color: #555;
      padding-top: 10px;
    }

    /* Back Side */
    .rules {
      text-align: left;
      font-size: 13px;
      color: #333;
      padding: 10px;
    }

    .rules h4 {
      margin-top: 0;
      color: #003366;
    }

    .barcode {
      margin-top: 20px;
      width: 100%;
    }

    .contact {
      font-size: 12px;
      color: #444;
      text-align: center;
      margin-top: 170px;
    }
  </style>
</head>
<body>
  <div class=\"id-card\">
    <img src=\"images/logo.png\" class=\"college-logo\" alt=\"Logo\">
    <div class=\"college-name\"><b>GOVERNMENT<br> ARTS & SCIENCE COLLEGE</b><br>Mettupalayam, Coimbatore-641 104</div>
    <div class=\"tagline\" align=\"center\"><i><ul>STUDENT ID CARD</ul></i></div>
    <img src=\"images/MP.JPEG\" class=\"photo\" alt=\"Student Photo\">
    <div class=\"student-name\">Abubakkar Sithik N</div>
    <div class=\"info\">
      <p align=\"center\">B.Sc. Computer Science</p>
      <p align=\"center\">2422K2064</p>
    </div>
    <div class=\"footer\"><p align=\"left\">2024-2027</p></div>
  </div>
  <div class=\"id-card\">
    <div class=\"rules\">
      <p><span><b>Date of Birth :</b></span> 06.07.2007</p>
      <p><span><b>Blood Group :</b></span> B+ve</p>
      <p><span><b>Address :</b></span> 147E2E,SIRUMUGAI ROAD,<br> SNAGAR NAGAR,<br> METTUPALAYAM - 641 301.</p>
      <p><span><b>Contact No :</b></span>9150531983</p>
      <img src=\"images/ba.png\" class=\"barcode\" alt=\"Barcode\">
    </div>
    <div class=\"college-name\" align=\"bottom\"><b>GOVERNMENT<br> ARTS & SCIENCE COLLEGE</b><br>Mettupalayam, Coimbatore-641 104</div>
  </div>
</body>
</html>`
};

// Open Code Preview
function openCode(key){
  if(codeSnippets[key]){
    const newWin = window.open("", "_blank");
    newWin.document.write(`
      <html>
        <head><title>${key} - Code</title>
        <style>
    *{

  box-sizing: border-box;
}

    body{
       background: linear-gradient(135deg,#a8edea 0%,#fed6e3 100%);

    }

    .container{
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      align-items: center;


    }

    .head{
      font-size: 28px;
      color:#333;
      background-color: rgba(255, 255, 255, 0.5);
      padding: 10px 20px;
      border-radius: 10px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
      text-align: center;
      margin: 10px;

    }
    
    .card{

      background-color: yellow;
  width: 160px;
  height: 160px;
  padding: 10px;
  font-size: 14px;
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease-in-out;

 
    }

    .card:hover{

      transform: scale(1.05);
    }

    textarea{
        max-width: 140px;
        max-height: 140px;
        min-width: 140px;
        min-height: 140px;
      width: 100%;
      height: 100%;
      border: none;
      background: transparent;
    }




</style>
        </head>
        <body>
          <button onclick="window.close()">Close</button>
          <h2>${key} Code</h2>
          <pre>${codeSnippets[key].replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>
        </body>
      </html>
    `);
    newWin.document.close();
  } else alert("Code snippet not found.");
}

// Open Output (live preview)
function openOutput(key){
  let content='';
  if(key==='sticky') content=`<h1>Sticky Notes App</h1><p>This is a demo of Sticky Notes.</p>`;
  if(key==='idcard') content=`<h1>ID Card Demo</h1><p>Two-sided student ID card preview.</p>`;
  const newWin=window.open("","_blank");
  newWin.document.write(`<html><head><title>${key} Output</title><style>body{font-family:sans-serif;padding:20px}</style></head><body>${content}<button onclick="window.close()">Close</button></body></html>`);
  newWin.document.close();
}

    const root = document.documentElement;
    const btn = document.getElementById('themeBtn');
    const stored = localStorage.getItem('theme');
    if (stored === 'light') root.classList.add('light');
    btn.addEventListener('click', () => {
      root.classList.toggle('light');
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    });

    // Open Output (live preview)
function openOutput(key){
  if(codeSnippets[key]){
    const newWin = window.open("", "_blank");
    newWin.document.write(codeSnippets[key]); // ✅ Write the actual code
    newWin.document.close();
  } else {
    alert("Output not found.");
  }
}
