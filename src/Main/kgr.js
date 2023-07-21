import Header from '../Component/Header';
import Keywordchecker from '../Component/pages/kgr';

const Mainkeywords = () => {

    const containerStyle = {
        backgroundColor: '#323337',
        height: '100vh',
        width:'80%',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'inherit !important',
        display: 'block',
      };

    return (
        <>
            <Header/>
            <div style={containerStyle}>
            <Keywordchecker/>
            </div>
            </>
    );
};

export default Mainkeywords;