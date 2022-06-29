import data from "../assets/data/movies_rnexgr.json";
import Section from "./Section";

const MoviesList = () => {
  return (
    <>
      {/* J'importe chaque élément du tableau */}
      {data.map((element, index) => {
        return (
          <Section title={element.category} img={element.images} key={index} />
        );
      })}
    </>
  );
};

export default MoviesList;
