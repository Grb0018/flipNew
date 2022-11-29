var pencil=false;
var xColor = "#222222";
eraseron=false;
highLightPen=false;
yDepth = 0.5;
document.getElementById('screenDiv').onmousedown=(e)=>{
   var div=document.createElement('div')
   div.style.position='absolute'
   div.style.height='0vw'
   div.style.width='0vw'
   div.style.left=e.clientX+'px'
   div.style.top=e.clientY+'px'
   div.style.zIndex='50'
   div.setAttribute('id','Screenshot')
   var startX=e.clientX
   var startY=e.clientY
   div.style.border='1px dotted grey'
   document.getElementById('screenDiv').append(div)


   document.getElementById('screenDiv').onmousemove=(e)=>{
         console.log('move')
    div.style.width= e.clientX-startX+'px'
    div.style.height=e.clientY-startY+'px'
      
   }


   document.getElementById('screenDiv').onmouseup=(e)=>{
      console.log('up')
    div.style.width= e.clientX-startX+'px'
    div.style.height=e.clientY-startY+'px'
    document.getElementById('screenDiv').onmousemove=(e)=>{

    }
    var vw = window.innerWidth/100
    if(parseInt($(div).css('height'))>(1.5*vw) || parseInt($(div).css('width'))>(1.5*vw)){
      $('#screenDiv').css('background-color','transparent')
      document.getElementById('screenDiv').querySelector('h3').style.display='none'
      div.style.border='none'
    html2canvas(document.querySelector('body')).then(canvas => {
      $('#screenDiv').css('background-color','#b1b1b164')
      document.getElementById('screenDiv').querySelector('h3').style.display='block'
    var img = document.createElement('img')
    img.src= canvas.toDataURL()
    img.onload=(e)=>{
    //  document.getElementById('screenDiv').append(e.target)
      var can = document.createElement('canvas')
      can.width=parseInt($(div).css('width'))
      can.height = parseInt($(div).css('height'))
      can.style.margin='0 auto'
      var ctx = can.getContext('2d')
      ctx.drawImage(e.target,startX,startY,parseInt($(div).css('width')),parseInt($(div).css('height')),0,0,parseInt($(div).css('width')),parseInt($(div).css('height')))

    /// overlay create canvas ////
    var can1 = document.createElement('canvas')
      can1.width=parseInt($(div).css('width'))
      can1.height = parseInt($(div).css('height'))
      can1.style.margin='0 auto'
      var ctx1 = can1.getContext('2d')
      can1.style.backgroundImage= 'url('+can.toDataURL()+')';
      ctx1.globalAlpha = 0;
      ctx1.fillStyle = "white";
      ctx1.fillRect(0, 0, parseInt($(div).css('width')), parseInt($(div).css('height')));
    
     //  context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
     var div1 = document.createElement('div')
     div1.innerHTML+=screenshot
     div1.setAttribute('id','ScreenShotDivMain')
     document.body.append(div1)
     div1.style.zIndex='102';



     /////// pencil click on  canvas ////////
      document.getElementById('ssPencil').onclick=(e)=>{pencil=false;if(pencil==false){

           pencil=true;
           document.querySelectorAll('canvas')[1].style.cursor='url("./img/ssmenu/pencil1.png"), auto';
var can1, ctx1, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,

dot_flag = false;
dot_flagH = false;

var can1 = document.querySelectorAll('canvas')[1]
        ctx1 = can1.getContext("2d");
        w = can1.width;
        h = can1.height;
    
        can1.onmousemove=(e)=>{
          if(pencil!==false){
            findxy('move', e)}
        }
        can1.onmousedown=(e)=>{
          if(pencil!==false){
            findxy('down', e)}
        }
        can1.onmouseup=(e)=>{
          if(pencil!==false){
            findxy('up', e)}
        }
        can1.onmouseout=(e)=>{
          if(pencil!==false){
            findxy('out', e)}
        }

 
      function draw() {
        ctx1.globalAlpha = 1;
        ctx1.beginPath();
        ctx1.moveTo(prevX, prevY);
        ctx1.lineTo(currX, currY);
        ctx1.strokeStyle = xColor;
        ctx1.lineWidth = yDepth;
        ctx1.stroke();
        ctx1.closePath();
    }
   
    function findxy(res, e) {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - can1.getBoundingClientRect().left;
            currY = e.clientY - can1.getBoundingClientRect().top;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx1.beginPath();
                ctx1.fillStyle = xColor;
                ctx1.fillRect(currX, currY, 2, 2);
                ctx1.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
          flag = false;
        }
        if (res == 'move') {
         if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - can1.getBoundingClientRect().left;
            currY = e.clientY - can1.getBoundingClientRect().top;
            draw();
        }
        }}
      }else{
         pencil=false;
         document.querySelectorAll('canvas')[1].style.cursor='default';
      }
   }

           ////////// eraser click ////////
           document.getElementById('ssEraser').onclick=(e)=>{
            if($(document.querySelectorAll('canvas')[1]).css('cursor') !== 'auto'){
              eraseron=false;
            }
            var can1 = document.querySelectorAll('canvas')[1]
            ctx1 = can1.getContext("2d");
            function erase(x,y){
              ctx1.clearRect(x, y,20,20);
           }
            document.querySelectorAll('canvas')[0].style.cursor="url('./img/ssmenu/eraser1.png'), auto"
            document.querySelectorAll('canvas')[1].style.cursor="url('./img/ssmenu/eraser1.png'), auto"
            document.getElementById('imgBox').style.cursor="url('./img/ssmenu/eraser1.png'), auto"
            console.log('eraser')
            if(eraseron!= true){
              eraseron=true;
              can1.onmouseout=()=>{return false}
              can1.onmouseup=()=>{return false}
              can1.onmousedown=()=>{return false}
              can1.onmousemove=()=>{return false}
  
              can1.onmousedown=(e)=>{
                if(eraseron!= false){
                console.log('down')
                can1.onmousemove=(e)=>{
                  erase(e.offsetX,e.offsetY);console.log('over')
                }
                can1.onmouseup=(e)=>{
                  can1.onmousemove=()=>{return false}
                  console.log('up')
                }
              }
              }
            }
            else{eraseron=false;pencil=false;document.getElementById('ssPencil').style.cursor="auto"; document.querySelectorAll('canvas')[0].style.cursor="auto";document.querySelectorAll('canvas')[1].style.cursor="auto"}
           }
  ////////////// erase click end ///////


   document.getElementById('ssMarker').onclick=(e)=>{
    console.log('ok')
    if($(document.querySelectorAll('canvas')[1]).css('cursor') !== 'auto'){
      highLightPen=false;
    }
var prevXH = 0,
currXH = 0,
prevYH = 0,
currYH = 0,
flagH = false;
    var can1 = document.querySelectorAll('canvas')[1]
        ctx1 = can1.getContext("2d");
        w = can1.width;
        h = can1.height;
    document.querySelectorAll('canvas')[0].style.cursor="url('./img/ssmenu/marker1.png'), auto"
    document.querySelectorAll('canvas')[1].style.cursor="url('./img/ssmenu/marker1.png'), auto"
    document.getElementById('imgBox').style.cursor="url('./img/ssmenu/marker1.png'), auto"
    console.log('eraser')
    if(highLightPen!= true){
      highLightPen=true;
      can1.onmouseout=()=>{return false}
      can1.onmouseup=()=>{return false}
      can1.onmousedown=()=>{return false}
      can1.onmousemove=()=>{return false}

      can1.onmousemove=(e)=>{
        if(highLightPen!==false){
          findxyH('move', e)}
      }
      can1.onmousedown=(e)=>{
        if(highLightPen!==false){
          findxyH('down', e)}
      }
      can1.onmouseup=(e)=>{
        if(highLightPen!==false){
          findxyH('up', e)}
      }
      can1.onmouseout=(e)=>{
        if(highLightPen!==false){
          findxyH('out', e)}
      }
      function drawH() {
        ctx1.globalAlpha = 0.1;
        ctx1.beginPath();
        ctx1.moveTo(prevXH, prevYH);
        ctx1.lineTo(currXH+15, currYH+15);
        ctx1.strokeStyle = '#ffeb3b96';
        ctx1.lineWidth = 15;
        ctx.lineCap = 'round';
        ctx1.stroke();
        ctx1.closePath();
    }

      function findxyH(res, e) {
        if (res == 'down') {
            prevXH = currXH;
            prevYH = currYH;
            currXH = e.clientX - can1.getBoundingClientRect().left;
            currYH = e.clientY - can1.getBoundingClientRect().top;
    
            flagH = true;
            dot_flagH = true;
            if (dot_flagH) {
                ctx1.beginPath();
                ctx1.fillStyle = '#ffeb3b96';
                ctx1.fillRect(currXH, currYH, 2, 2);
                ctx1.closePath();
                dot_flagH = false;
            }
        }
        if (res == 'up' || res == "out") {
          flagH = false;
        }
        if (res == 'move') {
         if (flagH) {
            prevXH = currXH;
            prevYH = currYH;
            currXH = e.clientX - can1.getBoundingClientRect().left;
            currYH = e.clientY - can1.getBoundingClientRect().top;
            drawH();
        }
        }}
    }
    else{highLightPen=false;pencil=false;eraseron=false;document.getElementById('ssPencil').style.cursor="auto"; document.querySelectorAll('canvas')[0].style.cursor="auto";document.querySelectorAll('canvas')[1].style.cursor="auto"}
  }

   ////// eraser click /////////////


     document.getElementById('ssDownload').onclick=()=>{
     var canvas = document.getElementById('imgBox').querySelector('canvas');
     var canvas2 = document.querySelectorAll('canvas')[1];
     ctx = canvas.getContext('2d')
     var img= document.createElement('img')
     img.src= canvas2.toDataURL()
     img.crossOrigin = "Anonymous";
     img.onload=()=>{
      ctx.globalCompositeOperation="source-over";
      ctx.drawImage(img,0,0);
     var link = canvas.toDataURL()
     var a = document.createElement('a')
     a.setAttribute('download','BitBlits Digital Workstation')
     a.href=link;
     a.click()
     }
   }
     setTimeout(()=>{
      $('#screenDiv').fadeOut(0)
      document.getElementById('screenDiv').innerHTML='<h3 style="padding:2vw;color:rgb(255, 255, 255);text-align: center;">Lets Take Screenshot</h3>'
     },0)
     document.getElementById('imgBox').append(can)
     can.style.display='none'
     document.getElementById('imgBox').append(can1)
     div.remove()
     document.getElementById('ssClose').onclick=()=>{
      $('#ScreenShotDivMain').fadeOut(200)
      setTimeout(()=>{$('#ScreenShotDivMain').remove()},250)
  }
      }
    })
   }else{
      div.remove()
   }
   }
   }

 

