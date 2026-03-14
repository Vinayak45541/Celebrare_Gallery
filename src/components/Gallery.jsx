import { useReducer, useState, useCallback, useMemo } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer, initialState } from "../reducers/favouritesReducer";
import PhotoCard from "./PhotoCard";

function Gallery() {

  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(favouritesReducer, initialState);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter(photo =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );

  }, [photos, search]);

  const toggleFav = (id) => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: id
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <div className="animate-spin h-10 w-10 border-b-2 border-black rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-center mt-10">
        Error loading photos
      </p>
    );
  }

  return (
    <div>

      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={handleSearch}
        className="border p-2 w-full mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map(photo => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            toggleFav={toggleFav}
            isFav={state.favourites.includes(photo.id)}
          />
        ))}
      </div>

    </div>
  );
}

export default Gallery;