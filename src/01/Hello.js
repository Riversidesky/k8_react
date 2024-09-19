// 리액트 컴포넌트 이름 시작은 대문자로

function Hello() {
    let today = new Date();
    today = today.toLocaleString();
    return (
        //jsx 문법
        <>
            <p className='p1'>
                Hello React!!
            </p>
            <p className='text-3xl text-lime-400'>
                {/* {new Date().toLocaleString()} */}
                {today}
            </p>
            <p style={{backgroundColor : 'black', color : 'white'}}>
                이름
            </p>
        </>
        //태그는 반드시 부모태그 하나만 들어감, 태그 비워두면 같이 안묶임 (fragment tag : <></>)
        //클래스 속성은 반드시 class가 아니라 className으로 사용
    );
}

export default Hello;