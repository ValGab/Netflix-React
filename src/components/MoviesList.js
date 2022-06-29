import data from "../assets/data/movies_rnexgr.json";

const MoviesList = () => {
  return (
    <>
      {/* J'importe chaque élément du tableau */}
      {data.map((element, index) => {
        return (
          <section key={index}>
            {/* Dans chaque section j'importe le nom de la catégorie */}
            <h2>{element.category}</h2>

            {/* Dans chaque section, j'importe le lot d'images correspondant à l'index du tableau */}
            <div className="pictures-list">
              {element.images.map((index, i) => {
                return <img src={index} key={i} alt="" />;
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default MoviesList;
