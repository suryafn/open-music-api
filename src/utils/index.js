const mapDBToAlbum = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year,
});

const mapDBToSong = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumid,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId: albumid,
});

const mapDBToAllSong = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

module.exports = { mapDBToAlbum, mapDBToSong, mapDBToAllSong };
