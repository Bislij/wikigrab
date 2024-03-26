import Image from "next/image";

async function ArticleBody({ name }) {
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${name}&formatversion=2`;

  let rawPage;

  await fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log(data.parse.text);
          rawPage = data.parse.text;
      })
      .catch(error => {
          console.error('Error:', error);
      });

  return [rawPage];
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl md:container">

        <h1 className="text-slate-900 dark:text-white text-2xl font-medium tracking-tight">Article Title</h1>

        <p className="mt-5 first-line:uppercase first-line:tracking-widest
        first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
        first-letter:mr-3 first-letter:float-left">
          
        </p>

        <ArticleBody name="test" />

      </div>
    </main>
  );
}
