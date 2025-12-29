interface Comment {
  id: number;
  name?: string;
  email: string;
  body?: string;
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<Comment[]> => {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json() as Comment[]; 

  return data;
}

getData(COMMENTS_URL)
  .then(data => {
    data.forEach(comment => {
      console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */