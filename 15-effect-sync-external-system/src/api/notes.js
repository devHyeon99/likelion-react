const ENDPOINT = 'https://ehh99.pockethost.io';
const REQUEST_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};
/** @type {(newNote: {title: string, description: string}) => Promise<any>} */
export async function createNote(newNote) {
  const REQUEST_URL = `${ENDPOINT}/api/collections/notes/records`;

  const body = JSON.stringify({
    title: newNote.title,
    description: newNote.description,
  });

  const response = await fetch(REQUEST_URL, {
    method: 'POST',
    body,
    ...REQUEST_OPTIONS,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답이 없습니다.' }),
      { status: 500 }
    );
  }

  const responseData = await response.json();

  return responseData;
}

/** @type {(page?: number ,perPage?: number) => Promise<any>} */
export async function readNotes(page = 1, perPage = 10) {
  const REQUEST_URL = `${ENDPOINT}/api/collections/notes/records?page=${page}&perPage=${perPage}`;

  const response = await fetch(REQUEST_URL);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답이 없습니다.' }),
      { status: 500 }
    );
  }

  const responseData = await response.json();

  return responseData;
}
