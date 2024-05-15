
import './Carrotmarket_Desktop.css';
import './Carrotmarket_Iphone.css';
import bannerpic from './banner-icon.png';

export function BodyBanner(){
    return(
        <div className="freeEx">
                <div className="bannerpic">
                    <img className="bannerimage"  alt="bannerimage" src={bannerpic} />   
                </div>

                <div className="bannertext">
                    <p>대규모 채용이 필요하다면</p>
                    <p>당근알바 기업용 서비스에 대해 알아보세요!</p>
                </div>

                <div className="Btns">
                    <button className="freeBtn">7일 무료 체험</button>
                    <button className="askBtn">1:1 문의</button>
                </div>

        
            </div>
    );
}