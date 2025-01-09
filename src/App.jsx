import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { HelpfulResource } from './components/HelpfulResource'
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <Section title='What is react?'>
        React is a JavaScript library used for building user interfaces, especially in single-page applications. It enables developers to create reusable UI components that dynamically update and render based on changes in application data. By utilizing a virtual DOM, React optimizes performance by updating only the specific components that have changed, rather than re-rendering the entire DOM. Maintained by Facebook and a large community of developers, React is valued for its flexibility, declarative syntax, and a robust system of tools and libraries.
      </Section>
      <Section title='Benefits of react'>
        <ul>
          <li>Modularity with component based architecture.</li>
          <li>Strong ecosystem of developers expanding third party libraries and components.</li>
          <li>Reusable Components</li>
          <li>Virtual DOM to only re-render components where data has changed</li>
          <li>Ability to have a single page application that is performant</li>
        </ul>
      </Section>
      <Section title='Helpful Resources'>
        <HelpfulResource label='w3schools - Introduction to React' link='https://www.w3schools.com/react/react_intro.asp'></HelpfulResource>
        <HelpfulResource label='React Docs - Passing props to components' link='https://react.dev/learn/passing-props-to-a-component'></HelpfulResource>
        <HelpfulResource label='Geeks for Geeks - Learn about React fragments' link='https://www.geeksforgeeks.org/reactjs-fragments/'></HelpfulResource>
      </Section>
      <AboutMe/>
      <Footer/>
    </div>
    )
}

export default App;
