import '../styles/ProjectItem.scss'

import { Link } from 'react-router-dom';

function ProjectItem({ project }: any) {
    const { img, alt, title, description, liveLink, liveText, videoLink, videoText, repoLink, repoText, blogtitle, blogLink, tags } = project;

    return <>
        <div className="projectItem">
            <img src={img} alt={alt} />
            <div className="text">
                <h3><b>{title}</b></h3>
                <p>{description} </p>
                <br />
                {
                    blogtitle &&
                    <h4>
                        <b>Blog: </b>
                        <Link to={blogLink} alt="blog link">{blogtitle}</Link>
                    </h4>
                }
                {liveLink &&
                    <h4>
                        <b>Demo: </b>
                        <a target="_blank" rel="noopener noreferrer" href={liveLink}>{liveText}</a>
                    </h4>
                }
                {videoLink &&
                    <h4>
                        <b>Video: </b>
                        <a target="_blank" rel="noopener noreferrer" href={videoLink} >{videoText}</a>
                    </h4>
                }
                <h4>
                    <b>Repo: </b>
                    <a target="_blank" rel="noopener noreferrer" href={repoLink}>{repoText}</a>
                </h4>
                <br />
                <div className="tags">
                    <h4>
                        <b>Tags: </b>
                        {
                            project.tags.map((tag: any, index: any) => {
                                return <label>{tag}</label>
                            })
                        }
                    </h4>
                </div>
            </div>
        </div>
    </>
}

export default ProjectItem;
