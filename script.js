

function display(){
let html=document.getElementById('html').value;
let css=document.getElementById('css').value;
let js=document.getElementById('js').value;
let output=document.getElementById('output')

 output.srcdoc=`
 <html>
 <head>
 <style>${css}</style>
 </head>
 <body>
 ${html}
 <script>${js}<\/script>
 </body>
 </html>`
}
document.getElementById('run').addEventListener("click", display);
function downloadCode() {
  let html = document.getElementById('html').value;
  let css = document.getElementById('css').value;
  let js = document.getElementById('js').value;

  let completeCode = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  let blob = new Blob([completeCode], { type: 'text/html' });
  let url = URL.createObjectURL(blob);
  console.log(url)

  let link = document.createElement('a');
  link.href = url;
  let filename=prompt("enter file name:");
  link.download = `${filename}.html`;
  link.click();

  URL.revokeObjectURL(url); // Clean up
}
document.getElementById('download').addEventListener("click", downloadCode);
let editer=[document.getElementById('html'),
  document.getElementById('css'),
  document.getElementById('js')]
let mode=document.getElementById('mode');
mode.addEventListener("click",()=>{
  editer.forEach(area=>{
    area.classList.toggle('dark-mode');
    console.log("mode")
  })
}
)
 

