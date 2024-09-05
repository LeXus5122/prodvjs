const musicCollection = {
    albums: [
      { title: "Nevermind", artist: "Nirvana", year: "1991" },
      { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: "1973" },
      { title: "Thriller", artist: "Michael Jackson", year: "1982" },
      { title: "Back in Black", artist: "AC/DC", year: "1980" },
      { title: "Rumours", artist: "Fleetwood Mac", year: "1977" }
    ],
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.albums.length) {
            return { value: this.albums[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };

  for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
  }