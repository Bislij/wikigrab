import parse from 'html-react-parser';

async function ArticleTitle({ name }) {
  const apiUrl = `https://wiktionary.org/w/api.php?action=parse&format=json&page=${name}&formatversion=2`;

  let title;

  await fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        title = data.parse.title;
    })
    .catch(error => {
        console.error('Error:', error);
    });

  return ( 
    <h1 className="text-slate-900 dark:text-white text-2xl font-medium tracking-tight mb-6">{title}</h1>
  );
}


async function ArticleBody({ name }) {
  const apiUrl = `https://wiktionary.org/w/api.php?action=parse&format=json&page=${name}&formatversion=2`;

  let rawPage;

  await fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        rawPage = data.parse.text;
    })
    .catch(error => {
        console.error('Error:', error);
    });

  return ( 
    parse(rawPage)
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl md:container">

        <h1 className="text-slate-900 dark:text-white text-4xl font-medium tracking-tight">Wikigrab</h1>

      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl md:container mt-6">

        <ArticleTitle name="suit" />

        <ArticleBody name="suit" />

      </div>
    </main>
  );
}
