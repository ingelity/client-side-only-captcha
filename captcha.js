export function generateCaptcha(parent, code, width = 200, height = 100, font = '30px Arial') {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.fillText(code, canvas.width/2, canvas.height/2);

  const dataURL = canvas.toDataURL('image/png');  
  const base64Image = new Image(width, height);
  base64Image.src= dataURL;
  parent.innerHTML = '';
  parent.appendChild(base64Image);
}
