import Article from 'component/Article'
import articles from 'data/articles'
import { chakra } from '@chakra-ui/react'
import AddArticle from 'component/AddArticle'

const Home = () => {
    return (
        <chakra.div>
            <AddArticle/>
            
            {articles.map((article, index) => {
                const props = {
                    ...article,
                    banner: index === 0 ? article.banner : undefined,
                }
                if (index === articles.length - 1) props.mb = '30px'

                return <Article key={index} {...props} />
            })}
        </chakra.div>
    )
}

export default Home