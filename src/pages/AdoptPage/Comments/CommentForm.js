import { doc } from 'prettier'
import { useEffect, useState } from 'react'
import '../AdoptPage.scss'
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
}) => {
  const [text, setText] = useState(initialText)
  const [name, setName] = useState('')
  const [disabled, setDisable] = useState()
  const isTextareaDisabled = () => {
    if (!text) {
      alert('Text something you want to comment!')
    } else if (!name) {
      alert('Text your name!')
    }
  }
  //有輸入才有可以push btn
  const onSubmit = (event) => {
    event.preventDefault()
    handleSubmit(text, name)
    setText('')
    setName('')
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="">
        <div className="MKcomReply">
          <div className="abc">
            <div className="MKcom-avatar">
              <div className="MKcom-avatar">
                <img src="https://img.onl/VWWpUj" alt="" />
              </div>
            </div>
            {/* 留言模板 */}
            <div className="">
              <div className="">
                <div className="">
                  <input
                    type="text"
                    placeholder="name"
                    className="MKReplyContext"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  <textarea
                    placeholder="what are your thoughts?"
                    className="commentTextarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <div className="MKAPbutton" type="submit">
                    <div>
                      <button
                        id="text"
                        className="MKAPcard-btn"
                        // onClick={isTextareaDisabled}
                        disabled={!text || !name ? true : false}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )} */}
    </form>
  )
}

export default CommentForm
