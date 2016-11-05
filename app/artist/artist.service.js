"use strict";
var ArtistService = (function () {
    function ArtistService() {
        this.artists = {};
    }
    ArtistService.prototype.getArtists = function () {
        var _this = this;
        return Object.keys(this.artists).map(function (id) {
            var artist = _this.artists[id];
            return {
                id: artist.id,
                name: artist.name
            };
        });
    };
    ArtistService.prototype.getArtist = function (id) {
        return this.artists[id];
    };
    return ArtistService;
}());
exports.ArtistService = ArtistService;
//# sourceMappingURL=artist.service.js.map