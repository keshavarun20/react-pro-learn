const Entry = () => {
  return (
    // <article>
    //   <div className="journal-img-container">
    //     <img
    //       className="journal-img"
    //       src="https://scrimba.com/links/travel-journal-japan-image-url"
    //       alt="mount-fuji"
    //     />
    //   </div>
    //   <div className="title">
    //     <img src="/images/marker.png" alt="" />
    //     <span>Japan</span>
    //     <a href="google.com">View on Google Maps</a>
    //     <h2>Mount Fuji</h2>
    //     <p className="trip-date">12 Jan, 2021 - 24 Jan, 2021</p>
    //     <p className="entry-text">
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum has been the industry's standard dummy text ever
    //       since the 1500s, when an unknown printer took a galley of type and
    //       scrambled it to make a type specimen book. It has survived not only
    //       five centuries, but also the leap into electronic typesetting,
    //       remaining essentially unchanged. It was popularised in the 1960s with
    //       the release of Letraset sheets containing Lorem Ipsum passages, and
    //       more recently with desktop publishing software like Aldus PageMaker
    //       including versions of Lorem Ipsum.
    //     </p>
    //   </div>
    // </article>
    //How to make now data driven like dynamically update, here we hard coded thing like we use react for one of the reason component and reusability 

    //now the idea is we gonna use prop what is prop/property in standard html elements we use predefined attributes like id or alt etc. so when we think about that in react we can create our custom html element/component in that component also we can pass some attributes thats called property/props
    
    //HTML tags take attributes 👉 React components take props

    <article>
      <div className="journal-img-container">
        <img
          className="journal-img"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="mount-fuji"
        />
      </div>
      <div className="title">
        <img src="/images/marker.png" alt="" />
        <span>Japan</span>
        <a href="google.com">View on Google Maps</a>
        <h2>Mount Fuji</h2>
        <p className="trip-date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="entry-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </article>
  );
};

export default Entry;
