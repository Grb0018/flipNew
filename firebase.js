const pagesTag =[]
const getTagPage=[]
const missTagPind=[]
const getPins=[]
const missPins=[]
const testLinks=[
    {19:'../Int/index.html',25:'../Int/index.html'}
]
var Eraser = false;
const missHighLight=[]

const firebaseConfig = {
    apiKey: "AIzaSyCTv4xyb_Li2eexB4YW5dFKrvGr50l7wIE",
    authDomain: "flip-book-e7c44.firebaseapp.com",
    projectId: "flip-book-e7c44",
    storageBucket: "flip-book-e7c44.appspot.com",
    messagingSenderId: "1016793303555",
    appId: "1:1016793303555:web:0772aad2ff6a75168bdc36",
    measurementId: "G-3J8HRH5K9M"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  document.getElementById('user').onclick=()=>{
    if(document.getElementById('userImage').getAttribute('title') == null){
        var div = document.createElement('div')
        div.setAttribute('style','z-index: 100;')
        div.setAttribute('id','login')
        div.innerHTML=LogIn;
        document.body.append(div)
        document.getElementById('logClose').onclick=()=>{
            document.getElementById('login').remove()
        }
        document.getElementById('auth').onclick=()=>{
         const email = document.getElementById('email').value
         const password = document.getElementById('pass').value
         firebase.auth().signInWithEmailAndPassword(email, password)
         .then((userCredential) => {
           // Signed in
           var user = userCredential.user;
           var starCountRef = firebase.database().ref('Students/' + user.uid + '/profilePic');
           starCountRef.once('value', (snapshot) => {
             const data = snapshot.val();
             document.getElementById('userImage').src = data
             var title;
             firebase.database().ref().child('Students').child(user.uid).child('name').get().then((snapshot) => { title = snapshot.val();document.getElementById('userImage').setAttribute('title',title)})
             firebase.database().ref().child('Students').child(user.uid).child('hw').get().then((snapshot)=>{
                var b = snapshot.val()
                for (let i = 0; i < b.length; i++) {
                    pagesTag.push(b[i])
                    console.log(document.getElementsByClassName(`turn-page p${b[i]}`)[0])
                    if(document.getElementsByClassName(`turn-page p${b[i]}`)[0]!== undefined){
                        if( document.getElementsByClassName(`turn-page p${b[i]}`)[0].getElementsByClassName('test')[0]!== undefined){
                        document.getElementsByClassName(`turn-page p${b[i]}`)[0].getElementsByClassName('test')[0].setAttribute('do',true)}
                    }
                    else{
                        missTagPind.push(b[i])
                    }
                }
                if(missTagPind.length>0){
                    missPinsInt=setInterval(()=>{
                        for (let i = 0; i < missTagPind.length; i++) {
                            if(document.getElementsByClassName(`turn-page p${missTagPind[i]}`)[0]!== undefined){
                                if(document.getElementsByClassName(`turn-page p${missTagPind[i]}`)[0].getElementsByClassName('test')[0] !== undefined)  {
                            document.getElementsByClassName(`turn-page p${missTagPind[i]}`)[0].getElementsByClassName('test')[0].setAttribute('do',true)}
                            missTagPind.splice(missTagPind.indexOf(missTagPind[i]),1)
                        }}
                        if(missTagPind.length==0){
                            clearInterval(missPinsInt)
                        }  
                    },500)
                }
             })
           });

          alert('Succesfuly Login')
       ///////////////  after load pin getting from server //////////////
       firebase.database().ref().child('Students').child(user.uid).child('pins').get().then((snapshot) => {
        var x=[]
        x.push(snapshot.val())
        if(x[0]!==null){getPins.push(x[0])}
        for(let i=0;i<getPins[0].length;i++){
            var img = document.createElement('img');
            img.src= './img/pin1.png';
            img.setAttribute('class','pinSet')
            var x = `turn-page p${getPins[0][i]}`
            if(document.getElementsByClassName(x)[0] !==undefined){
                document.getElementsByClassName(x)[0].append(img);
            }else{
                missPins.push(getPins[0][i])
            }   
        }
       if(missPins.length>0){
        pinPutInt = setInterval(()=>{
             if(missPins.length==0){
                clearInterval(pinPutInt)
             }
             for (let i = 0; i < missPins.length; i++) {
                var x = `turn-page p${missPins[i]}`
                if(document.getElementsByClassName(x)[0] !==undefined){
                    var img = document.createElement('img');
                    img.src= './img/pin1.png';
                    img.setAttribute('class','pinSet')
                    document.getElementsByClassName(x)[0].append(img);
                    missPins.splice(missPins.indexOf(missPins[i]),1)
                }  
             }
             if(missPins.length==0){
                clearInterval(pinPutInt)
             }
        })
       }

       })
       //////    end   ////////

       ///////////  setting highlight from server //////////

                             var person = firebase.auth().currentUser.uid
                             firebase.database().ref().child('Students').child(person).child('highL').get().then((snapshot) => {
                             var xy=[]
                             xy.push(snapshot.val());
                             for (let i = 1; i < xy[0].length; i++) {
                                if(document.getElementsByClassName(`turn-page p${xy[0][i].page}`)[0] !== undefined){
                                    document.getElementsByClassName(`turn-page p${xy[0][i].page}`)[0].innerHTML+= xy[0][i].data  
                                }else{
                                    missHighLight.push(xy[0][i])
                                } 
                             }
                             if(missHighLight.length>0){
                                missHightLightInt = setInterval(()=>{
                                     for (let i = 0; i < missHighLight.length; i++) {
                                        if(document.getElementsByClassName(`turn-page p${missHighLight[i].page}`)[0] !== undefined){
                                            document.getElementsByClassName(`turn-page p${missHighLight[i].page}`)[0].innerHTML+= missHighLight[i].data  
                                            missHighLight.splice(missHighLight.indexOf(missHighLight[i]),1)
                                        }  
                                     }
                                     if(missHighLight.length==0){
                                        clearInterval(missHightLightInt)
                                     }
                                },800)
                             }
                             })
                            
       ////////////////  end ///////////////
  
       document.getElementById('erase').onclick=()=>{
        if(Eraser==true){Eraser=false;}
        else{Eraser=true}

        if($('#erase').css('background-color')=='rgb(255, 215, 0)'){
            document.body.style.cursor = 'default'
            document.getElementById('erase').style.backgroundColor = '#ededed'
        }else{
            document.body.style.cursor = 'url("./img/eraser1.png"), auto'
            document.getElementById('erase').style.backgroundColor = 'gold'
        }
        var allHighLightArea = document.getElementsByClassName('hightlightbox')
        var person = firebase.auth().currentUser.uid
        for (let i = 0; i < allHighLightArea.length; i++) {
            const element = allHighLightArea[i];
            element.onclick=(e)=>{
                if(Eraser==true){
             var page =  $(e.target.parentElement).attr('class').replace('turn-page p','') ;
             console.log('page   :'+page)
             firebase.database().ref().child('Students').child(person).child('highL').get().then((snapshot) => {
                var x=[]
                x.push(snapshot.val())
                for (let i = 0; i < x[0].length; i++) {
                    if(x[0][i].page==page){
                        x[0].splice(x[0].indexOf(x[0][i]),1)
                    } 
                }
                e.target.remove();
                firebase.database().ref().child('Students').child(person).child('highL').set(x[0])
                .then(()=>{
                    alert('Successfuly Removed')
                    Eraser=false;
                    document.getElementById('erase').style.backgroundColor = '#ededed';
                    document.body.style.cursor = 'auto';
                })
             })
            }
            }
        }
    }

   

       ////// eraser on ///////

               //////////////// after load notepad icon get from server ////////////////
          var person = firebase.auth().currentUser.uid
          firebase.database().ref().child('Students').child(person).child('notes').get().then((snapshot) => {
            var x=[]
            x.push(snapshot.val())
            if(x[0].length>0){
                for (let i = 1; i < x[0].length; i++) {
                    var img=document.createElement('img');
                    img.setAttribute('class','noteIconPage');
                    img.src='./img/notespad.png';
                    img.style.position='absolute';
                    img.setAttribute('page',x[0][i].page);
                    img.setAttribute('data',x[0][i].data);
                  var cls = `turn-page p${x[0][i].page}`;
                  if(document.getElementsByClassName(cls)[0]==null){
                    getTagPage.push({e:cls,i:img})
                  }else{
                    document.getElementsByClassName(cls)[0].append(img)
                  }
                } 
                if(getTagPage.length>0){
                    putImage = setInterval(()=>{
                        if(getTagPage.length==0){
                            clearInterval(putImage)
                        }
                        for (let i = 0; i < getTagPage.length; i++) {
                            const element = getTagPage[i]
                            if(document.getElementsByClassName(element.e)[0]!== undefined){
                                console.log(document.getElementsByClassName(element.e)[0])
                                console.log(element.e)
                                document.getElementsByClassName(element.e)[0].append(element.i);
                                getTagPage.splice(getTagPage.indexOf(element),1)
                            }
                        }
                        if(getTagPage.length==0){
                            clearInterval(putImage)
                            notepadIconClick()
                        }
                    },800)
                }
            }
                           ////////////////////      notepadIcon click ////////////////////
                     function notepadIconClick(){
                           var notepages = document.getElementsByClassName('noteIconPage')
                           for (let i = 0; i < notepages.length; i++) {
                            notepages[i].onclick=(e)=>{
                               if(document.getElementById('notebodydiv')==null){
                                var div = document.createElement('div')
                                div.innerHTML=NotePadBody;
                                div.setAttribute('id','notebodydiv')
                                document.body.append(div)
                                document.getElementById('DeleteNote').setAttribute('page',$(e.target).attr('page'))
                               }else{
                                document.getElementById('notebodydiv').remove()
                                var div = document.createElement('div')
                                div.innerHTML=NotePadBody;
                                div.setAttribute('id','notebodydiv')
                                document.body.append(div)
                                document.getElementById('DeleteNote').setAttribute('page',$(e.target).attr('page'))
                               }

                            var  AllDeleteNoteClass = document.getElementsByClassName('DeleteNoteClass');
                            for (let i = 0; i < AllDeleteNoteClass.length; i++) {
                                AllDeleteNoteClass[i].onclick=(e)=>{
                                    var page = $(e.target).attr('page')
                                    $('#album').turn('page',page)
                                    var person = firebase.auth().currentUser.uid
                                    firebase.database().ref().child('Students').child(person).child('notes').get().then((snapshot) => {
                                        var x=[]
                                        x.push(snapshot.val())
                                        for (let i = 1; i < x[0].length; i++) {
                                            if(x[0][i].page==page){
                                                x[0].splice(x[0].indexOf(x[0][i]),1)
                                                firebase.database().ref().child('Students').child(person).child('notes').set(x[0])
                                                .then(()=>{
                                                    alert('Note Successfuly Removed') ;
                                                    document.getElementById('notebodydiv').remove()
                                                    document.getElementsByClassName(`turn-page p${page}`)[0].getElementsByClassName('noteIconPage')[0].remove()
                                                })
                                            }
                                            
                                        }


                                    })
                                }
                                
                            }
                               
                                document.getElementById('notebody').value= e.target.getAttribute('data')
                                document.getElementById('notebody').setAttribute('page',e.target.getAttribute('page'))
                                document.getElementById('Close').onclick=()=>{
                                    document.getElementById('notebodydiv').remove()
                                }
                                document.getElementById('updateNote').onclick=()=>{
                                  var person = firebase.auth().currentUser.uid
                                  var noteData =  document.getElementById('notebody').value;
                                  var pageno = document.getElementById('notebody').getAttribute('page')
                                  firebase.database().ref().child('Students').child(person).child('notes').get().then((snapshot) => {
                                    var x=[]
                                    x.push(snapshot.val())
                                    var copypage;
                                    for (let i = 0; i < x[0].length; i++) {
                                        if(x[0][i].page==pageno){
                                            copypage=i
                                        }
                                    }
                                    firebase.database().ref('Students/' + person + '/notes/'+copypage).update({page: pageno,data: noteData});
                                        var notepages = document.getElementsByClassName('noteIconPage')
                                        for (let i = 0; i < notepages.length; i++) {
                                            if(notepages[i].getAttribute('page')==pageno){
                                                notepages[i].setAttribute('page',pageno)
                                                notepages[i].setAttribute('data',noteData)
                                            }
                                        }
                                        alert('Update Done');
                                })
                                }
                            }
                           }}
                           notepadIconClick()
                           /////////////////////// end //////////////////

                           ///////// new note add//////////////////

                           document.getElementById('note').onclick=()=>{if(firebase.auth().currentUser!==null){
                            if(document.getElementById('noteDiv')!==null){
                                document.getElementById('noteDiv').remove()
                            }
                            var div = document.createElement('div')
                            div.setAttribute('id','noteDiv')
                            div.innerHTML=Note
                            document.body.append(div)
                        
                            document.getElementById('notePageNo').onkeyup=()=>{
                                if(document.getElementById('notePageNo').value > 27 || document.getElementById('notePageNo').value< 1){
                                    document.getElementById('notePageNo').value=''
                                }   
                            }
                        
                            document.getElementById('notePadButton').onclick=()=>{
                                var person = firebase.auth().currentUser.uid
                                var data = document.getElementById('NoteText').value;
                                var pageno = document.getElementById('notePageNo').value;
                                var length;
                                firebase.database().ref().child('Students').child(person).child('notes').get().then((snapshot) => {
                                    var x=[]
                                    x.push(snapshot.val())
                                    var copy=false;
                                    var copypage;
                                    for (let i = 1; i < x[0].length; i++) {
                                        if(x[0][i].page==pageno){
                                            copypage=i
                                            copy=true;
                                        }
                                    }
                                    if(copy==true){
                                        firebase.database().ref('Students/' + person + '/notes/'+copypage).update({page: pageno,data: data});
                                        var notepages = document.getElementsByClassName('noteIconPage')
                                        for (let i = 0; i < notepages.length; i++) {
                                            if(notepages[i].getAttribute('page')==pageno){
                                                notepages[i].setAttribute('page',pageno)
                                                notepages[i].setAttribute('data',data)
                                            }
                                        }
                                        alert('Update Done');
                                        document.getElementById('NoteText').value=''
                                        document.getElementById('notePageNo').value=''
                                        
                                    }else{
                                        const update={[x[0].length]:{
                                            page: pageno,
                                            data: data
                                        }}
                                        firebase.database().ref('Students/' + person + '/notes').update(update);
                                        var img=document.createElement('img');
                                        img.setAttribute('class','noteIconPage');
                                        img.src='./img/notespad.png';
                                        img.style.position='absolute';
                                        img.setAttribute('page',pageno);
                                        img.setAttribute('data',data);
                                        var cls = `turn-page p${pageno}`;
                                        document.getElementsByClassName(cls)[0].append(img)
                                        alert('Update Done');
                                        document.getElementById('NoteText').value='';
                                        document.getElementById('notePageNo').value='';
                                    }
                                })
                            }
                        
                            notepadIconClick()
                        
                            document.getElementById('closeNote').onclick=()=>{
                            document.getElementById('noteDiv').remove()
                            }
                          }  }

                          ///////// new note add done ENd//////////////////
          })

         })
         .catch((error) => {
           var errorMessage = error.message;
           alert(errorMessage)
         });
        }
    }else{
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
             document.getElementById('userImage').src='./img/user.png'
             pagesTag.splice(0)
             document.getElementById('userImage').removeAttribute('title')
             location.reload()
          }).catch((error) => {
            console.log(error)
          });
    }
}


   


