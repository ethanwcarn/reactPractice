import './App.css'

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

function Welcome() { 
  return <h1>Welcome to the underrated bands list!</h1>
}

interface BandProps {
  name: string;
  genre: string;
  origin: string;
  formed: number;
  members: string[];
  albums: string[];
}

function Band({ name, genre, origin, formed, members, albums }: BandProps) {
  // compute a simple cover URL based on the band name or first album
  const coverUrl =
    name === "R.E.M"
      ? "https://upload.wikimedia.org/wikipedia/en/2/2c/R.E.M._Murmur.jpg"
      : name === "The Smiths"
      ? "https://upload.wikimedia.org/wikipedia/en/7/70/The_Smiths_The_Smiths.jpg"
      : "";

  return (
    <div className="band-detail">
      {coverUrl && <img src={coverUrl} alt={`${name} album cover`} />}
      <h2>{name}</h2>
      <p>Genre: {genre}</p>
      <p>Origin: {origin}</p>
      <p>Formed: {formed}</p>
      <h3>Original members</h3>
      <p>
        {members.length === 1
          ? members[0]
          : members.slice(0, -1).join(', ') + ' and ' + members[members.length - 1]}
      </p>
      <h3>Albums</h3>
      <ul>
        {albums.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

function BandList() { 
  // define an array of band objects so we can render multiple bands easily

  return (
    <div>
      {bands.map((band, index) => (
        <Band key={index} {...band} />
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
