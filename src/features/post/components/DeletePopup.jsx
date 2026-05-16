import { useNavigate } from "react-router";
import { useDelete } from "../hooks/useDeletePost";
import "./DeletePopup.css";

export default function DeletePopup({ setPopup, id, token, state }) {
    const { error, removePost } = useDelete();
    const navigate = useNavigate()
    const handleDelete = async () => {
        const deleteSuccess = await removePost(id, token)
        if (deleteSuccess) {
            navigate("/")
        }
        if (error) {
            alert(error)
            setPopup(false)
        }
    }
    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <div className="popup-icon">!</div>

                <h2>Delete Post</h2>

                <p>
                    Are you sure you want to delete this post?
                    This action cannot be undone.
                </p>

                <div className="popup-buttons">
                    <button className="cancel-btn" onClick={() => { setPopup(false) }}>
                        Cancel
                    </button>

                    <button className="delete-btn" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}