"use strict";
var AlbumService = (function () {
    function AlbumService() {
        this.albums = {};
    }
    AlbumService.prototype.getAlbums = function () {
        var _this = this;
        return Object.keys(this.albums).map(function (id) {
            var album = _this.albums[id];
            return {
                id: album.id,
                title: album.title,
                year: album.year,
                artist: album.artist.name
            };
        });
    };
    AlbumService.prototype.getAlbum = function (id) {
        return this.albums[id];
    };
    return AlbumService;
}());
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map