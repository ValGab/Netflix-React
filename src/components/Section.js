const Section = ({ title, img, id }) => {
  return (
    <section key={id}>
      {/* Dans chaque section j'importe le nom de la catégorie */}
      <h2>{title}</h2>

      {/* Dans chaque section, j'importe le lot d'images correspondant à l'élément du tableau */}
      <div className="pictures-list">
        {img.map((pic, i) => {
          return <img src={pic} key={i} alt="" />;
        })}
      </div>
    </section>
  );
};

export default Section;
