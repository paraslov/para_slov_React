
import classes from '../BlogPage.module.css'

type PropsType = {
	postTitle: string;
	postData: string;
	postTextInnerHTML: string;
	postVideoInnerHTML: string;
}

const BlogPagePost: React.FC<PropsType> = (props) => {
	return (
		<article>
			<header className={classes.postTitle}>
				<h2>{props.postTitle}</h2>
				<time>{props.postData}</time>
			</header>
			<div className={classes.blogPageText} dangerouslySetInnerHTML={{ __html: props.postTextInnerHTML}}>
			</div>
			<div dangerouslySetInnerHTML={{ __html: props.postVideoInnerHTML }}>
			</div>

		</article>
	)
}


export default BlogPagePost