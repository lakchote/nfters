import GalleryItem from "../GalleryItem"

export default function Gallery() {
  return (
    <div className="lg:flex justify-between mx-3 lg:mx-32 lg:mb-10">
      {/* TODO: pass props to Gallery component, loop over items and render a GalleryItem component */}
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </div>
  )
}
