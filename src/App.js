import { CarrotmarketHeader } from "./components/CarrotmarketHeader";
import { BodyNoticeup } from './components/BodyNoticeup';
import { BodyWorklist } from './components/BodyWorklist';
import { BodyBanner } from './components/BodyBanner';


function App() {
  return (
    <div className="container">
      <CarrotmarketHeader />
      <BodyNoticeup />
      <BodyWorklist />
      <BodyBanner />
    </div>
  );
}
export default App;