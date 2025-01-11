import copyImage from '../assets/copy.svg'

export function CopyLink ({link}) {

    return (
        <img src={copyImage}
        alt="copy link image"
        onClick={navigator.clipboard.writeText(link)}
        className="copy">
        </img>
    )
}
