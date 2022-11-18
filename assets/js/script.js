// let select = document.getElementById('genres')
// let option = document.createElement('option');
// option.innerText = 'Класика'
// option.value = 'classic'
// option.selected = true
// select.appendChild(option);


// let table = document.getElementById('bagua-table')

// let process;

// table.onclick = function(event) {
//     let target = event.target.closest('.edit-cancel,.edit-ok,td')  
    
//     if (!table.contains(target)) return;

//     if (target.className == 'edit-cancel') {
//       EndEdit(process.elem, false);
//     } else if (target.className == 'edit-ok') {
//       EndEdit(process.elem, true);
//     } else if (target.nodeName == 'TD') {
//       if (process) return;

//       edit(target)
//     }
// }
// function edit(td) {
//     process = {
//         elem: td,
//         code: td.innerHTML
//     }
    
//     td.classList.add('edit-td');

//     let textarea = document.createElement('textarea');
//     textarea.style.width = td.clientWidth + 'px';
//     textarea.style.height = td.clientHeight + 'px';
//     textarea.value = td.innerHTML;
//     textarea.className = 'edit-area';
//     td.innerHTML = '';
//     td.appendChild(textarea);
//     textarea.focus();
//     td.insertAdjacentHTML("beforeend", `<div class="block__btn"><button class="edit-ok">OK</button><button class="edit-cancel">CANСEL</button></div>`);
// }
// function EndEdit(td, ifTrue) {
//     if (ifTrue) {
//         td.innerHTML = td.firstChild.value
//     } else {
//         td.innerHTML = process.code
//     }
//     td.classList.remove('edit-td');
//     process = null;
// }