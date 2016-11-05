export class AlbumService {

  getAlbums() {
    return Object.keys(this.albums).map(id => {
      const album = this.albums[id];
      return {
        id: album.id,
        title: album.title,
        year: album.year,
        artist: album.artist.name
      };
    });
  }

  getAlbum(id) {
    return this.albums[id];
  }

  private albums ={};

}
