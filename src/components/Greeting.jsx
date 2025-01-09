export function Greeting() {
    const timeGreeting = () => {
        const now = new Date();
        const hour = now.getHours();
        let imageSource = 'src/assets/night.svg';
        let greetingText = 'Good Night!';
        
        if (hour > 5 && hour < 12) {
            imageSource = 'src/assets/day.svg';
            greetingText = 'Good Morning!';
        } else if (hour > 11 && hour < 17) {
            imageSource = 'src/assets/day.svg';
            greetingText = 'Good Afternoon!';
        } else if (hour > 16 && hour < 21) {
            imageSource = 'src/assets/evening.svg';
            greetingText = 'Good Evening!';
        }
        return (<><img src={imageSource} alt="time of day img"></img> {greetingText}</>)
    }

    return (
        <h1 className="greeting">{timeGreeting()}</h1>
    )
}
