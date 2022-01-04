import Link from "next/dist/client/link";
import Layout from "../../components/layout.component";
import ListPaginatedImages from "../../components/pagination.component";
import { SocialButtons } from "../../components/socialButtons.component";
import { Title } from "../../components/title.component";
import { getImages, imageReg } from "../../utils/image.utils";
export default function ArtistDetails({ work, relatedWork,actualPage,regs }) {
    const { title, url, type, dateAdd, author, tags, description } = work
    return (
        <Layout actual="artistas">
            <section className="ArtContainer container-page">
                <div className="artistPage-grid">
                    <div className="col center">
                        <h1>{title}</h1>
                        <h2>{type}</h2>
                        <h3>Sobre el trabajo</h3>
                        <p>{description}</p>
                        <p>
                            Created By:
                            <Link href={{ pathname: `/artista/${author}` }}><a>{author}</a></Link>
                        </p>
                        <div className="social-icons">
                            <SocialButtons socialLinks={["Facebook", "Twitter"]} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="img"><img src={url} alt={title} width="" height="" /></div>
                    </div>
                </div>
                <div className="personalGallery">
                    <Title
                        center="Trabajo relacionado"
                    ></Title>
                    <ListPaginatedImages
                        data={relatedWork}
                        actualPage={actualPage}
                        location={`trabajo/${title}`}
                        regs={regs}
                        />
                </div>
            </section>

        </Layout>
    );
}
export async function getServerSideProps(context) {
    const actualWork = context.params.trabajo
    const works = await import(`../../models/provisional-images.json`);
    const artistWork = works.images.find((image) => {
        return image.title === actualWork
    })
    const relatedWorks = works.images.filter((image) =>{
        const {tags:actualWorkTags, type:actualWorkType, title:actualWorkTitle} = artistWork
        const {tags, type, title} = image
        const related = actualWorkType === type && tags.some(r=> title!==actualWorkTitle && actualWorkTags.includes(r))
        return related
    })

   
    const page = context.query.page ? parseInt(context.query.page) : 1;
    const actualAmountOfImages = `${page}0`;
    const { images } = await getImages(relatedWorks, actualAmountOfImages, page);
    
    if (!artistWork) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            work: artistWork,
            relatedWork: images,
            actualPage:page,
            regs:imageReg
        } // will be passed to the page component as props
    };
}