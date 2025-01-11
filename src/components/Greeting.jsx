import dayImage from '../assets/day.svg';
import nightImage from '../assets/night.svg';
import eveningImage from '../assets/evening.svg';

export function Greeting() {
    const timeGreeting = () => {
        const now = new Date();
        const hour = now.getHours();

        let imageSource = nightImage;
        let greetingText = 'Good Night!';

        if (hour > 5 && hour < 12) {
            imageSource = dayImage;
            greetingText = 'Good Morning!';
        } else if (hour > 11 && hour < 17) {
            imageSource = dayImage;
            greetingText = 'Good Afternoon!';
        } else if (hour > 16 && hour < 21) {
            imageSource = eveningImage;
            greetingText = 'Good Evening!';
        }

        return (
            <>
                <img src={imageSource} alt="time of day" /> {greetingText}
            </>
        );
    };

    return <h1 className="greeting">{timeGreeting()}</h1>;
}
