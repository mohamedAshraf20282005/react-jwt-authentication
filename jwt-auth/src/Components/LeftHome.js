import './css/leftHome.css';

function LeftHome() {
    return (
        <div className="leftHome">
            <div className='progress-box'>
                <h2 className='box-title'>Progress</h2>
                <div className='box-content'>
                    <p>Number of tasks completed:</p>
                    <p>Number of deleted tasks:</p>
                    <p>Today's success rate:</p>
                </div>
            </div>
        </div>
    )
}

export default LeftHome;