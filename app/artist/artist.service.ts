export class ArtistService {

  getArtists() {
    return Object.keys(this.artists).map(id => {
      const artist = this.artists[id];
      return {
        id: artist.id,
        name: artist.name
      };
    });
  }

  getArtist(id) {
    return this.artists[id];
  }

  private artists = {};

}
