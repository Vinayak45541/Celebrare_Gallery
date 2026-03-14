function PhotoCard({ photo, toggleFav, isFav }) {

  return (
    <div className="bg-white shadow rounded p-2">

      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover rounded"
      />

      <div className="flex justify-between items-center mt-2">

        <p className="text-sm font-medium">  {photo.author} </p>

        <button
          onClick={() => toggleFav(photo.id)}
          className="text-xl"
        >
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>

    </div>
  );
}

export default PhotoCard;