export function CopyLink ({link}) {

    return (
        <img src='src/assets/copy.svg'
        alt="copy link image"
        onClick={navigator.clipboard.writeText(link)}
        className="copy">
        </img>
    )
}
