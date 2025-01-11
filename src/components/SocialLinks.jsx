import linkedInImage from '../assets/linkedin.svg';
import githubImage from '../assets/github.svg';

export function SocialLinks () {
    return (
        <div className="socialLinks">
            <a href="https://www.linkedin.com/in/david-alsabrook/" target="_blank">
                <img src="src/assets/linkedin.svg" alt="linkedin logo"></img>
            </a>
            <a href="https://github.com/DAlsabrook" target="_blank">
                <img src="src/assets/github.svg" alt="github logo"></img>
            </a>
        </div>
    )
}
