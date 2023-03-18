const Addbtn =document.querySelector("#btn");
const main =document.querySelector(".main");
Addbtn.addEventListener("click",
function() {
    addNotes();
})

const saveNotes = () => {
    const notes =document.querySelectorAll(".note textarea");
    console.log(notes);
    const data =[];
    
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
     )

    //  console.log(data);
    if(data.length === 0){
        localStorage.removeItem("notes") 
      }else{
        localStorage.setItem("notes", JSON.stringify(data));
      }
    
}

const addNotes = (text ="") => {
    const note =document.createElement("div");
    note.classList.add("note")

    note.innerHTML =`
    <div class="tool">
      <i class="trash fa-solid fa-trash-can"></i>
      <i class="save fa-regular fa-floppy-disk"></i>
    </div>
    <textarea name="" class="textarea"placeholder ="Write Your Notes From here!">${text}</textarea>

    `;
main.appendChild(note);

saveNotes()
note.querySelector(".trash").addEventListener("click",
() => {
    note.remove();
    saveNotes();
})

note.querySelector(".save").addEventListener("click",
() => {
    saveNotes()
})
}

(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        lsNotes.forEach(
            (lsNote) => {
                addNotes(lsNote)
            }
        )
        if(lsNotes.length === 0){
          localStorage.removeItem("notes") 
        }
        
    }
)()

// (function() {
//     const lsNotes = JSON.parse(localStorage.getItem("notes"));
    
//     if (lsNotes && lsNotes.length > 0) {
//       lsNotes.forEach((lsNote) => {
//         addNotes(lsNote);
//       });
//     } else {
//       const message = document.createElement("div");
//       message.textContent = "No notes found.";
//       main.appendChild(message);
//     }
  
//     if (lsNotes && lsNotes.length === 0) {
//       localStorage.removeItem("notes");
//     }
//   })();
  