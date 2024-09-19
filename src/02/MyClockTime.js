function MyClockTime () {
    let today = new Date();
    today = today.toLocaleTimeString();
    return (
        <p className="text-4xl text-blue-400">현재 시각 : {today}</p>
    );
}

export default MyClockTime;