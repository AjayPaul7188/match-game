import './index.css'

const ImageSection = props => {
  const {imageDetails, onClickImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onSelectImage = () => {
    onClickImage(id)
  }

  return (
    <li className="eachImg">
      <button type="button" className="btn" onClick={onSelectImage}>
        <img className="each-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageSection
