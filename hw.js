const LogIn= `<div style="
position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 27vw;
    justify-content: space-around;
    top: 8vw;
    left: 38vw;
    background: aliceblue;
    padding: 2vw;
    filter: drop-shadow(2px 2px 20px #295c89);
"><p style="
width: 1vw;
margin: 0;
text-align: center;
position: absolute;
left: 2vw;
top: 2vw;
color: #5e5e5e;
border: 1px solid #e1e1e1;
padding: 0 0.5vw;
user-select: none;
" id='logClose'>X</p>
       <h2>Log In</h2>
       <p style="
       font-size: 1vw;
">Please Enter Your Student Id &amp; Password</p>
       <input id='email' type="text" placeholder="Enter Your Id" style="
border: 0;
padding: 0.6vw;
color: #04033a;
">
       <input id='pass' type="password" placeholder="Enter Your Password" style="
border: 0;
padding: 0.6vw;
">
       <button style="
       width: 8vw;
       border: 1px solid #f0f0f0;
       font-size: 1vw;
       height: 3vw;
       background: #1d9797;
       color: aliceblue;
" id='auth'>Submit</button>
   </div>`

const Note = `<div id="notePad" style="
position: absolute;
z-index: 100;
left: 36vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 1.5vw;
height: 30vw;
width: 25vw;
background: beige;
top: 11vw;
">
        <p style="
margin: 0;
font-size: 0.8vw;
background: #fdc477;
padding: 0vw 0.6vw;
left: 2vw;
position: absolute;
border-radius: 0.3vw;
user-select: none;
" id="closeNote">X</p><h2>Set Note On A Page</h2><span style="
margin-bottom: 2.5vw;
width: 98%;
display: flex;
justify-content: space-evenly;
"><text style="
font-size: 1.12vw;
">Give Page No</text><input type="number" id="notePageNo" style="
border: 1px solid blanchedalmond;
padding-left: 2vw;
width: 5vw;
"></span>
        <textarea type="text" id="NoteText" style="
width: 95%;
height: 19vw;
max-height: 64%;
border: 1px solid blanchedalmond;
padding: 1vw;
overflow-y: scroll;
"></textarea>
   <button id="notePadButton" style="
margin: 0 auto;
width: 10vw;
margin-top: 1vw;
background: antiquewhite;
border: 1px solid cornflowerblue;
"> Save </button> </div>`   

const NotePadBody = `<div style="
position: absolute;
z-index: 100;
left: 36vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 1.5vw;
height: 30vw;
width: 25vw;
background: beige;
top: 11vw;
">
     <h2>Your Notes</h2>
        <textarea style="
width: 95%;
height: 19vw;
max-height: 64%;
border: 1px solid blanchedalmond;
padding: 1vw;
overflow-y: scroll;
" id="notebody"></textarea>
        <span style="
margin-bottom: 2.5vw;
width: 98%;
display: flex;
justify-content: space-evenly;
font-size: 1.12vw;
margin-top: 2vw;
"><button id="Close" style="
margin: 0 auto;
width: 7.5vw;
margin-top: 1vw;
background: antiquewhite;
border: 1px solid cornflowerblue;
">Close</button><button id="updateNote" style="
margin: 0 auto;
width: 7vw;
margin-top: 1vw;
background: antiquewhite;
border: 1px solid cornflowerblue;
">
   Update </button>
   <button id="DeleteNote" class="DeleteNoteClass" style="
   margin: 0 auto;
   width: 7.5vw;
   margin-top: 1vw;
   background: antiquewhite;
   border: 1px solid cornflowerblue;
   ">Delete</button>   
   </span></div>`

const screenshot=`<div id="ssItems" style="filter: brightness(1.15)">
<span id="imgBox"></span>
<span id="ssMenu">
<button id="ssClose"><img src="./img/ssmenu/cross.png" style="width:2vw"></button>
<button id="ssShare"><img src="./img/ssmenu/share.png" style="width:2vw"></button>
<button id="ssDownload"><img src="./img/ssmenu/download.png" style="width:2vw"></button>
<button id="ssPencil"><img src="./img/ssmenu/pencil.png" style="width:2vw"></button>
<button id="ssMarker"><img src="./img/ssmenu/marker.png" style="width:2vw"></button>
<button id="ssEraser"><img src="./img/ssmenu/eraser.png" style="width:2vw"></button>
</span>
</div>`   

