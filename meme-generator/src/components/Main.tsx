import { useEffect, useState } from "react";
type meme = {
  img: string;
  topText: string;
  bottomText: string;
};
const Main = () => {
  const [meme, setMeme] = useState<meme>({
    img: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  const [allMemes, setAllMemes] = useState([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  useEffect(() => {
    const getMemes = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllMemes(data.data.memes);
    };

    getMemes();
  }, [meme]);

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder={meme.topText}
            name="topText"
            onChange={handleChange}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.img} alt="Meme Image" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
};

export default Main;
