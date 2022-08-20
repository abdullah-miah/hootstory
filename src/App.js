import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ShortStory from './Components/Story/ShortStory';
import BigStory from './Components/Story/BigStory';
import AnotherStory from './Components/Story/AnotherStory';
import Following from './Components/Story/Following';
import ShortBanner from './Components/Story/ShortBanner';
import AnotherFollowing from './Components/Story/AnotherFollowing';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ShortStory></ShortStory>
      <BigStory></BigStory>
      <AnotherStory></AnotherStory>
      <Following></Following>
      <ShortBanner></ShortBanner>
      <BigStory></BigStory>
      <AnotherStory></AnotherStory>
      <AnotherFollowing></AnotherFollowing>
    </div>
  );
}

export default App;
