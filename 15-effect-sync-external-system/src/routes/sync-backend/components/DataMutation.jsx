// --------------------------------------------------------------------------
// ✅ 데이터 뮤테이션
// --------------------------------------------------------------------------
// - [ ] PocketBase 백엔드 솔루션을 서버로 사용합니다.
// - [ ] 이벤트를 사용해 Promise 또는 Async / await 방법으로 데이터 뮤테이션을 요청합니다.
// - [ ] 데이터 뮤테이션 요청 응답이 성공인 경우, 리액트 앱 화면을 업데이트 합니다.
// - [ ] 데이터 뮤테이션 요청 응답에 문제가 발생한 경우, 오류 메시지를 렌더링합니다.
// --------------------------------------------------------------------------

import { createNote, readNotes } from '@/api/notes';
import S from './DataMutation.module.css';

function DataMutation() {
  const handleReadNotes = async () => {
    const responseData = await readNotes();
    console.log(responseData);
  };

  const handleCreate = async () => {
    const newNote = {
      title: '리액트 마지막 주차 학습2',
      description:
        '리액트의 마지막 학습 주제는 리액트의 에코시스템에 대해 다뤄봅니다.',
    };

    const responseData = await createNote(newNote);
    console.log(responseData);
  };

  return (
    <div className={S.component}>
      <button type="button" onClick={handleCreate}>
        노트작성
      </button>
      <button type="button" onClick={handleReadNotes}>
        노트읽기
      </button>
    </div>
  );
}

export default DataMutation;
