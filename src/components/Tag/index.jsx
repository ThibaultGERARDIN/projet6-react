import '../../styles/components/Tag.scss'

function Tag({ tags }) {
  return (
    <div className="Tag">
      {tags.map((tag, index) => {
        return (
          <span className="tag-txt" key={index}>
            {tag}
          </span>
        )
      })}
    </div>
  )
}

export default Tag
