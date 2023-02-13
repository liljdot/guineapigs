import React from 'react';
import ReactDOM from 'react-dom/client';
import { GuineaPigs } from './GuineaPigs';

const GUINEAPATHS = [
  'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'
];

let intervalId;

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {currentIndex: 0}
  }

componentDidMount () {
  intervalId = setInterval(() => {
    const newIndex = ++this.state.currentIndex % GUINEAPATHS.length
    this.setState({currentIndex: newIndex})
  },5000)
}

componentWillUnmount () {
  clearInterval(intervalId)
}

  render () {
    return (
      <GuineaPigs src = {GUINEAPATHS[this.state.currentIndex]} />
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

