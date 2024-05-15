
import './Carrotmarket_Desktop.css';
import './Carrotmarket_Iphone.css';
import noticepicture from './header-image.png';

export function BodyNoticeup(){
    return(
        <div className="notice_up">
                <div className="content1">
                    <h1>우리 동네에서 찾는</h1>
                    <h1>당근알바</h1>
                    <br></br>
                    <p>걸어서 10분 거리의</p>
                    <p>동네 알바들 여기 다 있어요.</p>
                    <br></br>
                    <div className="noticeUpBtn">
                        <button className="upBtn">공고 올리기</button>
                    </div>
                </div>

                <div className="content2">
                        <img className="notice_pic"  alt="noticepicture" src={noticepicture} />
                </div>
            </div>


    );
}