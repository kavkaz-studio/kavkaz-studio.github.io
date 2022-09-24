import { useState } from "react"
import { updateData } from "../../../firebase/firebase"

import { Button } from "../../button/button.styles"

const EditComments = ({ comments }) => {

    const [commentList, setCommentList] = useState(comments)
    const [saved, setSaved] = useState(null)

    const deleteComment = (id) => {
        setCommentList(commentList.filter(el => el.id !== id))
    }

    const save = () => {
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 2000)
        updateData(commentList, "/comments")
    }

    return (
        <>
        <div className="admin-comments">
            <div className="admin-comments-wrapper">
                {commentList && commentList?.map(({ id, name, comment, date }, i) => {
                    return <div key={i} className="admin-comment">
                        <div className="admin-comment-header">
                            <label>Имя: {name}</label>
                            <p onClick={() => deleteComment(id)}>Удалить отзыв</p>
                        </div>
                        <div className="admin-comment-footer">
                            <label>Отзыв: {comment}</label>
                            <label>Дата: {date}</label>
                        </div>
                    </div>
                })}
            </div>
            <Button onClick={save}>Сохранить</Button>
        </div>
        {saved ? <div className="saved">Saved</div> : null}
        </>
    )
}

export default EditComments
