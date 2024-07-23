// STEP 1. Vanilla Script (ES + DOM API)
// STEP 2. Class Programming
// STEP 3. Web Components API

// TODO : 드래깅 상태 제어를 위한 상수
const DRAGGING_CLASSNAME = "dragging";

// TODO: .list 요소 찾기
const list = document.querySelector(".list");

// TODO: .list 자식들(children, 집합) 찾기
// Node의 집합들은 배열이 아니다. 유사배열 그렇기 때문에 배열 형태로 변환 Array.from() 메서드 이용
const listItems = Array.from(list.querySelectorAll("li"));

// TODO: listItems 순환 드래그 가능하게 처리
listItems.forEach((item) => {
  item.setAttribute("draggable", true);

  // TODO: 각 리스트 아이템에 드래그 이벤트 핸들링
  item.addEventListener("dragstart", (e) => {
    e.currentTarget.classList.add(DRAGGING_CLASSNAME);
  });

  item.addEventListener("dragend", (e) => {
    e.currentTarget.classList.remove(DRAGGING_CLASSNAME);
  });

  const handleButton = item.querySelector('[data-role="handle"]');

  if (handleButton) {
    handleButton.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft":
          const prevItem = item.previousElementSibling;
          if (prevItem) {
            // list.insertBefore(item, prevItem);
            prevItem.before(item);
            e.currentTarget.focus();
          }
          break;
        case "ArrowDown":
        case "ArrowRight":
          const nextItem = item.nextElementSibling;
          if (nextItem) {
            // list.insertBefore(nextItem, item);
            nextItem.after(item);
            e.currentTarget.focus();
          }
          break;
      }
    });
  }
});

list.addEventListener("dragover", (e) => {
  // 브라우저 기본 작동(동작) 중지
  // 동작? 작동? 용어적 의미에 대해서 생각해보고 찾아보기.
  e.preventDefault();

  // TODO: 현재 드래깅 중인 아이템 찾기
  const draggedItem = listItems.find((item) =>
    item.classList.contains(DRAGGING_CLASSNAME)
  );

  // TODO: 드래깅 중인 요소가 아닌 나머지 아이템 집합 찾기
  const restItems = listItems.filter((item) => !Object.is(item, draggedItem));

  // TODO: 나머지 아이템 중에 드래깅 요소가 드래깅 중인 화면 상의 높이와
  //       드롭 대상 요소의 화면에서의 top 위치 + ( 높이 * 0.5 ) 비교해서 교체할 아이템 찾기

  // 드래깅 중인 요소가 리스트 안에서 움직일때 화면에서의 높이 값 (이벤트 감지)

  const replaceItem = restItems.find((item, index) => {
    return e.clientY <= item.offsetTop + item.offsetHeight * 0.5;
  });

  if (replaceItem) {
    list.insertBefore(draggedItem, replaceItem);
  } else {
    list.appendChild(draggedItem);
  }
});
