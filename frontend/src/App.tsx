import './App.css'

function Welcome() { 
  return <h1>Welcome to the underrated bands list!</h1>
}

function BandList() { 
  // define an array of band objects so we can render multiple bands easily
  const bands = [
    {
      name: "R.E.M",
      members: ["Michael Stipe", "Peter Buck", "Mike Mills", "Bill Berry"],
      genre: "Alternative Rock",
      formed: 1980,
      origin: "Athens, Georgia, USA",
      albums: [
        "Murmur",
        "Reckoning",
        "Fables of the Reconstruction",
        "Lifes Rich Pageant",
        "Document",
        "Green",
        "Out of Time",
        "Automatic for the People",
        "Monster",
        "New Adventures in Hi-Fi",
      ],
    },
    {
      name: "The Smiths",
      members: ["Morrissey", "Johnny Marr", "Andy Rourke", "Mike Joyce"],
      genre: "Indie Rock",
      formed: 1982,
      origin: "Manchester, England",
      albums: [
        "The Smiths",
        "Meat is Murder",
        "The Queen is Dead",
        "Strangeways, Here We Come",
      ],
    },
  ];

  return (
    <div>
      {bands.map((band, index) => (
        <div key={index} className="band">
          <h2>{band.name}</h2>
          <p>Genre: {band.genre}</p>
          <p>Origin: {band.origin}</p>
          <p>Formed: {band.formed}</p>
          <h3>Members</h3>
          <ul>
            {band.members.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <h3>Albums</h3>
          <ul>
            {band.albums.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function App() {

  return (
    <>
    <Welcome />
    <BandList />
    </>
  )
}

export default App
