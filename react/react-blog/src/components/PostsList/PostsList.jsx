import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostsList = ({posts, removePost}) => {

	if (posts.length === 0) {
		return (
			<h2>Посты не найдены</h2>
		)
	}

	return (
		<React.Fragment>
			<h1>Список постов</h1>
			{posts.map((post, index) => {
				return (
					<PostItem
						key={post.id}
						number={index + 1}
						id={post.id}
						title={post.title}
						body={post.body}
						removePost={removePost}
					/>
				)
			})}
		</React.Fragment>
	);
}

export default PostsList;