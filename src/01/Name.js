function Name () {
    let name = ''
    return (
        <p>
            {name === 'PNU' ? '삼항연산자 이수민' : '이수민'}
        </p>
    );
}

export default Name;