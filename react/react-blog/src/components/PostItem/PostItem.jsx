import React from 'react';
import MyButton from "../../UI/MyButton/MyButton";
import classes from "./PostItem.module.css"

const PostItem = ({title, body, number, removePost, id}) => {
	return (
		<div className={classes.post}>
			<div className={classes.post__info}>
				<div className={classes.post__title}><strong>{number}.</strong>{title}</div>
				<div className={classes.post__body}>{body}</div>
			</div>
			<div className={classes.post__btns}>
				<MyButton onClick={() => removePost(id)}>Удалить</MyButton>
			</div>
		</div>
	);
};

export default PostItem;