// const checkbox = document.querySelector('#isDone')


// // checkbox를 클릭하면 checked클래스가 토글됨
// checkbox.addEventListener('click',()=>{
//     checkbox.classList.toggle('checked');
//     checkbox.classList != 'checked' && checkbox.classList.toggle('unchecked');
//     //클래스의 이름이 조건값이 되어서 값에 따라 할 일이 달라짐
//     checkbox.className == 'checked' && console.log('this item is checked!');
//     checkbox.className =='unchecked' && console.log('this item is not checked');
// })

//추가될 todo가 적용될 곳
const showTodo = document.querySelector('.showTodo');




//삭제버튼 생성 함수
const makeDelBtn = ()=>{
    const updateBtn = document.createElement('button');
    updateBtn.classList.add('updated')
    updateBtn.innerHTML = 'update';
    return updateBtn;

}
//업데이트버튼 생성 함수
const makeUpdateBtn = ()=>{
    const delBtn = document.createElement('button');
    delBtn.classList.add('deleted');
    delBtn.innerHTML= 'delete';
    return delBtn
}


//todo 추가 함수
const addTodoFunc = (todo) => {
    const addLi = document.createElement('li');
    addLi.classList.add('checked')
    addLi.innerText = todo;

    const updateBtn = makeUpdateBtn();
    const delBtn = makeDelBtn();

    addLi.appendChild(updateBtn);
    addLi.appendChild(delBtn);
    showTodo.append(addLi);
}

//추가CREATE
const addKey = document.querySelector('#addKey');
const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click',(evt)=>{
    evt.preventDefault();
    if(!addKey.value)return
    else{
        addTodoFunc(addKey.value);
        addKey.value = '';
    }
})

//삭제 DELETE
//showTodo창의 모든 자녀요소를 클릭했을 때 삭제되는 이벤트
// const delbtns = document.querySelectorAll('.deleted');

// for(let btn of delbtns){
//     btn.addEventListener('click',()=>{
//         const li = btn.parentNode;
//         li.remove()
//     });
// }

//삭제 및 업데이트
showTodo.addEventListener('click', (evt) => {
    //삭제 부분
    const target = evt.target;
    if (target.classList.contains('deleted')) {
      const li = target.closest('li');
      li.remove();
    //업데이트 부분
    } else if (target.classList.contains('updated')) {
        const li = target.closest('li');
        li.innerText = update()
    }
  });
// evt.target.innerText=="delete" && console.log(`clicked ${evt.target.innerText}`);

function update(){
    let text =  prompt('수정 내용 입력');
    return text
}

/*함수 설명:
일단 todo의 요소들은 ul태그 안에 있는 li태그들로 지정된다
todo의 ul태그는 이 파일에서 `showTodo`라는 변수로 지정되었다
그럼 showTodo안에 있는 자녀요소들이 todo의 요소가 된다
그래서 showTodo의 자녀요소를 조작하고자 한다면 showTodo에 클릭 이벤트를 지정하고
클릭 이벤트에 .target으로 showTodo테그 내에 클릭 된, 
즉 target이 된 요소에 대해서 이벤트가 적용된다 이게 evt.target이 되는것이다.
target이 된 요소는 당연히 li테그이고 이벤트 안에 있는 함수의 내용은
클릭한(target이 된) 요소의 노드 이름(태그 이름)이 LI와 같다면
그 요소의 텍스트를 콘솔에 입력하라는 것이다.
여기서 중요한 것은 ".target"키워드 이다 이 키워드를 쓰기 위해서는
이벤트 핸들러의 콜백을 무조건 불러와야 한다.
*/

//수정 UPDATE


//2
// //삭제 리스트를 입력하면 그 리스트가 삭제됨
// const delKey = document.querySelector('#delkey');
// const delBtn = document.querySelector('.delBtn');



// delBtn.addEventListener('click',(evt)=>{
//     evt.preventDefault;
//     if(!delKey.value)return
//     else{

//     }
// })









