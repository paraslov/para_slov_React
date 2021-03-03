import { connect } from 'react-redux'
import { BlogPostType } from '../../../redux/initialState/blogPageState'
import { getBlogPosts } from '../../../redux/selectors/blogPost_selectors'
import { AppStateType } from '../../../redux/store'
import styles from '../../common/Style/style.module.css'
import classes from './BlogPage.module.css'
import BlogPagePost from './BlogPagePost/BlogPagePost'

type PropsType = {
	blogPosts: Array<BlogPostType>
}

const BlogPage: React.FC<PropsType> = (props) => {

	let blogPageContent = props.blogPosts.map(
		post => <BlogPagePost key={post.postId} postTitle={post.postTitle} postData={post.postDate}
			postTextInnerHTML={post.postTextInnerHTML} postVideoInnerHTML={post.postVideoInnerHTML} />
	)

	return (
		<div className={`${styles.contentWrapper}`}>
			{blogPageContent}
		</div>
	)
}

const mapStateToProps = (state: AppStateType) => {
	return {
		blogPosts: getBlogPosts(state)
	}
}

const BlogPageContainer = connect(mapStateToProps, {})(BlogPage)


export default BlogPageContainer