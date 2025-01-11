import openImage from '../assets/open.svg';

export function OpenLink ({link}) {
    return (
        <a href={link} target="_blank">
            <img src={openImage} alt="open link image"></img>
        </a>
    )
}
